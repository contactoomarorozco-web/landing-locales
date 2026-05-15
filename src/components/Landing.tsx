import Image from "next/image";
import type { Business } from "@/businesses/types";

/**
 * Plantilla visual editorial reusable. Estética: boutique de bienestar
 * refinada — papel crema, tinta de marca, serif con carácter, composición
 * asimétrica y un sello giratorio como firma. 100% data-driven.
 */
export default function Landing({ b }: { b: Business }) {
  const waLink = `https://wa.me/${b.contact.whatsapp}?text=${encodeURIComponent(
    `Hola ${b.name}, vi su página y me gustaría más información.`
  )}`;

  const sealText = `${b.category} · ${b.location} · `.toUpperCase().repeat(2);
  const marquee = [
    ...b.services.map((s) => s.title),
    b.location,
    b.category,
  ];

  return (
    <div
      className="relative min-h-screen overflow-clip"
      style={
        {
          "--brand": b.theme.primary,
          "--ink": b.theme.dark,
          background: "var(--paper)",
          color: "var(--ink)",
        } as React.CSSProperties
      }
    >
      {/* ---------- NAV ---------- */}
      <header className="relative z-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 h-24 flex items-center justify-between">
          {b.logo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={b.logo} alt={b.name} className="h-11 w-auto" />
          ) : (
            <span className="font-display text-2xl font-semibold tracking-tight">
              {b.name}
            </span>
          )}
          <nav className="hidden md:flex items-center gap-10 text-[0.7rem] font-medium uppercase tracking-[0.22em]">
            <a href="#servicios" className="hover:opacity-50 transition-opacity">Servicios</a>
            <a href="#nosotros" className="hover:opacity-50 transition-opacity">Nosotros</a>
            <a href="#galeria" className="hover:opacity-50 transition-opacity">Galería</a>
            <a href="#contacto" className="hover:opacity-50 transition-opacity">Contacto</a>
          </nav>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border px-5 py-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] transition-colors hover:bg-[var(--ink)] hover:text-[var(--paper)]"
            style={{ borderColor: "var(--ink)" }}
          >
            Agendar
          </a>
        </div>
      </header>

      {/* ---------- HERO ---------- */}
      <section className="grain relative mx-auto max-w-7xl px-6 lg:px-10 pt-10 pb-24 lg:pt-16 lg:pb-32">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <p
              className="rise text-[0.72rem] font-semibold uppercase tracking-[0.32em]"
              style={{ color: "var(--brand)", animationDelay: "0.05s" }}
            >
              {b.category} — {b.location}
            </p>
            <h1
              className="rise font-display mt-7 text-[clamp(2.9rem,8.5vw,7rem)] font-semibold leading-[0.92] tracking-[-0.02em]"
              style={{ animationDelay: "0.12s" }}
            >
              {b.name}
            </h1>
            <p
              className="rise mt-8 max-w-xl text-lg lg:text-xl leading-relaxed opacity-80"
              style={{ animationDelay: "0.22s" }}
            >
              {b.tagline}
            </p>
            <div
              className="rise mt-11 flex flex-wrap items-center gap-5"
              style={{ animationDelay: "0.32s" }}
            >
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm font-semibold tracking-wide text-[var(--paper)]"
                style={{ background: "var(--ink)" }}
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
          </div>

          <div className="lg:col-span-5 relative">
            <div
              className="rise arch relative aspect-[4/5] overflow-hidden"
              style={{ animationDelay: "0.18s", boxShadow: "0 30px 60px -25px rgba(0,0,0,.45)" }}
            >
              <Image
                src={b.heroImage}
                alt={b.name}
                fill
                priority
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 42vw"
              />
            </div>

            {/* Sello giratorio — firma visual */}
            <div className="seal-rotate absolute -left-10 -top-10 h-32 w-32 hidden sm:block">
              <svg viewBox="0 0 200 200" className="h-full w-full">
                <defs>
                  <path
                    id="sealPath"
                    d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0"
                  />
                </defs>
                <circle cx="100" cy="100" r="92" fill="var(--ink)" />
                <text
                  fill="var(--paper)"
                  style={{ fontSize: "15px", letterSpacing: "3.5px", fontWeight: 600 }}
                >
                  <textPath href="#sealPath">{sealText}</textPath>
                </text>
                <text
                  x="100"
                  y="112"
                  textAnchor="middle"
                  fill="var(--paper)"
                  style={{ fontSize: "42px" }}
                >
                  ✦
                </text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- MARQUEE ---------- */}
      <div
        className="border-y py-5 overflow-hidden"
        style={{ background: "var(--ink)", color: "var(--paper)", borderColor: "var(--ink)" }}
      >
        <div className="marquee-track">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center" aria-hidden={dup === 1}>
              {marquee.map((m, i) => (
                <span key={`${dup}-${i}`} className="flex items-center">
                  <span className="font-display text-2xl px-8 whitespace-nowrap">
                    {m}
                  </span>
                  <span style={{ color: "var(--brand)" }}>✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ---------- NOSOTROS ---------- */}
      <section
        id="nosotros"
        className="grain relative mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-36"
      >
        <div className="grid lg:grid-cols-12 gap-14 items-start">
          <div className="lg:col-span-2">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] opacity-50 lg:[writing-mode:vertical-rl] lg:rotate-180">
              Sobre nosotros
            </p>
          </div>
          <div className="lg:col-span-6">
            <p className="dropcap font-display text-2xl lg:text-[1.75rem] leading-[1.5]">
              {b.about}
            </p>
          </div>
          {b.gallery[0] && (
            <div className="lg:col-span-4">
              <div className="arch-sm relative aspect-[3/4] overflow-hidden">
                <Image
                  src={b.gallery[0]}
                  alt={`${b.name}`}
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 30vw"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ---------- SERVICIOS ---------- */}
      <section
        id="servicios"
        className="py-24 lg:py-32"
        style={{ background: "var(--paper-deep, #e9e0cd)" }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <h2 className="font-display text-4xl lg:text-6xl font-semibold tracking-tight">
              Lo que ofrecemos
            </h2>
            <span className="text-sm uppercase tracking-[0.25em] opacity-50">
              {String(b.services.length).padStart(2, "0")} servicios
            </span>
          </div>
          <ul>
            {b.services.map((s, i) => (
              <li
                key={s.title}
                className="group grid md:grid-cols-12 gap-4 md:gap-8 items-baseline border-t py-8 transition-colors"
                style={{ borderColor: "color-mix(in srgb, var(--ink) 22%, transparent)" }}
              >
                <span
                  className="md:col-span-1 font-display text-2xl"
                  style={{ color: "var(--brand)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="md:col-span-4 font-display text-2xl lg:text-3xl font-medium transition-transform duration-300 group-hover:translate-x-2">
                  {s.title}
                </h3>
                <p className="md:col-span-7 text-base lg:text-lg leading-relaxed opacity-70">
                  {s.description}
                </p>
              </li>
            ))}
            <li
              className="border-t"
              style={{ borderColor: "color-mix(in srgb, var(--ink) 22%, transparent)" }}
            />
          </ul>
        </div>
      </section>

      {/* ---------- GALERÍA ---------- */}
      {b.gallery.length > 0 && (
        <section
          id="galeria"
          className="grain relative mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-36"
        >
          <h2 className="font-display text-4xl lg:text-6xl font-semibold tracking-tight mb-16">
            Un vistazo
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 lg:gap-8">
            <div className="sm:col-span-7">
              <div className="arch-sm relative aspect-[4/3] overflow-hidden">
                <Image
                  src={b.gallery[0]}
                  alt={`${b.name} 1`}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width:640px) 100vw, 55vw"
                />
              </div>
            </div>
            {b.gallery[1] && (
              <div className="sm:col-span-5 sm:mt-16">
                <div className="arch-sm relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={b.gallery[1]}
                    alt={`${b.name} 2`}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width:640px) 100vw, 40vw"
                  />
                </div>
              </div>
            )}
            {b.gallery[2] && (
              <div className="sm:col-span-8 sm:col-start-3 -mt-2">
                <div className="arch-sm relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={b.gallery[2]}
                    alt={`${b.name} 3`}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width:640px) 100vw, 66vw"
                  />
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ---------- TESTIMONIOS ---------- */}
      {b.testimonials.length > 0 && (
        <section
          className="py-24 lg:py-36"
          style={{ background: "var(--ink)", color: "var(--paper)" }}
        >
          <div className="mx-auto max-w-5xl px-6 lg:px-10">
            <span
              className="font-display text-7xl lg:text-9xl leading-none block"
              style={{ color: "var(--brand)" }}
              aria-hidden
            >
              “
            </span>
            <blockquote className="font-display text-3xl lg:text-5xl leading-[1.25] -mt-6 lg:-mt-10">
              {b.testimonials[0].text}
            </blockquote>
            <p className="mt-8 text-sm uppercase tracking-[0.25em] opacity-60">
              — {b.testimonials[0].name}
            </p>

            {b.testimonials.length > 1 && (
              <div className="mt-20 grid sm:grid-cols-2 gap-12 border-t pt-14"
                style={{ borderColor: "color-mix(in srgb, var(--paper) 22%, transparent)" }}
              >
                {b.testimonials.slice(1).map((t) => (
                  <figure key={t.name}>
                    <blockquote className="text-lg leading-relaxed opacity-85">
                      {t.text}
                    </blockquote>
                    <figcaption className="mt-4 text-xs uppercase tracking-[0.25em] opacity-50">
                      — {t.name}
                    </figcaption>
                  </figure>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* ---------- CONTACTO ---------- */}
      <section
        id="contacto"
        className="grain relative mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-36"
      >
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-6">
            <h2 className="font-display text-5xl lg:text-7xl font-semibold tracking-tight leading-[0.95]">
              Visítanos
            </h2>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-12 inline-flex items-center gap-4 rounded-full px-9 py-5 text-base font-semibold text-[var(--paper)]"
              style={{ background: "var(--brand)" }}
            >
              Escribir por WhatsApp
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            {b.contact.mapsUrl && (
              <a
                href={b.contact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block text-sm font-semibold underline decoration-1 underline-offset-[6px] hover:opacity-60"
              >
                Abrir ubicación en Google Maps →
              </a>
            )}
          </div>

          <div className="lg:col-span-6 grid sm:grid-cols-2 gap-x-10 gap-y-10">
            <Detail label="Dirección">{b.contact.address}</Detail>
            <Detail label="Teléfono">
              <a
                href={`tel:${b.contact.phone.replace(/\s/g, "")}`}
                className="hover:opacity-60"
              >
                {b.contact.phone}
              </a>
            </Detail>
            {b.contact.email && (
              <Detail label="Correo">
                <a href={`mailto:${b.contact.email}`} className="hover:opacity-60">
                  {b.contact.email}
                </a>
              </Detail>
            )}
            <Detail label="Horario">
              <div className="space-y-1.5">
                {b.hours.map((h) => (
                  <div key={h.days} className="flex justify-between gap-6">
                    <span>{h.days}</span>
                    <span className="opacity-60">{h.time}</span>
                  </div>
                ))}
              </div>
            </Detail>
          </div>
        </div>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer
        className="border-t"
        style={{
          background: "var(--ink)",
          color: "var(--paper)",
          borderColor: "var(--ink)",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 flex flex-col md:flex-row justify-between gap-10">
          <div>
            <p className="font-display text-3xl font-semibold">{b.name}</p>
            <p className="mt-2 text-sm uppercase tracking-[0.25em] opacity-50">
              {b.location}
            </p>
          </div>
          {b.socials && (
            <div className="flex gap-8 text-sm uppercase tracking-[0.2em] self-end">
              {b.socials.instagram && (
                <a href={b.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:opacity-60">Instagram</a>
              )}
              {b.socials.facebook && (
                <a href={b.socials.facebook} target="_blank" rel="noopener noreferrer" className="hover:opacity-60">Facebook</a>
              )}
              {b.socials.tiktok && (
                <a href={b.socials.tiktok} target="_blank" rel="noopener noreferrer" className="hover:opacity-60">TikTok</a>
              )}
            </div>
          )}
        </div>
        <div
          className="border-t"
          style={{ borderColor: "color-mix(in srgb, var(--paper) 15%, transparent)" }}
        >
          <p className="mx-auto max-w-7xl px-6 lg:px-10 py-5 text-xs uppercase tracking-[0.2em] opacity-40">
            © {new Date().getFullYear()} {b.name}
          </p>
        </div>
      </footer>
    </div>
  );
}

function Detail({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] opacity-45">
        {label}
      </dt>
      <dd className="mt-2.5 text-base leading-relaxed">{children}</dd>
    </div>
  );
}
