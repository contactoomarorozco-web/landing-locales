// Demo real — Ocicat Clínica Felina (Guadalajara).
// Datos, copy y fotos reales tomados de su sitio y su ficha de Google Maps.

import type { Business } from "./types";

export const ocicat: Business = {
  slug: "ocicat",
  name: "Ocicat Clínica Felina",
  tagline:
    "La primera clínica veterinaria exclusiva para gatos de Jalisco. Medicina felina especializada en un entorno tranquilo pensado solo para ellos.",
  category: "Clínica veterinaria felina",
  location: "Guadalajara, Jal.",
  about:
    "Ocicat Clínica Felina nació en 2015 como un servicio a domicilio exclusivo para gatos. En los últimos años hemos crecido exponencialmente y nos hemos convertido en un hospital de referencia a nivel nacional. Nuestra misión es proporcionar atención veterinaria de calidad para gatos, asegurando su bienestar y salud en cada etapa de la vida.\n\nOfrecemos atención especializada y exclusiva para gatos. Contamos con herramientas y un entorno cat-friendly que ayudan a reducir el estrés de los felinos durante su visita. Nuestro equipo de médicos veterinarios está comprometido con la educación continua y la actualización en las últimas técnicas y tratamientos.\n\nUtilizamos tecnología de última generación y equipamiento especializado para garantizar diagnósticos precisos y tratamientos efectivos. Nuestro hospital está equipado con instalaciones diseñadas para brindar la mejor atención a nuestros pacientes felinos.",
  story:
    "El amor incondicional y el profundo agradecimiento de nuestra fundadora, Sonia Lomelín, hacia los gatos dio origen a la primera clínica veterinaria exclusiva para felinos del estado de Jalisco.",
  theme: {
    primary: "#5b2c63",
    dark: "#2a1430",
  },
  logo: "/logo-ocicat-original.png",
  aboutImage: "/nosotros-2.png",
  heroImage: "/470216211_18065210806793914_2215080402945212354_n.jpg",
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
    image: "/hotel.jpg",
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
        "Monitoreo médico las 24 horas en un espacio tranquilo y silencioso, pensado para su recuperación.",
    },
    {
      title: "Venta de alimento",
      description:
        "Alimento recomendado para cada etapa, condición y necesidad de tu gato.",
    },
  ],
  gallery: [
    "/instalacion-19.jpg",
    "/instalacion-20.jpg",
    "/instalacion-21.jpg",
    "/instalacion-22.jpg",
    "/instalacion-23.jpg",
    "/instalacion-24.jpg",
    "/instalacion-25.jpg",
  ],
  rating: {
    score: "4.2",
    count: "500+",
    source: "Google",
    url: "https://www.google.com/maps/search/?api=1&query=Ocicat+Cl%C3%ADnica+Felina+Guadalajara",
  },
  testimonials: [
    {
      name: "Mariana Monserrat Villarreal García",
      date: "Hace 2 meses",
      text:
        "Ocicat es la clínica de cabecera de mi gato. Me encanta su enfoque cat friendly y el conocimiento actualizado en medicina felina. Las atenciones que ha recibido en consultas y pensión son muy satisfactorias.",
    },
    {
      name: "Frida Nahomi Hernández Pérez",
      date: "Hace 3 meses",
      text:
        "Sin duda recomiendo ampliamente este lugar para el cuidado de sus michis. Salí de viaje y dejé a mi gatita Micha en el servicio de hospedaje, y la experiencia fue excelente de principio a fin.",
    },
    {
      name: "Roberto Flores Ruiz",
      date: "Hace 2 meses",
      text:
        "Han tratado ya a 2 gatitos míos y en ambos casos afortunadamente hubo una recuperación total. Es muy importante tener la confianza de que los van a tratar bien, y aquí la tengo.",
    },
    {
      name: "Tori Terminate",
      date: "Hace 5 meses",
      text:
        "Absolutely the best feline clinic in Guadalajara. I cannot say enough wonderful things about Ocicat Clínica Felina — truly the best care my cat has ever received.",
    },
    {
      name: "Fabián Hernández",
      date: "Hace 8 meses",
      text:
        "Atención de primer nivel, personal profesional siempre pendiente del paciente. Mi esposa y yo estamos satisfechos con la atención a nuestra gatita Luna y totalmente agradecidos, en especial con la doctora Mariana.",
    },
    {
      name: "Tlanezi",
      date: "Hace 7 meses",
      text:
        "Llevé a mi gatita por un diagnóstico de daño hepático (falsa alarma al final) pero recibió una atención de primera. El trato hacia los gatos es excepcional: los doctores son pacientes y los atienden con calma.",
    },
    {
      name: "Rosa Zam",
      date: "Hace 4 meses",
      text:
        "Muy buen servicio, el ambiente muy gatuno y limpio. Llevé a mi gatita a esterilizar y la Dra. Melanie nos comunicó con detalle durante todo el proceso. Sin duda regresaría.",
    },
    {
      name: "Vicky Soleil",
      date: "Hace 11 meses",
      text:
        "La atención es excelente de parte de todos: recepción, la Dra. Ruddy que revisa a nuestro Örek y las chicas de hospital que lo cuidaron. Todos muy amables y al pendiente.",
    },
    {
      name: "Lorena Meza",
      date: "Hace 4 meses",
      text:
        "Excelente lugar. Mi gatita necesitó extracción dental y también pensión. Todo el tiempo me mandaron videítos. 100% volveremos.",
    },
    {
      name: "Silvia Schiavoni",
      date: "Hace 7 meses",
      text:
        "Dejé a mi gatita 3 semanas y todos los días me enviaron un video de ella. Regresó de muy buen ánimo. Muy buena la atención y los cuidados, definitivamente la dejaría otra vez.",
    },
    {
      name: "Karla Lomelí",
      date: "Hace 5 meses",
      text:
        "Excelente servicio y trabajo de calidad. Llegué por recomendación; a mi Cosmo lo habían desahuciado por PIF y hoy, casi 4 meses después, está perfecto. ¡Gracias Ocicat por darme esperanza!",
    },
    {
      name: "Diana Martínez",
      date: "Hace 2 años",
      text:
        "Increíble atención. Mi gatito Monkey estuvo en una situación crítica que requería cirugía urgente y gracias al profesionalismo del equipo, en especial la veterinaria Melanie, está saludable y feliz.",
    },
  ],
  contact: {
    phone: "33 1523 6295",
    whatsapp: "5213315236295",
    address:
      "C. Aurelio Luis Gallardo 308, Ladrón de Guevara, 44600 Guadalajara, Jal.",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Ocicat+Cl%C3%ADnica+Felina+Guadalajara",
    mapsEmbed: "https://maps.google.com/maps?q=Ocicat+Cl%C3%ADnica+Felina+Guadalajara&output=embed",
  },
  team: [
    {
      name: "MVZ. Dipl. GP.Cert. Sonia Lomelín del Castillo",
      role: "Medicina Interna · Fundadora & Directora General",
      image: "/sonia.jpg",
      bio: "Mi profundo amor y gratitud hacia los gatos me llevó a fundar, en 2015, la primera clínica veterinaria exclusiva para felinos en el estado de Jalisco. Con más de 16 años de experiencia en Medicina Veterinaria, soy socia activa de la American Association of Feline Practitioners, miembro de la ISFM y autora y coautora en artículos de revistas especializadas en veterinaria. He realizado estancias en Buenos Aires y en el Hospital Gattos de Madrid, y soy ponente en conferencias nacionales e internacionales.",
      certifications: [
        "Licenciatura en MVZ por la Universidad de Guadalajara",
        "Posgrado en Medicina Felina — Universidad Católica de Salta, Argentina",
        "Posgrado en Medicina Felina — Universidad de Nuevo León (Improve International)",
        "GP.Cert. en Medicina Felina — School Veterinary Postgraduate Studies",
        "Cat Friendly Practice — American Association of Feline Practitioners (AAFP)",
      ],
    },
    {
      name: "MVZ. Dipl. Karla Isabel Higuera Medina",
      role: "Medicina Interna",
      image: "/karla.jpg",
      bio: "Egresada del CUCBA en 2020, con dos años de experiencia en medicina felina. Ha completado diplomados especializados en Medicina Felina, Parasitología Clínica y Geriatría Aplicada en Perros y Gatos. Tutora de Kirkin y Pollo, sus gatos de compañía.",
      certifications: [
        "Licenciatura en MVZ — CUCBA, Universidad de Guadalajara (2020)",
        "Diplomado en Medicina Felina",
        "Diplomado en Haciendo Parasitología Clínica",
        "Curso Internacional de Medicina Felina",
        "Diplomado en Geriatría Aplicada en Perros y Gatos (en curso)",
      ],
    },
    {
      name: "MVZ. Dipl. Melanie Delgado Alvarado",
      role: "Geriatría",
      image: "/melanie.jpg",
      bio: "Egresada de la Universidad de Guadalajara (CUCBA) en 2020, con 3.5 años de experiencia en medicina felina. Certificada como Cat Friendly Veterinarian por la AAFP. Su área principal de interés es la medicina interna con énfasis en geriatría, y cuenta con habilidades en cirugía de tejidos blandos. Tutora de Pericles, Horus y Monito.",
      certifications: [
        "Licenciatura en MVZ — CUCBA, Universidad de Guadalajara (2020)",
        "Posgrado en Geriatría Canina y Felina — UNICEN / Vetesweb",
        "Cat Friendly Veterinarian — AAFP",
        "Felinos 3 — Vetschool",
        "Posgrado en Cardiología — UNICEN (en curso)",
        "Diplomado en Cannabinoides en Medicina Canina y Felina — Concervet / FMCV",
      ],
    },
    {
      name: "MVZ. Dipl. Ruddy Katherin Vergara López",
      role: "Emergencias",
      image: "/ruddy.jpg",
      bio: "Egresada de la U.D.C.A (Colombia) en 2022, con dos años de experiencia en medicina felina. Especializada en emergencias y urgencias veterinarias, ha realizado su formación con instituciones de Colombia y México. Tutora de Jade, su gata de compañía.",
      certifications: [
        "Licenciatura en MVZ — Universidad de Ciencias Aplicadas y Ambientales, Colombia (2022)",
        "Emergencias 360 en Caninos y Felinos — Veterinario Emprendedor (2021)",
        "Diplomado en Emergencias y Urgencias Veterinarias — VEPA Colombia (2021)",
        "Posgrado en Medicina Felina — Vetesweb (2022)",
      ],
    },
  ],
  faq: [
    {
      question: "¿Por qué los costos en Ocicat Clínica Felina son más altos en comparación con otros lugares?",
      answer:
        "En Ocicat Clínica Felina, nuestros costos reflejan el compromiso con la excelencia en la atención de su gato. Utilizamos insumos y equipos de la más alta calidad, incluso de gama de medicina humana, incluyendo tecnología de última generación en nuestro laboratorio, que se renueva periódicamente para garantizar resultados rápidos y confiables sin necesidad de trasladar las pruebas a laboratorios externos.\n\nAdemás, ofrecemos análisis químicos completos que incluyen pruebas avanzadas como T4 total (para evaluar la función tiroidea), perfiles completos de sangre que abarcan 14 elementos más hemograma, y la prueba IDEXX para detectar VIH felino, leucemia viral felina y gusano del corazón, reconocida como la más confiable a nivel mundial.\n\nEstos estándares de calidad nos permiten proporcionar diagnósticos precisos y un cuidado superior, asegurando la mejor salud y bienestar para su felino. Entendemos que la calidad tiene un costo, pero creemos firmemente que la inversión en tecnología y atención de primer nivel se traduce en un servicio excepcional para su gato.",
    },
    {
      question: "¿Por qué se solicitan muchos estudios para mi gato?",
      answer:
        "Al igual que en los humanos, los gatos requieren ciertos estudios y vacunas en función de su edad y estado de salud para asegurar un seguimiento adecuado y preventivo. Estas pruebas nos permiten detectar problemas de salud de manera temprana y manejar cualquier condición de manera más efectiva para evitar complicaciones a futuro.\n\nEn Ocicat Clínica Felina, seguimos las directrices establecidas por la American Association of Feline Practitioners (AAFP) y la International Society of Feline Medicine (ISFM), que son estándares internacionales reconocidos para el cuidado de la salud felina.\n\nRecordemos que los gatos son estoicos: a pesar de estar enfermos, no muestran signos de enfermedad o dolor. Nuestra recomendación de estudios se basa en medicina preventiva de acuerdo a los estados de vida del gato — estudios que se deben hacer cuando el gato está sano, de acuerdo con su edad.",
    },
    {
      question: "¿Por qué a veces se recetan muchos medicamentos?",
      answer:
        "En Ocicat Clínica Felina, nuestro enfoque prioritario es la salud y el bienestar de su gato. A veces puede ser necesario recetar varios medicamentos para tratar o prevenir diversas condiciones de salud. Sin embargo, también nos esforzamos por minimizar el uso de fármacos, especialmente aquellos que pueden tener efectos secundarios indeseados.\n\nPara lograr esto, aumentamos el uso de nutracéuticos — suplementos nutricionales con beneficios terapéuticos — como una alternativa más segura y natural. Nuestro objetivo es proporcionar un tratamiento integral que maximice el bienestar de su felino mientras minimiza los riesgos asociados con los medicamentos.",
    },
    {
      question: "¿Cómo y cuándo puedo obtener un reporte o diagnóstico detallado para mi gato?",
      answer:
        "El diagnóstico presuntivo o definitivo se proporciona en la receta durante la consulta, asegurando que tenga información clara y precisa sobre el estado de salud de su gato. Si necesita un informe más detallado o un reporte completo, estamos encantados de proporcionarlo en visitas posteriores o al momento del alta.\n\nLa entrega del informe puede ser en los próximos 3 días. Nos comprometemos a mantener una comunicación abierta y transparente con los tutores de nuestras mascotas.",
    },
    {
      question: "¿A partir de qué edad puedo esterilizar a mi gato?",
      answer:
        "La esterilización de gatos generalmente se recomienda a partir de los 6 meses de edad. Sin embargo, en algunos casos puede ser apropiado realizar el procedimiento antes, dependiendo de la salud y el desarrollo del gato.\n\nEs importante discutir con su veterinario la mejor edad para esterilizar a su gato, ya que esto puede ayudar a prevenir problemas de salud y comportamientos no deseados. Se recomienda realizar estudios previos como hemograma y bioquímica sérica.",
    },
    {
      question: "¿Se anestesia a los gatos para la profilaxis dental? ¿Qué tipo de anestesia se utiliza?",
      answer:
        "Sí. Para realizar una profilaxis dental en gatos es necesario utilizar anestesia general para asegurar que el procedimiento sea seguro y efectivo. Utilizamos anestesia inhalada, que es una opción segura y controlable.\n\nLos gatos suelen recuperarse rápidamente y generalmente pueden irse a casa el mismo día. Después de la limpieza dental se quedan en observación aproximadamente 3 horas en nuestra clínica para asegurarnos de que estén completamente recuperados.\n\nTambién se realiza rayos X dental intraoral para detectar patologías a tiempo, sin costo extra.",
    },
    {
      question: "¿Qué diferencia hay entre un módulo básico y un módulo doble?",
      answer:
        "La principal diferencia es el tamaño. Los módulos dobles ofrecen más espacio, lo que permite a los gatos moverse con mayor libertad y comodidad. Esto es especialmente beneficioso para gatos que necesitan más espacio para sentirse seguros y relajados.\n\nMedidas módulo BÁSICO: Ancho 57.5 cm · Alto 76.5 cm · Profundidad 77 cm.\n\nMedidas módulo MAINE: Ancho 80 cm · Alto 100 cm · Profundidad 60 cm.",
    },
  ],
  hours: [
    { days: "Lunes a Viernes", time: "8:00 – 20:00" },
    { days: "Sábado", time: "9:00 – 16:00" },
    { days: "Domingo", time: "Cerrado" },
  ],
  socials: {
    facebook: "https://www.facebook.com/OcicatClinicaFelina",
    instagram: "https://www.instagram.com/ocicat.clinica.felina/",
  },
  url: "https://ocicatclinicafelina.com",
  foundingYear: "2015",
  openingHours: ["Mo-Fr 08:00-20:00", "Sa 09:00-16:00"],
  schemaType: "VeterinaryCare",
};
