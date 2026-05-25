import thumbCarlos from "@/assets/portfolio/carlos-scalera.jpg";
import thumbJudith from "@/assets/portfolio/judith.jpg";
import thumbLevelupInteriores from "@/assets/portfolio/levelup-interiores.jpg";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  /** Punto focal CSS para object-position (ej. "50% 30%") */
  imagePosition: string;
  imageAlt: string;
  link: string;
  tags: string[];
}

export const CARLOS_SCALERA_PROJECT_URL = "https://carloscalerasax.vercel.app";
export const JUDITH_PROJECT_URL = "https://cestasyeventosjudith.vercel.app";

const SEO_DESCRIPTION =
  "Proyectos reales de LevelUp Design Co.: Carlos Scalera, Judith Ponce y LevelUp Interiores. Diseño web profesional y presencia digital premium.";

export const TRABAJOS_SEO = {
  title: "Trabajos de diseño web y branding | LevelUp Design Co.",
  description: SEO_DESCRIPTION,
} as const;

export const PROJECTS: Project[] = [
  {
    id: "carlos-scalera",
    title: "Carlos Scalera",
    subtitle: "Saxofonista para eventos premium",
    description:
      "Página web profesional creada para reforzar la presencia online del artista, facilitar consultas para bodas y eventos exclusivos y transmitir una imagen elegante y memorable.",
    image: thumbCarlos,
    imagePosition: "50% 38%",
    imageAlt:
      "Miniatura del proyecto web de Carlos Scalera, saxofonista profesional para eventos premium",
    link: CARLOS_SCALERA_PROJECT_URL,
    tags: ["Eventos premium", "Branding", "Captación"],
  },
  {
    id: "judith",
    title: "Judith Ponce",
    subtitle: "Cestas y decoración de eventos",
    description:
      "Sitio web profesional para mostrar servicios de cestas personalizadas y decoración en Málaga, facilitar el contacto con clientes y convertir visitas en solicitudes de presupuesto.",
    image: thumbJudith,
    imagePosition: "52% 28%",
    imageAlt:
      "Miniatura del proyecto web de Judith Ponce, organizadora de eventos en Málaga",
    link: JUDITH_PROJECT_URL,
    tags: ["Eventos", "Málaga", "Contacto directo"],
  },
  {
    id: "levelup-interiores",
    title: "LevelUp Interiores",
    subtitle: "Reformas integrales en Málaga",
    description:
      "Web de confianza para reformas de cocinas, baños e integrales, diseñada para mejorar la visibilidad digital, generar leads y facilitar presupuestos y contacto con nuevos clientes.",
    image: thumbLevelupInteriores,
    imagePosition: "55% 40%",
    imageAlt:
      "Miniatura del proyecto web LevelUp Interiores, empresa de reformas en Málaga",
    link: "https://levelupinteriores.es",
    tags: ["Reformas", "Málaga", "Captación de clientes"],
  },
];
