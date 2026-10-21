import type { Localized } from "@/lib/types";

export const FOOTER_NAME = "Alejandro Parra";

export type FooterCopy = {
  quickLinks: Localized;
  social: Localized;
  github: Localized;
  linkedin: Localized;
  newTab: Localized;
  backToTop: Localized;
  madeWith: Localized;
};

export const footerCopy: FooterCopy = {
  quickLinks: { es: "Enlaces rápidos", en: "Quick links" },
  social: { es: "Redes", en: "Social" },
  github: { es: "GitHub de Alejandro Parra", en: "Alejandro Parra on GitHub" },
  linkedin: {
    es: "LinkedIn de Alejandro Parra",
    en: "Alejandro Parra on LinkedIn",
  },
  newTab: {
    es: "(se abre en una pestaña nueva)",
    en: "(opens in a new tab)",
  },
  backToTop: { es: "Volver arriba", en: "Back to top" },
  madeWith: {
    es: "Hecho con Next.js + Tailwind",
    en: "Made with Next.js + Tailwind",
  },
};
