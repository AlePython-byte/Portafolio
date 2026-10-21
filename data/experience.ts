import type { Localized } from "@/lib/types";

export type ExperienceItem = {
  id: string;
  kind: "academic" | "work";
  role: Localized;
  organization: string;
  period: Localized | null; // null = periodo sin definir
  achievements: Localized[];
  pending: boolean; // true = contenido por completar
};

export type ExperienceCopy = {
  title: Localized;
  academic: Localized;
  work: Localized;
  pending: Localized;
};

export const experienceCopy: ExperienceCopy = {
  title: { es: "Experiencia", en: "Experience" },
  academic: { es: "Académica", en: "Academic" },
  work: { es: "Laboral", en: "Work" },
  pending: { es: "Contenido pendiente", en: "Content pending" },
};

// De más reciente a más antiguo. Aún no hay fechas confirmadas: se deja el
// orden por relevancia (la formación en curso primero).
export const experience: ExperienceItem[] = [
  {
    id: "ucc-pasto",
    kind: "academic",
    role: {
      es: "Estudiante de Ingeniería de Software",
      en: "Software Engineering student",
    },
    organization: "Universidad Cooperativa de Colombia, sede Pasto",
    period: null,
    achievements: [],
    pending: true,
  },
  {
    id: "trabajo-pendiente",
    kind: "work",
    role: { es: "Por definir", en: "To be defined" },
    organization: "Por definir / To be defined",
    period: null,
    achievements: [],
    pending: true,
  },
];
