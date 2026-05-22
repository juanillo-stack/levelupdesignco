import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Projects } from "@/components/sections/Projects";

const WHATSAPP = "https://wa.me/34606899991";
const trabajosBackground =
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=80";

export const Route = createFileRoute("/trabajos")({
  head: () => ({
    meta: [
      { title: "LevelUp Design Co." },
      {
        name: "description",
        content:
          "Trabajos de LevelUp Design Co.: diseño web y branding en Málaga, SEO y automatización para proyectos con presencia digital profesional.",
      },
      {
        property: "og:title",
        content: "LevelUp Design Co.",
      },
      {
        property: "og:description",
        content:
          "Diseño web y branding en Málaga, SEO y automatización para trabajos digitales premium.",
      },
    ],
  }),
  component: TrabajosPage,
});

function TrabajosPage() {
  return (
    <div
      className="min-h-screen bg-slate-950 bg-cover bg-center"
      style={{
        backgroundImage: `url(${trabajosBackground})`,
        backgroundPosition: "center top",
      }}
    >
      <Header />
      <main className="relative overflow-hidden pt-24 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/96 via-slate-950/82 to-slate-950/96" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,160,90,0.09),transparent_22%),radial-gradient(circle_at_bottom_left,rgba(123,30,43,0.18),transparent_28%)]" />
        <div className="relative z-10">
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
        </div>
      </main>
      <Footer />
    </div>
  );
}
