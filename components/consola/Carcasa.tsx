import { useId } from "react";
import { consolaCopy } from "@/data/hero";
import { useLocalized } from "@/lib/localized";
import { manejarFlechas, type ControlesProps } from "./Controles";

type CarcasaProps = Omit<ControlesProps, "onCartucho"> & {
  onInsertar: () => void;
  onExpulsar: () => void;
};

// Controles de la carcasa completa (desde 1024 px). Ocupan las áreas
// "izq", "der" y "pie" de la cuadrícula de .consola.
export default function Carcasa({
  encendida,
  onEncender,
  cartucho,
  onInsertar,
  onExpulsar,
  onMarco,
}: CarcasaProps) {
  const t = useLocalized();
  const ayudaId = useId();
  const flechas = (evento: Parameters<typeof manejarFlechas>[0]) =>
    manejarFlechas(evento, onMarco);

  return (
    <>
      <div className="carcasa__izq" onKeyDown={flechas}>
        <button
          type="button"
          className="tecla tecla--encender"
          aria-pressed={encendida}
          onClick={onEncender}
        >
          <span className="consola__led" data-encendido={encendida} aria-hidden="true" />
          {t(consolaCopy.power)}
        </button>

        <div className="cruceta" role="group" aria-label={t(consolaCopy.dpadLabel)}>
          {/* Arriba y abajo son decorativos: no tienen función. */}
          <span className="cruceta__brazo cruceta__brazo--arriba" aria-hidden="true">
            ▲
          </span>
          <button
            type="button"
            className="cruceta__brazo cruceta__brazo--izquierda"
            aria-label={t(consolaCopy.dpadLeft)}
            aria-disabled={!cartucho}
            aria-describedby={ayudaId}
            onClick={cartucho ? () => onMarco("escritorio") : undefined}
          >
            <span aria-hidden="true">◀</span>
          </button>
          <span className="cruceta__centro" aria-hidden="true" />
          <button
            type="button"
            className="cruceta__brazo cruceta__brazo--derecha"
            aria-label={t(consolaCopy.dpadRight)}
            aria-disabled={!cartucho}
            aria-describedby={ayudaId}
            onClick={cartucho ? () => onMarco("celular") : undefined}
          >
            <span aria-hidden="true">▶</span>
          </button>
          <span className="cruceta__brazo cruceta__brazo--abajo" aria-hidden="true">
            ▼
          </span>
        </div>
      </div>

      <div
        className="carcasa__der"
        role="group"
        aria-label={t(consolaCopy.keysLabel)}
        onKeyDown={flechas}
      >
        <span className="perilla" aria-hidden="true" />
        <button
          type="button"
          className="tecla"
          aria-label={t(consolaCopy.okLabel)}
          aria-disabled={cartucho}
          onClick={cartucho ? undefined : onInsertar}
        >
          {consolaCopy.ok}
        </button>
        <button
          type="button"
          className="tecla"
          aria-label={t(consolaCopy.ejectLabel)}
          aria-disabled={!cartucho}
          onClick={cartucho ? onExpulsar : undefined}
        >
          {t(consolaCopy.eject)}
        </button>
      </div>

      <p id={ayudaId} className="carcasa__pie">
        {t(cartucho ? consolaCopy.helpArrows : consolaCopy.helpInsert)}
      </p>
    </>
  );
}
