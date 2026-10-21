import type { ReactNode } from "react";

type EnlaceExternoProps = {
  href: string;
  children: ReactNode;
  // Texto solo para lectores de pantalla: contexto + aviso de pestaña nueva.
  ocultoSr: string;
  variante?: "primario" | "secundario";
};

export const botonBase =
  "inline-flex min-h-tactil items-center justify-center rounded-control px-4 text-cuerpo font-medium";

export default function EnlaceExterno({
  href,
  children,
  ocultoSr,
  variante = "secundario",
}: EnlaceExternoProps) {
  const estilo =
    variante === "primario"
      ? "bg-acento text-sobre-acento hover:opacity-90"
      : "border-2 border-texto hover:bg-fondo";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${botonBase} ${estilo}`}
    >
      {children}
      <span className="sr-only"> {ocultoSr}</span>
    </a>
  );
}
