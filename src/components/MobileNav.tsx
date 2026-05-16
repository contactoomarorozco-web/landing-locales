"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

type NavLink = { href: string; label: string };

export default function MobileNav({
  links,
  waLink,
  mapsUrl,
  notes,
  logo,
  name,
  brand,
  ink,
}: {
  links: NavLink[];
  waLink: string;
  mapsUrl?: string;
  notes?: string[];
  logo?: string;
  name: string;
  brand: string;
  ink: string;
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const lastIdx = -1; // ningún link se destaca, todos van igual

  return (
    <div className="md:hidden">
      {/* Hamburguesa */}
      <button
        type="button"
        aria-label="Abrir menú"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-lg transition-colors hover:bg-black/5"
      >
        <span className="block h-[1.5px] w-6 rounded-full" style={{ background: "var(--ink)" }} />
        <span className="block h-[1.5px] w-6 rounded-full" style={{ background: "var(--ink)" }} />
        <span className="block h-[1.5px] w-4 self-end rounded-full" style={{ background: "var(--ink)" }} />
      </button>

      {mounted && createPortal(
        <div
          className="md:hidden"
          style={{ "--brand": brand, "--ink": ink, "--paper": "#f8f4ef" } as React.CSSProperties}
        >
          {/* Overlay */}
          <div
            onClick={() => setOpen(false)}
            aria-hidden
            className={`fixed inset-0 z-[90] bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 ${
              open ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          />

          {/* Drawer — panel flotante que no ocupa toda la altura */}
          <div
            className={`fixed top-4 right-4 z-[100] w-[82%] max-w-[320px] rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ease-out ${
              open ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0 pointer-events-none"
            }`}
            style={{ background: "var(--paper)", color: "var(--ink)" }}
            role="dialog"
            aria-modal="true"
          >
            {/* Cabecera */}
            <div
              className="flex items-center justify-between px-5 py-4 border-b"
              style={{ borderColor: "color-mix(in srgb, var(--ink) 8%, transparent)" }}
            >
              {logo ? (
                <Image src={logo} alt={name} width={267} height={125} className="h-8 w-auto" />
              ) : (
                <span className="font-display text-base font-semibold tracking-tight">{name}</span>
              )}
              <button
                type="button"
                aria-label="Cerrar menú"
                onClick={() => setOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full transition-colors"
                style={{ background: "color-mix(in srgb, var(--ink) 8%, transparent)" }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            {/* Links */}
            <nav className="flex flex-col py-2">
              {links.map((l, i) => {
                const isLast = i === lastIdx;
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`group flex items-center justify-between px-5 py-3.5 text-[0.75rem] font-semibold uppercase tracking-[0.18em] transition-all duration-200 ${
                      open ? "translate-x-0 opacity-100" : "translate-x-3 opacity-0"
                    } ${isLast ? "mx-4 mb-1 mt-1 rounded-xl justify-center" : ""}`}
                    style={{
                      transitionDelay: open ? `${60 + i * 40}ms` : "0ms",
                      ...(isLast
                        ? { background: "var(--brand)", color: "#fff" }
                        : {}),
                    }}
                  >
                    <span>{l.label}</span>
                    {!isLast && (
                      <span
                        className="text-[0.65rem] transition-transform duration-200 group-hover:translate-x-1"
                        style={{ color: "var(--brand)" }}
                      >
                        →
                      </span>
                    )}
                  </a>
                );
              })}
            </nav>

            {/* CTA WhatsApp — único botón */}
            <div
              className="px-4 pt-2 pb-4 border-t"
              style={{ borderColor: "color-mix(in srgb, var(--ink) 8%, transparent)" }}
            >
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl py-3.5 text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-white transition-opacity hover:opacity-85"
                style={{ background: "var(--brand)" }}
              >
                Escribir por WhatsApp →
              </a>
              {mapsUrl && (
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="mt-3 flex items-center justify-center gap-2 rounded-xl py-3 text-[0.7rem] font-semibold uppercase tracking-[0.15em] transition-colors"
                  style={{ border: "1px solid color-mix(in srgb, var(--ink) 16%, transparent)" }}
                >
                  Cómo llegar →
                </a>
              )}
              {notes && notes.length > 0 && (
                <p className="mt-3 text-center text-[0.58rem] font-semibold uppercase tracking-[0.18em] opacity-35">
                  {notes.join(" · ")}
                </p>
              )}
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
