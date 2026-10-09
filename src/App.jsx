import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./componentes/Layout.jsx";
import Inicio from "./paginas/Inicio.jsx";
import BvTower from "./paginas/BvTower.jsx";
import Projeto from "./paginas/Projeto.jsx";
import NaoEncontrada from "./paginas/NaoEncontrada.jsx";

// Ao trocar de página, volta ao topo (ou rola até a âncora, se houver).
function Rolagem() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const alvo = document.querySelector(hash);
      if (alvo) {
        alvo.scrollIntoView();
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <Rolagem />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/bv-tower" element={<BvTower />} />
          <Route path="/empreendimentos/:slug" element={<Projeto />} />
          <Route path="*" element={<NaoEncontrada />} />
        </Route>
      </Routes>
    </>
  );
}
