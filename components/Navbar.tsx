"use client";

import { useState } from "react";

type Theme = "light" | "dark";
type Lang = "es" | "en";

function currentTheme(): Theme {
  const explicit = document.documentElement.dataset.theme;
  if (explicit === "light" || explicit === "dark") return explicit;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function Navbar() {
  const [theme, setTheme] = useState<Theme | null>(null);
  const [lang, setLang] = useState<Lang>("es");

  function toggleTheme() {
    const next: Theme = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    setTheme(next);
  }

  return (
    <nav className="flex items-center justify-between gap-4 border-b border-borde px-6 py-4">
      <span>Navbar</span>
      <div className="flex items-center gap-3 font-mono text-sm">
        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Cambiar tema claro/oscuro"
          className="rounded border border-borde bg-superficie px-3 py-1"
        >
          Tema{theme ? `: ${theme}` : ""}
        </button>
        <div role="group" aria-label="Idioma" className="flex gap-1">
          {(["es", "en"] as const).map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => setLang(l)}
              aria-pressed={lang === l}
              className={`rounded border border-borde px-2 py-1 ${
                lang === l ? "bg-acento text-fondo" : "bg-superficie"
              }`}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
