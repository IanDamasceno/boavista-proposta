import { useEffect } from "react";
import { Link } from "react-router-dom";
import Surgir from "../componentes/Surgir.jsx";
import Contato from "../componentes/Contato.jsx";
import { CONSTRUTORA, EMPREENDIMENTOS, ENTREGUES, HISTORIA } from "../dados/boavista.js";

// Página institucional: história, Obra Limpa, missão, visão e valores.
export default function Construtora() {
  useEffect(() => {
    const antes = document.title;
    document.title = "A construtora | Construtora Boa Vista | Proposta de novo site";
    return () => {
      document.title = antes;
    };
  }, []);

  return (
    <>
      {/* ---------- Capa ---------- */}
      <section className="capa">
        <div className="largura capa-grade">
          <div className="capa-texto">
            <p className="rotulo capa-selos">A construtora</p>
            <h1 className="capa-nome">{CONSTRUTORA.titulo}</h1>
            <p className="capa-chamada">{CONSTRUTORA.apoio}</p>
            <div className="capa-botoes">
              <Link className="botao" to="/#empreendimentos">
                Ver empreendimentos
              </Link>
              <a className="botao contorno" href="#obra-limpa">
                Conhecer o Obra Limpa
              </a>
            </div>
          </div>
          <figure className="capa-imagem capa-retrato">
            <img src="/img/historia.jpg" alt="Retrato institucional da Construtora Boa Vista: engenheiro analisa plantas à mesa de trabalho" width="628" height="521" fetchpriority="high" />
          </figure>
        </div>
      </section>

      {/* ---------- Nossa história ---------- */}
      <section className="secao" id="historia">
        <div className="largura apresentacao">
          <Surgir className="cabeca">
            <p className="rotulo">Nossa história</p>
            <h2>{HISTORIA.titulo}</h2>
          </Surgir>
          <Surgir className="apresentacao-texto" atraso={100}>
            {CONSTRUTORA.historia.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </Surgir>
        </div>
        <div className="largura">
          <ul className="valores">
            {HISTORIA.valores.map((v, i) => (
              <Surgir como="li" key={v.titulo} atraso={i * 80}>
                <h3>{v.titulo}</h3>
                <p>{v.texto}</p>
              </Surgir>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Obra Limpa ---------- */}
      <section className="secao faixa" id="obra-limpa">
        <div className="largura andamento">
          <Surgir como="figure" className="andamento-imagem cortina">
            <img src={CONSTRUTORA.obraLimpa.imagem} alt={CONSTRUTORA.obraLimpa.alt} width="630" height="350" loading="lazy" />
          </Surgir>
          <Surgir className="cabeca sem-margem" atraso={100}>
            <p className="rotulo">Sustentabilidade</p>
            <h2>{CONSTRUTORA.obraLimpa.titulo}</h2>
            <p className="obra-limpa-chamada">{CONSTRUTORA.obraLimpa.chamada}</p>
            {CONSTRUTORA.obraLimpa.texto.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </Surgir>
        </div>
      </section>

      {/* ---------- No que acreditamos ---------- */}
      <section className="secao" id="crencas">
        <div className="largura">
          <Surgir className="cabeca">
            <p className="rotulo">No que acreditamos</p>
            <h2>Missão, visão e valores</h2>
          </Surgir>
          <div className="blocos">
            {CONSTRUTORA.crencas.map((c, i) => (
              <Surgir key={c.titulo} className="bloco" atraso={i * 100}>
                <p className="bloco-titulo">{c.titulo}</p>
                <p className="crenca-texto">{c.texto}</p>
              </Surgir>
            ))}
          </div>
          <Surgir como="ul" className="etiquetas" aria-label="Valores">
            {CONSTRUTORA.valores.map((v) => (
              <li key={v}>{v}</li>
            ))}
          </Surgir>
        </div>
      </section>

      {/* ---------- Portfólio ---------- */}
      <section className="secao faixa" id="portfolio">
        <div className="largura">
          <Surgir className="cabeca cabeca-com-link">
            <div>
              <p className="rotulo">Portfólio</p>
              <h2>O que já construímos</h2>
            </div>
            <Link className="seta-link" to="/#empreendimentos">
              Ver empreendimentos
            </Link>
          </Surgir>
          <ul className="portfolio">
            {[...EMPREENDIMENTOS.map((e) => ({ nome: e.nome, bairro: e.bairro, status: e.status, para: e.interno })),
              ...ENTREGUES.map((e) => ({ nome: e.nome, bairro: e.bairro, status: "100% vendido", para: "/empreendimentos/" + e.slug }))].map((e, i) => (
              <Surgir como="li" key={e.nome} atraso={(i % 5) * 60}>
                <Link to={e.para}>
                  <strong>{e.nome}</strong>
                  <span>
                    {e.bairro} · {e.status}
                  </span>
                </Link>
              </Surgir>
            ))}
          </ul>
        </div>
      </section>

      <Contato
        titulo="Fale com a Boa Vista"
        texto="Conte o que você procura. A equipe comercial responde pelo WhatsApp."
        assunto="Contato pelo site"
      />
    </>
  );
}
