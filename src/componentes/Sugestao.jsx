import { NOTA_SUGESTAO } from "../dados/boavista.js";

// Nota no canto das seções que não existem no site atual: avisa que é sugestão
// e, ao passar o mouse (ou tocar, ou focar pelo teclado), mostra o motivo.
export default function Sugestao({ id, motivo }) {
  return (
    <div className="sugestao">
      <button type="button" aria-describedby={"motivo-" + id}>
        {NOTA_SUGESTAO}
      </button>
      <p id={"motivo-" + id} role="tooltip">
        <strong>Por que sugerimos</strong>
        {motivo}
      </p>
    </div>
  );
}
