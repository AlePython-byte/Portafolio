import { useId, type KeyboardEvent } from "react";
import type { Marco } from "./Consola";

type ControlesProps = {
  encendida: boolean;
  onEncender: () => void;
  cartucho: boolean;
  onCartucho: () => void;
  marco: Marco;
  onMarco: (marco: Marco) => void;
};

const MARCO_POR_FLECHA: Record<string, Marco> = {
  ArrowLeft: "escritorio",
  ArrowUp: "escritorio",
  ArrowRight: "celular",
  ArrowDown: "celular",
};

export default function Controles({
  encendida,
  onEncender,
  cartucho,
  onCartucho,
  marco,
  onMarco,
}: ControlesProps) {
  const ayudaId = useId();

  function manejarTeclas(evento: KeyboardEvent<HTMLDivElement>) {
    const destino = MARCO_POR_FLECHA[evento.key];
    if (!destino) return;
    evento.preventDefault();
    onMarco(destino);
  }

  function alternarMarco() {
    onMarco(marco === "escritorio" ? "celular" : "escritorio");
  }

  return (
    <div
      className="controles"
      role="group"
      aria-label="Controles de la consola"
      onKeyDown={manejarTeclas}
    >
      <button
        type="button"
        className="control"
        aria-pressed={encendida}
        onClick={onEncender}
      >
        <span className="consola__led" data-encendido={encendida} aria-hidden="true" />
        Encender
      </button>

      <button
        type="button"
        className="control"
        aria-pressed={cartucho}
        onClick={onCartucho}
      >
        <span className="ranura" aria-hidden="true">
          <span className="cartucho">Demo</span>
        </span>
        Cartucho Demo
        <span className="control__estado" aria-hidden="true">
          {cartucho ? "Insertado" : "Fuera"}
        </span>
      </button>

      <button
        type="button"
        className="control"
        aria-disabled={!cartucho}
        aria-describedby={ayudaId}
        aria-keyshortcuts="ArrowLeft ArrowRight"
        onClick={cartucho ? alternarMarco : undefined}
      >
        Marco
        <span className="control__estado">{marco}</span>
      </button>

      <p id={ayudaId} className="controles__ayuda">
        {cartucho
          ? "Flechas ← → cambian de marco"
          : "Inserta el cartucho Demo para cambiar de marco"}
      </p>
    </div>
  );
}
