import { useEffect, useState } from "react";

// Janela de imagens com aproximação lenta.
// O movimento é feito só com CSS (transform), que roda na placa de vídeo e
// por isso fica fluido. Todas as imagens ficam empilhadas e a ativa aparece
// por cima com uma transição de opacidade.
export default function Vitrine({ imagens, ativa, aoTrocar, intervalo = 6000, className = "" }) {
  const [pausada, setPausada] = useState(false);

  useEffect(() => {
    if (pausada || imagens.length < 2) return;
    const semMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (semMovimento) return;
    const relogio = setTimeout(() => aoTrocar((ativa + 1) % imagens.length), intervalo);
    return () => clearTimeout(relogio);
  }, [ativa, pausada, imagens.length, intervalo, aoTrocar]);

  return (
    <div
      className={"vitrine " + className}
      onMouseEnter={() => setPausada(true)}
      onMouseLeave={() => setPausada(false)}
      onFocus={() => setPausada(true)}
      onBlur={() => setPausada(false)}
    >
      {imagens.map((img, i) => (
        <img
          key={img.src}
          src={img.src}
          alt={i === ativa ? img.alt : ""}
          aria-hidden={i !== ativa}
          className={i === ativa ? "ativa" : ""}
          style={{ animationDelay: -(i * 5) + "s", objectPosition: img.foco || "50% 50%" }}
          loading={i === 0 ? "eager" : "lazy"}
          decoding="async"
        />
      ))}
    </div>
  );
}
