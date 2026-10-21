import type { ReactNode } from "react";
import { botonBase } from "@/components/ui/EnlaceExterno";

// Botón desactivado (no es un enlace roto). Sigue en el orden de Tab para que
// los lectores de pantalla lo anuncien como "no disponible".
export default function BotonInactivo({ children }: { children: ReactNode }) {
  return (
    <button
      type="button"
      aria-disabled="true"
      className={`${botonBase} cursor-not-allowed border-2 border-borde text-texto-suave`}
    >
      {children}
    </button>
  );
}
