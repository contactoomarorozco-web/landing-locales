import Image from "next/image";
import type { Business } from "@/businesses/types";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import { IconPin, IconPhone, IconMail, IconClock, IconCat, IconSeal, IconStar } from "./Icons";
import ReviewsCarousel from "./ReviewsCarousel";

function buildNavLinks(b: Business) {
  const base = `/${b.slug}`;
  const links: { href: string; label: string }[] = [
    { href: base, label: "Inicio" },
  ];
  if (b.spotlight) links.push({ href: `${base}/hotel`, label: b.spotlight.kicker });
  links.push({ href: `${base}/servicios`, label: "Servicios" });
  if (b.gallery.length > 0) links.push({ href: `${base}/instalaciones`, label: "Instalaciones" });
  if (b.team && b.team.length > 0) links.push({ href: `${base}/nosotros`, label: "Nosotros" });
  if (b.faq && b.faq.length > 0) links.push({ href: `${base}/faq`, label: "Preguntas frecuentes" });
  links.push({ href: `${base}#contacto`, label: "Contacto" });
  return links;
}

export default function Landing({ b }: { b: Business }) {
  const waLink = `https://wa.me/${b.contact.whatsapp}?text=${encodeURIComponent(
    `Hola ${b.name}, vi su página y me gustaría más información.`
  )}`;

  const navLinks = buildNavLinks(b);
  const sealText = `${b.category} · ${b.location} · `.toUpperCase().repeat(2);
  const marquee = [...b.services.map((s) => s.title), b.location, b.category];

  return (
    <div
      className="grain relative min-h-screen overflow-clip"
      style={
        {
          "--brand": b.theme.primary,
          "--ink": b.theme.dark,
          background: "var(--paper)",
          color: "var(--ink)",
        } as React.CSSProperties
      }
    >
      <SiteHeader b={b} navLinks={navLinks} waLink={waLink} />

      {/* ---------- HERO ---------- */}
      <section id="inicio" className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-8 pb-16 lg:pt-16 lg:pb-24">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <p
              className="rise text-[0.68rem] font-semibold uppercase tracking-[0.12em] lg:tracking-[0.3em] truncate"
              style={{ color: "var(--brand)", animationDelay: "0.05s" }}
            >
              {b.category} — {b.location}
            </p>
            <h1
              className="rise font-display mt-5 text-[clamp(2rem,6vw,4.5rem)] font-semibold leading-[0.93] tracking-[-0.02em]"
              style={{ animationDelay: "0.12s" }}
            >
              {b.name}
            </h1>
            <p
              className="rise mt-5 max-w-xl text-base lg:text-lg leading-relaxed opacity-80"
              style={{ animationDelay: "0.22s" }}
            >
              {b.tagline}
            </p>
            <div
              className="rise mt-8 flex flex-wrap items-center gap-4"
              style={{ animationDelay: "0.32s" }}
            >
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full px-6 py-3 text-sm font-semibold tracking-wide text-white"
                style={{ background: "var(--brand)" }}
              >
                Escribir por WhatsApp
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#contacto"
                className="text-sm font-semibold underline decoration-1 underline-offset-[6px] hover:opacity-60"
              >
                Cómo llegar
              </a>
            </div>

            {b.notes && b.notes.length > 0 && (
              <div
                className="rise mt-8 flex flex-col md:flex-row md:flex-wrap md:items-center gap-y-1.5 md:gap-y-2 md:gap-x-6 text-[0.65rem] font-semibold uppercase tracking-[0.2em] opacity-60"
                style={{ animationDelay: "0.42s" }}
              >
                {b.notes.map((n) => (
                  <span key={n} className="flex items-center gap-3">
                    <span style={{ color: "var(--brand)" }}>✦</span>
                    {n}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="lg:col-span-5 relative">
            <div
              className="rise arch relative aspect-[4/3] lg:aspect-[4/5] overflow-hidden"
              style={{ animationDelay: "0.18s", boxShadow: "0 20px 50px -20px rgba(0,0,0,.4)" }}
            >
              <Image
                src={b.heroImage}
                alt={b.name}
                fill
                priority
                className="object-cover object-left"
                sizes="(max-width:1024px) 100vw, 42vw"
              />
            </div>

            <div className="seal-rotate absolute -right-4 -top-10 h-24 w-24 hidden sm:block">
              <svg viewBox="0 0 200 200" className="h-full w-full">
                <defs>
                  <path id="sealPath" d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0" />
                </defs>
                <circle cx="100" cy="100" r="92" fill="var(--ink)" />
                <text fill="var(--paper)" style={{ fontSize: "15px", letterSpacing: "3.5px", fontWeight: 600 }}>
                  <textPath href="#sealPath">{sealText}</textPath>
                </text>
                <text x="100" y="112" textAnchor="middle" fill="var(--paper)" style={{ fontSize: "38px" }}>✦</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- MARQUEE ---------- */}
      <div
        className="border-y py-3 overflow-hidden"
        style={{ background: "var(--brand)", color: "var(--paper)", borderColor: "var(--brand)" }}
      >
        <div className="marquee-track">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center" aria-hidden={dup === 1}>
              {marquee.map((m, i) => (
                <span key={`${dup}-${i}`} className="flex items-center">
                  <span className="font-display text-lg px-5 whitespace-nowrap">{m}</span>
                  <span style={{ color: "var(--paper)", opacity: 0.4 }}>✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ---------- ORIGEN ---------- */}
      {b.story && (
        <section className="relative mx-auto max-w-4xl px-6 lg:px-10 py-16 lg:py-24 text-center">
          <div className="flex items-center justify-center gap-4" style={{ color: "var(--brand)" }}>
            <span className="h-px w-12 opacity-30" style={{ background: "currentColor" }} />
            <IconCat className="h-14 w-14" />
            <span className="h-px w-12 opacity-30" style={{ background: "currentColor" }} />
          </div>
          <p className="mt-6 text-[0.68rem] font-semibold uppercase tracking-[0.3em]" style={{ color: "var(--brand)" }}>
            Nuestro origen
          </p>
          <p className="font-display mt-6 text-[clamp(1.3rem,3vw,2.2rem)] italic leading-[1.35]">
            {b.story}
          </p>
          <a
            href={`/${b.slug}/nosotros`}
            className="text-sm font-semibold underline underline-offset-4 opacity-60 hover:opacity-100 mt-6 inline-block"
          >
            Conoce nuestra historia →
          </a>
        </section>
      )}

      {/* ---------- SPOTLIGHT ---------- */}
      {b.spotlight && (
        <section id="destacado" className="border-y" style={{ background: "color-mix(in srgb, var(--brand) 11%, var(--paper))", color: "var(--ink)", borderColor: "color-mix(in srgb, var(--brand) 22%, transparent)" }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10 lg:py-24 grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="arch relative aspect-[3/2] lg:aspect-[4/5] overflow-hidden" style={{ boxShadow: "0 20px 60px -25px rgba(0,0,0,.7)" }}>
                <Image
                  src={b.spotlight.image}
                  alt={b.spotlight.title}
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 40vw"
                />
              </div>
            </div>
            <div className="lg:col-span-7">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em]" style={{ color: "var(--brand)" }}>
                {b.spotlight.kicker}
              </p>
              <h2 className="font-display mt-5 text-3xl lg:text-4xl font-semibold tracking-tight leading-[1.05]">
                {b.spotlight.title}
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed opacity-70">
                {b.spotlight.description}
              </p>
              <ul className="mt-7 grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {b.spotlight.bullets.map((bl) => (
                  <li key={bl} className="flex gap-3 text-base leading-snug">
                    <span style={{ color: "var(--brand)" }} aria-hidden>✦</span>
                    <span className="opacity-75">{bl}</span>
                  </li>
                ))}
              </ul>
              <a
                href={`/${b.slug}/hotel`}
                className="text-sm font-semibold underline underline-offset-4 opacity-60 hover:opacity-100 mt-6 inline-block"
              >
                Ver más sobre el Hotel felino →
              </a>
            </div>
          </div>
        </section>
      )}

      {/* ---------- SERVICIOS ---------- */}
      <section id="servicios" className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-5 mb-10">
            <h2 className="font-display text-3xl lg:text-4xl font-semibold tracking-tight">
              Lo que ofrecemos
            </h2>
            <span className="text-xs uppercase tracking-[0.25em] opacity-50">
              {String(b.services.length).padStart(2, "0")} servicios
            </span>
          </div>
          <ul>
            {b.services.map((s, i) => (
              <li
                key={s.title}
                className="group grid md:grid-cols-12 gap-3 md:gap-6 items-baseline border-t py-6 transition-colors"
                style={{ borderColor: "color-mix(in srgb, var(--ink) 22%, transparent)" }}
              >
                <span className="md:col-span-1 flex items-center gap-2 font-display text-xl" style={{ color: "var(--brand)" }}>
                  {String(i + 1).padStart(2, "0")}
                  <IconCat className="h-7 w-7 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                </span>
                <h3 className="md:col-span-4 font-display text-xl lg:text-2xl font-medium transition-transform duration-300 group-hover:translate-x-2">
                  {s.title}
                </h3>
                <p className="md:col-span-7 text-sm lg:text-base leading-relaxed opacity-70">
                  {s.description}
                </p>
              </li>
            ))}
            <li className="border-t" style={{ borderColor: "color-mix(in srgb, var(--ink) 22%, transparent)" }} />
          </ul>
          <a
            href={`/${b.slug}/servicios`}
            className="text-sm font-semibold underline underline-offset-4 opacity-60 hover:opacity-100 mt-6 inline-block"
          >
            Ver todos los servicios →
          </a>
        </div>
      </section>

      <SectionMark />

      {/* ---------- QUIÉNES SOMOS ---------- */}
      {b.about && (
        <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div className="relative">
              <div className="arch-sm relative aspect-[4/3] overflow-hidden" style={{ boxShadow: "0 24px 60px -20px rgba(0,0,0,.22)" }}>
                <Image
                  src={b.aboutImage ?? b.gallery[0] ?? b.heroImage}
                  alt={b.name}
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 48vw"
                />
              </div>
              {b.foundingYear && (
                <div
                  className="absolute -bottom-5 -right-4 lg:-right-8 rounded-2xl px-5 py-4"
                  style={{ background: "var(--brand)", color: "var(--paper)" }}
                >
                  <p className="font-display text-3xl font-semibold leading-none">{b.foundingYear}</p>
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] mt-1 opacity-75">Fundación</p>
                </div>
              )}
            </div>

            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] mb-5" style={{ color: "var(--brand)" }}>
                Nuestra historia
              </p>
              <h2 className="font-display text-3xl lg:text-4xl font-semibold tracking-tight leading-[1.05] mb-6">
                ¿Quiénes somos?
              </h2>
              <p className="text-[1rem] leading-[1.85] opacity-70 mb-6">
                {b.story ?? b.about.split("\n\n")[0]}
              </p>
              {b.team && b.team.length > 0 && (
                <a
                  href={`/${b.slug}/nosotros`}
                  className="text-sm font-semibold underline underline-offset-4 opacity-60 hover:opacity-100"
                >
                  Conoce al equipo →
                </a>
              )}
            </div>

          </div>
        </section>
      )}

      {/* ---------- TESTIMONIOS ---------- */}
      {b.testimonials.length > 0 && (
        <section className="border-y py-12 lg:py-16" style={{ background: "color-mix(in srgb, var(--brand) 11%, var(--paper))", borderColor: "color-mix(in srgb, var(--brand) 22%, transparent)" }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em]" style={{ color: "var(--brand)" }}>
                  Reseñas
                </p>
                <h2 className="font-display mt-3 text-2xl lg:text-3xl font-semibold tracking-tight leading-[1.05]">
                  Sus palabras,<br /> no las nuestras
                </h2>
              </div>
              <div
                className="flex items-center gap-3 rounded-xl px-4 py-3"
                style={{
                  background: "var(--paper)",
                  border: "1px solid color-mix(in srgb, var(--ink) 10%, transparent)",
                  boxShadow: "0 10px 28px -18px rgba(0,0,0,.3)",
                }}
              >
                <span className="font-display text-3xl font-semibold leading-none">
                  {b.rating?.score ?? "5.0"}
                </span>
                <div>
                  <div className="flex gap-0.5" style={{ color: "var(--brand)" }}>
                    {[0, 1, 2, 3, 4].map((s) => (
                      <IconStar key={s} className="h-3.5 w-3.5" />
                    ))}
                  </div>
                  <p className="mt-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.18em] opacity-55">
                    {b.rating
                      ? `${b.rating.count} reseñas${b.rating.source ? ` en ${b.rating.source}` : ""}`
                      : `${b.testimonials.length} reseñas verificadas`}
                  </p>
                </div>
              </div>
            </div>

            <ReviewsCarousel reviews={b.testimonials} />

            {b.rating?.url && (
              <a
                href={b.rating.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm font-semibold underline underline-offset-4 opacity-60 hover:opacity-100"
              >
                Ver todas las reseñas en {b.rating.source ?? "Google"} →
              </a>
            )}
          </div>
        </section>
      )}

      {/* ---------- CONTACTO ---------- */}
      <section
        id="contacto"
        className="relative"
        style={{ color: "var(--ink)" }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 lg:pt-24 pb-16 lg:pb-20">

          {/* ── Hero row: heading + map ── */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">

            {/* Left: kicker + heading + buttons */}
            <div className="flex flex-col justify-between gap-10">
              <div>
                <p
                  className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] mb-6"
                  style={{ color: "var(--brand)" }}
                >
                  Contacto
                </p>
                <h2
                  className="font-display font-semibold leading-[0.88] tracking-[-0.025em]"
                  style={{ fontSize: "clamp(3.2rem, 8vw, 5.5rem)" }}
                >
                  Visítanos
                </h2>
              </div>
              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-[0.73rem] font-semibold uppercase tracking-[0.16em] transition-opacity hover:opacity-80"
                  style={{ background: "var(--brand)", color: "var(--paper)" }}
                >
                  Escribir por WhatsApp →
                </a>
                {b.contact.mapsUrl && (
                  <a
                    href={b.contact.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-[0.73rem] font-semibold uppercase tracking-[0.16em] transition-opacity hover:opacity-70"
                    style={{
                      border: "1px solid color-mix(in srgb, var(--ink) 22%, transparent)",
                      color: "var(--ink)",
                    }}
                  >
                    Abrir en Maps →
                  </a>
                )}
              </div>
            </div>

            {/* Right: map */}
            {b.contact.mapsEmbed && (
              <div
                className="rounded-2xl overflow-hidden min-h-[280px] lg:min-h-0"
                style={{ border: "1px solid color-mix(in srgb, var(--ink) 10%, transparent)" }}
              >
                <iframe
                  src={b.contact.mapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: "block", minHeight: "280px" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Ubicación de ${b.name}`}
                />
              </div>
            )}
          </div>

          {/* ── Info grid ── */}
          <div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10 pt-12 lg:pt-14 mt-12 lg:mt-14 border-t"
            style={{ borderColor: "color-mix(in srgb, var(--ink) 10%, transparent)" }}
          >
            <div>
              <p className="text-[0.58rem] font-semibold uppercase tracking-[0.26em] mb-3 flex items-center gap-2" style={{ color: "var(--brand)" }}>
                <IconPin className="h-3.5 w-3.5" /> Dirección
              </p>
              <p className="text-[0.92rem] leading-[1.7] opacity-75">{b.contact.address}</p>
            </div>

            <div>
              <p className="text-[0.58rem] font-semibold uppercase tracking-[0.26em] mb-3 flex items-center gap-2" style={{ color: "var(--brand)" }}>
                <IconPhone className="h-3.5 w-3.5" /> Teléfono
              </p>
              <a
                href={`tel:${b.contact.phone.replace(/\s/g, "")}`}
                className="font-display text-[1.4rem] font-semibold leading-none tracking-tight transition-opacity hover:opacity-60"
              >
                {b.contact.phone}
              </a>
              {b.contact.email && (
                <a
                  href={`mailto:${b.contact.email}`}
                  className="mt-3 block text-[0.85rem] opacity-55 hover:opacity-80 transition-opacity"
                >
                  {b.contact.email}
                </a>
              )}
            </div>

            <div className="sm:col-span-2 lg:col-span-2">
              <p className="text-[0.58rem] font-semibold uppercase tracking-[0.26em] mb-3 flex items-center gap-2" style={{ color: "var(--brand)" }}>
                <IconClock className="h-3.5 w-3.5" /> Horario
              </p>
              <div className="space-y-2">
                {b.hours.map((h) => (
                  <div
                    key={h.days}
                    className="flex items-baseline justify-between gap-6 border-b pb-2"
                    style={{ borderColor: "color-mix(in srgb, var(--ink) 8%, transparent)" }}
                  >
                    <span className="text-[0.88rem] font-medium">{h.days}</span>
                    <span
                      className="text-[0.82rem] font-semibold tabular-nums shrink-0"
                      style={{ color: h.time === "Cerrado" ? "color-mix(in srgb, var(--ink) 30%, transparent)" : "var(--brand)" }}
                    >
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ---------- CREDENCIALES ---------- */}
      {b.credentials && b.credentials.length > 0 && (
        <section
          className="border-t"
          style={{ borderColor: "color-mix(in srgb, var(--ink) 18%, transparent)" }}
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] opacity-50 shrink-0">
              Avales y<br className="hidden lg:block" /> certificaciones
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              {b.credentials.map((c) => (
                <span key={c} className="flex items-center gap-2 font-display text-base lg:text-lg" style={{ color: "var(--ink)" }}>
                  <IconSeal className="h-4 w-4 shrink-0" style={{ color: "var(--brand)" }} />
                  {c}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      <SiteFooter b={b} />
    </div>
  );
}

function SectionMark() {
  return (
    <div className="mx-auto flex max-w-7xl items-center gap-5 px-6 lg:px-10" style={{ color: "var(--brand)" }}>
      <span className="h-px flex-1" style={{ background: "color-mix(in srgb, var(--ink) 12%, transparent)" }} />
      <IconCat className="h-11 w-11 shrink-0" />
      <span className="h-px flex-1" style={{ background: "color-mix(in srgb, var(--ink) 12%, transparent)" }} />
    </div>
  );
}

