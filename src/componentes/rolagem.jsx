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

// Troca a imagem parada conforme as linhas divisórias da lista passam por ela.
// Na ida (rolando para baixo), a linha entre dois itens precisa chegar à METADE da
// imagem (50% da altura, medido de cima) para avançar. Na volta, a mesma linha
// precisa descer até 75% da altura da imagem para voltar ao item anterior.
// A diferença entre os dois pontos evita que a imagem fique trocando sem parar.
export function useTrocaPorLinha(quantidade, ida = 0.5, volta = 0.75) {
  const itens = useRef([]);
  const imagem = useRef(null);
  const atual = useRef(0);
  const [ativo, setAtivo] = useState(0);

  useEffect(() => {
    let quadro = 0;

    const medir = () => {
      quadro = 0;
      const caixa = imagem.current && imagem.current.getBoundingClientRect();
      // No celular a imagem parada não aparece: não há o que trocar.
      if (!caixa || caixa.height === 0) return;
      const pontoIda = caixa.top + caixa.height * ida;
      const pontoVolta = caixa.top + caixa.height * volta;
      // A linha divisória de um item é a borda de baixo dele.
      const linha = (i) => itens.current[i].getBoundingClientRect().bottom;

      let i = atual.current;
      while (i < quantidade - 1 && itens.current[i] && linha(i) <= pontoIda) i++;
      while (i > 0 && itens.current[i - 1] && linha(i - 1) >= pontoVolta) i--;

      if (i !== atual.current) {
        atual.current = i;
        setAtivo(i);
      }
    };

    const aoRolar = () => {
      if (!quadro) quadro = requestAnimationFrame(medir);
    };

    medir();
    window.addEventListener("scroll", aoRolar, { passive: true });
    window.addEventListener("resize", aoRolar);
    return () => {
      window.removeEventListener("scroll", aoRolar);
      window.removeEventListener("resize", aoRolar);
      if (quadro) cancelAnimationFrame(quadro);
    };
  }, [quantidade, ida, volta]);

  return [ativo, itens, imagem];
}
