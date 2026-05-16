"use client";

import { useState } from "react";
import type { Business } from "@/businesses/types";
import SubpageShell from "@/components/SubpageShell";
import { buildSubpageNavLinks } from "./navLinks";

export default function FaqPage({ b, slug }: { b: Business; slug: string }) {
  const waLink = `https://wa.me/${b.contact.whatsapp}?text=${encodeURIComponent(
    `Hola ${b.name}, vi su página y tengo una pregunta.`
  )}`;
  const navLinks = buildSubpageNavLinks(b, slug);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = b.faq ?? [];

  return (
    <SubpageShell b={b} navLinks={navLinks} waLink={waLink}>

      {/* ── HERO ── */}
      <section className="mx-auto max-w-4xl px-6 lg:px-10 pt-10 lg:pt-16 pb-10 lg:pb-16">
        <a
          href={`/${slug}`}
          className="inline-flex items-center gap-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.22em] opacity-40 hover:opacity-80 transition-opacity"
        >
          ← Volver
        </a>

        <div className="mt-8 flex items-end justify-between gap-4">
          <div>
            <p
              className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] mb-4"
              style={{ color: "var(--brand)" }}
            >
              Resolvemos tus dudas
            </p>
            <h1
              className="font-display font-semibold leading-[0.9] tracking-[-0.02em]"
              style={{ fontSize: "clamp(2.8rem, 9vw, 5rem)" }}
            >
              Preguntas<br />frecuentes
            </h1>
          </div>
          <span
            className="font-display font-semibold leading-none tabular-nums mb-1 shrink-0"
            style={{
              fontSize: "clamp(2.5rem, 8vw, 4rem)",
              color: "color-mix(in srgb, var(--brand) 18%, var(--paper))",
            }}
          >
            {String(faqs.length).padStart(2, "0")}
          </span>
        </div>
      </section>

      {/* ── ACORDEÓN ── */}
      <section className="mx-auto max-w-4xl px-6 lg:px-10 pb-10">
        <ul>
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            const paragraphs = item.answer.split("\n\n").filter(Boolean);

            return (
              <li
                key={i}
                className="border-t"
                style={{ borderColor: "color-mix(in srgb, var(--ink) 10%, transparent)" }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-start justify-between gap-6 py-7 text-left group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-5">
                    <span
                      className="font-display text-[1rem] font-semibold tabular-nums shrink-0 mt-0.5 transition-colors"
                      style={{ color: isOpen ? "var(--brand)" : "color-mix(in srgb, var(--brand) 35%, var(--paper))" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="font-display text-[1.05rem] lg:text-[1.2rem] font-semibold leading-snug tracking-tight transition-colors"
                      style={{ color: isOpen ? "var(--brand)" : "var(--ink)" }}
                    >
                      {item.question}
                    </span>
                  </div>
                  <span
                    className="shrink-0 mt-1 w-6 h-6 rounded-full flex items-center justify-center text-[0.9rem] font-light transition-all duration-300"
                    style={{
                      background: isOpen
                        ? "var(--brand)"
                        : "color-mix(in srgb, var(--ink) 8%, transparent)",
                      color: isOpen ? "var(--paper)" : "var(--ink)",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                    aria-hidden
                  >
                    +
                  </span>
                </button>

                <div
                  className="grid transition-all duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                  <div className="pl-9 pb-8 space-y-4">
                    {paragraphs.map((p, j) => (
                      <p
                        key={j}
                        className="text-[0.97rem] leading-[1.8] opacity-70"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                  </div>
                </div>
              </li>
            );
          })}
          <li
            className="border-t"
            style={{ borderColor: "color-mix(in srgb, var(--ink) 10%, transparent)" }}
          />
        </ul>
      </section>

      {/* ── CTA ── */}
      <div
        className="mx-4 mb-4 rounded-[1.75rem] py-12 px-6 lg:mx-6 lg:rounded-[2.5rem] lg:py-16 lg:px-14"
        style={{
          background: "color-mix(in srgb, var(--brand) 9%, var(--paper))",
          border: "1px solid color-mix(in srgb, var(--brand) 18%, transparent)",
        }}
      >
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-display text-xl lg:text-2xl font-semibold">
              ¿Tu duda no está aquí?
            </p>
            <p className="mt-1.5 text-[0.88rem] opacity-60">
              Escríbenos directamente y te respondemos.
            </p>
          </div>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-white transition-opacity hover:opacity-80"
            style={{ background: "var(--brand)" }}
          >
            Preguntar por WhatsApp →
          </a>
        </div>
      </div>

    </SubpageShell>
  );
}
