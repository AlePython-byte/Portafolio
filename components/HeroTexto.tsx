"use client";

import Image from "next/image";
import { heroCopy } from "@/data/hero";
import { useLocalized } from "@/lib/localized";

export default function HeroTexto() {
  const t = useLocalized();

  return (
    <div className="flex flex-col items-start gap-6 lg:gap-5">
      <Image
        src="/avatar.svg"
        alt=""
        width={96}
        height={96}
        loading="eager"
        className="size-avatar rounded-redondo border-2 border-borde"
      />
      <div className="flex flex-col gap-3">
        <h1 id="hero-titulo" className="text-titulo font-bold lg:text-titulo-compacto">
          {heroCopy.name}
        </h1>
        <p className="text-rol text-texto-suave">{t(heroCopy.role)}</p>
      </div>
      <p className="text-frase font-medium">{t(heroCopy.phrase)}</p>
      <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col xl:flex-row">
        <a
          href="/cv.pdf"
          className="inline-flex min-h-tactil items-center justify-center rounded-control bg-acento px-6 text-cuerpo font-medium text-sobre-acento hover:opacity-90"
        >
          {t(heroCopy.downloadCv)}
        </a>
        <a
          href="#projects"
          className="inline-flex min-h-tactil items-center justify-center rounded-control border-2 border-texto px-6 text-cuerpo font-medium hover:bg-superficie"
        >
          {t(heroCopy.viewProjects)}
        </a>
      </div>
    </div>
  );
}
