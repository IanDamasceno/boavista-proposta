import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Vitrine from "../componentes/Vitrine.jsx";
import Surgir from "../componentes/Surgir.jsx";
import Contato from "../componentes/Contato.jsx";
import { BV_TOWER, EMPREENDIMENTOS, ENTREGUES, EMPRESA, HISTORIA, PALAVRAS_TITULO } from "../dados/boavista.js";

const IMAGENS = EMPREENDIMENTOS.map((e) => ({ src: e.imagem, alt: e.alt, foco: e.foco }));

export default function Inicio() {
  const [ativa, setAtiva] = useState(0);
  const trocar = useCallback((i) => setAtiva(i), []);
  const atual = EMPREENDIMENTOS[ativa];

  return (
    <>
      {/* ---------- Abertura ---------- */}
      <section className="abertura">
        <div className="largura">
          <div className="abertura-texto">
            <p className="rotulo">{EMPRESA.nome} · Teresina, Piauí</p>
            <h1>
              Há mais de 40 anos construindo <Reveza palavras={PALAVRAS_TITULO} /> em Teresina.
            </h1>
            <p className="abertura-apoio">
              Das primeiras casas na zona Norte aos bosques que cercam torres de apartamentos, e agora ao primeiro
              edifício corporativo de alto padrão da construtora.
            </p>
          </div>

          <div className="abertura-palco">
            <ul className="abertura-lista" aria-label="Empreendimentos em destaque">
              {EMPREENDIMENTOS.map((e, i) => (
                <li key={e.slug}>
                  <button type="button" className={i === ativa ? "ativo" : ""} aria-pressed={i === ativa} onClick={() => setAtiva(i)}>
                    <span className="abertura-nome">{e.nome}</span>
                    <span className="abertura-meta">
                      {e.bairro} · {e.status}
                    </span>
                  </button>
                </li>
              ))}
            </ul>

            <div className="abertura-quadro">
              <Vitrine imagens={IMAGENS} ativa={ativa} aoTrocar={trocar} intervalo={6500} />
              <div className="abertura-legenda">
                <p>
                  <strong>{atual.nome}</strong>
                  <span>
                    {atual.tipo} · {atual.bairro} · {atual.status}
                  </span>
                </p>
                <LinkEmpreendimento e={atual} className="seta-link">
                  Conhecer
                </LinkEmpreendimento>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Lançamento em destaque ---------- */}
      <section className="lancamento" aria-labelledby="titulo-lancamento">
        <div className="largura lancamento-grade">
          <Surgir className="lancamento-texto">
            <p className="rotulo">Lançamento · {BV_TOWER.local}</p>
            <h2 id="titulo-lancamento">BV Tower</h2>
            <p className="lancamento-chamada">{BV_TOWER.chamada}</p>
            <p>
              O primeiro empreendimento corporativo de alto padrão da Boa Vista reúne salas, lojas térreas e uma fachada
              em ACM e vidros espelhados.
            </p>
            <Numeros lista={BV_TOWER.numeros} />
            <Link className="botao claro" to="/bv-tower">
              Conhecer o BV Tower
            </Link>
          </Surgir>
          <Surgir className="lancamento-imagem zoom" atraso={120}>
            <img src="/img/bvtower-perspectiva.jpg" alt="Perspectiva lateral do BV Tower, com a torre de salas sobre o embasamento de lojas" width="601" height="606" loading="lazy" />
          </Surgir>
        </div>
      </section>

      {/* ---------- Empreendimentos ---------- */}
      <section className="secao" id="empreendimentos">
        <div className="largura">
          <Surgir className="cabeca">
            <p className="rotulo">Empreendimentos</p>
            <h2>Do primeiro apartamento ao endereço da sua empresa</h2>
          </Surgir>

          <ul className="linhas">
            {EMPREENDIMENTOS.map((e) => (
              <Surgir como="li" key={e.slug} className="linha">
                <LinkEmpreendimento e={e} className="linha-imagem zoom" tabIndex={-1} aria-hidden="true">
                  <img src={e.imagem} alt="" loading="lazy" width="1280" height="563" style={{ objectPosition: e.foco }} />
                </LinkEmpreendimento>
                <div className="linha-texto">
                  <p className="linha-meta">
                    <span className={"selo " + (e.status === "Lançamento" ? "forte" : "")}>{e.status}</span>
                    <span>
                      {e.tipo} · {e.bairro}
                    </span>
                  </p>
                  <h3>{e.nome}</h3>
                  <p>{e.resumo}</p>
                  <ul className="linha-dados">
                    {e.dados.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                  <LinkEmpreendimento e={e} className="seta-link">
                    Conhecer o {e.nome}
                  </LinkEmpreendimento>
                </div>
              </Surgir>
            ))}
          </ul>

          <Surgir className="entregues">
            <h3>Entregues e 100% vendidos</h3>
            <ul>
              {ENTREGUES.map((e) => (
                <li key={e.slug}>
                  <Link to={"/empreendimentos/" + e.slug}>{e.nome}</Link>
                  <span>{e.bairro}</span>
                </li>
              ))}
            </ul>
          </Surgir>
        </div>
      </section>

      {/* ---------- A construtora ---------- */}
      <section className="secao faixa" id="construtora">
        <div className="largura construtora-grade">
          <Surgir className="construtora-imagem">
            <img src="/img/historia.jpg" alt="Retrato institucional da Construtora Boa Vista: engenheiro analisa plantas à mesa de trabalho" width="628" height="521" loading="lazy" />
          </Surgir>
          <Surgir className="construtora-texto" atraso={100}>
            <p className="rotulo">A construtora</p>
            <h2>{HISTORIA.titulo}</h2>
            {HISTORIA.paragrafos.map((p) => (
              <p key={p}>{p}</p>
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

      <Contato
        titulo="Fale com a Boa Vista"
        texto="Conte o que você procura. A equipe comercial responde pelo WhatsApp."
        assunto="Empreendimentos da Boa Vista"
        campos={[
          {
            nome: "interesse",
            rotulo: "Empreendimento de interesse",
            tipo: "lista",
            opcoes: [...EMPREENDIMENTOS.map((e) => e.nome), "Ainda não sei"],
          },
        ]}
      />
    </>
  );
}

function LinkEmpreendimento({ e, children, ...resto }) {
  return (
    <Link to={e.interno} {...resto}>
      {children}
    </Link>
  );
}

export function Numeros({ lista }) {
  return (
    <dl className="numeros">
      {lista.map((n) => (
        <div key={n.legenda}>
          <dt>{n.legenda}</dt>
          <dd>
            <strong>{n.valor}</strong> {n.unidade}
          </dd>
        </div>
      ))}
    </dl>
  );
}

// Palavra que se reveza no título. Todas ocupam a mesma célula, então a largura
// é sempre a da maior palavra e o resto do título não se mexe.
function Reveza({ palavras }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const relogio = setInterval(() => setI((n) => (n + 1) % palavras.length), 2600);
    return () => clearInterval(relogio);
  }, [palavras.length]);

  return (
    <span className="reveza">
      {palavras.map((p, n) => (
        <span key={p} className={n === i ? "ativa" : ""} aria-hidden={n !== i}>
          {p}
        </span>
      ))}
    </span>
  );
}
