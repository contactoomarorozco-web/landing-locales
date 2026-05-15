// PLANTILLA PARA UN NEGOCIO NUEVO
// Pasos:
//   1. Copia este archivo y renómbralo, ej: "tacos-don-pepe.ts"
//   2. Cambia "templateBusiness" por un nombre, ej: "tacosDonPepe"
//   3. Llena los datos de abajo
//   4. Regístralo en "registry.ts" (sigue las instrucciones de ese archivo)

import type { Business } from "./types";

export const templateBusiness: Business = {
  slug: "nombre-del-negocio", // así se verá en la URL: tusitio.com/nombre-del-negocio
  name: "Nombre del Negocio",
  tagline: "Frase corta que diga qué hacen y por qué elegirlos",
  category: "Giro del negocio",
  location: "Ciudad, Estado",
  about:
    "Párrafo contando la historia: cuándo abrieron, qué los hace especiales, qué ofrecen.",
  theme: {
    primary: "#2563eb", // color de marca (botones y acentos)
    dark: "#0f172a", // color oscuro de fondo
  },
  heroImage: "https://imagen-grande-del-negocio.jpg",
  services: [
    { title: "Servicio 1", description: "Breve descripción." },
    { title: "Servicio 2", description: "Breve descripción." },
    { title: "Servicio 3", description: "Breve descripción." },
  ],
  gallery: [
    "https://foto-1.jpg",
    "https://foto-2.jpg",
    "https://foto-3.jpg",
  ],
  testimonials: [
    { name: "Cliente 1", text: "Lo que dijo el cliente." },
    { name: "Cliente 2", text: "Lo que dijo el cliente." },
  ],
  contact: {
    phone: "33 0000 0000",
    whatsapp: "5213300000000", // solo números, con 521 al inicio (México)
    email: "correo@negocio.mx",
    address: "Calle y número, colonia, ciudad",
    mapsUrl: "https://maps.google.com/...",
  },
  hours: [
    { days: "Lunes a Viernes", time: "9:00 – 18:00" },
    { days: "Sábado", time: "9:00 – 14:00" },
  ],
  socials: {
    instagram: "",
    facebook: "",
  },
};
