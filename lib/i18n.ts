export type Lang = "es" | "en";

export const LANGS: readonly Lang[] = ["es", "en"];

export type Theme = "light" | "dark";

export const THEMES: readonly Theme[] = ["light", "dark"];

export const NAV_SECTIONS = [
  "about",
  "projects",
  "testimonials",
  "experience",
  "contact",
  "extra",
] as const;

export type NavSection = (typeof NAV_SECTIONS)[number];

type Dictionary = {
  skipToContent: string;
  navLabel: string;
  logoLabel: string;
  menuOpen: string;
  menuClose: string;
  themeLabel: string;
  themeState: { light: string; dark: string };
  langLabel: string;
  nav: Record<NavSection, string>;
};

export const translations: Record<Lang, Dictionary> = {
  es: {
    skipToContent: "Saltar al contenido",
    navLabel: "Principal",
    logoLabel: "Alejandro, ir al inicio",
    menuOpen: "Abrir menú",
    menuClose: "Cerrar menú",
    themeLabel: "Cambiar tema claro/oscuro",
    themeState: { light: "Tema: claro", dark: "Tema: oscuro" },
    langLabel: "Idioma",
    nav: {
      about: "Sobre mí",
      projects: "Proyectos",
      testimonials: "Testimonios",
      experience: "Experiencia",
      contact: "Contacto",
      extra: "Extra",
    },
  },
  en: {
    skipToContent: "Skip to content",
    navLabel: "Main",
    logoLabel: "Alejandro, go to top",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    themeLabel: "Switch light/dark theme",
    themeState: { light: "Theme: light", dark: "Theme: dark" },
    langLabel: "Language",
    nav: {
      about: "About",
      projects: "Projects",
      testimonials: "Testimonials",
      experience: "Experience",
      contact: "Contact",
      extra: "Extra",
    },
  },
};
