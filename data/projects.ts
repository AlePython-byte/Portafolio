import type { Localized } from "@/lib/types";

export type ProjectDevice = "desktop" | "phone" | "watch" | "game" | "web";

export type Project = {
  id: string;
  featured: boolean; // true = cartucho principal; false = fila "Más proyectos"
  title: string;
  description: Localized;
  status: Localized | null;
  tags: string[];
  device: ProjectDevice;
  image: string | null; // null = placeholder dibujado con tokens
  imageAlt: Localized;
  githubUrl: string;
  demoUrl: string | null; // null = demo pendiente
};

export type ProjectsCopy = {
  title: Localized;
  courseHeading: Localized;
  moreHeading: Localized;
  github: Localized;
  demo: Localized;
  demoSoon: Localized;
  newTab: Localized;
};

export const projectsCopy: ProjectsCopy = {
  title: { es: "Proyectos", en: "Projects" },
  courseHeading: { es: "Proyectos de la materia", en: "Course projects" },
  moreHeading: { es: "Más proyectos", en: "More projects" },
  github: { es: "GitHub", en: "GitHub" },
  demo: { es: "Ver demo", en: "View demo" },
  demoSoon: { es: "Demo próxima", en: "Demo coming soon" },
  newTab: {
    es: "(se abre en una pestaña nueva)",
    en: "(opens in a new tab)",
  },
};

export const projects: Project[] = [
  {
    id: "vision2code",
    featured: true,
    title: "Vision2Code",
    description: {
      es: "App de escritorio que convierte capturas de interfaces en código React + Tailwind. Analiza la imagen con IA, genera el proyecto y lo muestra en un editor con vista previa en vivo.",
      en: "Desktop app that turns interface screenshots into React + Tailwind code. It analyzes the image with AI, generates the project and shows it in an editor with live preview.",
    },
    status: null,
    tags: [
      "Tauri",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "NestJS",
      "Supabase",
      "PostgreSQL",
    ],
    device: "desktop",
    image: null,
    imageAlt: {
      es: "Vista previa provisional de Vision2Code: ventana de escritorio",
      en: "Placeholder preview of Vision2Code: desktop window",
    },
    githubUrl: "https://github.com/AlePython-byte/vision2code",
    demoUrl: null,
  },
  {
    id: "zerowaste-eats",
    featured: true,
    title: "ZeroWaste Eats",
    description: {
      es: "Aplicación móvil que busca reducir el desperdicio de alimentos conectando restaurantes y comercios con usuarios que pueden comprar productos excedentes a precios reducidos.",
      en: "Mobile app that aims to reduce food waste by connecting restaurants and shops with users who can buy surplus products at reduced prices.",
    },
    status: null,
    tags: [
      "Kotlin",
      "Jetpack Compose",
      "Material 3",
      "NestJS",
      "PostgreSQL",
      "PostGIS",
      "Supabase",
    ],
    device: "phone",
    image: null,
    imageAlt: {
      es: "Vista previa provisional de ZeroWaste Eats: pantalla de celular",
      en: "Placeholder preview of ZeroWaste Eats: phone screen",
    },
    githubUrl: "https://github.com/AlePython-byte/zerowaste-eats",
    demoUrl: null,
  },
  {
    id: "lumina-wear",
    featured: true,
    title: "LuminaWear",
    description: {
      es: "App para Wear OS que controla luces simuladas por habitación: ajusta el brillo, activa escenas y gestiona favoritos desde el reloj.",
      en: "Wear OS app that controls simulated lights by room: adjust brightness, activate scenes and manage favorites from the watch.",
    },
    status: { es: "En desarrollo", en: "In development" },
    tags: ["Kotlin", "Jetpack Compose", "Wear OS", "Material 3"],
    device: "watch",
    image: null,
    imageAlt: {
      es: "Vista previa provisional de LuminaWear: pantalla de reloj",
      en: "Placeholder preview of LuminaWear: watch screen",
    },
    githubUrl: "https://github.com/AlePython-byte/lumina-wear",
    demoUrl: null,
  },
  {
    id: "lullaby",
    featured: true,
    title: "LULLABY",
    description: {
      es: "Juego 3D de terror estilo roguelike, en preproducción.",
      en: "Roguelike-style 3D horror game, in pre-production.",
    },
    status: { es: "En preproducción", en: "In pre-production" },
    tags: ["Godot 4", "C#", "Blender"],
    device: "game",
    image: null,
    imageAlt: {
      es: "Vista previa provisional de LULLABY: pantalla de videojuego",
      en: "Placeholder preview of LULLABY: game screen",
    },
    githubUrl: "https://github.com/AlePython-byte/LULLABY",
    demoUrl: null,
  },
  {
    id: "ganaderia-40",
    featured: false,
    title: "Ganadería 4.0",
    description: {
      es: "Backend para monitoreo ganadero con collares IoT, telemetría GPS, geocercas y alertas operativas.",
      en: "Backend for cattle monitoring with IoT collars, GPS telemetry, geofences and operational alerts.",
    },
    status: null,
    tags: ["Java", "Spring Boot", "PostgreSQL", "Docker", "GitHub Actions"],
    device: "web",
    image: null,
    imageAlt: {
      es: "Vista previa provisional de Ganadería 4.0: página web",
      en: "Placeholder preview of Ganadería 4.0: web page",
    },
    githubUrl: "https://github.com/AlePython-byte/ganaderia-backend",
    demoUrl: "https://ganaderia-40.vercel.app/dashboard",
  },
  {
    id: "pulseburn",
    featured: false,
    title: "PulseBurn",
    description: { es: "Reproductor de música.", en: "Music player." },
    status: null,
    tags: [],
    device: "web",
    image: null,
    imageAlt: {
      es: "Vista previa provisional de PulseBurn: página web",
      en: "Placeholder preview of PulseBurn: web page",
    },
    githubUrl: "https://github.com/AlePython-byte/PulseBurn-Player",
    demoUrl: "https://pulse-burn-player.vercel.app/",
  },
  {
    id: "bandsync",
    featured: false,
    title: "BandSync",
    description: {
      es: "Sistema para gestionar bandas musicales.",
      en: "System to manage music bands.",
    },
    status: null,
    tags: ["Java", "MongoDB"],
    device: "web",
    image: null,
    imageAlt: {
      es: "Vista previa provisional de BandSync: página web",
      en: "Placeholder preview of BandSync: web page",
    },
    githubUrl: "https://github.com/AlePython-byte/BandSync",
    demoUrl: "https://bandsync-front.vercel.app/login",
  },
];
