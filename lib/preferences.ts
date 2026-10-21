import { useSyncExternalStore } from "react";
import { LANGS, THEMES, type Lang, type Theme } from "@/lib/i18n";

import { LANG_KEY, THEME_KEY } from "@/lib/preference-keys";

export const DEFAULT_THEME: Theme = "light";
export const DEFAULT_LANG: Lang = "es";

type Prefs = { theme: Theme; lang: Lang };

// Copia en memoria: sigue funcionando aunque localStorage esté bloqueado.
let prefs: Prefs | null = null;
const listeners = new Set<() => void>();

function readStored<T extends string>(
  key: string,
  valid: readonly T[],
  fallback: T,
): T {
  try {
    const value = window.localStorage.getItem(key);
    return valid.includes(value as T) ? (value as T) : fallback;
  } catch {
    return fallback;
  }
}

function current(): Prefs {
  prefs ??= {
    theme: readStored(THEME_KEY, THEMES, DEFAULT_THEME),
    lang: readStored(LANG_KEY, LANGS, DEFAULT_LANG),
  };
  return prefs;
}

function save(key: string, value: string) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Almacenamiento bloqueado: la preferencia vive solo en memoria.
  }
}

function emit() {
  listeners.forEach((listener) => listener());
}

export function setTheme(theme: Theme) {
  prefs = { ...current(), theme };
  save(THEME_KEY, theme);
  emit();
}

export function setLang(lang: Lang) {
  prefs = { ...current(), lang };
  save(LANG_KEY, lang);
  emit();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  // Otra pestaña cambió las preferencias.
  const onStorage = (event: StorageEvent) => {
    if (event.key === THEME_KEY || event.key === LANG_KEY) {
      prefs = null;
      listener();
    }
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

// En el servidor y en la hidratación se usan los valores por defecto
// (coinciden con el HTML renderizado); luego React pasa al valor guardado.
export function useTheme(): Theme {
  return useSyncExternalStore(
    subscribe,
    () => current().theme,
    () => DEFAULT_THEME,
  );
}

export function useLang(): Lang {
  return useSyncExternalStore(
    subscribe,
    () => current().lang,
    () => DEFAULT_LANG,
  );
}
