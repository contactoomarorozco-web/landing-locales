import Image from "next/image";
import type { Business } from "@/businesses/types";
import SubpageShell from "@/components/SubpageShell";
import { buildSubpageNavLinks } from "./navLinks";

export default function NosotrosPage({ b, slug }: { b: Business; slug: string }) {
  const waLink = `https://wa.me/${b.contact.whatsapp}?text=${encodeURIComponent(
    `Hola ${b.name}, vi su página y me gustaría más información.`
  )}`;
  const navLinks = buildSubpageNavLinks(b, slug);
  const paragraphs = b.about.split("\n\n").filter(Boolean);

  return (
    <SubpageShell b={b} navLinks={navLinks} waLink={waLink}>

      {/* ── HEADER + ABOUT ── */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-10 pb-16 lg:pt-16 lg:pb-20">
        <a
          href={`/${slug}`}
          className="inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] opacity-40 hover:opacity-90 transition-opacity"
        >
          ← Volver
        </a>

        <div className="mt-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <p
              className="text-[0.68rem] font-semibold uppercase tracking-[0.3em]"
              style={{ color: "var(--brand)" }}
            >
              Acerca de nosotros
            </p>
            <h1 className="font-display mt-4 text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.0] tracking-[-0.02em]">
              {b.name}
            </h1>
            <div className="mt-8 space-y-5 max-w-prose">
              {paragraphs.map((p, i) => (
                <p key={i} className={`text-[1.05rem] leading-relaxed opacity-75 ${i === 0 ? "dropcap" : ""}`}>
                  {p}
                </p>
              ))}
            </div>
          </div>

          {(b.aboutImage ?? b.gallery[0]) && (
            <div className="lg:col-span-5">
              <div
                className="relative aspect-[5/4] overflow-hidden rounded-2xl"
                style={{ boxShadow: "0 24px 64px -28px rgba(0,0,0,.45)" }}
              >
                <Image
                  src={(b.aboutImage ?? b.gallery[0])!}
                  alt={b.name}
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 42vw"
                  quality={100}
                  priority
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <div
        className="border-y"
        style={{
          background: "color-mix(in srgb, var(--brand) 7%, var(--paper))",
          borderColor: "color-mix(in srgb, var(--brand) 18%, transparent)",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { value: "2015", label: "Año de fundación" },
            { value: "24 / 7", label: "Atención médica" },
            { value: "Cat Friendly", label: "Practice certificada" },
            { value: "Nacional", label: "Hospital de referencia" },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col gap-1">
              <span
                className="font-display text-xl lg:text-2xl font-semibold leading-none"
                style={{ color: "var(--brand)" }}
              >
                {value}
              </span>
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] opacity-50">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── EQUIPO ── */}
      {b.team && b.team.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-24">
          <p
            className="text-[0.68rem] font-semibold uppercase tracking-[0.3em]"
            style={{ color: "var(--brand)" }}
          >
            Nuestro equipo
          </p>
          <h2 className="font-display mt-3 text-2xl lg:text-3xl font-semibold tracking-tight">
            Las manos detrás del cuidado
          </h2>

          <div className="mt-14 space-y-0 divide-y" style={{ borderColor: "color-mix(in srgb, var(--ink) 8%, transparent)" }}>
            {b.team.map((member, i) => {
              const photoRight = i % 2 === 1;
              return (
                <div
                  key={member.name}
                  className="grid lg:grid-cols-12 gap-8 lg:gap-16 py-14 lg:py-20 items-center"
                >
                  {/* Foto */}
                  <div className={`lg:col-span-4 ${photoRight ? "lg:order-2" : ""}`}>
                    {member.image ? (
                      <div
                        className="relative aspect-[3/4] overflow-hidden rounded-2xl"
                        style={{ boxShadow: "0 20px 50px -22px rgba(0,0,0,.45)" }}
                      >
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover object-top"
                          sizes="(max-width:1024px) 100vw, 33vw"
                        />
                      </div>
                    ) : (
                      <div
                        className="aspect-[3/4] rounded-2xl flex items-center justify-center"
                        style={{ background: "color-mix(in srgb, var(--brand) 10%, var(--paper))" }}
                      >
                        <span className="font-display text-5xl opacity-20">
                          {member.name.split(" ").filter(w => /^[A-ZÁÉÍÓÚÑ]/.test(w) && w.length > 2).slice(0, 2).map(w => w[0]).join("")}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Texto */}
                  <div className={`lg:col-span-8 ${photoRight ? "lg:order-1" : ""}`}>
                    <span
                      className="inline-block rounded-full px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em]"
                      style={{
                        background: "color-mix(in srgb, var(--brand) 12%, var(--paper))",
                        color: "var(--brand)",
                        border: "1px solid color-mix(in srgb, var(--brand) 22%, transparent)",
                      }}
                    >
                      {member.role}
                    </span>

                    <h3 className="font-display mt-4 text-2xl lg:text-[1.85rem] font-semibold leading-tight tracking-[-0.01em]">
                      {member.name}
                    </h3>

                    {member.bio && (
                      <p className="mt-4 text-[0.95rem] leading-relaxed opacity-70 max-w-xl">
                        {member.bio}
                      </p>
                    )}

                    {member.certifications && member.certifications.length > 0 && (
                      <div className="mt-6">
                        <p
                          className="text-[0.6rem] font-semibold uppercase tracking-[0.22em] mb-3"
                          style={{ color: "var(--brand)" }}
                        >
                          Formación & certificaciones
                        </p>
                        <ul className="space-y-2">
                          {member.certifications.map((c) => (
                            <li key={c} className="flex gap-2.5 items-start text-[0.82rem] leading-snug opacity-60">
                              <span
                                className="shrink-0 mt-[2px] text-[0.55rem]"
                                style={{ color: "var(--brand)" }}
                              >
                                ✦
                              </span>
                              {c}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <div
        className="border-t py-16 lg:py-20"
        style={{
          background: "color-mix(in srgb, var(--brand) 7%, var(--paper))",
          borderColor: "color-mix(in srgb, var(--brand) 18%, transparent)",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <p className="font-display text-xl lg:text-2xl font-semibold">
              ¿Listo para agendar una consulta?
            </p>
            <p className="mt-1.5 text-[0.88rem] opacity-60">
              Nuestro equipo está disponible para resolver tus dudas.
            </p>
          </div>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-white transition-opacity hover:opacity-80"
            style={{ background: "var(--brand)" }}
          >
            Escribir por WhatsApp →
          </a>
        </div>
      </div>

    </SubpageShell>
  );
}
