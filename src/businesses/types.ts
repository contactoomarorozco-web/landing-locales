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

  /** Imagen para la página de Nosotros (opcional). Si no hay, usa gallery[0] */
  aboutImage?: string;

  /** Imagen grande del hero: ruta dentro de /public, o una URL */
  heroImage: string;

  /** (Opcional) Frase corta de origen / historia emocional del negocio.
   *  Se muestra en grande como cita editorial. Ej: por qué nació. */
  story?: string;

  /** (Opcional) Bloque destacado: un servicio estrella con su detalle.
   *  Ej: el hotel felino, con sus puntos diferenciadores. */
  spotlight?: {
    kicker: string; // etiqueta corta, ej: "Hotel felino"
    title: string;
    description: string;
    bullets: string[]; // detalles que lo hacen premium
    image: string;
  };

  /** (Opcional) Avales / certificaciones (texto). Ej: "Cat Friendly Practice" */
  credentials?: string[];

  /** (Opcional) Notas operativas cortas. Ej: "English spoken", "Con previa cita" */
  notes?: string[];

  /** Servicios o productos destacados */
  services: { title: string; description: string }[];

  /** Galería de fotos: rutas dentro de /public o URLs */
  gallery: string[];

  /** Opiniones de clientes */
  testimonials: { name: string; text: string; date?: string }[];

  /** (Opcional) Valoración global agregada (ej. Google Maps) */
  rating?: {
    score: string; // ej. "4.2"
    count: string; // ej. "500+"
    source?: string; // ej. "Google"
    url?: string; // link a las reseñas
  };

  /** Datos de contacto */
  contact: {
    phone: string; // visible. Ej: "33 1234 5678"
    whatsapp: string; // solo números con lada país. Ej: "5213312345678"
    email?: string;
    address: string;
    /** Link de Google Maps (lo sacas de "Compartir" en Maps) */
    mapsUrl?: string;
    /** src del iframe embed (Maps > Compartir > Insertar mapa) */
    mapsEmbed?: string;
  };

  /** (Opcional) Equipo: lista de integrantes con foto, nombre y rol */
  team?: { name: string; role: string; bio?: string; image?: string; certifications?: string[] }[];

  /** (Opcional) Preguntas frecuentes con su respuesta */
  faq?: { question: string; answer: string }[];

  /** Horario, una línea por día o bloque */
  hours: { days: string; time: string }[];

  /** Redes sociales (opcionales) */
  socials?: {
    instagram?: string;
    facebook?: string;
    tiktok?: string;
  };

  /** URL canónica del sitio desplegado. Ej: "https://ocicatclinicafelina.com" */
  url?: string;

  /** Año de fundación. Ej: "2015". Se muestra en el badge de la sección Quiénes somos */
  foundingYear?: string;

  /** Horarios en formato schema.org para SEO. Ej: ["Mo-Fr 08:00-20:00", "Sa 09:00-16:00"] */
  openingHours?: string[];

  /** Tipo schema.org. Default: "LocalBusiness". Ej: "VeterinaryCare", "Restaurant" */
  schemaType?: string;
};
