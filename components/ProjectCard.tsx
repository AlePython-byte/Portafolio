"use client";

import Image from "next/image";
import { projectsCopy, type Project } from "@/data/projects";
import { useLocalized } from "@/lib/localized";
import BotonInactivo from "@/components/ui/BotonInactivo";
import EnlaceExterno from "@/components/ui/EnlaceExterno";
import Etiqueta from "@/components/ui/Etiqueta";
import PantallaPlaceholder from "@/components/ui/PantallaPlaceholder";
import Tarjeta from "@/components/ui/Tarjeta";

export default function ProjectCard({ project }: { project: Project }) {
  const t = useLocalized();
  const ocultoSr = `${project.title} ${t(projectsCopy.newTab)}`;

  return (
    <Tarjeta className="flex h-full flex-col gap-4">
      {project.image ? (
        <div className="relative aspect-video w-full overflow-hidden rounded-control border border-borde">
          <Image
            src={project.image}
            alt={t(project.imageAlt)}
            fill
            sizes="(min-width: 64rem) 33vw, (min-width: 48rem) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      ) : (
        <PantallaPlaceholder
          device={project.device}
          label={t(project.imageAlt)}
        />
      )}

      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <h4 className="text-rol font-bold">{project.title}</h4>
        {project.status ? (
          <Etiqueta className="border-acento-2">{t(project.status)}</Etiqueta>
        ) : null}
      </div>

      <p className="text-cuerpo">{t(project.description)}</p>

      {project.tags.length > 0 ? (
        <ul className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li key={tag}>
              <Etiqueta>{tag}</Etiqueta>
            </li>
          ))}
        </ul>
      ) : null}

      <div className="mt-auto flex flex-wrap gap-3 pt-2">
        <EnlaceExterno href={project.githubUrl} ocultoSr={ocultoSr}>
          {t(projectsCopy.github)}
        </EnlaceExterno>
        {project.demoUrl ? (
          <EnlaceExterno
            href={project.demoUrl}
            ocultoSr={ocultoSr}
            variante="primario"
          >
            {t(projectsCopy.demo)}
          </EnlaceExterno>
        ) : (
          <BotonInactivo>{t(projectsCopy.demoSoon)}</BotonInactivo>
        )}
      </div>
    </Tarjeta>
  );
}
