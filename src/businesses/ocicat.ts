// Demo real — Ocicat Clínica Felina (Guadalajara).
// Datos reales tomados de su sitio y su ficha de Google Maps.
// NOTA: las fotos son temporales (stock). Reemplazar por fotos reales de la clínica.

import type { Business } from "./types";

export const ocicat: Business = {
  slug: "ocicat",
  name: "Ocicat Clínica Felina",
  tagline:
    "La primera clínica veterinaria exclusiva para gatos de Jalisco. Medicina felina especializada, sin perros, sin estrés.",
  category: "Clínica veterinaria felina",
  location: "Guadalajara, Jal.",
  about:
    "En Ocicat solo atendemos gatos. Eso lo cambia todo: instalaciones diseñadas para reducir su estrés, personal con enfoque Cat Friendly y medicina felina actualizada. Tu gato es cuidado las 24 horas del día, los 7 días de la semana por personal médico. Aquí estarán en buenas manos.",
  theme: {
    primary: "#0f9b8e",
    dark: "#10242a",
  },
  heroImage:
    "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=1600&q=80",
  services: [
    {
      title: "Consulta Cat Friendly",
      description:
        "Atención certificada con enfoque en el bienestar del gato y medicina felina actualizada.",
    },
    {
      title: "Laboratorio y rayos X digitales",
      description: "Diagnóstico preciso con análisis y radiografía digital en sitio.",
    },
    {
      title: "Cirugía",
      description: "Procedimientos quirúrgicos con equipo y personal especializado.",
    },
    {
      title: "Hospitalización",
      description:
        "Monitoreo médico 24/7 en un espacio tranquilo, sin perros que estresen a tu gato.",
    },
    {
      title: "Hotel felino 24/7",
      description:
        "Hospedaje seguro y supervisado por personal médico mientras viajas.",
    },
    {
      title: "Alimento especializado",
      description: "Venta de alimento recomendado para cada etapa y necesidad.",
    },
  ],
  gallery: [
    "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=800&q=80",
    "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=800&q=80",
    "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=800&q=80",
  ],
  testimonials: [
    {
      name: "Mariana Monserrat V.",
      text:
        "Ocicat es la clínica de cabecera de mi gato. Me encanta su enfoque cat friendly y el conocimiento actualizado en medicina felina.",
    },
    {
      name: "Frida Nahomi H.",
      text:
        "Dejé a mi gatita en el servicio de hospedaje y la experiencia fue excelente de principio a fin. Lo recomiendo ampliamente.",
    },
    {
      name: "Roberto Flores R.",
      text:
        "Han tratado a 2 gatitos míos y en ambos casos hubo recuperación total. Confianza total en que los van a atender bien.",
    },
  ],
  contact: {
    phone: "33 1523 6295",
    whatsapp: "5213315236295",
    address:
      "C. Aurelio Luis Gallardo 308, Ladrón de Guevara, 44600 Guadalajara, Jal.",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Ocicat+Cl%C3%ADnica+Felina+Guadalajara",
  },
  hours: [
    { days: "Lunes a Viernes", time: "8:00 – 20:00" },
    { days: "Sábado", time: "9:00 – 16:00" },
    { days: "Domingo", time: "Cerrado" },
  ],
  socials: {
    facebook: "https://www.facebook.com/ocicatclinicafelina",
    instagram: "https://www.instagram.com/ocicatclinicafelina",
  },
};
