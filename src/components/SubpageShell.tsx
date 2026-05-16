import type { Business } from "@/businesses/types";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

export default function SubpageShell({
  b,
  navLinks,
  waLink,
  children,
}: {
  b: Business;
  navLinks: { href: string; label: string }[];
  waLink: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="grain relative min-h-screen overflow-clip"
      style={
        {
          "--brand": b.theme.primary,
          "--ink": b.theme.dark,
          background: "var(--paper)",
          color: "var(--ink)",
        } as React.CSSProperties
      }
    >
      <SiteHeader b={b} navLinks={navLinks} waLink={waLink} />
      <main>{children}</main>
      <SiteFooter b={b} />
    </div>
  );
}
