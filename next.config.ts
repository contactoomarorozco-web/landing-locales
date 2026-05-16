import type { NextConfig } from "next";

const securityHeaders = [
  // Evita que el sitio sea embebido en iframes de otros dominios (clickjacking)
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // El browser no intenta adivinar el Content-Type (MIME sniffing)
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Solo envía el origen en el Referer header, no la ruta completa
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Desactiva features del browser que no se usan
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
  // Fuerza HTTPS por 1 año (solo aplica en producción con HTTPS)
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
  // CSP: permite recursos propios + Google Maps + Google Fonts + WhatsApp
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline'",           // unsafe-inline necesario para JSON-LD
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https:",                 // https: permite OG images externas
      "frame-src https://maps.google.com https://www.google.com",
      "connect-src 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  // Permite abrir el dev server desde el celular en la misma red WiFi.
  allowedDevOrigins: ["192.168.100.10"],

  images: {
    // Restringido a los dominios que realmente se usan.
    remotePatterns: [
      { protocol: "https", hostname: "ocicatclinicafelina.com" },
      { protocol: "https", hostname: "maps.googleapis.com" },
    ],
  },

  async headers() {
    if (process.env.NODE_ENV !== "production") return [];
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
};

export default nextConfig;
