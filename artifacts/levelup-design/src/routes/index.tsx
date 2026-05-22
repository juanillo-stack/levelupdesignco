import { createFileRoute } from "@tanstack/react-router";
import IndexPage from "@/pages/index";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "LevelUp Design Co. | Diseño web, automatización y presencia online",
      },
      {
        name: "description",
        content:
          "Estudio digital especializado en diseño web profesional, automatización, branding digital y optimización de negocios.",
      },
      {
        property: "og:title",
        content:
          "LevelUp Design Co. | Diseño web, automatización y presencia online",
      },
      {
        property: "og:description",
        content:
          "Diseño web, automatización y presencia digital profesional para empresas.",
      },
    ],
  }),
  component: IndexPage,
});
