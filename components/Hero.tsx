import Image from "next/image";
import Consola from "@/components/consola/Consola";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-titulo"
      className="mx-auto grid w-full max-w-contenido items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24"
    >
      <div className="flex flex-col items-start gap-6">
        <Image
          src="/avatar.svg"
          alt=""
          width={96}
          height={96}
          loading="eager"
          className="size-avatar rounded-redondo border-2 border-borde"
        />
        <div className="flex flex-col gap-3">
          <h1 id="hero-titulo" className="text-titulo font-bold">
            Alejandro
          </h1>
          <p className="text-rol text-texto-suave">
            Ingeniero de Software · Frontend
          </p>
        </div>
        <p className="text-frase font-medium">
          Diseño interfaces que se sienten bien de usar.
        </p>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a
            href="/cv.pdf"
            className="inline-flex min-h-tactil items-center justify-center rounded-control bg-acento px-6 text-cuerpo font-medium text-sobre-acento hover:opacity-90"
          >
            Descargar CV
          </a>
          <a
            href="#projects"
            className="inline-flex min-h-tactil items-center justify-center rounded-control border-2 border-texto px-6 text-cuerpo font-medium hover:bg-superficie"
          >
            Ver proyectos
          </a>
        </div>
      </div>
      <Consola />
    </section>
  );
}
