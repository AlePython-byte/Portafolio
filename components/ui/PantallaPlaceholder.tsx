import type { ProjectDevice } from "@/data/projects";

type PantallaPlaceholderProps = {
  device: ProjectDevice;
  label: string;
};

// Placeholder dibujado con tokens (fill/stroke de Tailwind sobre la paleta del tema).
// Las coordenadas son del viewBox del SVG, no tamaños de la interfaz.
const marco = "fill-superficie stroke-borde";
const trazo = "fill-texto-suave";
const acento = "fill-acento";

function Dibujo({ device }: { device: ProjectDevice }) {
  switch (device) {
    case "desktop":
      return (
        <>
          <rect x="20" y="10" width="120" height="70" rx="4" className={marco} />
          <path d="M20 22h120" className="stroke-borde" />
          <circle cx="28" cy="16" r="2" className={acento} />
          <circle cx="35" cy="16" r="2" className={trazo} />
          <rect x="28" y="30" width="34" height="42" rx="2" className="fill-fondo" />
          <rect x="68" y="30" width="64" height="6" rx="2" className={trazo} />
          <rect x="68" y="42" width="50" height="6" rx="2" className={trazo} />
          <rect x="68" y="56" width="30" height="10" rx="3" className={acento} />
        </>
      );
    case "phone":
      return (
        <>
          <rect x="58" y="4" width="44" height="82" rx="8" className={marco} />
          <rect x="72" y="9" width="16" height="3" rx="1.5" className={trazo} />
          <rect x="64" y="20" width="32" height="20" rx="3" className="fill-fondo" />
          <rect x="64" y="46" width="32" height="5" rx="2" className={trazo} />
          <rect x="64" y="56" width="22" height="5" rx="2" className={trazo} />
          <rect x="64" y="68" width="32" height="10" rx="3" className={acento} />
        </>
      );
    case "watch":
      return (
        <>
          <rect x="66" y="2" width="28" height="86" rx="6" className="fill-fondo stroke-borde" />
          <rect x="50" y="18" width="60" height="54" rx="18" className={marco} />
          <circle cx="80" cy="45" r="12" className={acento} />
          <rect x="68" y="26" width="24" height="4" rx="2" className={trazo} />
          <rect x="68" y="60" width="24" height="4" rx="2" className={trazo} />
        </>
      );
    case "game":
      return (
        <>
          <rect x="20" y="10" width="120" height="70" rx="4" className={marco} />
          <rect x="26" y="16" width="40" height="5" rx="2" className={acento} />
          <path d="M72 34l22 11-22 11z" className={acento} />
          <rect x="26" y="68" width="108" height="6" rx="2" className={trazo} />
        </>
      );
    case "web":
      return (
        <>
          <rect x="20" y="10" width="120" height="70" rx="4" className={marco} />
          <rect x="28" y="16" width="104" height="8" rx="4" className="fill-fondo" />
          <rect x="28" y="32" width="64" height="8" rx="2" className={trazo} />
          <rect x="28" y="46" width="48" height="6" rx="2" className={trazo} />
          <rect x="98" y="32" width="34" height="38" rx="2" className="fill-fondo" />
          <rect x="28" y="58" width="26" height="10" rx="3" className={acento} />
        </>
      );
  }
}

export default function PantallaPlaceholder({
  device,
  label,
}: PantallaPlaceholderProps) {
  return (
    <svg
      viewBox="0 0 160 90"
      role="img"
      aria-label={label}
      className="aspect-video w-full rounded-control border border-borde bg-fondo"
      strokeWidth="1.5"
    >
      <Dibujo device={device} />
    </svg>
  );
}
