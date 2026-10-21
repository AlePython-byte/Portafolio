import type { Localized, Testimonial } from "@/lib/types";

export type TestimonialsCopy = {
  title: Localized;
  pending: Localized;
};

export const testimonialsCopy: TestimonialsCopy = {
  title: { es: "Testimonios", en: "Testimonials" },
  pending: { es: "Testimonio pendiente", en: "Testimonial pending" },
};

// Sin testimonios reales todavía: los tres espacios están marcados como pendientes.
// `name` es un solo string, por eso va en ambos idiomas.
const pendingPerson = {
  name: "Por definir / To be defined",
  role: { es: "Por definir", en: "To be defined" },
  text: { es: "", en: "" },
  avatar: null,
  pending: true,
} satisfies Omit<Testimonial, "id">;

export const testimonials: Testimonial[] = [
  { id: "testimonio-1", ...pendingPerson },
  { id: "testimonio-2", ...pendingPerson },
  { id: "testimonio-3", ...pendingPerson },
];
