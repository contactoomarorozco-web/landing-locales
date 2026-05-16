import Image from "next/image";
import type { Business } from "@/businesses/types";
import SubpageShell from "@/components/SubpageShell";
import { buildSubpageNavLinks } from "./navLinks";

const DESCRIPTION =
  "Los gatitos son cuidados y acompañados las 24 hrs. del día, los módulos donde se encuentran están diseñados para aumentar su comodidad, teniendo agua y comida separada de su arenero; los módulos son de un material que reduce el frío, el ruido y los reflejos.";

const BULLETS = [
  "Contamos con módulos dobles para su mayor comodidad.",
  "Toda el área tiene aromaterapia, feromonas faciales felinas y música.",
  "Llevamos un control diario de ingesta de agua y comida, así como la frecuencia con la que orinan o defecan.",
  "Son pesados cada 2 días, para detectar si el gatito está disminuyendo su apetito.",
  'Se sacan a un "Catio" donde pueden tomar el aire y el sol, así como jugar, siempre acompañados por su cuidadora Karen.',
];

const QUOTE = "¡Jamás conviven con otros gatos que no sean de su misma familia!";

export default function HotelPage({ b, slug }: { b: Business; slug: string }) {
  const waLink = `https://wa.me/${b.contact.whatsapp}?text=${encodeURIComponent(
    `Hola ${b.name}, me gustaría información sobre el hotel felino.`
  )}`;
  const navLinks = buildSubpageNavLinks(b, slug);

  if (!b.spotlight) return null;

  return (
    <SubpageShell b={b} navLinks={navLinks} waLink={waLink}>

      {/* ── HERO ── */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-10 lg:pt-16">
        <a
          href={`/${slug}`}
          className="inline-flex items-center gap-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.22em] opacity-40 hover:opacity-80 transition-opacity"
        >
          ← Volver
        </a>

        <div className="mt-8 lg:mt-10 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Texto */}
          <div>
            <p
              className="text-[0.78rem] font-semibold uppercase tracking-[0.22em] mb-5"
              style={{ color: "var(--brand)" }}
            >
              {b.spotlight.kicker}
            </p>
            <h1
              className="font-display font-semibold leading-[0.9] tracking-[-0.02em]"
              style={{ fontSize: "clamp(3rem, 9vw, 5.5rem)" }}
            >
              {b.spotlight.title}
            </h1>
            <p className="mt-6 text-[1rem] leading-[1.75] opacity-68 max-w-md">
              {DESCRIPTION}
            </p>
          </div>

          {/* Imagen 1 */}
          <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
            <Image
              src="/hotel-1.jpg"
              alt="Hotel felino Ocicat"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
              priority
              quality={95}
            />
          </div>
        </div>
      </section>

      {/* ── BULLETS ── */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 mt-14 lg:mt-20">
        <div
          className="rounded-2xl lg:rounded-3xl px-6 py-10 lg:px-12 lg:py-14"
          style={{
            background: "color-mix(in srgb, var(--brand) 6%, var(--paper))",
            border: "1px solid color-mix(in srgb, var(--brand) 14%, transparent)",
          }}
        >
          <p
            className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] mb-8"
            style={{ color: "var(--brand)" }}
          >
            Cómo cuidamos a tu gato
          </p>

          <ul className="space-y-2">
            {BULLETS.map((bullet, i) => (
              <li key={i} className="grid grid-cols-[2.5rem_1fr] gap-5 py-6 items-start">
                <span
                  className="font-display text-[1.4rem] font-semibold leading-none tabular-nums pt-0.5"
                  style={{ color: "var(--brand)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[0.97rem] leading-[1.7] opacity-72">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── QUOTE ── */}
      <section className="mx-auto max-w-4xl px-6 lg:px-10 py-14 lg:py-20 text-center">
        <p
          className="font-display font-semibold leading-[1.15] tracking-[-0.01em]"
          style={{
            fontSize: "clamp(1.5rem, 4vw, 2.4rem)",
            color: "var(--brand)",
          }}
        >
          "{QUOTE}"
        </p>
      </section>

      {/* ── IMAGEN 2 ── */}
      <div className="mx-auto px-4 lg:px-10 max-w-4xl">
        <div className="rounded-2xl lg:rounded-3xl overflow-hidden relative" style={{ aspectRatio: "16/9" }}>
        <Image
          src="/hotel.jpg"
          alt="Hotel felino — área de juego"
          fill
          className="object-cover"
          sizes="(max-width:1024px) 100vw, 56rem"
          quality={90}
        />
        </div>
      </div>

      {/* ── CTA ── */}
      <div
        className="mx-4 my-4 lg:mx-6 rounded-[1.75rem] lg:rounded-[2.5rem] py-12 px-6 lg:py-16 lg:px-14"
        style={{
          background: "color-mix(in srgb, var(--brand) 9%, var(--paper))",
          border: "1px solid color-mix(in srgb, var(--brand) 18%, transparent)",
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-display text-xl lg:text-2xl font-semibold">
              ¿Quieres reservar un lugar para tu gato?
            </p>
            <p className="mt-1.5 text-[0.88rem] opacity-60">
              Escríbenos y te contamos disponibilidad y precios.
            </p>
          </div>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-white transition-opacity hover:opacity-80"
            style={{ background: "var(--brand)" }}
          >
            Reservar por WhatsApp →
          </a>
        </div>
      </div>

    </SubpageShell>
  );
}
