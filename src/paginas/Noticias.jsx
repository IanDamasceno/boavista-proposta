import { useEffect } from "react";
import Surgir from "../componentes/Surgir.jsx";
import CartaoNoticia from "../componentes/CartaoNoticia.jsx";
import Contato from "../componentes/Contato.jsx";
import { NOTICIAS } from "../dados/boavista.js";

// Lista de todas as notícias, da mais recente para a mais antiga.
export default function Noticias() {
  useEffect(() => {
    const antes = document.title;
    document.title = "Notícias | Construtora Boa Vista | Proposta de novo site";
    return () => {
      document.title = antes;
    };
  }, []);

  const [destaque, ...demais] = NOTICIAS;

  return (
    <>
      <section className="capa capa-simples">
        <div className="largura">
          <p className="rotulo capa-selos">Notícias e eventos</p>
          <h1 className="capa-nome">O que acontece na Boa Vista</h1>
          <p className="capa-chamada">Obras, entregas, parcerias e histórias dos nossos canteiros.</p>
        </div>
      </section>

      <section className="secao secao-curta">
        <div className="largura">
          <Surgir className="noticia-destaque">
            <CartaoNoticia noticia={destaque} />
          </Surgir>
          <ul className="noticias">
            {demais.map((n, i) => (
              <Surgir como="li" key={n.slug} atraso={(i % 3) * 90}>
                <CartaoNoticia noticia={n} />
              </Surgir>
            ))}
          </ul>
        </div>
      </section>

      <Contato
        titulo="Fale com a Boa Vista"
        texto="Imprensa, parcerias ou dúvidas sobre os empreendimentos: a equipe responde pelo WhatsApp."
        assunto="Contato pelo site"
      />
    </>
  );
}
