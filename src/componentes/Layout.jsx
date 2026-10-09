import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Progresso } from "./rolagem.jsx";
import { CONTATO, EMPRESA, MENSAGEM_PADRAO, linkWhatsApp } from "../dados/boavista.js";

const MENU = [
  ["Empreendimentos", "/#empreendimentos"],
  // Leva à faixa de lançamentos da página inicial (hoje o BV Tower; os próximos entram lá).
  ["Lançamento", "/#lancamento"],
  ["A construtora", "/a-construtora"],
  ["Notícias", "/noticias"],
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

  // O cabeçalho ganha sombra depois que a página rola.
  const [rolou, setRolou] = useState(false);
  useEffect(() => {
    const medir = () => setRolou(window.scrollY > 12);
    medir();
    window.addEventListener("scroll", medir, { passive: true });
    return () => window.removeEventListener("scroll", medir);
  }, []);

  // Fecha o menu do celular sempre que a página muda.
  useEffect(() => setAberto(false), [local]);

  return (
    <>
      <a className="pular" href="#conteudo">
        Ir para o conteúdo
      </a>

      <Progresso />

      <header className={"topo" + (rolou ? " rolou" : "")}>
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

      {/* A "key" refaz a entrada suave a cada troca de página. */}
      <main id="conteudo" key={local.pathname} className="pagina">
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

      <a
        className="zap-botao"
        href={linkWhatsApp(MENSAGEM_PADRAO)}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar com a Boa Vista pelo WhatsApp"
        title="WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true">
          <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 1.8a8.2 8.2 0 1 1-4.2 15.2l-.3-.2-2.9.8.8-2.9-.2-.3A8.2 8.2 0 0 1 12 3.8Zm-3.3 3.9c-.2 0-.5.1-.7.4-.3.3-1 1-1 2.3s1 2.7 1.1 2.9c.1.2 1.9 3 4.7 4.1 2.3.9 2.8.7 3.3.7.5-.1 1.6-.7 1.9-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3l-1.9-.9c-.3-.1-.5-.2-.7.1l-.9 1.1c-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.4-.8-.8-1.4-1.7-1.6-2-.2-.3 0-.4.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2.1-.4 0-.5l-.9-2c-.2-.5-.4-.4-.6-.4h-.2Z" />
        </svg>
      </a>

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
