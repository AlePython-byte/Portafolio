"use client";

import { useState } from "react";
import Pantalla from "./Pantalla";
import Controles from "./Controles";
import "./consola.css";

export type Marco = "escritorio" | "celular";

export default function Consola() {
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

  return (
    <div className="consola" role="group" aria-label="Consola Boceta">
      <div className="consola__cabecera">
        <span className="consola__marca">Boceta</span>
        <span className="consola__rejilla" aria-hidden="true" />
        <span className="consola__power" aria-hidden="true">
          <span className="consola__led" data-encendido={encendida} />
          Pwr
        </span>
      </div>
      <Pantalla encendida={encendida} cartucho={cartucho} marco={marco} />
      <Controles
        encendida={encendida}
        onEncender={() => setEncendida((v) => !v)}
        cartucho={cartucho}
        onCartucho={alternarCartucho}
        marco={marco}
        onMarco={cambiarMarco}
      />
    </div>
  );
}
