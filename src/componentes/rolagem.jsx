import { useEffect, useRef, useState } from "react";

const semMovimento = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Diz qual item de uma lista está no meio da tela (para trocar a imagem ao lado).
export function useItemAtivo(quantidade) {
  const refs = useRef([]);
  const [ativo, setAtivo] = useState(0);

  useEffect(() => {
    const olho = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((e) => {
          if (e.isIntersecting) setAtivo(Number(e.target.dataset.indice));
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    refs.current.slice(0, quantidade).forEach((el) => el && olho.observe(el));
    return () => olho.disconnect();
  }, [quantidade]);

  return [ativo, refs];
}

// Linha fina no topo que acompanha o quanto da página já foi lido.
// Só mexe em "transform", uma vez por quadro.
export function Progresso() {
  const barra = useRef(null);

  useEffect(() => {
    let quadro = 0;
    const mover = () => {
      quadro = 0;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const parte = total > 0 ? Math.min(1, window.scrollY / total) : 0;
      if (barra.current) barra.current.style.transform = "scaleX(" + parte + ")";
    };
    const aoRolar = () => {
      if (!quadro) quadro = requestAnimationFrame(mover);
    };
    mover();
    window.addEventListener("scroll", aoRolar, { passive: true });
    window.addEventListener("resize", aoRolar);
    return () => {
      window.removeEventListener("scroll", aoRolar);
      window.removeEventListener("resize", aoRolar);
      if (quadro) cancelAnimationFrame(quadro);
    };
  }, []);

  return <div ref={barra} className="progresso" aria-hidden="true" />;
}

// Desloca um pouco a imagem conforme a rolagem (efeito de profundidade).
export function Profundidade({ children, className = "", forca = 36 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || semMovimento() || window.innerWidth < 900) return;
    let quadro = 0;
    const mover = () => {
      quadro = 0;
      const caixa = el.getBoundingClientRect();
      const meio = caixa.top + caixa.height / 2 - window.innerHeight / 2;
      const parte = Math.max(-1, Math.min(1, meio / window.innerHeight));
      el.style.transform = "translate3d(0," + (-parte * forca).toFixed(1) + "px,0)";
    };
    const aoRolar = () => {
      if (!quadro) quadro = requestAnimationFrame(mover);
    };
    mover();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => {
      window.removeEventListener("scroll", aoRolar);
      if (quadro) cancelAnimationFrame(quadro);
    };
  }, [forca]);

  return (
    <div ref={ref} className={"profundidade " + className}>
      {children}
    </div>
  );
}
