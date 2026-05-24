import thumbJudith from "@/assets/portfolio/judith.jpg";
import thumbLevelupInteriores from "@/assets/portfolio/levelup-interiores.jpg";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  /** Clases Tailwind para el punto focal del recorte (object-cover) */
  imagePosition: string;
  imageAlt: string;
  link: string;
  tags: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "judith",
    title: "Judith Almansa",
    subtitle: "Organizadora de eventos",
    description:
      "Web cálida para cestas personalizadas y decoración de eventos en Málaga, orientada a captar clientes y presupuestos.",
    image: thumbJudith,
    imagePosition: "object-[center_42%]",
    imageAlt:
      "Detalle de cesta personalizada de la web de Judith Almansa, organizadora de eventos en Málaga",
    link: "https://cestasyeventosjudith.vercel.app",
    tags: ["Web profesional", "Eventos", "Málaga"],
  },
  {
    id: "levelup-interiores",
    title: "LevelUp Interiores",
    subtitle: "Empresa de reformas",
    description:
      "Web de confianza para reformas de cocinas, baños e integrales en Málaga, con foco en presupuestos y contacto directo.",
    image: thumbLevelupInteriores,
    imagePosition: "object-[58%_center]",
    imageAlt:
      "Interior de cocina reformada en la web de LevelUp Interiores, empresa de reformas en Málaga",
    link: "https://levelupinteriores.es",
    tags: ["Reformas", "Málaga", "Proyecto propio"],
  },
];
