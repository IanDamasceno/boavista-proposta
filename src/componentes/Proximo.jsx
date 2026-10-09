import { Link } from "react-router-dom";
import { ORDEM, enderecoDaPagina, nomeDoEmpreendimento } from "../dados/boavista.js";

// Faixa final de cada página: leva ao empreendimento seguinte da lista.
export default function Proximo({ atual }) {
  const seguinte = ORDEM[(ORDEM.indexOf(atual) + 1) % ORDEM.length];
  return (
    <section className="proximo">
      <Link className="largura proximo-link" to={enderecoDaPagina(seguinte)}>
        <span className="rotulo">Próximo empreendimento</span>
        <span className="proximo-nome">{nomeDoEmpreendimento(seguinte)}</span>
        <span className="proximo-meta">Conhecer</span>
      </Link>
    </section>
  );
}
