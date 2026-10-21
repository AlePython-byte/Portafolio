import type { ReactNode } from "react";

type TarjetaProps = {
  children: ReactNode;
  className?: string;
};

export default function Tarjeta({ children, className = "" }: TarjetaProps) {
  return (
    <div
      className={`rounded-tarjeta border border-borde bg-superficie p-5 ${className}`}
    >
      {children}
    </div>
  );
}
