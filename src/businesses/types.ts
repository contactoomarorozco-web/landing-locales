// Tipo de datos de un negocio.
// Cada landing se define llenando este "molde". No necesitas tocar nada más.

export type Business = {
  /** Identificador en la URL. Ej: "cafe-aurora" -> tusitio.com/cafe-aurora */
  slug: string;

  /** Nombre del negocio (aparece en el título y el header) */
  name: string;

  /** Frase corta de qué hacen (subtítulo del hero) */
  tagline: string;

  /** Giro: "Cafetería", "Estética", "Taller mecánico", etc. */
  category: string;

  /** Ciudad / zona. Ej: "Guadalajara, Jal." */
  location: string;

  /** Texto largo para la sección "Nosotros" */
  about: string;

  /** Colores de la marca (en formato #RRGGBB) */
  theme: {
    primary: string; // color principal (botones, acentos)
    dark: string; // color oscuro de fondo (hero, footer)
  };

  /** Logo opcional: ruta a una imagen dentro de /public. Si no hay, usa el nombre */
  logo?: string;

  /** Imagen grande del hero: ruta dentro de /public, o una URL */
  heroImage: string;

  /** Servicios o productos destacados */
  services: { title: string; description: string }[];

  /** Galería de fotos: rutas dentro de /public o URLs */
  gallery: string[];

  /** Opiniones de clientes */
  testimonials: { name: string; text: string }[];

  /** Datos de contacto */
  contact: {
    phone: string; // visible. Ej: "33 1234 5678"
    whatsapp: string; // solo números con lada país. Ej: "5213312345678"
    email?: string;
    address: string;
    /** Link de Google Maps (lo sacas de "Compartir" en Maps) */
    mapsUrl?: string;
  };

  /** Horario, una línea por día o bloque */
  hours: { days: string; time: string }[];

  /** Redes sociales (opcionales) */
  socials?: {
    instagram?: string;
    facebook?: string;
    tiktok?: string;
  };
};
