import { useState } from "react";
import Surgir from "./Surgir.jsx";
import Sugestao from "./Sugestao.jsx";
import { EMPREENDIMENTOS, VISITA, linkWhatsApp } from "../dados/boavista.js";

// Pedido de visita: monta a mensagem e abre o WhatsApp comercial.
export default function Visita() {
  const [v, setV] = useState({ nome: "", empreendimento: EMPREENDIMENTOS[0].nome, dia: "", periodo: VISITA.periodos[0] });
  const mudar = (e) => setV({ ...v, [e.target.name]: e.target.value });

  const enviar = (e) => {
    e.preventDefault();
    const dia = v.dia ? v.dia.split("-").reverse().join("/") : "a combinar";
    const linhas = [
      "Olá! Gostaria de agendar uma visita.",
      "Nome: " + v.nome,
      "Empreendimento: " + v.empreendimento,
      "Dia preferido: " + dia,
      "Período: " + v.periodo,
    ];
    window.open(linkWhatsApp(linhas.join("\n")), "_blank", "noopener");
  };

  return (
    <section className="visita" id="visita" aria-labelledby="titulo-visita">
      <div className="largura com-sugestao visita-grade">
        <Sugestao id="visita" motivo={VISITA.motivo} />
        <Surgir className="visita-texto">
          <p className="rotulo">Visita</p>
          <h2 id="titulo-visita">{VISITA.titulo}</h2>
          <p>{VISITA.texto}</p>
        </Surgir>
        <Surgir como="form" className="visita-form" atraso={120} onSubmit={enviar}>
          <label>
            Nome
            <input name="nome" value={v.nome} onChange={mudar} autoComplete="name" required />
          </label>
          <label>
            Empreendimento
            <select name="empreendimento" value={v.empreendimento} onChange={mudar}>
              {EMPREENDIMENTOS.map((e) => (
                <option key={e.slug}>{e.nome}</option>
              ))}
            </select>
          </label>
          <label>
            Dia preferido
            <input name="dia" type="date" value={v.dia} onChange={mudar} />
          </label>
          <label>
            Período
            <select name="periodo" value={v.periodo} onChange={mudar}>
              {VISITA.periodos.map((p) => (
                <option key={p}>{p}</option>
              ))}
            </select>
          </label>
          <button className="botao claro" type="submit">
            Pedir visita pelo WhatsApp
          </button>
        </Surgir>
      </div>
    </section>
  );
}
