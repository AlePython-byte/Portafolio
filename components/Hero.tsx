import Consola from "@/components/consola/Consola";
import HeroTexto from "@/components/HeroTexto";

// Componente de servidor: el texto (por el idioma) y la consola son las únicas
// partes cliente.
export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-titulo"
      className="mx-auto grid w-full max-w-contenido items-center gap-12 px-6 py-16 md:py-24 lg:grid-cols-(--hero-columnas) lg:gap-10 2xl:max-w-contenido-amplio"
    >
      <HeroTexto />
      <div className="flex justify-center lg:justify-end">
        <Consola />
      </div>
    </section>
  );
}
