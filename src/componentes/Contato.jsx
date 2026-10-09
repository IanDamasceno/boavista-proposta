import { useState } from "react";
import { CONTATO, MENSAGEM_PADRAO, linkWhatsApp } from "../dados/boavista.js";

// Formulário sem servidor: monta a mensagem e abre o WhatsApp comercial da construtora.
// "campos" define os campos extras de cada página (lista de seleção ou opções).
export default function Contato({ titulo, texto, assunto, campos = [], nota = "" }) {
  const [valores, setValores] = useState(() => {
    const inicio = { nome: "", telefone: "", mensagem: "" };
    campos.forEach((c) => (inicio[c.nome] = c.opcoes[0]));
    return inicio;
  });

  const mudar = (e) => setValores({ ...valores, [e.target.name]: e.target.value });

  const enviar = (e) => {
    e.preventDefault();
    const linhas = ["Olá! Vim pelo site da Construtora Boa Vista.", "Assunto: " + assunto, "Nome: " + valores.nome, "Telefone: " + valores.telefone];
    campos.forEach((c) => linhas.push(c.rotulo + ": " + valores[c.nome]));
    if (valores.mensagem.trim()) linhas.push("Mensagem: " + valores.mensagem.trim());
    window.open(linkWhatsApp(linhas.join("\n")), "_blank", "noopener");
  };

  return (
    <section className="secao contato" id="contato">
      <div className="largura contato-grade">
        <div className="contato-texto">
          <p className="rotulo">Contato</p>
          <h2>{titulo}</h2>
          <p>{texto}</p>
          <dl className="contato-lista">
            <div>
              <dt>Telefone</dt>
              <dd>
                <a href={CONTATO.telefoneLink}>{CONTATO.telefone}</a>
              </dd>
            </div>
            <div>
              <dt>WhatsApp comercial</dt>
              <dd>
                <a href={linkWhatsApp(MENSAGEM_PADRAO)} target="_blank" rel="noreferrer">
                  {CONTATO.whatsapp}
                </a>
              </dd>
            </div>
            <div>
              <dt>Sede</dt>
              <dd>
                {CONTATO.endereco.map((linha) => (
                  <span key={linha}>{linha}</span>
                ))}
              </dd>
            </div>
            <div>
              <dt>Redes sociais</dt>
              <dd>
                <a href={CONTATO.instagram} target="_blank" rel="noreferrer">
                  Instagram
                </a>
                {" · "}
                <a href={CONTATO.facebook} target="_blank" rel="noreferrer">
                  Facebook
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <form className="formulario" onSubmit={enviar}>
          <label>
            Nome
            <input name="nome" value={valores.nome} onChange={mudar} autoComplete="name" required />
          </label>
          <label>
            Telefone
            <input name="telefone" type="tel" inputMode="tel" value={valores.telefone} onChange={mudar} autoComplete="tel" placeholder="(86) 90000-0000" required />
          </label>

          {campos.map((c) =>
            c.tipo === "opcoes" ? (
              <fieldset key={c.nome}>
                <legend>{c.rotulo}</legend>
                <div className="opcoes">
                  {c.opcoes.map((o) => (
                    <label key={o} className="opcao">
                      <input type="radio" name={c.nome} value={o} checked={valores[c.nome] === o} onChange={mudar} />
                      <span>{o}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
            ) : (
              <label key={c.nome}>
                {c.rotulo}
                <select name={c.nome} value={valores[c.nome]} onChange={mudar}>
                  {c.opcoes.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </label>
            )
          )}

          <label>
            Mensagem (opcional)
            <textarea name="mensagem" rows="3" value={valores.mensagem} onChange={mudar} />
          </label>
          <button className="botao" type="submit">
            Enviar pelo WhatsApp
          </button>
          <p className="formulario-aviso">Ao enviar, o WhatsApp abre com a sua mensagem pronta para a equipe comercial.</p>
          {nota && <p className="formulario-nota">{nota}</p>}
        </form>
      </div>
    </section>
  );
}
