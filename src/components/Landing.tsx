import Image from "next/image";
import type { Business } from "@/businesses/types";

/**
 * Plantilla visual de una landing. Toma los datos de un negocio
 * y arma la página completa. No necesitas editar este archivo
 * para agregar negocios — solo sus datos.
 */
export default function Landing({ b }: { b: Business }) {
  const waLink = `https://wa.me/${b.contact.whatsapp}?text=${encodeURIComponent(
    `Hola ${b.name}, vi su página y me gustaría más información.`
  )}`;

  return (
    <div
      className="min-h-screen bg-white text-neutral-900"
      style={
        {
          "--brand": b.theme.primary,
          "--brand-dark": b.theme.dark,
        } as React.CSSProperties
      }
    >
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          {b.logo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={b.logo} alt={b.name} className="h-10 w-auto" />
          ) : (
            <span className="text-lg font-bold tracking-tight">{b.name}</span>
          )}
          <nav className="hidden sm:flex items-center gap-8 text-sm text-neutral-600">
            <a href="#servicios" className="hover:text-neutral-900">Servicios</a>
            <a href="#nosotros" className="hover:text-neutral-900">Nosotros</a>
            <a href="#contacto" className="hover:text-neutral-900">Contacto</a>
          </nav>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-4 py-2 text-sm font-semibold text-white"
            style={{ background: "var(--brand)" }}
          >
            Escríbenos
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: "var(--brand-dark)" }}>
        <Image
          src={b.heroImage}
          alt={b.name}
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="relative mx-auto max-w-6xl px-6 py-28 sm:py-40 text-white">
          <p className="uppercase tracking-[0.2em] text-xs font-semibold opacity-80">
            {b.category} · {b.location}
          </p>
          <h1 className="mt-4 text-4xl sm:text-6xl font-bold max-w-3xl leading-tight">
            {b.name}
          </h1>
          <p className="mt-6 text-lg sm:text-xl max-w-2xl opacity-90">{b.tagline}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-7 py-3 font-semibold text-white"
              style={{ background: "var(--brand)" }}
            >
              Contactar por WhatsApp
            </a>
            <a
              href="#contacto"
              className="rounded-full px-7 py-3 font-semibold border border-white/40 hover:bg-white/10"
            >
              Ver ubicación
            </a>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold">Lo que ofrecemos</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {b.services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-neutral-200 p-6 hover:shadow-lg transition-shadow"
            >
              <div
                className="h-10 w-10 rounded-xl mb-4"
                style={{ background: "var(--brand)", opacity: 0.15 }}
              />
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-neutral-600">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Nosotros */}
      <section id="nosotros" className="bg-neutral-50 border-y border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-20 grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold">Nosotros</h2>
            <p className="mt-6 text-lg text-neutral-700 leading-relaxed">{b.about}</p>
          </div>
          {b.gallery[0] && (
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src={b.gallery[0]}
                alt={`${b.name} - foto`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          )}
        </div>
      </section>

      {/* Galería */}
      {b.gallery.length > 1 && (
        <section className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold">Galería</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {b.gallery.map((src, i) => (
              <div
                key={i}
                className="relative aspect-square rounded-2xl overflow-hidden"
              >
                <Image
                  src={src}
                  alt={`${b.name} ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Testimonios */}
      {b.testimonials.length > 0 && (
        <section className="bg-neutral-50 border-y border-neutral-200">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <h2 className="text-3xl font-bold">Lo que dicen nuestros clientes</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {b.testimonials.map((t) => (
                <figure
                  key={t.name}
                  className="rounded-2xl bg-white border border-neutral-200 p-6"
                >
                  <blockquote className="text-lg text-neutral-700">
                    “{t.text}”
                  </blockquote>
                  <figcaption className="mt-4 font-semibold">— {t.name}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contacto */}
      <section id="contacto" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">Visítanos o contáctanos</h2>
            <dl className="mt-8 space-y-5 text-neutral-700">
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Dirección</dt>
                <dd className="mt-1">{b.contact.address}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Teléfono</dt>
                <dd className="mt-1">
                  <a href={`tel:${b.contact.phone.replace(/\s/g, "")}`} className="hover:underline">
                    {b.contact.phone}
                  </a>
                </dd>
              </div>
              {b.contact.email && (
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Correo</dt>
                  <dd className="mt-1">
                    <a href={`mailto:${b.contact.email}`} className="hover:underline">
                      {b.contact.email}
                    </a>
                  </dd>
                </div>
              )}
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Horario</dt>
                <dd className="mt-1 space-y-1">
                  {b.hours.map((h) => (
                    <div key={h.days}>
                      <span className="font-medium">{h.days}:</span> {h.time}
                    </div>
                  ))}
                </dd>
              </div>
            </dl>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full px-7 py-3 font-semibold text-white"
              style={{ background: "var(--brand)" }}
            >
              Escríbenos por WhatsApp
            </a>
          </div>
          {b.contact.mapsUrl && (
            <a
              href={b.contact.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-neutral-200 flex items-center justify-center min-h-[280px] bg-neutral-50 hover:bg-neutral-100 transition-colors text-center p-8"
            >
              <span className="font-semibold" style={{ color: "var(--brand)" }}>
                Abrir en Google Maps →
              </span>
            </a>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white" style={{ background: "var(--brand-dark)" }}>
        <div className="mx-auto max-w-6xl px-6 py-12 flex flex-col sm:flex-row justify-between gap-6">
          <div>
            <p className="text-lg font-bold">{b.name}</p>
            <p className="mt-1 text-sm opacity-70">{b.location}</p>
          </div>
          {b.socials && (
            <div className="flex gap-6 text-sm">
              {b.socials.instagram && (
                <a href={b.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
              )}
              {b.socials.facebook && (
                <a href={b.socials.facebook} target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a>
              )}
              {b.socials.tiktok && (
                <a href={b.socials.tiktok} target="_blank" rel="noopener noreferrer" className="hover:underline">TikTok</a>
              )}
            </div>
          )}
        </div>
        <div className="border-t border-white/10">
          <p className="mx-auto max-w-6xl px-6 py-4 text-xs opacity-60">
            © {new Date().getFullYear()} {b.name}. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
