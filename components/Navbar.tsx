"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { LANGS, NAV_SECTIONS, translations } from "@/lib/i18n";
import { setLang, setTheme, useLang, useTheme } from "@/lib/preferences";

const MENU_ID = "menu-principal";

const linkClass =
  "inline-flex min-h-tactil items-center rounded-control px-3 text-cuerpo text-texto-suave hover:text-texto";

const controlClass =
  "inline-flex min-h-tactil min-w-tactil items-center justify-center rounded-control border border-borde px-3";

export default function Navbar() {
  const theme = useTheme();
  const lang = useLang();
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const t = translations[lang];

  const closeMenu = useCallback(() => {
    setOpen(false);
    menuButton.current?.focus({ preventScroll: true });
  }, []);

  // El script de app/layout.tsx ya los puso antes de pintar; aquí se mantienen sincronizados.
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };
    // Si la ventana pasa a escritorio, el panel deja de ser un menú desplegable.
    const desktop = window.matchMedia("(min-width: 48rem)");
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onChange);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onChange);
    };
  }, [open, closeMenu]);

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  function onLinkClick() {
    if (open) closeMenu();
  }

  return (
    <>
      <a
        href="#contenido"
        className="sr-only rounded-control bg-acento px-4 py-3 font-medium text-sobre-acento focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50"
      >
        {t.skipToContent}
      </a>
      <header className="sticky top-0 z-40 border-b border-borde bg-superficie">
        <nav
          aria-label={t.navLabel}
          className="mx-auto flex h-navbar w-full max-w-contenido items-center justify-between gap-4 px-6"
        >
          <a
            href="#hero"
            aria-label={t.logoLabel}
            onClick={onLinkClick}
            className="inline-flex min-h-tactil items-center rounded-control text-rol font-bold"
          >
            Alejandro
          </a>

          <button
            ref={menuButton}
            type="button"
            aria-expanded={open}
            aria-controls={MENU_ID}
            aria-label={open ? t.menuClose : t.menuOpen}
            onClick={() => setOpen((v) => !v)}
            className={`${controlClass} md:hidden`}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>

          <div
            id={MENU_ID}
            className={`${
              open ? "flex" : "hidden"
            } absolute inset-x-0 top-full flex-col gap-4 border-b border-borde bg-superficie px-6 py-4 md:static md:flex md:flex-1 md:flex-row md:items-center md:justify-between md:border-b-0 md:bg-transparent md:p-0`}
          >
            <ul className="flex flex-col md:ml-6 md:flex-row md:gap-1">
              {NAV_SECTIONS.map((id) => (
                <li key={id}>
                  <a href={`#${id}`} onClick={onLinkClick} className={linkClass}>
                    {t.nav[id]}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-3 font-mono text-etiqueta">
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={t.themeLabel}
                className={`${controlClass} bg-fondo`}
              >
                {t.themeState[theme]}
              </button>
              <div role="group" aria-label={t.langLabel} className="flex gap-1">
                {LANGS.map((l) => (
                  <button
                    key={l}
                    type="button"
                    onClick={() => setLang(l)}
                    aria-pressed={lang === l}
                    className={`${controlClass} ${
                      lang === l ? "bg-acento text-sobre-acento" : "bg-fondo"
                    }`}
                  >
                    {l.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
