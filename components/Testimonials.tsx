"use client";

import Image from "next/image";
import { testimonials, testimonialsCopy } from "@/data/testimonials";
import { useLocalized } from "@/lib/localized";
import SeccionTitulo from "@/components/ui/SeccionTitulo";
import Tarjeta from "@/components/ui/Tarjeta";

function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");
}

export default function Testimonials() {
  const t = useLocalized();

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-titulo"
      className="mx-auto w-full max-w-contenido px-6 py-16 md:py-24"
    >
      <SeccionTitulo
        id="testimonials-titulo"
        titulo={t(testimonialsCopy.title)}
      />

      <ul className="mt-10 grid gap-6 lg:grid-cols-3">
        {testimonials.map((item) => (
          <li key={item.id}>
            <Tarjeta className="h-full">
              <figure className="flex h-full flex-col gap-4">
                {item.pending ? (
                  <p className="rounded-control border border-dashed border-borde px-3 py-2 font-mono text-etiqueta text-texto-suave">
                    {t(testimonialsCopy.pending)}
                  </p>
                ) : (
                  <blockquote className="text-cuerpo">{t(item.text)}</blockquote>
                )}

                <figcaption className="mt-auto flex items-center gap-3">
                  {item.avatar ? (
                    <Image
                      src={item.avatar}
                      alt=""
                      width={48}
                      height={48}
                      className="size-12 rounded-redondo border border-borde object-cover"
                    />
                  ) : (
                    <span
                      aria-hidden="true"
                      className="inline-flex size-12 flex-none items-center justify-center rounded-redondo border border-borde bg-fondo font-mono text-cuerpo text-texto-suave"
                    >
                      {item.pending ? "?" : initials(item.name)}
                    </span>
                  )}
                  <span className="flex flex-col">
                    <span className="font-bold">{item.name}</span>
                    <span className="text-etiqueta text-texto-suave">
                      {t(item.role)}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Tarjeta>
          </li>
        ))}
      </ul>
    </section>
  );
}
