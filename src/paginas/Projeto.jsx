import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Galeria from "../componentes/Galeria.jsx";
import Surgir from "../componentes/Surgir.jsx";
import Contato from "../componentes/Contato.jsx";
import Proximo from "../componentes/Proximo.jsx";
import NaoEncontrada from "./NaoEncontrada.jsx";
import { Numeros } from "./Inicio.jsx";
import { RESIDENCIAIS, linkWhatsApp } from "../dados/boavista.js";

// Página de um residencial. Todas usam este mesmo molde; o conteúdo vem de RESIDENCIAIS.
export default function Projeto() {
  const { slug } = useParams();
  const p = RESIDENCIAIS[slug];

  useEffect(() => {
    if (!p) return;
    const antes = document.title;
    document.title = p.nome + " | Construtora Boa Vista | Proposta de novo site";
    return () => {
      document.title = antes;
    };
  }, [p]);

  if (!p) return <NaoEncontrada />;

  const vendido = p.venda === "100% vendido";

  return (
    // A "key" faz a página recomeçar (animações e formulário) ao ir de um projeto a outro.
    <div key={slug}>
      {/* ---------- Capa ---------- */}
      <section className={"capa" + (p.capa ? "" : " capa-simples")}>
        <div className="largura capa-grade">
          <div className="capa-texto">
            <p className="capa-selos">
              <span className={"selo" + (vendido ? "" : " forte")}>{p.venda}</span>
              <span>
                {p.status} · {p.bairro}, Teresina
              </span>
            </p>
            <h1 className="capa-nome">{p.nome}</h1>
            <p className="capa-chamada">{p.chamada}</p>
            <div className="capa-botoes">
              {vendido ? (
                <Link className="botao" to="/#empreendimentos">
                  Ver empreendimentos disponíveis
                </Link>
              ) : (
                <a
                  className="botao"
                  href={linkWhatsApp("Olá! Gostaria de mais informações sobre o " + p.nome + ".")}
                  target="_blank"
                  rel="noreferrer"
                >
                  Falar com vendas
                </a>
              )}
              <a className="botao contorno" href="#condominio">
                Ver o condomínio
              </a>
            </div>
          </div>
          {p.capa && (
            <figure className="capa-imagem zoom">
              <img src={p.capa.src} alt={p.capa.alt} width="1280" height="563" fetchpriority="high" />
            </figure>
          )}
        </div>
        {!p.capa && p.faixa && (
          <div className="largura">
            <figure className="faixa-imagem capa-faixa">
              <img src={p.faixa.src} alt={p.faixa.alt} width="1280" height="315" fetchpriority="high" />
            </figure>
          </div>
        )}
        <div className="largura">
          <Numeros lista={p.numeros} />
        </div>
      </section>

      {/* ---------- Apresentação ---------- */}
      <section className="secao" id="sobre">
        <div className="largura apresentacao">
          <Surgir className="cabeca">
            <p className="rotulo">O empreendimento</p>
            <h2>{p.chamada}</h2>
          </Surgir>
          <Surgir className="apresentacao-texto" atraso={100}>
            {p.descricao.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </Surgir>
        </div>
        {p.capa && p.faixa && (
          <div className="largura">
            <Surgir como="figure" className="faixa-imagem">
              <img src={p.faixa.src} alt={p.faixa.alt} width="1280" height="315" loading="lazy" />
              <figcaption>{p.faixa.legenda}</figcaption>
            </Surgir>
          </div>
        )}
      </section>

      {/* ---------- Condomínio e apartamento ---------- */}
      <section className="secao faixa" id="condominio">
        <div className="largura">
          <Surgir className="cabeca">
            <p className="rotulo">Características</p>
            <h2>Do condomínio ao apartamento</h2>
          </Surgir>
          <div className="blocos">
            <Surgir className="bloco">
              <p className="bloco-titulo">O condomínio</p>
              <ul className="marcados">
                {p.condominio.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Surgir>
            <Surgir className="bloco" atraso={100}>
              <p className="bloco-titulo">O apartamento</p>
              <ul className="marcados">
                {p.apartamento.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Surgir>
          </div>
        </div>
      </section>

      {/* ---------- Ficha ---------- */}
      <section className="secao" id="ficha">
        <div className="largura ficha-grade">
          <Surgir className="cabeca">
            <p className="rotulo">Ficha do empreendimento</p>
            <h2>Metragens e localização</h2>
          </Surgir>
          <Surgir como="dl" className="ficha" atraso={100}>
            {p.ficha.map(([nome, valor]) => (
              <div key={nome}>
                <dt>{nome}</dt>
                <dd>{valor}</dd>
              </div>
            ))}
          </Surgir>
        </div>
      </section>

      {/* ---------- Galeria (só quando há fotos suficientes) ---------- */}
      {p.galeria && (
        <section className="secao faixa" id="galeria">
          <div className="largura">
            <Surgir className="cabeca">
              <p className="rotulo">Galeria</p>
              <h2>O {p.nome} entregue</h2>
            </Surgir>
            <Galeria fotos={p.galeria} destaque={false} />
          </div>
        </section>
      )}

      <Contato
        titulo={vendido ? "Procurando um imóvel da Boa Vista?" : "Fale sobre o " + p.nome}
        texto={
          vendido
            ? "O " + p.nome + " está 100% vendido. Conte o que você procura e a equipe comercial indica as opções disponíveis."
            : "Deixe o seu contato e a equipe comercial da Boa Vista retorna pelo WhatsApp."
        }
        assunto={p.nome}
      />

      <Proximo atual={slug} />
    </div>
  );
}
