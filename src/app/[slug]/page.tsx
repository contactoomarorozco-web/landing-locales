import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Landing from "@/components/Landing";
import { allSlugs, getBusiness } from "@/businesses/registry";

// Genera una página estática por cada negocio (rápido y barato de hospedar).
export function generateStaticParams() {
  return allSlugs().map((slug) => ({ slug }));
}

// Título y descripción para Google / al compartir el link.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const b = getBusiness(slug);
  if (!b) return { title: "No encontrado" };
  return {
    title: `${b.name} — ${b.category} en ${b.location}`,
    description: b.tagline,
    openGraph: {
      title: b.name,
      description: b.tagline,
      images: [b.heroImage],
    },
  };
}

export default async function BusinessPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const b = getBusiness(slug);
  if (!b) notFound();
  return <Landing b={b} />;
}
