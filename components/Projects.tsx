"use client";

import { projects, projectsCopy } from "@/data/projects";
import { useLocalized } from "@/lib/localized";
import ProjectCard from "@/components/ProjectCard";
import SeccionTitulo from "@/components/ui/SeccionTitulo";

const featured = projects.filter((p) => p.featured);
const more = projects.filter((p) => !p.featured);

export default function Projects() {
  const t = useLocalized();

  return (
    <section
      id="projects"
      aria-labelledby="projects-titulo"
      className="mx-auto w-full max-w-contenido px-6 py-16 md:py-24"
    >
      <SeccionTitulo id="projects-titulo" titulo={t(projectsCopy.title)} />

      <div className="mt-10 flex flex-col gap-6">
        <h3 className="text-cuerpo font-bold">{t(projectsCopy.courseHeading)}</h3>
        <ul className="grid gap-6 md:grid-cols-2">
          {featured.map((project) => (
            <li key={project.id}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12 flex flex-col gap-6">
        <h3 className="text-cuerpo font-bold">{t(projectsCopy.moreHeading)}</h3>
        <ul className="grid gap-6 lg:grid-cols-3">
          {more.map((project) => (
            <li key={project.id}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
