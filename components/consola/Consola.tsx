"use client";

import { useEffect, useRef, useState } from "react";
import { consolaCopy } from "@/data/hero";
import { useLocalized } from "@/lib/localized";
import Pantalla from "./Pantalla";
import Controles from "./Controles";
import Carcasa from "./Carcasa";
import "./consola.css";

export type Marco = "escritorio" | "celular";

export default function Consola() {
  const t = useLocalized();
  const [encendida, setEncendida] = useState(false);
  const [cartucho, setCartucho] = useState(false);
  const [marco, setMarco] = useState<Marco>("escritorio");

  // Insertar el cartucho Demo pasa al marco celular; expulsarlo vuelve a escritorio.
  function alternarCartucho() {
    const insertado = !cartucho;
    setCartucho(insertado);
    setMarco(insertado ? "celular" : "escritorio");
  }

  function cambiarMarco(nuevo: Marco) {
    if (cartucho) setMarco(nuevo);
  }

  const encender = () => setEncendida((v) => !v);

  // Pausa las animaciones en reposo (flotación, LED) si la consola no se ve
  // o la pestaña está oculta. Solo cambia un atributo: no re-renderiza.
  const escena = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const nodo = escena.current;
    if (!nodo) return;
    let visible = true;
    const aplicar = () => {
      nodo.dataset.reposo = visible && !document.hidden ? "activo" : "pausado";
    };
    const observador = new IntersectionObserver(([entrada]) => {
      visible = entrada.isIntersecting;
      aplicar();
    });
    observador.observe(nodo);
    document.addEventListener("visibilitychange", aplicar);
    return () => {
      observador.disconnect();
      document.removeEventListener("visibilitychange", aplicar);
    };
  }, []);

  return (
    <div ref={escena} className="consola-escena">
      <div className="consola" role="group" aria-label={t(consolaCopy.groupLabel)}>
        <span className="consola__tornillo consola__tornillo--si" aria-hidden="true" />
        <span className="consola__tornillo consola__tornillo--sd" aria-hidden="true" />
        <span className="consola__tornillo consola__tornillo--ii" aria-hidden="true" />
        <span className="consola__tornillo consola__tornillo--id" aria-hidden="true" />

        {/* Ranura-riel: decorativa; muestra el cartucho Demo cuando está insertado. */}
        <div className="consola__riel" aria-hidden="true">
          <span className="consola__cartucho" data-insertado={cartucho}>
            {consolaCopy.cartridgeLabel}
          </span>
          <span className="consola__ranura" />
        </div>

        <div className="consola__cabecera">
          <span className="consola__serigrafia">
            <span className="consola__marca">{consolaCopy.model}</span>
            <span className="consola__micro">{t(consolaCopy.madeIn)}</span>
          </span>
          <span className="consola__rejilla" aria-hidden="true" />
          <span className="consola__power" aria-hidden="true">
            <span className="consola__led" data-encendido={encendida} />
            {consolaCopy.pwr}
          </span>
        </div>

        <Pantalla encendida={encendida} cartucho={cartucho} marco={marco} />

        <Carcasa
          encendida={encendida}
          onEncender={encender}
          cartucho={cartucho}
          onInsertar={() => !cartucho && alternarCartucho()}
          onExpulsar={() => cartucho && alternarCartucho()}
          marco={marco}
          onMarco={cambiarMarco}
        />

        <Controles
          encendida={encendida}
          onEncender={encender}
          cartucho={cartucho}
          onCartucho={alternarCartucho}
          marco={marco}
          onMarco={cambiarMarco}
        />
      </div>
    </div>
  );
}
