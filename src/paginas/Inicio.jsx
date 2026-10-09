import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Vitrine from "../componentes/Vitrine.jsx";
import Surgir from "../componentes/Surgir.jsx";
import Contato from "../componentes/Contato.jsx";
import CartaoNoticia from "../componentes/CartaoNoticia.jsx";
import Visita from "../componentes/Visita.jsx";
import { Profundidade, useTrocaPorLinha } from "../componentes/rolagem.jsx";
import {
  BV_TOWER,
  EMPREENDIMENTOS,
  ENTREGUES,
  EMPRESA,
  HISTORIA,
  NOTICIAS,
  PALAVRAS_TITULO,
  RESIDENCIAIS,
} from "../dados/boavista.js";

const IMAGENS = EMPREENDIMENTOS.map((e) => ({ src: e.imagem, alt: e.alt, foco: e.foco }));

export default function Inicio() {
  const [ativa, setAtiva] = useState(0);
  const trocar = useCallback((i) => setAtiva(i), []);
  const atual = EMPREENDIMENTOS[ativa];

  return (
    <>
      {/* ---------- Abertura: as imagens dos empreendimentos ficam ao fundo e vão trocando ---------- */}
      <section className="abertura">
        <Vitrine className="abertura-fundo" imagens={IMAGENS} ativa={ativa} aoTrocar={trocar} intervalo={6500} />
        <div className="abertura-sombra" aria-hidden="true" />
        <div className="largura abertura-conteudo">
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
            <ul className="abertura-lista" aria-label="Empreendimentos em destaque">
              {EMPREENDIMENTOS.map((e, i) => (
                <li key={e.slug}>
                  <button type="button" className={i === ativa ? "ativo" : ""} aria-pressed={i === ativa} onClick={() => setAtiva(i)}>
                    <span className="abertura-nome">{e.nome}</span>
                    <span className="abertura-meta">{e.status}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- Lançamento em destaque ---------- */}
      <section className="lancamento" id="lancamento" aria-labelledby="titulo-lancamento">
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
          <Profundidade className="lancamento-coluna">
            <Surgir className="lancamento-imagem zoom" atraso={120}>
              <img src="/img/bvtower-perspectiva.jpg" alt="Perspectiva lateral do BV Tower, com a torre de salas sobre o embasamento de lojas" width="601" height="606" loading="lazy" />
            </Surgir>
          </Profundidade>
        </div>
      </section>

      <Empreendimentos />

      <Visita />

      {/* ---------- A construtora (resumo; a história completa tem página própria) ---------- */}
      <section className="secao faixa" id="construtora">
        <div className="largura construtora-grade">
          <Surgir className="construtora-imagem cortina">
            <img src="/img/historia.jpg" alt="Retrato institucional da Construtora Boa Vista: engenheiro analisa plantas à mesa de trabalho" width="628" height="521" loading="lazy" />
          </Surgir>
          <Surgir className="construtora-texto" atraso={100}>
            <p className="rotulo">A construtora</p>
            <h2>{HISTORIA.titulo}</h2>
            {HISTORIA.paragrafos.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <Link className="botao contorno" to="/a-construtora">
              Conhecer a construtora
            </Link>
          </Surgir>
        </div>
      </section>

      {/* ---------- Notícias (as três mais recentes) ---------- */}
      <section className="secao" id="noticias">
        <div className="largura">
          <Surgir className="cabeca cabeca-com-link">
            <div>
              <p className="rotulo">Notícias</p>
              <h2>O que acontece na Boa Vista</h2>
            </div>
            <Link className="seta-link" to="/noticias">
              Todas as notícias
            </Link>
          </Surgir>
          <ul className="noticias">
            {NOTICIAS.slice(0, 3).map((n, i) => (
              <Surgir como="li" key={n.slug} atraso={i * 90}>
                <CartaoNoticia noticia={n} />
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

// Lista de empreendimentos. No computador, a foto fica parada ao lado e troca
// conforme a rolagem passa por cada item; no celular, cada item leva a sua foto.
function Empreendimentos() {
  // Avança quando a linha divisória chega a 50% da imagem; volta quando ela desce a 75%.
  const [ativo, refs, imagem] = useTrocaPorLinha(EMPREENDIMENTOS.length, 0.5, 0.75);
  const total = String(EMPREENDIMENTOS.length).padStart(2, "0");

  return (
    <section className="secao" id="empreendimentos">
      <div className="largura">
        <Surgir className="cabeca">
          <p className="rotulo">Empreendimentos</p>
          <h2>Do primeiro apartamento ao endereço da sua empresa</h2>
        </Surgir>

        <div className="rolagem">
          <div className="rolagem-quadro" aria-hidden="true">
            <div className="vitrine rolagem-fotos" ref={imagem}>
              {EMPREENDIMENTOS.map((e, i) => (
                <img key={e.slug} src={e.imagem} alt="" className={i === ativo ? "ativa" : ""} style={{ objectPosition: e.foco }} loading="lazy" />
              ))}
            </div>
            <p className="rolagem-conta">
              <strong>{String(ativo + 1).padStart(2, "0")}</strong> / {total}
              <span>{EMPREENDIMENTOS[ativo].nome}</span>
            </p>
          </div>

          <ul className="rolagem-lista">
            {EMPREENDIMENTOS.map((e, i) => (
              <li
                key={e.slug}
                ref={(el) => (refs.current[i] = el)}
                data-indice={i}
                className={"rolagem-item" + (i === ativo ? " ativo" : "")}
              >
                <LinkEmpreendimento e={e} className="rolagem-foto zoom" tabIndex={-1} aria-hidden="true">
                  <img src={e.imagem} alt="" loading="lazy" width="1280" height="563" style={{ objectPosition: e.foco }} />
                </LinkEmpreendimento>
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
              </li>
            ))}
          </ul>
        </div>

        <Surgir className="entregues">
          <h3>Entregues e 100% vendidos</h3>
          <ul>
            {ENTREGUES.map((e) => (
              <li key={e.slug}>
                <Link to={"/empreendimentos/" + e.slug}>
                  <span className="entregue-imagem">
                    <img src={RESIDENCIAIS[e.slug].faixa.src} alt="" loading="lazy" />
                  </span>
                  <strong>{e.nome}</strong>
                  <span>{e.bairro}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Surgir>
      </div>
    </section>
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
