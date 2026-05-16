import Image from "next/image";
import type { Business } from "@/businesses/types";
import SubpageShell from "@/components/SubpageShell";
import { buildSubpageNavLinks } from "./navLinks";
import ServiciosNav from "./ServiciosNav";

const LAB_ANALYSES = [
  { group: "Coproparasitoscópico", items: ["Directo", "Tinción de Kinyoun", "Romanowsky", "Flotación", "Sedimentación"] },
  { group: "Orina & fluidos", items: ["Examen general de orina", "Test rivalta"] },
  { group: "Dermatología", items: ["Citología dermatológica", "Tricograma"] },
  { group: "Hematología", items: ["Hemograma", "Frotis sanguíneo", "Pruebas de compatibilidad sanguínea", "Prueba Coombs"] },
  { group: "Bioquímica", items: ["Bioquímica sérica", "ProBNP"] },
  { group: "Enfermedades infecciosas", items: ["Prueba de Leucemia e Inmunodeficiencia Felina"] },
  { group: "Citología", items: ["PAF / PAAF"] },
];

const CONSULTA_BULLETS = [
  "Consulta amigable con el gato.",
  "Contamos con certificación Cat Friendly Practice otorgada por la American Association of Feline Medicine.",
  "La primer consulta tiene una duración aproximada de hora y media, ya que se realiza un examen físico completo del gatito.",
];

const SERVICE_IDS = [
  "consulta",
  "laboratorio",
  "rayos-x",
  "cirugia",
  "hospitalizacion",
  "venta-alimento",
];

/** Ornamental section divider */
function SectionDivider() {
  return (
    <div
      className="my-0 mx-6 lg:mx-10 flex items-center gap-4"
      style={{ color: "color-mix(in srgb, var(--ink) 12%, transparent)" }}
    >
      <hr className="flex-1 border-none h-px" style={{ background: "color-mix(in srgb, var(--ink) 8%, transparent)" }} />
      <span className="shrink-0 text-[0.65rem]" style={{ color: "var(--brand)" }}>✦</span>
      <hr className="flex-1 border-none h-px" style={{ background: "color-mix(in srgb, var(--ink) 8%, transparent)" }} />
    </div>
  );
}

/** Two-column section header with a large decorative number on the left */
function SectionHeader({
  number,
  kicker,
  title,
}: {
  number: string;
  kicker: string;
  title: string;
}) {
  return (
    <div className="mb-10 lg:mb-14 flex items-start gap-6 lg:gap-10">
      {/* Decorative number */}
      <span
        className="font-display font-semibold leading-none tabular-nums shrink-0 select-none"
        style={{
          fontSize: "clamp(4rem, 8vw, 6rem)",
          color: "color-mix(in srgb, var(--brand) 22%, var(--paper))",
        }}
        aria-hidden="true"
      >
        {number}
      </span>
      {/* Kicker + heading */}
      <div className="pt-1">
        <p
          className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] mb-4"
          style={{ color: "var(--brand)" }}
        >
          {kicker}
        </p>
        <h2
          className="font-display font-semibold leading-[0.92] tracking-[-0.02em] max-w-2xl"
          style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)" }}
        >
          {title}
        </h2>
      </div>
    </div>
  );
}

export default function ServiciosPage({ b, slug }: { b: Business; slug: string }) {
  const waLink = `https://wa.me/${b.contact.whatsapp}?text=${encodeURIComponent(
    `Hola ${b.name}, vi su página y me gustaría más información sobre sus servicios.`
  )}`;
  const navLinks = buildSubpageNavLinks(b, slug);

  return (
    <SubpageShell b={b} navLinks={navLinks} waLink={waLink}>
      <ServiciosNav />

      {/* ── HERO ── */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-10 lg:pt-16 pb-10 lg:pb-14">
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
              Lo que ofrecemos
            </p>
            <h1
              className="font-display font-semibold leading-[0.9] tracking-[-0.02em]"
              style={{ fontSize: "clamp(2.8rem, 9vw, 5rem)" }}
            >
              Servicios
            </h1>
          </div>
          <span
            className="font-display text-[2.5rem] lg:text-[3.5rem] font-semibold leading-none tabular-nums mb-1"
            style={{ color: "color-mix(in srgb, var(--brand) 18%, var(--paper))" }}
          >
            {String(b.services.length).padStart(2, "0")}
          </span>
        </div>
      </section>

      {/* ── ÍNDICE ── */}
      <section data-services-index className="mx-auto max-w-7xl px-6 lg:px-10 pb-14 lg:pb-20">
        <ul className="divide-y" style={{ borderColor: "color-mix(in srgb, var(--ink) 8%, transparent)" }}>
          {b.services.map((s, i) => (
            <li key={s.title} className="reveal">
              <a
                href={`#${SERVICE_IDS[i]}`}
                className="group flex items-center justify-between gap-4 py-5 transition-opacity hover:opacity-70"
              >
                <div className="flex items-baseline gap-5">
                  <span
                    className="font-display text-[0.78rem] font-semibold tabular-nums shrink-0"
                    style={{ color: "var(--brand)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-[1.1rem] lg:text-[1.3rem] font-semibold tracking-tight">
                    {s.title}
                  </span>
                </div>
                <span
                  className="shrink-0 text-[0.85rem] transition-transform group-hover:translate-x-1"
                  style={{ color: "var(--brand)" }}
                >
                  →
                </span>
              </a>
            </li>
          ))}
          <li className="border-t" style={{ borderColor: "color-mix(in srgb, var(--ink) 8%, transparent)" }} />
        </ul>
      </section>

      {/* ══════════════════════════════════════════
          SECCIONES DE DETALLE
      ══════════════════════════════════════════ */}

      {/* ── 01 CONSULTA ── */}
      <section id="consulta" className="reveal mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-24 scroll-mt-24">
        <SectionHeader
          number="01"
          kicker="01 — Consulta Cat Friendly"
          title="Consulta con certificación Cat Friendly Practice"
        />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center mb-10 lg:mb-14">
          <div className="relative rounded-3xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
            <Image src="/consulta-1.jpg" alt="Consulta Cat Friendly" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" quality={92} />
          </div>
          <div>
            <p className="text-[1.05rem] leading-[1.85] opacity-[0.72] mb-6">
              Nuestra consulta especializada está enfocada en detectar situaciones que pudieran afectar
              a corto, mediano o largo plazo la salud de los gatos.
            </p>
            <p className="text-[1.05rem] leading-[1.85] opacity-[0.72]">
              Servicio de interconsulta con médicos especialistas en:{" "}
              <span className="font-semibold opacity-100" style={{ color: "var(--brand)" }}>
                Neurología, Oftalmología, Cardiología y Neumología.
              </span>
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          <div className="lg:order-2 relative rounded-3xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
            <Image src="/consulta-2.jpg" alt="Consulta felina" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" quality={92} />
          </div>
          <ul className="lg:order-1 space-y-5">
            {CONSULTA_BULLETS.map((bullet, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span className="shrink-0 mt-[5px] text-[0.55rem]" style={{ color: "var(--brand)" }}>✦</span>
                <span className="text-[0.97rem] leading-[1.7] opacity-70">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SectionDivider />

      {/* ── 02 LABORATORIO ── */}
      <section id="laboratorio" className="reveal mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-24 scroll-mt-24">
        <SectionHeader
          number="02"
          kicker="02 — Laboratorio clínico"
          title="Laboratorio de análisis clínicos"
        />

        {/* Imagen + descripción */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center mb-12 lg:mb-16">
          <div className="relative rounded-3xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
            <Image src="/laboratorio-1.jpg" alt="Laboratorio Ocicat" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" quality={92} />
          </div>
          <p className="text-[1.05rem] leading-[1.85] opacity-[0.72]">
            En Ocicat Clínica Felina, contamos con nuestro propio laboratorio equipado con tecnología
            de última generación, que se actualiza periódicamente para garantizar resultados precisos
            y confiables. Al realizar todos los análisis internamente, evitamos el traslado a
            laboratorios externos, lo que acelera el proceso y proporciona una mayor certeza en
            los resultados — haciendo medicina en tiempo real para el mejor cuidado de tu gato.
          </p>
        </div>

        {/* Segunda imagen + análisis */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-start">
          <div className="lg:order-2 relative rounded-3xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
            <Image src="/laboratorio.jpg" alt="Análisis clínicos felinos" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" quality={92} />
          </div>
          <div className="lg:order-1">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] mb-6" style={{ color: "var(--brand)" }}>
              Análisis realizados en instalaciones
            </p>
            <div className="space-y-5">
              {LAB_ANALYSES.map((group) => (
                <div key={group.group}>
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.15em] mb-2 opacity-45">
                    {group.group}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="text-[0.78rem] leading-none px-3 py-1.5 rounded-full"
                        style={{
                          background: "color-mix(in srgb, var(--brand) 8%, var(--paper))",
                          border: "1px solid color-mix(in srgb, var(--brand) 16%, transparent)",
                          color: "var(--ink)",
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── 03 RAYOS X ── */}
      <section id="rayos-x" className="reveal mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-24 scroll-mt-24">
        <SectionHeader
          number="03"
          kicker="03 — Rayos X digitales"
          title="Rayos X Digitales"
        />

        {/* Descripción + imagen 1 */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center mb-10 lg:mb-14">
          <p className="text-[1.05rem] leading-[1.85] opacity-[0.72]">
            En Ocicat Clínica Felina, disponemos de nuestra propia sala de rayos X, lo que nos permite
            realizar diagnósticos y tratamientos de manera rápida y oportuna. Este equipo especializado
            evita la necesidad de trasladar a los gatos a clínicas externas, asegurando una atención
            continua y eficiente. La disponibilidad inmediata de los resultados de imágenes facilita
            una evaluación precisa y una toma de decisiones ágil, optimizando el cuidado de su felino
            en cada etapa del proceso.
          </p>
          <div className="relative rounded-3xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
            <Image src="/rayos-x3.jpg" alt="Sala de rayos X Ocicat" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" quality={92} />
          </div>
        </div>

        {/* Imagen 2 + tipos */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          <div className="relative rounded-3xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
            <Image src="/rayos-2.jpg" alt="Rayos X digital felino" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" quality={92} />
          </div>
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] mb-6" style={{ color: "var(--brand)" }}>
              Contamos con
            </p>
            <ul className="space-y-4">
              {["Radiografía Digital", "Radiografía Con Medio De Contraste", "Radiografía Intraoral"].map((item) => (
                <li key={item} className="flex gap-4 items-start">
                  <span className="shrink-0 mt-[5px] text-[0.55rem]" style={{ color: "var(--brand)" }}>✦</span>
                  <span className="text-[1.05rem] leading-[1.85] opacity-[0.72]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── 04 CIRUGÍA ── */}
      <section id="cirugia" className="reveal mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-24 scroll-mt-24">
        <SectionHeader
          number="04"
          kicker="04 — Cirugía"
          title="Cirugía"
        />

        {/* Imagen 1 + descripción */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center mb-10 lg:mb-14">
          <div className="relative rounded-3xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
            <Image src="/cirugia-1.jpg" alt="Quirófano Ocicat" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" quality={92} />
          </div>
          <p className="text-[1.05rem] leading-[1.85] opacity-[0.72]">
            En Ocicat Clínica Felina, disponemos de un quirófano con equipo de última generación y de
            excelente calidad. Cumplimos rigurosamente con todos los protocolos quirúrgicos, asegurando
            la máxima seguridad para cada paciente. Nuestro equipo de anestesia es de la mejor calidad,
            adaptándose a las necesidades específicas de cada gato y garantizando un manejo seguro y
            efectivo durante el procedimiento.
          </p>
        </div>

        {/* Interconsultas + imagen 2 */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          <div className="lg:order-2 relative rounded-3xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
            <Image src="/cirugia.jpg" alt="Cirugía felina Ocicat" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" quality={92} />
          </div>
          <div className="lg:order-1">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] mb-6" style={{ color: "var(--brand)" }}>
              Interconsulta con especialistas en
            </p>
            <div className="flex flex-wrap gap-2">
              {["Endoscopía", "Oftalmología", "Neurología", "Cardiología", "Traumatología y ortopedia", "Neumología"].map((esp) => (
                <span
                  key={esp}
                  className="text-[0.78rem] leading-none px-3 py-1.5 rounded-full"
                  style={{
                    background: "color-mix(in srgb, var(--brand) 8%, var(--paper))",
                    border: "1px solid color-mix(in srgb, var(--brand) 16%, transparent)",
                  }}
                >
                  {esp}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── 05 HOSPITALIZACIÓN ── */}
      <section id="hospitalizacion" className="reveal mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-24 scroll-mt-24">
        <SectionHeader
          number="05"
          kicker="05 — Hospitalización"
          title="Hospitalización"
        />

        {/* Descripción + imagen 1 */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center mb-10 lg:mb-14">
          <p className="text-[1.05rem] leading-[1.85] opacity-[0.72]">
            En nuestro servicio de hospitalización, los gatos reciben cuidado continuo las 24 horas
            del día. Utilizamos insumos de la mejor calidad y tecnología avanzada para asegurar una
            atención óptima y segura. Cada gato es monitorizado de cerca por nuestro equipo de
            profesionales altamente capacitados, quienes supervisan su bienestar y confort en todo
            momento, en un ambiente tranquilo adaptado a las necesidades felinas.
          </p>
          <div className="relative rounded-3xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
            <Image src="/hospital-2.jpg" alt="Hospitalización Ocicat" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" quality={92} />
          </div>
        </div>

        {/* Imagen 2 + beneficio extra */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          <div className="relative rounded-3xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
            <Image src="/hospital.jpg" alt="Monitoreo felino Ocicat" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" quality={92} />
          </div>
          <div
            className="rounded-2xl p-7 lg:p-9"
            style={{
              background: "color-mix(in srgb, var(--brand) 6%, var(--paper))",
              border: "1px solid color-mix(in srgb, var(--brand) 14%, transparent)",
            }}
          >
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] mb-4" style={{ color: "var(--brand)" }}>
              Sin costo adicional
            </p>
            <p className="font-display text-[1.15rem] lg:text-[1.3rem] font-semibold leading-snug tracking-tight mb-4">
              Ultrasonidos abdominales de seguimiento y terapia láser incluidos para los pacientes indicados.
            </p>
            <p className="text-[0.88rem] leading-[1.7] opacity-60">
              Porque cada detalle cuenta durante la recuperación de tu gato.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── 06 VENTA DE ALIMENTO ── */}
      <section id="venta-alimento" className="reveal mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-24 scroll-mt-24">
        <SectionHeader
          number="06"
          kicker="06 — Venta de alimentos"
          title="Venta de Alimentos"
        />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center mb-10 lg:mb-14">
          <div className="relative rounded-3xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
            <Image src="/alimento.jpg" alt="Alimentos felinos Ocicat" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" quality={92} />
          </div>
          <div>
            <p className="text-[1.05rem] leading-[1.85] opacity-[0.72] mb-8">
              Contamos con alimento de la más alta calidad, recomendado por nuestro equipo médico
              para cada etapa, condición y necesidad de tu gato.
            </p>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] mb-5" style={{ color: "var(--brand)" }}>
              Marcas disponibles
            </p>
            <div className="flex flex-wrap gap-3">
              {["Purina Pro Plan", "Hill's", "Royal Canin", "Virbac"].map((marca) => (
                <span
                  key={marca}
                  className="font-display text-[1rem] font-semibold px-4 py-2 rounded-full"
                  style={{
                    background: "color-mix(in srgb, var(--brand) 8%, var(--paper))",
                    border: "1px solid color-mix(in srgb, var(--brand) 16%, transparent)",
                    color: "var(--ink)",
                  }}
                >
                  {marca}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden h-[240px] lg:h-[380px]">
          <Image src="/alimento-2.jpg" alt="Tienda de alimentos Ocicat" fill className="object-cover object-center" sizes="100vw" quality={90} />
        </div>
      </section>

      {/* ── CTA ── */}
      <div
        className="mx-4 mb-4 rounded-[1.75rem] py-12 px-6 lg:mx-6 lg:rounded-[2.5rem] lg:py-16 lg:px-14"
        style={{
          background: "color-mix(in srgb, var(--brand) 9%, var(--paper))",
          border: "1px solid color-mix(in srgb, var(--brand) 18%, transparent)",
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-display text-xl lg:text-2xl font-semibold">
              ¿Tienes preguntas sobre algún servicio?
            </p>
            <p className="mt-1.5 text-[0.88rem] opacity-60">
              Escríbenos y te orientamos sin compromiso.
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
