import thumbJudith from "@/assets/portfolio/judith.jpg";
import thumbLevelupInteriores from "@/assets/portfolio/levelup-interiores.jpg";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  link: string;
  tags: string[];
}

/** URL activa de Judith en Vercel (evitar judith-web.vercel.app — 404). */
export const JUDITH_PROJECT_URL = "https://cestasyeventosjudith.vercel.app";

export const PROJECTS: Project[] = [
  {
    id: "judith",
    title: "Judith Almansa",
    subtitle: "Organizadora de eventos",
    description:
      "Web cálida para cestas personalizadas y decoración de eventos en Málaga, orientada a captar clientes y presupuestos.",
    image: thumbJudith,
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
    imageAlt:
      "Miniatura del proyecto web LevelUp Interiores, empresa de reformas en Málaga",
    link: "https://levelupinteriores.es",
    tags: ["Reformas", "Málaga", "Proyecto propio"],
  },
];
