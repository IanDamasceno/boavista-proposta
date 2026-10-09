// Ícones dos diferenciais do BV Tower, desenhados em SVG (traço fino, mesma grade de 32 px).
const DESENHOS = {
  fachada: (
    <>
      <path d="M7 28V6l11-3v25M18 9h7v19M4 28h24" />
      <path d="M10.5 10.5h4M10.5 15h4M10.5 19.5h4M10.5 24h4M21.5 13v11" />
    </>
  ),
  sala: (
    <>
      <path d="M5 5h22v22H5zM5 14h10M19 14h8M15 5v5M15 18v9" />
      <path d="M15 18a4 4 0 0 1 4-4" />
    </>
  ),
  loja: (
    <>
      <path d="M5 12 7 5h18l2 7M5 12v15h22V12M5 12a3.7 3.7 0 0 0 7.3 0 3.7 3.7 0 0 0 7.4 0A3.7 3.7 0 0 0 27 12" />
      <path d="M13 27v-8h6v8" />
    </>
  ),
  elevador: (
    <>
      <path d="M6 4h20v24H6zM16 4v24" />
      <path d="m9 14 2-2.5 2 2.5M19 18l2 2.5 2-2.5" />
    </>
  ),
  rosto: (
    <>
      <path d="M4 10V5h5M23 5h5v5M28 22v5h-5M9 27H4v-5" />
      <circle cx="16" cy="13" r="4" />
      <path d="M9.5 24a6.5 6.5 0 0 1 13 0" />
    </>
  ),
  gestao: (
    <>
      <path d="M5 8h22v17H5zM5 13h22" />
      <path d="m10 19.5 2.2 2.2 4.3-4.400M19.5 19.500h4" />
      <path d="M11 4v4M21 4v4" />
    </>
  ),
  estacionamento: (
    <>
      <path d="M5 5h22v22H5z" />
      <path d="M12.5 23V9h5a4 4 0 0 1 0 8h-5" />
    </>
  ),
  recepcao: (
    <>
      <circle cx="16" cy="8" r="3.2" />
      <path d="M10.5 17a5.5 5.5 0 0 1 11 0M4 17h24v4H4zM7 21v6M25 21v6" />
    </>
  ),
  refeitorio: (
    <>
      <path d="M9 4v9a2.5 2.5 0 0 0 5 0V4M11.5 4v24" />
      <path d="M21.5 28V4c-3 1.5-4.5 5-4.5 9.5 0 2 1.5 3 4.5 3" />
    </>
  ),
  gerador: (
    <>
      <path d="M17.5 3 7 18h8l-1.5 11L24 14h-8z" />
    </>
  ),
  camera: (
    <>
      <path d="M4 9.5 22 6l2 7.500L8 18zM24 13.500l4-1M12 17v5h-4M8 18v9M4 27h8" />
    </>
  ),
  banheiro: (
    <>
      <circle cx="10" cy="6.5" r="2.5" />
      <circle cx="22" cy="6.5" r="2.5" />
      <path d="M7 28V13h6v15M10 19v9M19 21l3-8 3 8zM22 21v7M16 4v24" />
    </>
  ),
};

export default function Icone({ nome }) {
  return (
    <svg
      className="icone"
      viewBox="0 0 32 32"
      width="32"
      height="32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {DESENHOS[nome]}
    </svg>
  );
}
