import { Link } from "wouter";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Projects } from "@/components/sections/Projects";
import { SEO } from "@/components/SEO";
import { whatsappLinks } from "@/lib/site";

export default function TrabajosPage() {
  return (
    <div id="top" className="min-h-screen bg-slate-950">
      <SEO
        title="Trabajos de diseño web y branding | LevelUp Design Co."
        description="Proyectos digitales realizados por LevelUp Design Co.: diseño web profesional, presencia online y optimización para negocios reales."
        path="/trabajos"
      />
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
            href={whatsappLinks.budget}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 bg-brand text-white px-6 py-3 rounded-lg text-sm font-semibold transition-[transform,box-shadow,background-color] hover:-translate-y-0.5 hover:bg-[oklch(0.32_0.12_18)] hover:shadow-[0_12px_32px_rgba(123,30,43,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-soft sm:w-auto"
          >
            <MessageCircle className="h-4 w-4" />
            Solicitar presupuesto
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
