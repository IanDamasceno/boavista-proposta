import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Surgir from "../componentes/Surgir.jsx";
import CartaoNoticia from "../componentes/CartaoNoticia.jsx";
import NaoEncontrada from "./NaoEncontrada.jsx";
import { NOTICIAS, enderecoDaPagina, nomeDoEmpreendimento } from "../dados/boavista.js";

// Página de uma notícia.
export default function Noticia() {
  const { slug } = useParams();
  const indice = NOTICIAS.findIndex((n) => n.slug === slug);
  const n = NOTICIAS[indice];

  useEffect(() => {
    if (!n) return;
    const antes = document.title;
    document.title = n.titulo + " | Construtora Boa Vista | Proposta de novo site";
    return () => {
      document.title = antes;
    };
  }, [n]);

  if (!n) return <NaoEncontrada />;

  // Outras três notícias, a partir da seguinte.
  const outras = [1, 2, 3].map((passo) => NOTICIAS[(indice + passo) % NOTICIAS.length]);

  return (
    <div key={slug}>
      <article className="materia">
        <header className="largura materia-cabeca">
          <p className="materia-volta">
            <Link to="/noticias">Notícias</Link>
            <span aria-hidden="true"> / </span>
            <time>{n.data}</time>
          </p>
          <h1>{n.titulo}</h1>
          <p className="materia-resumo">{n.resumo}</p>
        </header>

        <figure className="largura materia-imagem">
          <img src={n.imagem} alt={n.alt} style={{ objectPosition: n.foco || "50% 50%" }} fetchpriority="high" />
        </figure>

        <div className="largura materia-corpo">
          {n.texto.map((p) => (
            <p key={p}>{p}</p>
          ))}

          {n.citacao && (
            <blockquote>
              <p>{n.citacao.texto}</p>
              <footer>{n.citacao.autor}</footer>
            </blockquote>
          )}

          {n.video && (
            <div className="materia-video">
              <iframe
                title={"Vídeo: " + n.titulo}
                src={n.video}
                loading="lazy"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}

          {n.fonte && <p className="materia-fonte">{n.fonte}</p>}

          {n.empreendimento && (
            <Link className="botao" to={enderecoDaPagina(n.empreendimento)}>
              Conhecer o {nomeDoEmpreendimento(n.empreendimento)}
            </Link>
          )}
        </div>
      </article>

      <section className="secao faixa">
        <div className="largura">
          <Surgir className="cabeca cabeca-com-link">
            <div>
              <p className="rotulo">Continue lendo</p>
              <h2>Outras notícias</h2>
            </div>
            <Link className="seta-link" to="/noticias">
              Todas as notícias
            </Link>
          </Surgir>
          <ul className="noticias">
            {outras.map((o, i) => (
              <Surgir como="li" key={o.slug} atraso={i * 90}>
                <CartaoNoticia noticia={o} />
              </Surgir>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
