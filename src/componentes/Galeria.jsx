import { useEffect, useRef, useState } from "react";

// Grade de fotos que abre cada imagem em tela cheia (com setas e teclado).
export default function Galeria({ fotos }) {
  const [aberta, setAberta] = useState(null);
  const dialogo = useRef(null);

  useEffect(() => {
    const d = dialogo.current;
    if (!d) return;
    if (aberta !== null && !d.open) d.showModal();
    if (aberta === null && d.open) d.close();
  }, [aberta]);

  const passar = (passo) => setAberta((i) => (i + passo + fotos.length) % fotos.length);

  const teclas = (e) => {
    if (e.key === "ArrowRight") passar(1);
    if (e.key === "ArrowLeft") passar(-1);
  };

  const atual = aberta === null ? null : fotos[aberta];

  return (
    <>
      <ul className="galeria">
        {fotos.map((f, i) => (
          <li key={f.src}>
            <button type="button" onClick={() => setAberta(i)} aria-label={"Ampliar: " + f.nome}>
              <img src={f.src} alt={f.nome} loading="lazy" />
              <span>{f.nome}</span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogo}
        className="ampliada"
        onClose={() => setAberta(null)}
        onKeyDown={teclas}
        onClick={(e) => e.target === dialogo.current && setAberta(null)}
      >
        {atual && (
          <figure>
            <img src={atual.src} alt={atual.nome} />
            <figcaption>
              <span>
                {atual.nome} ({aberta + 1} de {fotos.length})
              </span>
              <span className="ampliada-acoes">
                <button type="button" onClick={() => passar(-1)}>
                  Anterior
                </button>
                <button type="button" onClick={() => passar(1)}>
                  Próxima
                </button>
                <button type="button" onClick={() => setAberta(null)}>
                  Fechar
                </button>
              </span>
            </figcaption>
          </figure>
        )}
      </dialog>
    </>
  );
}
