export type Localized = { es: string; en: string };

export type Testimonial = {
  id: string;
  name: string;
  role: Localized;
  text: Localized;
  avatar: string | null; // null = iniciales o placeholder
  pending: boolean; // true = testimonio por completar
};
