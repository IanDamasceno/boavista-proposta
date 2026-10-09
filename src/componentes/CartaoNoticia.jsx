import { Link } from "react-router-dom";

// Cartão de notícia usado na página inicial e na lista de notícias.
export default function CartaoNoticia({ noticia: n }) {
  return (
    <Link className="noticia-cartao" to={"/noticias/" + n.slug}>
      <span className="noticia-imagem cortina">
        <img src={n.imagem} alt={n.alt} loading="lazy" style={{ objectPosition: n.foco || "50% 50%" }} />
      </span>
      <span className="noticia-data">{n.data}</span>
      <span className="noticia-titulo">{n.titulo}</span>
      <span className="noticia-resumo">{n.resumo}</span>
    </Link>
  );
}
