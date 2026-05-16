import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Landing from "@/components/Landing";
import { allSlugs, getBusiness } from "@/businesses/registry";

export function generateStaticParams() {
  return allSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const b = getBusiness(slug);
  if (!b) return { title: "No encontrado" };

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const pageUrl = `${siteUrl}/${slug}`;

  return {
    title: `${b.name} — ${b.category} en ${b.location}`,
    description: b.tagline,
    alternates: { canonical: pageUrl },
    openGraph: {
      type: "website",
      url: pageUrl,
      siteName: b.name,
      title: `${b.name} — ${b.category} en ${b.location}`,
      description: b.tagline,
      locale: "es_MX",
      images: [{ url: b.heroImage, alt: b.name, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${b.name} — ${b.category} en ${b.location}`,
      description: b.tagline,
      images: [b.heroImage],
    },
  };
}

function buildJsonLd(b: ReturnType<typeof getBusiness>) {
  if (!b) return null;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  return {
    "@context": "https://schema.org",
    "@type": b.schemaType ?? "LocalBusiness",
    name: b.name,
    description: b.tagline,
    url: b.url ?? `${siteUrl}/${b.slug}`,
    telephone: b.contact.phone,
    email: b.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: b.contact.address,
      addressLocality: b.location.split(",")[0].trim(),
      addressRegion: b.location.split(",")[1]?.trim() ?? "",
      addressCountry: "MX",
    },
    ...(b.openingHours && { openingHours: b.openingHours }),
    image: b.heroImage.startsWith("http")
      ? b.heroImage
      : `${siteUrl}${b.heroImage}`,
    sameAs: [
      b.socials?.instagram,
      b.socials?.facebook,
      b.socials?.tiktok,
      b.url,
    ].filter(Boolean),
    ...(b.rating && (() => {
      const count = parseInt(b.rating!.count.replace(/\D/g, ""), 10);
      return count > 0 ? {
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: b.rating!.score,
          reviewCount: count,
        },
      } : {};
    })()),
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

  const jsonLd = buildJsonLd(b);

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <Landing b={b} />
    </>
  );
}
