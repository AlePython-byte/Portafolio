import type { ReactNode } from "react";

type EtiquetaProps = {
  children: ReactNode;
  className?: string;
};

// Chip de tecnología o interés. No es interactivo.
export default function Etiqueta({ children, className = "" }: EtiquetaProps) {
  return (
    <span
      className={`inline-flex min-h-8 items-center rounded-redondo border border-borde bg-fondo px-3 font-mono text-etiqueta text-texto ${className}`}
    >
      {children}
    </span>
  );
}
