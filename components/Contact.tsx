"use client";

import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import {
  contactCopy,
  contactLinks,
  MESSAGE_MIN_LENGTH,
} from "@/data/contact";
import { useLocalized } from "@/lib/localized";
import type { Localized } from "@/lib/types";
import EnlaceExterno, { botonBase } from "@/components/ui/EnlaceExterno";
import SeccionTitulo from "@/components/ui/SeccionTitulo";
import Tarjeta from "@/components/ui/Tarjeta";

// Se lee al compilar: si la variable no está definida, el formulario no envía nada.
const ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "";

type FieldName = "name" | "email" | "message";
type Values = Record<FieldName, string>;
type Errors = Partial<Record<FieldName, Localized>>;
type Status = "idle" | "sending" | "success" | "failure";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: Values): Errors {
  const { errors } = contactCopy;
  const result: Errors = {};
  if (!values.name.trim()) result.name = errors.nameRequired;
  if (!values.email.trim()) result.email = errors.emailRequired;
  else if (!EMAIL_PATTERN.test(values.email.trim()))
    result.email = errors.emailInvalid;
  if (!values.message.trim()) result.message = errors.messageRequired;
  else if (values.message.trim().length < MESSAGE_MIN_LENGTH)
    result.message = errors.messageShort;
  return result;
}

const FIELD_ORDER: FieldName[] = ["name", "email", "message"];

const inputClass =
  "w-full rounded-control border-2 bg-fondo px-3 text-cuerpo text-texto";

export default function Contact() {
  const t = useLocalized();
  const [values, setValues] = useState<Values>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [attempted, setAttempted] = useState(false);
  const refs = {
    name: useRef<HTMLInputElement>(null),
    email: useRef<HTMLInputElement>(null),
    message: useRef<HTMLTextAreaElement>(null),
  };

  function onChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const field = event.target.name as FieldName;
    const next = { ...values, [field]: event.target.value };
    setValues(next);
    // Una vez que el campo tiene error, se revalida mientras se corrige.
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: validate(next)[field] }));
    }
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setAttempted(true);
    setStatus("idle");

    const found = validate(values);
    setErrors(found);
    const firstInvalid = FIELD_ORDER.find((field) => found[field]);
    if (firstInvalid) {
      refs[firstInvalid].current?.focus();
      return;
    }

    // Sin endpoint no se envía nada ni se simula éxito.
    if (!ENDPOINT) return;

    setStatus("sending");
    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          message: values.message.trim(),
        }),
      });
      if (!response.ok) throw new Error(String(response.status));
      setValues({ name: "", email: "", message: "" });
      setStatus("success");
    } catch {
      setStatus("failure");
    }
  }

  function field(name: FieldName, label: Localized, multiline = false) {
    const error = errors[name];
    const id = `contacto-${name}`;
    const errorId = `${id}-error`;
    const common = {
      id,
      name,
      value: values[name],
      onChange,
      "aria-required": true,
      "aria-invalid": error ? true : undefined,
      "aria-describedby": error ? errorId : undefined,
      className: `${inputClass} ${error ? "border-error" : "border-borde"}`,
    } as const;

    return (
      <div className="flex flex-col gap-2">
        <label htmlFor={id} className="text-cuerpo font-medium">
          {t(label)}
        </label>
        {multiline ? (
          <textarea
            {...common}
            ref={refs.message}
            rows={5}
            className={`${common.className} min-h-32 resize-y py-2`}
          />
        ) : (
          <input
            {...common}
            ref={name === "name" ? refs.name : refs.email}
            type={name === "email" ? "email" : "text"}
            autoComplete={name === "email" ? "email" : "name"}
            className={`${common.className} min-h-tactil`}
          />
        )}
        {error ? (
          <p id={errorId} role="alert" className="text-etiqueta font-medium text-error">
            {t(error)}
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-titulo"
      className="mx-auto w-full max-w-contenido px-6 py-16 md:py-24"
    >
      <SeccionTitulo
        id="contact-titulo"
        titulo={t(contactCopy.title)}
        subtitulo={t(contactCopy.intro)}
      />

      <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-12">
        <div className="flex flex-col gap-4">
          <h3 className="text-cuerpo font-bold">{t(contactCopy.linksHeading)}</h3>
          <ul className="flex flex-col gap-3">
            {contactLinks.map((link) => (
              <li key={link.id} className="flex flex-col gap-1">
                <span className="font-mono text-etiqueta uppercase tracking-wide text-texto-suave">
                  {t(link.label)}
                </span>
                {link.external ? (
                  <div>
                    <EnlaceExterno
                      href={link.href}
                      ocultoSr={t(contactCopy.newTab)}
                    >
                      {link.value}
                    </EnlaceExterno>
                  </div>
                ) : (
                  <div>
                    <a
                      href={link.href}
                      className={`${botonBase} border-2 border-texto hover:bg-fondo`}
                    >
                      {link.value}
                    </a>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        <Tarjeta>
          <form
            onSubmit={onSubmit}
            noValidate
            className="flex flex-col gap-5"
            aria-labelledby="contacto-formulario"
          >
            <h3 id="contacto-formulario" className="text-cuerpo font-bold">
              {t(contactCopy.formHeading)}
            </h3>

            {!ENDPOINT ? (
              <p
                role={attempted ? "alert" : "note"}
                className="rounded-control border-2 border-dashed border-acento-2 px-3 py-2 text-cuerpo"
              >
                {t(contactCopy.notConfigured)}
              </p>
            ) : null}

            {field("name", contactCopy.fields.name)}
            {field("email", contactCopy.fields.email)}
            {field("message", contactCopy.fields.message, true)}

            <button
              type="submit"
              disabled={status === "sending"}
              className={`${botonBase} bg-acento text-sobre-acento hover:opacity-90 disabled:opacity-60`}
            >
              {t(status === "sending" ? contactCopy.sending : contactCopy.submit)}
            </button>

            <div aria-live="polite">
              {status === "success" ? (
                <p role="status" className="text-cuerpo font-medium">
                  {t(contactCopy.success)}
                </p>
              ) : null}
              {status === "failure" ? (
                <p role="alert" className="text-cuerpo font-medium text-error">
                  {t(contactCopy.failure)}
                </p>
              ) : null}
            </div>
          </form>
        </Tarjeta>
      </div>
    </section>
  );
}
