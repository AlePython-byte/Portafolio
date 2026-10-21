import type { Lang } from "@/lib/i18n";
import { useLang } from "@/lib/preferences";
import type { Localized } from "@/lib/types";

export function pick(text: Localized, lang: Lang): string {
  return text[lang];
}

// Solo para componentes cliente: devuelve el texto en el idioma actual.
export function useLocalized(): (text: Localized) => string {
  const lang = useLang();
  return (text) => pick(text, lang);
}
