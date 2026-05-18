import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
const WHATSAPP = "https://wa.me/34606899991";


export const Route = createFileRoute("/trabajos")({
  head: () => ({
    meta: [
      { title: "Nuestros trabajos — LevelUp Design Co." },
      { name: "description", content: "Casos reales: identidad visual, web profesional y optimización digital. Cestas & Eventos Judith en Málaga." },
      { property: "og:title", content: "Nuestros trabajos — LevelUp Design Co." },
      { property: "og:description", content: "Casos reales de identidad, web y presencia digital." },
    ],
  }),
  component: TrabajosPage,
});

function TrabajosPage() {
  const highlights = [
    {
      title: "Identidad visual clara",
      description: "Marca definida para conectar con clientes reales.",
    },
    {
      title: "Web profesional",
      description: "Diseño pensado para convertir visitas en mensajes.",
    },
    {
      title: "Google Business optimizado",
      description: "Apareces en búsquedas locales cuando más importa.",
    },
    {
      title: "WhatsApp directo",
      description: "Sistema listo para que hablen contigo desde el primer clic.",
    },
    {
      title: "Procesos simples",
      description: "Entrega rápida con comunicación clara en cada paso.",
    },
    {
      title: "Foco en resultados",
      description: "Cada proyecto se orienta a más contactos y mejores conversiones.",
    },
  ];
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
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {highlights.map((item) => (
                  <div key={item.title} className="rounded-3xl border border-border bg-brand-soft/70 p-5">
                    <h3 className="font-serif text-lg text-ink font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.description}</p>
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
