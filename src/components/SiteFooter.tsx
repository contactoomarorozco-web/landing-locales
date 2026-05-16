import type { Business } from "@/businesses/types";

export default function SiteFooter({ b }: { b: Business }) {
  return (
    <footer className="border-t" style={{ background: "var(--ink)", color: "var(--paper)", borderColor: "var(--ink)" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10 flex flex-col md:flex-row justify-between gap-8">
        <div>
          <p className="font-display text-2xl font-semibold">{b.name}</p>
          <p className="mt-1.5 text-xs uppercase tracking-[0.25em] opacity-50">{b.location}</p>
        </div>
        {b.socials && (
          <div className="flex gap-6 text-xs uppercase tracking-[0.2em] self-end">
            {b.socials.instagram && (
              <a href={b.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:opacity-60">Instagram</a>
            )}
            {b.socials.facebook && (
              <a href={b.socials.facebook} target="_blank" rel="noopener noreferrer" className="hover:opacity-60">Facebook</a>
            )}
            {b.socials.tiktok && (
              <a href={b.socials.tiktok} target="_blank" rel="noopener noreferrer" className="hover:opacity-60">TikTok</a>
            )}
          </div>
        )}
      </div>
      <div className="border-t" style={{ borderColor: "color-mix(in srgb, var(--paper) 15%, transparent)" }}>
        <p className="mx-auto max-w-7xl px-6 lg:px-10 py-4 text-xs uppercase tracking-[0.2em] opacity-40">
          © {new Date().getFullYear()} {b.name}
        </p>
      </div>
    </footer>
  );
}
