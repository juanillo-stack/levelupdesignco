import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Projects } from "@/components/sections/Projects";
import { TRABAJOS_SEO } from "@/lib/projects";

const WHATSAPP = "https://wa.me/34606899991";

export const Route = createFileRoute("/trabajos")({
  head: () => ({
    meta: [
      { title: TRABAJOS_SEO.title },
      { name: "description", content: TRABAJOS_SEO.description },
      { property: "og:title", content: TRABAJOS_SEO.title },
      { property: "og:description", content: TRABAJOS_SEO.description },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TRABAJOS_SEO.title },
      { name: "twitter:description", content: TRABAJOS_SEO.description },
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
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-brand transition-colors"
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
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
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
