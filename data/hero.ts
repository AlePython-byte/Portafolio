import type { Localized } from "@/lib/types";

export type HeroCopy = {
  name: string;
  role: Localized;
  phrase: Localized;
  downloadCv: Localized;
  viewProjects: Localized;
};

export const heroCopy: HeroCopy = {
  name: "Alejandro",
  role: {
    es: "Ingeniero de Software · Frontend",
    en: "Software Engineer · Frontend",
  },
  phrase: {
    es: "Diseño interfaces que se sienten bien de usar.",
    en: "I design interfaces that feel good to use.",
  },
  downloadCv: { es: "Descargar CV", en: "Download CV" },
  viewProjects: { es: "Ver proyectos", en: "View projects" },
};

export type ConsolaCopy = {
  groupLabel: Localized;
  model: string;
  madeIn: Localized;
  pwr: string;
  power: Localized;
  cartridge: Localized;
  cartridgeLabel: string;
  inserted: Localized;
  out: Localized;
  frame: Localized;
  frames: { escritorio: Localized; celular: Localized };
  controlsLabel: Localized;
  dpadLabel: Localized;
  keysLabel: Localized;
  dpadLeft: Localized;
  dpadRight: Localized;
  ok: string;
  okLabel: Localized;
  eject: Localized;
  ejectLabel: Localized;
  helpArrows: Localized;
  helpInsert: Localized;
  screenOn: Localized; // {marco} se reemplaza por el nombre del marco
  screenOff: Localized;
  noSignal: Localized;
  noCartridge: Localized;
};

export const consolaCopy: ConsolaCopy = {
  groupLabel: { es: "Consola Boceta", en: "Boceta console" },
  model: "BOCETA · MOD. 01",
  madeIn: { es: "Hecho en Pasto", en: "Made in Pasto" },
  pwr: "PWR",
  power: { es: "Encender", en: "Power" },
  cartridge: { es: "Cartucho Demo", en: "Demo cartridge" },
  cartridgeLabel: "DEMO",
  inserted: { es: "Insertado", en: "Inserted" },
  out: { es: "Fuera", en: "Out" },
  frame: { es: "Marco", en: "Frame" },
  frames: {
    escritorio: { es: "escritorio", en: "desktop" },
    celular: { es: "celular", en: "phone" },
  },
  controlsLabel: { es: "Controles de la consola", en: "Console controls" },
  dpadLabel: { es: "Cruceta", en: "Direction pad" },
  keysLabel: { es: "Teclas del cartucho", en: "Cartridge keys" },
  dpadLeft: {
    es: "Izquierda: marco escritorio",
    en: "Left: desktop frame",
  },
  dpadRight: { es: "Derecha: marco celular", en: "Right: phone frame" },
  ok: "OK",
  okLabel: {
    es: "OK: insertar cartucho Demo",
    en: "OK: insert Demo cartridge",
  },
  eject: { es: "Expulsar", en: "Eject" },
  ejectLabel: {
    es: "Expulsar cartucho Demo",
    en: "Eject Demo cartridge",
  },
  helpArrows: {
    es: "Flechas ← → cambian de marco",
    en: "Arrow keys ← → change the frame",
  },
  helpInsert: {
    es: "Inserta el cartucho Demo para cambiar de marco",
    en: "Insert the Demo cartridge to change the frame",
  },
  screenOn: {
    es: "Pantalla encendida: interfaz en marco {marco}.",
    en: "Screen on: interface in {marco} frame.",
  },
  screenOff: { es: "Pantalla apagada.", en: "Screen off." },
  noSignal: { es: "— sin señal —", en: "— no signal —" },
  noCartridge: { es: "Sin cartucho", en: "No cartridge" },
};
