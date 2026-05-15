// Demo real — Ocicat Clínica Felina (Guadalajara).
// Datos, copy y fotos reales tomados de su sitio y su ficha de Google Maps.

import type { Business } from "./types";

export const ocicat: Business = {
  slug: "ocicat",
  name: "Ocicat Clínica Felina",
  tagline:
    "La primera clínica veterinaria exclusiva para gatos de Jalisco. Medicina felina especializada, sin perros, sin estrés.",
  category: "Clínica veterinaria felina",
  location: "Guadalajara, Jal.",
  about:
    "En Ocicat solo atendemos gatos, y eso lo cambia todo. Nuestras instalaciones están diseñadas para reducir su estrés: sin perros, sin ruido, sin esperas que los alteren. Sumamos medicina felina actualizada, un equipo con certificación Cat Friendly y atención médica las 24 horas, los 7 días de la semana. Aquí tu gato no es un paciente más: está en buenas manos.",
  story:
    "El amor incondicional y el profundo agradecimiento de nuestra fundadora, Sonia Lomelín, hacia los gatos dio origen a la primera clínica veterinaria exclusiva para felinos del estado de Jalisco.",
  theme: {
    primary: "#5b2c63",
    dark: "#2a1430",
  },
  logo: "https://ocicatclinicafelina.com/img/logo-ocicat-original.png",
  heroImage: "https://ocicatclinicafelina.com/img/clinica-felina-1.png",
  spotlight: {
    kicker: "Hotel felino",
    title: "Ellos estarán en buenas manos",
    description:
      "Mientras viajas, tu gato es cuidado y acompañado las 24 horas por personal médico, en un espacio pensado a su medida.",
    bullets: [
      "Módulos con agua y comida separadas del arenero",
      "Material que reduce el frío, el ruido y los reflejos",
      "Aromaterapia, feromonas faciales felinas y música",
      "Control diario de ingesta de agua y alimento",
      "Módulos dobles para su mayor comodidad",
    ],
    image: "https://ocicatclinicafelina.com/img/banner-4.png",
  },
  credentials: [
    "Cat Friendly Practice",
    "AMMVEPE",
    "ISVPS",
    "UANL",
    "Pet Friendly",
  ],
  notes: ["English spoken", "Servicios con previa cita", "Atención 24/7"],
  services: [
    {
      title: "Consulta Cat Friendly",
      description:
        "Atención certificada con enfoque en el bienestar del gato y medicina felina actualizada.",
    },
    {
      title: "Laboratorio clínico",
      description:
        "Análisis clínicos para un diagnóstico preciso, interpretados con criterio felino.",
    },
    {
      title: "Rayos X digitales",
      description:
        "Imagen digital de alta definición, sin esperas y con menor manipulación del gato.",
    },
    {
      title: "Cirugía",
      description:
        "Procedimientos quirúrgicos con equipo y personal especializado en felinos.",
    },
    {
      title: "Hospitalización",
      description:
        "Monitoreo médico las 24 horas en un espacio tranquilo, sin perros que estresen a tu gato.",
    },
    {
      title: "Venta de alimento",
      description:
        "Alimento recomendado para cada etapa, condición y necesidad de tu gato.",
    },
  ],
  gallery: [
    "https://ocicatclinicafelina.com/img/banner-4.png",
    "https://ocicatclinicafelina.com/img/banner-3.png",
    "https://ocicatclinicafelina.com/img/banner-2.png",
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
