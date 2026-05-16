import Image from "next/image";
import type { Business } from "@/businesses/types";
import MobileNav from "./MobileNav";

export default function SiteHeader({
  b,
  navLinks,
  waLink,
}: {
  b: Business;
  navLinks: { href: string; label: string }[];
  waLink: string;
}) {
  return (
    <header
      className="sticky top-0 z-40 backdrop-blur-xl border-b"
      style={{
        background: "color-mix(in srgb, var(--paper) 70%, transparent)",
        borderColor: "color-mix(in srgb, var(--ink) 8%, transparent)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 lg:h-20 flex items-center justify-between">
        <a href={`/${b.slug}`}>
          {b.logo ? (
            <Image
              src={b.logo}
              alt={b.name}
              width={267}
              height={125}
              priority
              className="h-8 lg:h-10 w-auto"
            />
          ) : (
            <span className="font-display text-xl font-semibold tracking-tight">
              {b.name}
            </span>
          )}
        </a>
        <nav className="hidden md:flex items-center gap-7 text-[0.68rem] font-medium uppercase tracking-[0.2em]">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="group relative pb-0.5">
              {l.label}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-[var(--ink)] transition-[width] duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] transition-opacity hover:opacity-80"
          style={{ background: "var(--brand)", color: "#fff" }}
        >
          Contactar
        </a>
        <MobileNav
          links={navLinks}
          waLink={waLink}
          mapsUrl={b.contact.mapsUrl}
          notes={b.notes}
          logo={b.logo}
          name={b.name}
          brand={b.theme.primary}
          ink={b.theme.dark}
        />
      </div>
    </header>
  );
}
