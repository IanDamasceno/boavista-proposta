import { Link } from "react-router-dom";

export default function NaoEncontrada() {
  return (
    <section className="secao largura nao-encontrada">
      <p className="rotulo">Página não encontrada</p>
      <h1>Este endereço não existe.</h1>
      <p>Volte ao início para conhecer os empreendimentos da Construtora Boa Vista.</p>
      <Link className="botao" to="/">
        Voltar ao início
      </Link>
    </section>
  );
}
