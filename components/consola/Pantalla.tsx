import { consolaCopy } from "@/data/hero";
import { useLocalized } from "@/lib/localized";
import type { Marco } from "./Consola";

type PantallaProps = {
  encendida: boolean;
  cartucho: boolean;
  marco: Marco;
};

function Maqueta({ variante }: { variante: "boceto" | "final" }) {
  return (
    <div className={`maqueta maqueta--${variante}`}>
      <div className="maqueta__barra">
        <span className="maqueta__logo" />
        <span className="maqueta__nav" />
      </div>
      <div className="maqueta__hero">
        <span className="maqueta__linea maqueta__linea--larga" />
        <span className="maqueta__linea" />
        <span className="maqueta__boton" />
      </div>
      <div className="maqueta__tarjetas">
        <span className="maqueta__tarjeta" />
        <span className="maqueta__tarjeta" />
        <span className="maqueta__tarjeta" />
      </div>
    </div>
  );
}

export default function Pantalla({ encendida, cartucho, marco }: PantallaProps) {
  const t = useLocalized();
  const nombreMarco = t(consolaCopy.frames[marco]);
  const estado = encendida
    ? t(consolaCopy.screenOn).replace("{marco}", nombreMarco)
    : t(consolaCopy.screenOff);

  return (
    <div className="pantalla">
      <p className="sr-only" aria-live="polite">
        {estado}
      </p>
      <div className="pantalla__vidrio" aria-hidden="true">
        {encendida ? (
          <div className="pantalla__crt">
            {/* key: al cambiar de marco se vuelve a dibujar el boceto */}
            <div key={marco} className={`marco marco--${marco}`}>
              <Maqueta variante="boceto" />
              <Maqueta variante="final" />
            </div>
          </div>
        ) : (
          <p className="pantalla__apagada">{t(consolaCopy.noSignal)}</p>
        )}
        <span className="pantalla__etiqueta">
          {cartucho ? consolaCopy.cartridgeLabel : t(consolaCopy.noCartridge)} ·{" "}
          {nombreMarco}
        </span>
      </div>
    </div>
  );
}
