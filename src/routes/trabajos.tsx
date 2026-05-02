import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import judith1 from "@/assets/judith-1.jpg";
import judith2 from "@/assets/judith-2.jpg";
import judith3 from "@/assets/judith-3.jpg";
import judith4 from "@/assets/judith-4.jpg";
import judith5 from "@/assets/judith-5.jpg";
import judith6 from "@/assets/judith-6.jpg";

const WHATSAPP = "https://wa.me/34606899991";

const GALLERY = [
  { src: judith1, alt: "Cesta de regalo con flores y productos gourmet" },
  { src: judith2, alt: "Mesa decorada para evento con centro floral" },
  { src: judith3, alt: "Cesta de boda con champán y rosas blancas" },
  { src: judith4, alt: "Cesta navideña con vinos y productos selectos" },
  { src: judith5, alt: "Decoración de cumpleaños con globos y tarta" },
  { src: judith6, alt: "Cesta corporativa con productos artesanos" },
];

export const Route = createFileRoute("/trabajos")({
  head: () => ({
    meta: [
      { title: "Nuestros trabajos — LevelUp Digital" },
      { name: "description", content: "Casos reales: identidad visual, web profesional y optimización digital. Cestas & Eventos Judith en Málaga." },
      { property: "og:title", content: "Nuestros trabajos — LevelUp Digital" },
      { property: "og:description", content: "Casos reales de identidad, web y presencia digital." },
    ],
  }),
  component: TrabajosPage,
});

function TrabajosPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-5xl px-5">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-brand transition-colors">
            <ArrowLeft className="h-4 w-4" /> Volver al inicio
          </Link>
          <div className="mt-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-brand">Nuestros clientes</div>
            <h1 className="mt-2 font-serif text-4xl md:text-5xl text-ink">Proyectos destacados</h1>
            <p className="mt-3 text-ink-soft max-w-2xl">Proyectos reales en los que he diseñado, desarrollado y optimizado la presencia digital completa.</p>
          </div>

          <article className="mt-12 rounded-2xl border border-border bg-background overflow-hidden">
            <div className="bg-brand-soft p-8 md:p-10 border-b border-border">
              <div className="text-xs font-semibold uppercase tracking-wider text-brand">Caso destacado</div>
              <h2 className="mt-2 font-serif text-3xl text-ink">Cestas &amp; Eventos Judith</h2>
              <p className="mt-3 text-ink-soft max-w-2xl leading-relaxed">
                Diseño de identidad visual, creación de página web profesional y optimización digital completa para negocio de cestas personalizadas y eventos en Málaga.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Identidad visual", "Web profesional", "Google Business", "Redes sociales"].map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-background border border-border text-ink-soft">{t}</span>
                ))}
              </div>
            </div>
            <div className="p-6 md:p-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {GALLERY.map((img, i) => (
                  <div key={i} className="aspect-[4/3] rounded-lg overflow-hidden border border-border bg-muted">
                    <img
                      src={img.src}
                      alt={img.alt}
                      width={1024}
                      height={768}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </article>

          <div className="mt-12 text-center">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand text-brand-foreground px-5 py-3 rounded-md text-sm font-medium transition-shadow hover:shadow-[0_8px_24px_rgba(123,30,43,0.28)]"
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
