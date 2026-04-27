// ─────────────────────────────────────────────
//  PROYECTOS — edita este archivo para agregar
//  o modificar entradas en tu portafolio
// ─────────────────────────────────────────────

const PROJECTS = [
  {
    id: "tonico-studio",
    brand: "Tónico Studio",
    tagline: "Branding & Comunicación",
    logoText: "TS",
    logo: null,                   // "assets/logos/tonico.png"

    description: "Estudio de diseño independiente enfocado en marcas con carácter. Identidad visual, naming y estrategia de contenido para startups y emprendedores creativos.",
    links: [
      { label: "tonicostudio.com", url: "https://tonicostudio.com" }
    ],

    photo: null,                  // "assets/photos/tonico-foto.jpg"
    photoCaption: "Campaña de lanzamiento 2024",

    myRole: "Dirección Creativa · Copy",
    context: "Branding completo · Naming · Copy web",
    challenge: "Construir una voz de marca que sonara humana y sofisticada sin caer en lo genérico del sector creativo.",

    campaignCopy: "No es diseño. Es carácter.",
    rational: "El racional partió de un insight claro: la mayoría de los estudios creativos suenan igual. Tónico necesitaba una voz que incomodara lo suficiente para ser recordada.",

    // Cada post se arrastra individualmente
    posts: [
      { src: null, caption: "Serie de identidad", url: null },  // "https://instagram.com/p/..."
      { src: null, caption: "Proceso creativo",   url: null },
      { src: null, caption: "Resultado final",     url: null }
    ],

    // Opcional: null si no aplica para este proyecto
    webPreview: null,             // "assets/web/tonico-preview.jpg"
    webUrl: "https://tonicostudio.com",

    // Íconos flotantes propios de la marca (emoji o ruta a imagen)
    floatingIcons: [
      { content: "♥", x: 800, y: 178 },
      { content: "♥", x: 484, y: 590 }
    ],

    // Agencia colaboradora (opcional — quitar si no aplica)
    agencia: null
    // agencia: {
    //   name: "ALG Digital",
    //   logoText: "ALG",          // texto si no hay imagen
    //   logo: null,               // "assets/logos/alg.png"
    //   position: { x: 52, y: 185 }  // posición en el board
    // }
  },

  {
    id: "modulo-marketing",
    brand: "Módulo Marketing",
    tagline: "Estrategia Digital",
    logoText: "MM",
    logo: null,

    description: "Agencia de marketing digital para PyMEs en Monterrey. Especialistas en campañas de performance y construcción de audiencias en redes sociales.",
    links: [
      { label: "modulomarketing.mx", url: "https://modulomarketing.mx" }
    ],

    photo: null,
    photoCaption: "Campaña de redes 2023",

    myRole: "Copywriting · Estrategia de contenido",
    context: "Copy de campaña · Social Media · Email",
    challenge: "Traducir conceptos de marketing complejo en mensajes que conectaran con dueños de negocio ocupados que no tienen tiempo de leer.",

    campaignCopy: "Tu negocio merece clientes que regresen.",
    rational: "Enfocamos la propuesta en el resultado emocional — la tranquilidad de tener clientes recurrentes — en lugar de hablar de herramientas o procesos.",

    posts: [
      { src: null, caption: "Campaña awareness",   url: null },
      { src: null, caption: "Post de conversión",  url: null },
      { src: null, caption: "Contenido educativo", url: null }
    ],

    webPreview: null,
    webUrl: "https://modulomarketing.mx",

    floatingIcons: [
      { content: "◆", x: 640, y: 240 },
      { content: "◆", x: 900, y:  90 }
    ],
    agencia: null
  },

  {
    id: "starters-for-startups",
    brand: "Starters for Startups",
    tagline: "Producto Interno · ALG Digital",
    logoText: "S4S",
    logo: null,

    description: "Producto de agencia diseñado para marcas en etapa temprana. Paquete de branding accesible que incluye naming, identidad visual y kit para redes sociales.",
    links: [],

    photo: null,
    photoCaption: "Brief ejecutivo 2025",

    myRole: "Conceptualización · Naming · Brief",
    context: "Desarrollo de producto · Copy · Estrategia",
    challenge: "Crear un producto que democratizara el branding de calidad sin devaluar el trabajo del equipo senior que lo supervisa.",

    campaignCopy: "La primera impresión de tu marca, bien hecha.",
    rational: "El copy debía hablar directo al founder que quiere verse profesional desde el día uno, sin el presupuesto de una marca consolidada.",

    posts: [
      { src: null, caption: "Propuesta visual", url: null },
      { src: null, caption: "Kit de identidad", url: null },
      { src: null, caption: "Social media",     url: null }
    ],

    webPreview: null,
    webUrl: null,           // Sin sitio — omite el browser mockup

    floatingIcons: [
      { content: "★", x: 640, y: 255 },
      { content: "★", x: 940, y:  80 }
    ],
    agencia: null
  }
];
