import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { CONTATO, EMPRESA, MENSAGEM_PADRAO, linkWhatsApp } from "../dados/boavista.js";

const MENU = [
  ["Empreendimentos", "/#empreendimentos"],
  ["BV Tower", "/bv-tower"],
  ["A construtora", "/#construtora"],
  ["Contato", "/#contato"],
];

export default function Layout() {
  const [aberto, setAberto] = useState(false);
  const [tema, setTema] = useState(() => document.documentElement.dataset.tema || "escuro");
  const local = useLocation();

  // Aplica o tema na página e guarda a escolha para a próxima visita.
  useEffect(() => {
    document.documentElement.dataset.tema = tema;
    try {
      localStorage.setItem("tema", tema);
    } catch {
      // Sem acesso ao armazenamento (aba anônima, por exemplo): só não lembra a escolha.
    }
  }, [tema]);

  // Fecha o menu do celular sempre que a página muda.
  useEffect(() => setAberto(false), [local]);

  return (
    <>
      <a className="pular" href="#conteudo">
        Ir para o conteúdo
      </a>

      <header className="topo">
        <div className="largura topo-linha">
          <Link className="marca" to="/" aria-label={EMPRESA.nome + ", página inicial"}>
            <Logo />
          </Link>

          <button
            className="menu-botao"
            type="button"
            aria-expanded={aberto}
            aria-controls="menu"
            onClick={() => setAberto(!aberto)}
          >
            {aberto ? "Fechar" : "Menu"}
          </button>

          <nav id="menu" className={aberto ? "menu aberto" : "menu"} aria-label="Principal">
            {MENU.map(([nome, para]) => (
              <Link key={para} to={para}>
                {nome}
              </Link>
            ))}
            <a className="botao pequeno" href={linkWhatsApp(MENSAGEM_PADRAO)} target="_blank" rel="noreferrer">
              Falar com vendas
            </a>
          </nav>
        </div>
      </header>

      <main id="conteudo">
        <Outlet />
      </main>

      <footer className="rodape">
        <div className="largura rodape-grade">
          <div className="rodape-marca">
            <img src="/img/logo-clara.svg" alt={EMPRESA.nome + ": " + EMPRESA.assinatura} width="120" height="140" loading="lazy" />
            <p>Há {EMPRESA.tempo} construindo em Teresina.</p>
          </div>
          <div>
            <h2>Navegação</h2>
            <ul>
              {MENU.map(([nome, para]) => (
                <li key={para}>
                  <Link to={para}>{nome}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Contato</h2>
            <ul>
              <li>
                <a href={CONTATO.telefoneLink}>{CONTATO.telefone}</a>
              </li>
              <li>
                <a href={linkWhatsApp(MENSAGEM_PADRAO)} target="_blank" rel="noreferrer">
                  WhatsApp {CONTATO.whatsapp}
                </a>
              </li>
              <li>
                <a href={CONTATO.instagram} target="_blank" rel="noreferrer">
                  Instagram {CONTATO.instagramNome}
                </a>
              </li>
              <li>
                <a href={CONTATO.facebook} target="_blank" rel="noreferrer">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2>Sede</h2>
            <p>
              {CONTATO.endereco.map((linha) => (
                <span key={linha}>{linha}</span>
              ))}
            </p>
          </div>
        </div>
        <div className="largura rodape-fim">
          <p>© {new Date().getFullYear()} {EMPRESA.nome}. Todos os direitos reservados.</p>
        </div>
      </footer>

      <button
        className="tema-botao"
        type="button"
        onClick={() => setTema(tema === "escuro" ? "claro" : "escuro")}
        aria-label={tema === "escuro" ? "Mudar para o modo claro" : "Mudar para o modo escuro"}
        title={tema === "escuro" ? "Modo claro" : "Modo escuro"}
      >
        {tema === "escuro" ? <Sol /> : <Lua />}
      </button>
    </>
  );
}

// As duas versões da logo ficam na página; o CSS mostra a que combina com o tema.
function Logo() {
  return (
    <>
      <img className="logo-para-claro" src="/img/logo-escura.svg" alt="" width="60" height="70" />
      <img className="logo-para-escuro" src="/img/logo-clara.svg" alt="" width="60" height="70" />
    </>
  );
}

// No modo escuro o botão mostra o sol (para clarear); no claro, a lua.
function Sol() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.5v2.4M12 19.1v2.4M2.5 12h2.4M19.1 12h2.4M5.3 5.3l1.7 1.7M17 17l1.7 1.7M5.3 18.7 7 17M17 7l1.7-1.7" />
    </svg>
  );
}

function Lua() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 14.2A8.2 8.2 0 0 1 9.8 4a8.2 8.2 0 1 0 10.2 10.2Z" />
    </svg>
  );
}
