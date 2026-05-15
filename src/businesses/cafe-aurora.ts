// EJEMPLO de negocio. Sirve como referencia de cómo se llena.
// Para un negocio nuevo: copia este archivo, renómbralo y cambia los datos.

import type { Business } from "./types";

export const cafeAurora: Business = {
  slug: "cafe-aurora",
  name: "Café Aurora",
  tagline: "Café de especialidad y repostería casera en el corazón de la ciudad",
  category: "Cafetería",
  location: "Guadalajara, Jal.",
  about:
    "Somos una cafetería familiar que abrió sus puertas en 2019. Tostamos nuestro propio café de fincas mexicanas y horneamos pan todos los días. Un espacio para trabajar, leer o simplemente desconectar con una buena taza.",
  theme: {
    primary: "#b45309",
    dark: "#1c1410",
  },
  heroImage:
    "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1600&q=80",
  services: [
    {
      title: "Café de especialidad",
      description: "Métodos de filtrado, espresso y bebidas de temporada.",
    },
    {
      title: "Repostería casera",
      description: "Pan dulce, pays y galletas horneados cada mañana.",
    },
    {
      title: "Espacio para trabajar",
      description: "Wi-Fi rápido, enchufes y ambiente tranquilo.",
    },
  ],
  gallery: [
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
    "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800&q=80",
    "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80",
  ],
  testimonials: [
    {
      name: "Mariana L.",
      text: "El mejor café de la zona. Me encanta venir a trabajar aquí.",
    },
    {
      name: "Carlos R.",
      text: "Atención increíble y el pan recién hecho es otro nivel.",
    },
  ],
  contact: {
    phone: "33 1234 5678",
    whatsapp: "5213312345678",
    email: "hola@cafeaurora.mx",
    address: "Av. Hidalgo 123, Centro, Guadalajara",
    mapsUrl: "https://maps.google.com",
  },
  hours: [
    { days: "Lunes a Viernes", time: "7:00 – 21:00" },
    { days: "Sábado y Domingo", time: "8:00 – 22:00" },
  ],
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
};
