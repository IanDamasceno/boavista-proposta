import { useEffect } from "react";
import Galeria from "../componentes/Galeria.jsx";
import Surgir from "../componentes/Surgir.jsx";
import Icone from "../componentes/Icone.jsx";
import Contato from "../componentes/Contato.jsx";
import { Numeros } from "./Inicio.jsx";
import { BV_TOWER, EMPREENDIMENTOS, NOTA_FORMULARIO, linkWhatsApp } from "../dados/boavista.js";

const PROXIMO = EMPREENDIMENTOS[1];

export default function BvTower() {
  // Cada página tem o seu título de aba.
  useEffect(() => {
    const antes = document.title;
    document.title = "BV Tower | Construtora Boa Vista | Proposta de novo site";
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
            <p className="capa-selos">
              <span className="selo forte">{BV_TOWER.status}</span>
              <span>{BV_TOWER.local}</span>
            </p>
            <h1>
              BV Tower
              <small>{BV_TOWER.assinatura}</small>
            </h1>
            <p className="capa-chamada">{BV_TOWER.chamada}</p>
            <div className="capa-botoes">
              <a
                className="botao"
                href={linkWhatsApp("Olá! Gostaria de mais informações sobre as salas e lojas do BV Tower.")}
                target="_blank"
                rel="noreferrer"
              >
                Falar com vendas
              </a>
              <a className="botao contorno" href="#diferenciais">
                Ver diferenciais
              </a>
            </div>
          </div>
          <figure className="capa-imagem zoom">
            <img
              src="/img/bvtower-fachada.jpg"
              alt="Perspectiva da fachada do BV Tower ao entardecer: duas alas de salas com varandas, pele de vidro central e embasamento de lojas iluminado"
              width="1280"
              height="563"
              fetchpriority="high"
            />
          </figure>
        </div>
        <div className="largura">
          <Numeros lista={BV_TOWER.numeros} />
        </div>
      </section>

      {/* ---------- Para quem é ---------- */}
      <section className="secao" id="para-quem">
        <div className="largura">
          <Surgir className="cabeca">
            <p className="rotulo">Para quem é</p>
            <h2>Um endereço corporativo para quem atende, representa e vende</h2>
            {BV_TOWER.apresentacao.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Surgir>
          <ul className="publicos">
            {BV_TOWER.publicos.map((p, i) => (
              <Surgir como="li" key={p.titulo} atraso={i * 70}>
                <span className="publicos-numero" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>{p.titulo}</h3>
                <p>{p.texto}</p>
              </Surgir>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Salas e lojas ---------- */}
      <section className="secao faixa" id="salas-e-lojas">
        <div className="largura">
          <Surgir className="cabeca">
            <p className="rotulo">Salas e lojas</p>
            <h2>Dois formatos, o mesmo padrão</h2>
          </Surgir>
          <div className="blocos">
            {BV_TOWER.blocos.map((b, i) => (
              <Surgir key={b.titulo} className="bloco" atraso={i * 100}>
                <p className="bloco-titulo">{b.titulo}</p>
                <p className="bloco-medida">{b.medida}</p>
                <p>{b.texto}</p>
                <ul>
                  {b.itens.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Surgir>
            ))}
          </div>
          <Surgir como="figure" className="faixa-imagem">
            <img src="/img/bvtower-lojas.jpg" alt="Perspectiva do embasamento do BV Tower, com as lojas térreas de pé-direito duplo e o letreiro do edifício" width="1280" height="315" loading="lazy" />
            <figcaption>Embasamento do BV Tower, com as lojas voltadas para a rua.</figcaption>
          </Surgir>
        </div>
      </section>

      {/* ---------- Diferenciais ---------- */}
      <section className="secao" id="diferenciais">
        <div className="largura">
          <Surgir className="cabeca">
            <p className="rotulo">Diferenciais</p>
            <h2>O que o edifício entrega</h2>
          </Surgir>
          <ul className="diferenciais">
            {BV_TOWER.diferenciais.map((d, i) => (
              <Surgir como="li" key={d.titulo} atraso={(i % 4) * 60}>
                <Icone nome={d.icone} />
                <span>{d.titulo}</span>
              </Surgir>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Ficha técnica ---------- */}
      <section className="secao faixa" id="ficha">
        <div className="largura ficha-grade">
          <Surgir className="cabeca">
            <p className="rotulo">Ficha técnica</p>
            <h2>O BV Tower em números e materiais</h2>
            <p>Informações divulgadas pela Construtora Boa Vista. Plantas e demais detalhes estão com a equipe comercial.</p>
          </Surgir>
          <Surgir como="dl" className="ficha" atraso={100}>
            {BV_TOWER.ficha.map(([nome, valor]) => (
              <div key={nome}>
                <dt>{nome}</dt>
                <dd>{valor}</dd>
              </div>
            ))}
          </Surgir>
        </div>
      </section>

      {/* ---------- Galeria ---------- */}
      <section className="secao" id="galeria">
        <div className="largura">
          <Surgir className="cabeca">
            <p className="rotulo">Galeria</p>
            <h2>Do projeto ao canteiro</h2>
          </Surgir>
          <Galeria fotos={BV_TOWER.galeria} />
        </div>
      </section>

      <Contato
        titulo="Reserve a sua sala ou loja"
        texto="Diga o que você procura no BV Tower e a equipe comercial da Boa Vista retorna pelo WhatsApp."
        assunto="BV Tower"
        nota={NOTA_FORMULARIO}
        campos={[
          { nome: "interesse", rotulo: "Interesse", tipo: "opcoes", opcoes: ["Sala", "Loja"] },
          { nome: "metragem", rotulo: "Metragem desejada", tipo: "lista", opcoes: BV_TOWER.metragens },
        ]}
      />

      {/* ---------- Próximo empreendimento ---------- */}
      <section className="proximo">
        <a className="largura proximo-link" href={PROXIMO.link} target="_blank" rel="noreferrer">
          <span className="rotulo">Próximo empreendimento</span>
          <span className="proximo-nome">{PROXIMO.nome}</span>
          <span className="proximo-meta">
            {PROXIMO.tipo} · {PROXIMO.bairro} · {PROXIMO.status}
          </span>
        </a>
      </section>
    </>
  );
}
