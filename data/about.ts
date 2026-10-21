import type { Localized } from "@/lib/types";

export type QuickFact = { label: Localized; value: Localized };
export type SkillGroup = { name: Localized; skills: string[] };

export type AboutData = {
  title: Localized;
  avatarAlt: Localized;
  factsHeading: Localized;
  interestsHeading: Localized;
  skillsHeading: Localized;
  paragraph: Localized;
  quickFacts: QuickFact[];
  interests: Localized[];
  skillGroups: SkillGroup[];
};

export const about: AboutData = {
  title: { es: "Sobre mí", en: "About me" },
  avatarAlt: {
    es: "Foto de perfil de Alejandro Parra (imagen provisional)",
    en: "Alejandro Parra's profile picture (placeholder image)",
  },
  factsHeading: { es: "Datos rápidos", en: "Quick facts" },
  interestsHeading: { es: "Intereses", en: "Interests" },
  skillsHeading: { es: "Habilidades", en: "Skills" },
  paragraph: {
    es: "Soy Alejandro Parra, estudiante de quinto semestre de Ingeniería de Software en la Universidad Cooperativa de Colombia, en Pasto. Me muevo entre el backend, los datos y las interfaces: me gusta entender cómo funciona un sistema por dentro y cuidar cómo se siente para quien lo usa. Fuera del código, mis planes favoritos son la compañía de mi gata Mullis, la música, los videojuegos de terror y los viajes.",
    en: "I'm Alejandro Parra, a fifth-semester Software Engineering student at Universidad Cooperativa de Colombia in Pasto. I move between backend, data and interfaces: I like understanding how a system works inside and caring about how it feels to the person using it. Outside of code, my favorite things are spending time with my cat Mullis, music, horror games and traveling.",
  },
  quickFacts: [
    {
      label: { es: "Ubicación", en: "Location" },
      value: { es: "Pasto, Colombia", en: "Pasto, Colombia" },
    },
    {
      label: { es: "Semestre", en: "Semester" },
      value: { es: "Quinto", en: "Fifth" },
    },
    {
      label: { es: "Formación", en: "Studies" },
      value: { es: "Ingeniería de Software", en: "Software Engineering" },
    },
    {
      label: { es: "Enfoque", en: "Focus" },
      value: {
        es: "Backend, frontend, UX/UI y bases de datos",
        en: "Backend, frontend, UX/UI and databases",
      },
    },
  ],
  interests: [
    { es: "Música", en: "Music" },
    { es: "Videojuegos de terror", en: "Horror games" },
    { es: "Viajes", en: "Travel" },
    { es: "Mullis, mi gata", en: "Mullis, my cat" },
  ],
  skillGroups: [
    {
      name: { es: "Frontend", en: "Frontend" },
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML", "Vite"],
    },
    {
      name: { es: "Backend", en: "Backend" },
      skills: ["Node.js", "NestJS", "Java", "Spring Boot"],
    },
    {
      name: { es: "Móvil y escritorio", en: "Mobile & desktop" },
      skills: ["Kotlin", "Jetpack Compose", "Wear OS", "Tauri"],
    },
    {
      name: { es: "Bases de datos", en: "Databases" },
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
    },
    {
      name: { es: "Cloud y DevOps", en: "Cloud & DevOps" },
      skills: ["AWS", "Azure", "Docker", "GitHub Actions"],
    },
    {
      name: { es: "Herramientas", en: "Tools" },
      skills: ["Git", "GitHub", "Linux", "Postman", "Godot", "Blender"],
    },
  ],
};
