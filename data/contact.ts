import type { Localized } from "@/lib/types";

export type ContactLink = {
  id: "email" | "linkedin" | "github";
  label: Localized;
  value: string;
  href: string;
  external: boolean;
};

export const contactLinks: ContactLink[] = [
  {
    id: "email",
    label: { es: "Correo", en: "Email" },
    value: "jorgealejandroparrab@outlook.com",
    href: "mailto:jorgealejandroparrab@outlook.com",
    external: false,
  },
  {
    id: "linkedin",
    label: { es: "LinkedIn", en: "LinkedIn" },
    value: "alejandro-parra-91ab55319",
    href: "https://www.linkedin.com/in/alejandro-parra-91ab55319/",
    external: true,
  },
  {
    id: "github",
    label: { es: "GitHub", en: "GitHub" },
    value: "AlePython-byte",
    href: "https://github.com/AlePython-byte",
    external: true,
  },
];

export type ContactCopy = {
  title: Localized;
  intro: Localized;
  linksHeading: Localized;
  formHeading: Localized;
  newTab: Localized;
  fields: {
    name: Localized;
    email: Localized;
    message: Localized;
  };
  errors: {
    nameRequired: Localized;
    emailRequired: Localized;
    emailInvalid: Localized;
    messageRequired: Localized;
    messageShort: Localized;
  };
  submit: Localized;
  sending: Localized;
  success: Localized;
  failure: Localized;
  notConfigured: Localized;
};

export const MESSAGE_MIN_LENGTH = 10;

export const contactCopy: ContactCopy = {
  title: { es: "Contacto", en: "Contact" },
  intro: {
    es: "¿Quieres hablar de un proyecto o de una oportunidad? Escríbeme.",
    en: "Want to talk about a project or an opportunity? Get in touch.",
  },
  linksHeading: { es: "Encuéntrame en", en: "Find me on" },
  formHeading: { es: "Envíame un mensaje", en: "Send me a message" },
  newTab: {
    es: "(se abre en una pestaña nueva)",
    en: "(opens in a new tab)",
  },
  fields: {
    name: { es: "Nombre", en: "Name" },
    email: { es: "Correo electrónico", en: "Email" },
    message: { es: "Mensaje", en: "Message" },
  },
  errors: {
    nameRequired: { es: "Escribe tu nombre.", en: "Enter your name." },
    emailRequired: {
      es: "Escribe tu correo electrónico.",
      en: "Enter your email address.",
    },
    emailInvalid: {
      es: "Escribe un correo válido, por ejemplo nombre@dominio.com.",
      en: "Enter a valid email, for example name@domain.com.",
    },
    messageRequired: { es: "Escribe un mensaje.", en: "Enter a message." },
    messageShort: {
      es: `El mensaje debe tener al menos ${MESSAGE_MIN_LENGTH} caracteres.`,
      en: `The message must be at least ${MESSAGE_MIN_LENGTH} characters long.`,
    },
  },
  submit: { es: "Enviar mensaje", en: "Send message" },
  sending: { es: "Enviando…", en: "Sending…" },
  success: {
    es: "¡Mensaje enviado! Te responderé pronto.",
    en: "Message sent! I'll get back to you soon.",
  },
  failure: {
    es: "No se pudo enviar el mensaje. Inténtalo de nuevo o escríbeme al correo.",
    en: "The message could not be sent. Try again or email me directly.",
  },
  notConfigured: {
    es: "El formulario aún no está configurado.",
    en: "The form is not configured yet.",
  },
};
