import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allSlugs, getBusiness } from "@/businesses/registry";
import NosotrosPage from "@/components/subpages/NosotrosPage";
import ServiciosPage from "@/components/subpages/ServiciosPage";
import HotelPage from "@/components/subpages/HotelPage";
import InstalacionesPage from "@/components/subpages/InstalacionesPage";
import FaqPage from "@/components/subpages/FaqPage";

const SUBPAGES = ["nosotros", "servicios", "hotel", "instalaciones", "faq"] as const;
type Subpage = (typeof SUBPAGES)[number];

function isValidSubpage(value: string): value is Subpage {
  return (SUBPAGES as readonly string[]).includes(value);
}

const subpageLabels: Record<Subpage, string> = {
  nosotros: "Nosotros",
  servicios: "Servicios",
  hotel: "Hotel",
  instalaciones: "Instalaciones",
  faq: "Preguntas frecuentes",
};

export function generateStaticParams() {
  return allSlugs().flatMap((slug) => {
    const b = getBusiness(slug);
    if (!b) return [];
    return SUBPAGES.filter((sp) => {
      if (sp === "hotel") return !!b.spotlight;
      if (sp === "faq") return !!(b.faq && b.faq.length > 0);
      if (sp === "nosotros") return !!(b.team && b.team.length > 0);
      return true;
    }).map((subpage) => ({ slug, subpage }));
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; subpage: string }>;
}): Promise<Metadata> {
  const { slug, subpage } = await params;
  const b = getBusiness(slug);
  if (!b || !isValidSubpage(subpage)) return { title: "No encontrado" };
  const label = subpage === "hotel" && b.spotlight ? b.spotlight.kicker : subpageLabels[subpage];

  const descriptions: Record<Subpage, string> = {
    nosotros: `Conoce al equipo de ${b.name}. ${b.category} en ${b.location} con médicos especializados en salud felina.`,
    servicios: `Todos los servicios de ${b.name}: consulta, laboratorio, rayos X, cirugía, hospitalización y más. ${b.category} en ${b.location}.`,
    hotel: b.spotlight?.description ?? b.tagline,
    instalaciones: `Conoce las instalaciones de ${b.name}. Espacios diseñados para el bienestar y confort de tu gato. ${b.location}.`,
    faq: `Preguntas frecuentes sobre ${b.name}. Resuelve tus dudas sobre servicios, precios y procedimientos. ${b.category} en ${b.location}.`,
  };

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const pageUrl = `${siteUrl}/${slug}/${subpage}`;

  return {
    title: `${label} — ${b.name}`,
    description: descriptions[subpage],
    alternates: { canonical: pageUrl },
    openGraph: {
      type: "website",
      url: pageUrl,
      siteName: b.name,
      title: `${label} — ${b.name}`,
      description: descriptions[subpage],
      locale: "es_MX",
      images: [{ url: b.heroImage, alt: b.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${label} — ${b.name}`,
      description: descriptions[subpage],
      images: [b.heroImage],
    },
  };
}

export default async function SubpagePage({
  params,
}: {
  params: Promise<{ slug: string; subpage: string }>;
}) {
  const { slug, subpage } = await params;
  const b = getBusiness(slug);
  if (!b) notFound();
  if (!isValidSubpage(subpage)) notFound();

  switch (subpage) {
    case "nosotros":
      return <NosotrosPage b={b} slug={slug} />;
    case "servicios":
      return <ServiciosPage b={b} slug={slug} />;
    case "hotel":
      if (!b.spotlight) notFound();
      return <HotelPage b={b} slug={slug} />;
    case "instalaciones":
      return <InstalacionesPage b={b} slug={slug} />;
    case "faq":
      if (!b.faq || b.faq.length === 0) notFound();
      return <FaqPage b={b} slug={slug} />;
  }
}
