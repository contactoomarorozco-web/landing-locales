"use client";

import { useRef } from "react";
import { IconStar, IconCheck } from "./Icons";

type Review = { name: string; text: string; date?: string };

export default function ReviewsCarousel({ reviews }: { reviews: Review[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const amount = card ? card.offsetWidth + 20 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <div className="relative mt-8">
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {reviews.map((t) => {
          const initials = t.name
            .split(" ")
            .filter(Boolean)
            .slice(0, 2)
            .map((w) => w[0])
            .join("")
            .toUpperCase();
          return (
            <figure
              key={t.name}
              data-card
              className="flex w-[76%] shrink-0 snap-start flex-col rounded-xl p-5 sm:w-[280px] lg:w-[300px]"
              style={{
                background: "var(--paper)",
                border: "1px solid color-mix(in srgb, var(--ink) 9%, transparent)",
                boxShadow: "0 12px 32px -20px rgba(0,0,0,.35)",
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5" style={{ color: "var(--brand)" }}>
                  {[0, 1, 2, 3, 4].map((s) => (
                    <IconStar key={s} className="h-3 w-3" />
                  ))}
                </div>
                {t.date && (
                  <span className="text-[0.58rem] uppercase tracking-[0.14em] opacity-40">
                    {t.date}
                  </span>
                )}
              </div>
              <blockquote className="mt-3.5 grow text-[0.82rem] leading-relaxed opacity-75">
                {t.text}
              </blockquote>
              <figcaption
                className="mt-4 flex items-center gap-2.5 border-t pt-4"
                style={{ borderColor: "color-mix(in srgb, var(--ink) 10%, transparent)" }}
              >
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-display text-xs font-semibold text-white"
                  style={{ background: "var(--brand)" }}
                >
                  {initials}
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-[0.8rem] font-semibold">{t.name}</span>
                  <span className="mt-0.5 flex items-center gap-1 text-[0.58rem] uppercase tracking-[0.16em] opacity-50">
                    <IconCheck className="h-2.5 w-2.5" />
                    Cliente verificado
                  </span>
                </span>
              </figcaption>
            </figure>
          );
        })}
      </div>

      <div className="mt-4 flex gap-2.5">
        {([-1, 1] as const).map((dir) => (
          <button
            key={dir}
            type="button"
            aria-label={dir === -1 ? "Reseñas anteriores" : "Más reseñas"}
            onClick={() => scrollBy(dir)}
            className="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-black/5"
            style={{ border: "1px solid color-mix(in srgb, var(--ink) 16%, transparent)" }}
          >
            <span className="text-base" style={{ color: "var(--ink)" }}>
              {dir === -1 ? "←" : "→"}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
