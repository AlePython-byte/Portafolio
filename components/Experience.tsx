"use client";

import { experience, experienceCopy } from "@/data/experience";
import { useLocalized } from "@/lib/localized";
import Etiqueta from "@/components/ui/Etiqueta";
import SeccionTitulo from "@/components/ui/SeccionTitulo";
import Tarjeta from "@/components/ui/Tarjeta";

export default function Experience() {
  const t = useLocalized();

  return (
    <section
      id="experience"
      aria-labelledby="experience-titulo"
      className="mx-auto w-full max-w-contenido px-6 py-16 md:py-24"
    >
      <SeccionTitulo id="experience-titulo" titulo={t(experienceCopy.title)} />

      <ol className="mt-10 flex flex-col gap-8 border-l-2 border-borde pl-8">
        {experience.map((item) => {
          const academic = item.kind === "academic";
          return (
            <li key={item.id} className="relative">
              <span
                aria-hidden="true"
                className={`absolute -left-10 top-6 size-4 border-2 ${
                  academic
                    ? "rounded-redondo border-acento bg-acento"
                    : "rounded-boceto border-acento-2 bg-fondo"
                }`}
              />
              <Tarjeta className="flex flex-col gap-3">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <Etiqueta className={academic ? "border-acento" : "border-acento-2"}>
                    {t(academic ? experienceCopy.academic : experienceCopy.work)}
                  </Etiqueta>
                  {item.period ? (
                    <span className="font-mono text-etiqueta text-texto-suave">
                      {t(item.period)}
                    </span>
                  ) : null}
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="text-rol font-bold">{t(item.role)}</h3>
                  <p className="text-cuerpo text-texto-suave">
                    {item.organization}
                  </p>
                </div>

                {item.achievements.length > 0 ? (
                  <ul className="flex list-disc flex-col gap-1 pl-5 text-cuerpo">
                    {item.achievements.map((achievement) => (
                      <li key={achievement.es}>{t(achievement)}</li>
                    ))}
                  </ul>
                ) : null}

                {item.pending ? (
                  <p className="self-start rounded-control border border-dashed border-borde px-3 py-1 font-mono text-etiqueta text-texto-suave">
                    {t(experienceCopy.pending)}
                  </p>
                ) : null}
              </Tarjeta>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
