"use client";

import Image from "next/image";
import { about } from "@/data/about";
import { useLocalized } from "@/lib/localized";
import Etiqueta from "@/components/ui/Etiqueta";
import SeccionTitulo from "@/components/ui/SeccionTitulo";
import Tarjeta from "@/components/ui/Tarjeta";

const subtituloClass = "text-cuerpo font-bold";

export default function About() {
  const t = useLocalized();

  return (
    <section
      id="about"
      aria-labelledby="about-titulo"
      className="mx-auto w-full max-w-contenido px-6 py-16 md:py-24"
    >
      <SeccionTitulo id="about-titulo" titulo={t(about.title)} />

      <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-12">
        <div className="flex flex-col gap-8">
          <Image
            src="/avatar.svg"
            alt={t(about.avatarAlt)}
            width={192}
            height={192}
            className="size-foto rounded-tarjeta border-2 border-borde"
          />

          <div className="flex flex-col gap-4">
            <h3 className={subtituloClass}>{t(about.factsHeading)}</h3>
            <dl className="grid gap-4">
              {about.quickFacts.map((fact) => (
                <div key={fact.label.es} className="flex flex-col gap-1">
                  <dt className="font-mono text-etiqueta uppercase tracking-wide text-texto-suave">
                    {t(fact.label)}
                  </dt>
                  <dd className="text-cuerpo">{t(fact.value)}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className={subtituloClass}>{t(about.interestsHeading)}</h3>
            <ul className="flex flex-wrap gap-2">
              {about.interests.map((interest) => (
                <li key={interest.es}>
                  <Etiqueta>{t(interest)}</Etiqueta>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <p className="text-rol leading-relaxed">{t(about.paragraph)}</p>

          <div className="flex flex-col gap-4">
            <h3 className={subtituloClass}>{t(about.skillsHeading)}</h3>
            <div className="grid gap-4">
              {about.skillGroups.map((group) => (
                <Tarjeta key={group.name.es} className="flex flex-col gap-3">
                  <h4 className="font-mono text-etiqueta uppercase tracking-wide text-texto-suave">
                    {t(group.name)}
                  </h4>
                  <ul className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <li key={skill}>
                        <Etiqueta>{skill}</Etiqueta>
                      </li>
                    ))}
                  </ul>
                </Tarjeta>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
