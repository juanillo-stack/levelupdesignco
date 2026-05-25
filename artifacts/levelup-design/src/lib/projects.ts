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
  "Proyectos reales de LevelUp Design Co.: Carlos Scalera, Judith Almansa y LevelUp Interiores. Diseño web profesional y presencia digital premium.";

export const TRABAJOS_SEO = {
  title: "Trabajos de diseño web y branding | LevelUp Design Co.",
  description: SEO_DESCRIPTION,
} as const;

export const PROJECTS: Project[] = [
  {
    id: "carlos-scalera",
    title: "Carlos Scalera",
    subtitle: "Web premium para saxofonista de eventos",
    description:
      "Sitio luxury negro y dorado para saxofón en eventos premium. React, Vite, SSR y despliegue en Vercel.",
    image: thumbCarlos,
    imagePosition: "50% 38%",
    imageAlt:
      "Miniatura del proyecto web de Carlos Scalera, saxofonista profesional para eventos premium",
    link: CARLOS_SCALERA_PROJECT_URL,
    tags: ["React", "Vite", "SSR", "Vercel"],
  },
  {
    id: "judith",
    title: "Judith Almansa",
    subtitle: "Organizadora de eventos",
    description:
      "Web cálida para cestas personalizadas y decoración de eventos en Málaga, orientada a captar clientes y presupuestos.",
    image: thumbJudith,
    imagePosition: "52% 28%",
    imageAlt:
      "Miniatura del proyecto web de Judith Almansa, organizadora de eventos en Málaga",
    link: JUDITH_PROJECT_URL,
    tags: ["Web profesional", "Eventos", "Málaga"],
  },
  {
    id: "levelup-interiores",
    title: "LevelUp Interiores",
    subtitle: "Empresa de reformas",
    description:
      "Web de confianza para reformas de cocinas, baños e integrales en Málaga, con foco en presupuestos y contacto directo.",
    image: thumbLevelupInteriores,
    imagePosition: "55% 40%",
    imageAlt:
      "Miniatura del proyecto web LevelUp Interiores, empresa de reformas en Málaga",
    link: "https://levelupinteriores.es",
    tags: ["Reformas", "Málaga", "Proyecto propio"],
  },
];
