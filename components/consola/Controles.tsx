import { useId, type KeyboardEvent } from "react";
import { consolaCopy } from "@/data/hero";
import { useLocalized } from "@/lib/localized";
import type { Marco } from "./Consola";

export type ControlesProps = {
  encendida: boolean;
  onEncender: () => void;
  cartucho: boolean;
  onCartucho: () => void;
  marco: Marco;
  onMarco: (marco: Marco) => void;
};

export const MARCO_POR_FLECHA: Record<string, Marco> = {
  ArrowLeft: "escritorio",
  ArrowUp: "escritorio",
  ArrowRight: "celular",
  ArrowDown: "celular",
};

export function manejarFlechas(
  evento: KeyboardEvent<HTMLElement>,
  onMarco: (marco: Marco) => void,
) {
  const destino = MARCO_POR_FLECHA[evento.key];
  if (!destino) return;
  evento.preventDefault();
  onMarco(destino);
}

// Controles de la versión simplificada (menos de 1024 px).
export default function Controles({
  encendida,
  onEncender,
  cartucho,
  onCartucho,
  marco,
  onMarco,
}: ControlesProps) {
  const t = useLocalized();
  const ayudaId = useId();

  function alternarMarco() {
    onMarco(marco === "escritorio" ? "celular" : "escritorio");
  }

  return (
    <div
      className="controles"
      role="group"
      aria-label={t(consolaCopy.controlsLabel)}
      onKeyDown={(evento) => manejarFlechas(evento, onMarco)}
    >
      <button
        type="button"
        className="control"
        aria-pressed={encendida}
        onClick={onEncender}
      >
        <span className="consola__led" data-encendido={encendida} aria-hidden="true" />
        {t(consolaCopy.power)}
      </button>

      <button
        type="button"
        className="control"
        aria-pressed={cartucho}
        onClick={onCartucho}
      >
        {t(consolaCopy.cartridge)}
        <span className="control__estado" aria-hidden="true">
          {t(cartucho ? consolaCopy.inserted : consolaCopy.out)}
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
        {t(consolaCopy.frame)}
        <span className="control__estado">{t(consolaCopy.frames[marco])}</span>
      </button>

      <p id={ayudaId} className="controles__ayuda">
        {t(cartucho ? consolaCopy.helpArrows : consolaCopy.helpInsert)}
      </p>
    </div>
  );
}
