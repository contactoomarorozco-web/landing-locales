import type { MetadataRoute } from "next";
import { allSlugs, getBusiness } from "@/businesses/registry";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "");
  const entries: MetadataRoute.Sitemap = [];

  for (const slug of allSlugs()) {
    const b = getBusiness(slug);
    if (!b) continue;

    entries.push({ url: `${base}/${slug}`, changeFrequency: "monthly", priority: 1 });
    entries.push({ url: `${base}/${slug}/servicios`, changeFrequency: "monthly", priority: 0.8 });

    if (b.spotlight)
      entries.push({ url: `${base}/${slug}/hotel`, changeFrequency: "monthly", priority: 0.8 });
    if (b.gallery.length > 0)
      entries.push({ url: `${base}/${slug}/instalaciones`, changeFrequency: "monthly", priority: 0.7 });
    if (b.team && b.team.length > 0)
      entries.push({ url: `${base}/${slug}/nosotros`, changeFrequency: "monthly", priority: 0.7 });
    if (b.faq && b.faq.length > 0)
      entries.push({ url: `${base}/${slug}/faq`, changeFrequency: "monthly", priority: 0.6 });
  }

  return entries;
}
