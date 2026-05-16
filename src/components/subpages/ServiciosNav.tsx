"use client";
import { useEffect, useRef, useState } from "react";

const SERVICES = [
  { id: "consulta",        label: "Consulta" },
  { id: "laboratorio",     label: "Laboratorio" },
  { id: "rayos-x",        label: "Rayos X" },
  { id: "cirugia",        label: "Cirugía" },
  { id: "hospitalizacion", label: "Hospitalización" },
  { id: "venta-alimento",  label: "Alimentos" },
];

export default function ServiciosNav() {
  const [active, setActive]   = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const scrollRef             = useRef<HTMLDivElement>(null);

  useEffect(() => {
    /* ── Mostrar barra al salir del índice ── */
    const index = document.querySelector("[data-services-index]");
    const visObs = new IntersectionObserver(
      ([e]) => setVisible(!e.isIntersecting),
      { threshold: 0 }
    );
    if (index) visObs.observe(index);

    /* ── Sección activa ── */
    const secObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-25% 0px -60% 0px" }
    );

    SERVICES.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) secObs.observe(el);
    });

    return () => { visObs.disconnect(); secObs.disconnect(); };
  }, []);

  /* ── Auto-scroll del pill activo al centro ── */
  useEffect(() => {
    if (!active || !scrollRef.current) return;
    const pill = scrollRef.current.querySelector(`[data-id="${active}"]`) as HTMLElement;
    if (pill) pill.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [active]);

  return (
    <div
      className="fixed left-0 right-0 z-40 transition-all duration-300"
      style={{
        top: "64px",
        background: "color-mix(in srgb, var(--paper) 92%, transparent)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid color-mix(in srgb, var(--ink) 8%, transparent)",
        transform: visible ? "translateY(0)" : "translateY(-110%)",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1), opacity 0.25s ease",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-10">
        <div
          ref={scrollRef}
          className="flex gap-1 overflow-x-auto py-2.5"
          style={{ scrollbarWidth: "none" }}
        >
          {SERVICES.map(({ id, label }) => {
            const isActive = active === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                data-id={id}
                className="shrink-0 px-3.5 py-1.5 rounded-full text-[0.65rem] font-semibold uppercase tracking-[0.14em] transition-all duration-200 whitespace-nowrap"
                style={
                  isActive
                    ? { background: "var(--brand)", color: "var(--paper)" }
                    : { color: "var(--ink)", opacity: 0.45 }
                }
              >
                {label}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
