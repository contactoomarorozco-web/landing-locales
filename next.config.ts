import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Permite usar fotos desde cualquier URL https (Unsplash, etc.).
    // También puedes poner fotos en la carpeta /public y usarlas como "/foto.jpg".
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
};

export default nextConfig;
