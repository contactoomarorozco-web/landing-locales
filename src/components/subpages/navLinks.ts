import type { Business } from "@/businesses/types";

export function buildSubpageNavLinks(b: Business, slug: string) {
  const base = `/${slug}`;
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
