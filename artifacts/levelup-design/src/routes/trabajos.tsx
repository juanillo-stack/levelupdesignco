import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Projects } from "@/components/sections/Projects";

const WHATSAPP = "https://wa.me/34606899991";

export const Route = createFileRoute("/trabajos")({
  head: () => ({
    meta: [
      { title: "Trabajos de diseño web y branding | LevelUp Design Co." },
      {
        name: "description",
        content:
          "Proyectos reales de LevelUp Design Co.: Judith Almansa (eventos en Málaga) y LevelUp Interiores (reformas). Diseño web profesional y presencia digital premium.",
      },
      {
        property: "og:title",
        content: "Trabajos de diseño web y branding | LevelUp Design Co.",
      },
      {
        property: "og:description",
        content:
          "Proyectos reales de LevelUp Design Co.: Judith Almansa (eventos en Málaga) y LevelUp Interiores (reformas). Diseño web profesional y presencia digital premium.",
      },
    ],
  }),
  component: TrabajosPage,
});

function TrabajosPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-6xl px-5">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-brand transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Link>
        </div>

        <Projects />

        <div className="mt-16 text-center">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand text-white px-6 py-3 rounded-lg text-sm font-medium transition-all hover:shadow-[0_12px_32px_rgba(123,30,43,0.3)] hover:scale-105"
          >
            <MessageCircle className="h-4 w-4" />
            Quiero un proyecto así
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
