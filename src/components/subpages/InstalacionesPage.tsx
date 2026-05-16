import Image from "next/image";
import type { Business } from "@/businesses/types";
import SubpageShell from "@/components/SubpageShell";
import { buildSubpageNavLinks } from "./navLinks";

const FEATURES = [
  {
    num: "01",
    title: "Espacios gatificados",
    body: "Áreas elevadas diseñadas específicamente para que tu gato se sienta seguro y tranquilo durante toda su visita.",
  },
  {
    num: "02",
    title: "Música felina relajante",
    body: "Reproducimos música científicamente comprobada para disminuir el estrés en los gatos, desde la sala de espera hasta la consulta.",
  },
  {
    num: "03",
    title: "Ambiente libre de olores",
    body: "Nuestras áreas están siempre limpias y libres de olores de otros animales, garantizando un entorno sin distracciones.",
  },
  {
    num: "04",
    title: "Consulta de 2 horas con cita previa",
    body: "Examen físico completo bajo enfoque Cat Friendly, con tiempo suficiente para descarte exhaustivo de patologías.",
  },
];

export default function InstalacionesPage({ b, slug }: { b: Business; slug: string }) {
  const waLink = `https://wa.me/${b.contact.whatsapp}?text=${encodeURIComponent(
    `Hola ${b.name}, vi su página y me gustaría más información.`
  )}`;
  const navLinks = buildSubpageNavLinks(b, slug);
  const imgs = b.gallery;

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

        {/* Mobile: texto */}
        <div className="lg:hidden mt-7">
          <p
            className="text-[0.6rem] font-semibold uppercase tracking-[0.28em] mb-3"
            style={{ color: "var(--brand)" }}
          >
            El espacio de tu gato
          </p>
          <h1
            className="font-display font-semibold leading-[0.9] tracking-[-0.02em]"
            style={{ fontSize: "clamp(2.8rem, 11vw, 5rem)" }}
          >
            Instalaciones
          </h1>
          <p className="mt-5 text-[1rem] leading-[1.75] opacity-70 max-w-xs">
            Nuestras instalaciones están especialmente diseñadas para proporcionar
            el máximo confort y tranquilidad tanto a nuestros pacientes felinos
            como a sus tutores. Cada detalle ha sido pensado para crear un
            ambiente seguro y acogedor.
          </p>
        </div>

        {/* Desktop: texto + imagen lado a lado */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 mt-10 items-end">
          <div className="pb-14">
            <p
              className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] mb-4"
              style={{ color: "var(--brand)" }}
            >
              El espacio de tu gato
            </p>
            <h1
              className="font-display font-semibold leading-[0.88] tracking-[-0.03em]"
              style={{ fontSize: "clamp(3.5rem, 6vw, 6.5rem)" }}
            >
              Instalaciones
            </h1>
            <p className="mt-6 text-[1.05rem] leading-[1.8] opacity-68 max-w-md">
              Nuestras instalaciones están especialmente diseñadas para proporcionar
              el máximo confort y tranquilidad tanto a nuestros pacientes felinos
              como a sus tutores. Cada detalle ha sido pensado para crear un
              ambiente seguro y acogedor.
            </p>
          </div>
          {imgs[0] && (
            <div className="relative overflow-hidden rounded-3xl" style={{ aspectRatio: "4/3" }}>
              <Image
                src={imgs[0]}
                alt="Instalaciones Ocicat"
                fill
                className="object-cover"
                sizes="50vw"
                priority
                quality={95}
              />
            </div>
          )}
        </div>
      </section>

      {/* Hero image — solo móvil */}
      {imgs[0] && (
        <div className="lg:hidden mx-4 mt-6 rounded-2xl overflow-hidden" style={{ aspectRatio: "4/3", position: "relative" }}>
          <Image
            src={imgs[0]}
            alt="Instalaciones Ocicat"
            fill
            className="object-cover"
            sizes="100vw"
            priority
            quality={95}
          />
        </div>
      )}

      {/* ── FEATURES — scroll horizontal en móvil, banda en desktop ── */}
      <div className="mt-10 lg:mt-0">

        {/* Desktop: banda con divisores */}
        <div
          className="hidden lg:block border-y"
          style={{ borderColor: "color-mix(in srgb, var(--ink) 8%, transparent)" }}
        >
          <div className="mx-auto max-w-7xl px-10">
            <div
              className="grid grid-cols-4 divide-x"
              style={{ borderColor: "color-mix(in srgb, var(--ink) 8%, transparent)" } as React.CSSProperties}
            >
              {FEATURES.map((f, i) => (
                <div
                  key={f.num}
                  className={`py-14 flex flex-col gap-5 ${i > 0 ? "pl-10" : ""}`}
                  style={{ borderColor: "color-mix(in srgb, var(--ink) 8%, transparent)" }}
                >
                  <span
                    className="font-display text-[3rem] font-semibold leading-none tabular-nums"
                    style={{ color: "color-mix(in srgb, var(--brand) 30%, var(--paper))" }}
                  >
                    {f.num}
                  </span>
                  <div>
                    <h3 className="font-display text-[1rem] font-semibold leading-snug mb-2.5">
                      {f.title}
                    </h3>
                    <p className="text-[0.85rem] leading-[1.7] opacity-65">{f.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: cards con scroll horizontal snap */}
        <div className="lg:hidden pt-8">
          <p className="px-6 mb-4 text-[0.58rem] font-semibold uppercase tracking-[0.28em] opacity-40">
            Nuestro entorno
          </p>
          <div
            className="flex gap-3 overflow-x-auto pb-5 pl-6 pr-6 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none" }}
          >
            {FEATURES.map((f) => (
              <div
                key={f.num}
                className="snap-start shrink-0 w-[70vw] rounded-2xl p-5 flex flex-col gap-4"
                style={{
                  background: "color-mix(in srgb, var(--brand) 5%, var(--paper))",
                  border: "1px solid color-mix(in srgb, var(--ink) 9%, transparent)",
                }}
              >
                <span
                  className="font-display text-[2.5rem] font-semibold leading-none tabular-nums"
                  style={{ color: "color-mix(in srgb, var(--brand) 40%, var(--paper))" }}
                >
                  {f.num}
                </span>
                <div>
                  <h3 className="font-display text-[0.92rem] font-semibold leading-snug mb-1.5">
                    {f.title}
                  </h3>
                  <p className="text-[0.82rem] leading-[1.7] opacity-65">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-1.5 mt-2">
            {FEATURES.map((f) => (
              <span
                key={f.num}
                className="block w-1 h-1 rounded-full"
                style={{ background: "color-mix(in srgb, var(--ink) 22%, transparent)" }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── GALERÍA ── */}
      <section className="px-4 py-8 lg:px-10 lg:py-16 max-w-7xl mx-auto">

        {/* Mobile */}
        <div className="lg:hidden space-y-3">
          {imgs[1] && (
            <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <Image src={imgs[1]} alt="" fill className="object-cover" sizes="100vw" quality={90} />
            </div>
          )}
          {imgs.length >= 3 && (
            <div className="grid grid-cols-2 gap-3">
              {[imgs[2], imgs[3]].filter(Boolean).map((src, i) => (
                <div key={i} className="relative rounded-xl overflow-hidden" style={{ aspectRatio: "1/1" }}>
                  <Image src={src!} alt="" fill className="object-cover" sizes="50vw" quality={85} />
                </div>
              ))}
            </div>
          )}
          {imgs[4] && (
            <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "16/9" }}>
              <Image src={imgs[4]} alt="" fill className="object-cover" sizes="100vw" quality={88} />
            </div>
          )}
          {imgs.length >= 6 && (
            <div className="grid grid-cols-2 gap-3">
              {[imgs[5], imgs[6]].filter(Boolean).map((src, i) => (
                <div key={i} className="relative rounded-xl overflow-hidden" style={{ aspectRatio: "1/1" }}>
                  <Image src={src!} alt="" fill className="object-cover" sizes="50vw" quality={85} />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Desktop: bento grid */}
        <div className="hidden lg:block">
          {imgs.length >= 2 && (
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="col-span-2 relative rounded-2xl overflow-hidden" style={{ aspectRatio: "16/10" }}>
                <Image src={imgs[1]} alt="" fill className="object-cover transition-transform duration-700 hover:scale-[1.03]" sizes="50vw" quality={90} />
              </div>
              {imgs[2] && (
                <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "1/1" }}>
                  <Image src={imgs[2]} alt="" fill className="object-cover transition-transform duration-700 hover:scale-[1.03]" sizes="25vw" quality={90} />
                </div>
              )}
            </div>
          )}
          {imgs.length >= 5 && (
            <div className="grid grid-cols-3 gap-4 mb-4">
              {[imgs[3], imgs[4], imgs[5]].filter(Boolean).map((src, i) => (
                <div key={i} className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "1/1" }}>
                  <Image src={src!} alt="" fill className="object-cover transition-transform duration-700 hover:scale-[1.03]" sizes="25vw" quality={90} />
                </div>
              ))}
            </div>
          )}
          {imgs[6] && (
            <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "21/9" }}>
              <Image src={imgs[6]} alt="" fill className="object-cover transition-transform duration-700 hover:scale-[1.02]" sizes="100vw" quality={90} />
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <div
        className="mx-4 mb-4 rounded-[1.75rem] py-12 px-6 lg:mx-6 lg:rounded-[2.5rem] lg:py-18 lg:px-14"
        style={{
          background: "color-mix(in srgb, var(--brand) 9%, var(--paper))",
          border: "1px solid color-mix(in srgb, var(--brand) 18%, transparent)",
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-display text-xl lg:text-2xl font-semibold">
              Conócelas en persona
            </p>
            <p className="mt-1.5 text-[0.88rem] opacity-60">
              Agenda tu consulta y comprueba el ambiente Cat Friendly.
            </p>
          </div>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-white transition-opacity hover:opacity-80"
            style={{ background: "var(--brand)" }}
          >
            Agendar visita →
          </a>
        </div>
      </div>

    </SubpageShell>
  );
}
