import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Globe, Smartphone, Lightbulb, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const WHATSAPP = "https://wa.me/34606899991";

export const Route = createFileRoute("/como-conseguir-clientes-negocio")({
  head: () => ({
    meta: [
      { title: "LevelUp Design Co." },
      { name: "description", content: "Guía de LevelUp Design Co. sobre diseño web, branding, SEO y automatización para conseguir clientes en Málaga." },
      { property: "og:title", content: "LevelUp Design Co." },
      { property: "og:description", content: "Diseño web y branding en Málaga, SEO y automatización para negocios." },
    ],
  }),
  component: Page,
});

function WhatsAppButton({ label = "Escríbeme por WhatsApp" }: { label?: string }) {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-brand text-brand-foreground px-6 py-3.5 rounded-md text-sm font-semibold shadow-[0_6px_20px_rgba(123,30,43,0.3)] transition-all hover:bg-[oklch(0.28_0.13_18)] hover:shadow-[0_10px_28px_rgba(123,30,43,0.45)] hover:-translate-y-0.5"
    >
      <MessageCircle className="h-4 w-4" />
      {label}
    </a>
  );
}

function Section({ title, icon: Icon, children }: { title: string; icon: React.ElementType; children: React.ReactNode }) {
  return (
    <section className="py-10 border-b border-border last:border-0">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-md bg-brand text-brand-foreground flex items-center justify-center shadow-sm">
          <Icon className="h-5 w-5" />
        </div>
        <h2 className="font-serif text-2xl md:text-3xl text-brand font-semibold">{title}</h2>
      </div>
      <div className="mt-4 text-ink leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

function Page() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-brand bg-brand-soft px-3 py-1.5 rounded-full">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              Guía práctica
            </div>
            <h1 className="mt-5 font-serif text-4xl md:text-6xl leading-[1.02] font-semibold text-ink">
              Cómo conseguir <span className="text-brand italic">clientes</span> para tu negocio
            </h1>
            <p className="mt-5 text-lg text-ink-soft max-w-xl">
              Lo que funciona hoy. Sin teoría, sin relleno.
            </p>
            <div className="mt-7"><WhatsAppButton /></div>
          </div>
        </section>

        {/* Contenido */}
        <article className="mx-auto max-w-3xl px-5">
          <Section title="Presencia online" icon={Globe}>
            <p>
              Si no apareces en Google, no existes. Lo mínimo: una web propia y una ficha de Google Business bien hecha.
            </p>
            <p className="text-ink-soft">Con eso ya estás por delante de la mayoría.</p>
          </Section>

          <Section title="WhatsApp como canal de ventas" icon={Smartphone}>
            <p>
              Es el canal más cómodo para tu cliente. Sin formularios, sin esperas: te escribe y vendes.
            </p>
            <p className="text-ink-soft">
              Pon un botón visible en tu web, Instagram y Google. ¿Quieres el sistema completo? Así montamos{" "}
              <Link to="/conseguir-clientes-malaga" className="text-brand font-medium underline underline-offset-2 hover:no-underline">
                web + WhatsApp en Málaga
              </Link>.
            </p>
          </Section>

          <Section title="Consejos que sí funcionan" icon={Lightbulb}>
            <ul className="space-y-2.5">
              {[
                "Responde en menos de 1 hora. Es la diferencia entre vender o no.",
                "Pide reseñas en Google a tus clientes contentos.",
                "Usa fotos reales de tu trabajo, nunca de banco de imágenes.",
                "Habla claro, sin tecnicismos. La gente compra cuando entiende.",
                "Mide qué te trae clientes y dobla la apuesta ahí.",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Section>
        </article>

        {/* Enlaces relacionados */}
        <section className="mx-auto max-w-3xl px-5 py-8">
          <div className="grid sm:grid-cols-2 gap-3">
            <Link to="/conseguir-clientes-malaga" className="group p-5 rounded-lg border border-border bg-background hover:border-brand hover:shadow-md transition-all">
              <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">Servicio</div>
              <div className="mt-1 font-serif text-lg text-ink flex items-center justify-between">Conseguir clientes <ArrowRight className="h-4 w-4 text-brand transition-transform group-hover:translate-x-1" /></div>
            </Link>
            <Link to="/pagina-web-malaga" className="group p-5 rounded-lg border border-border bg-background hover:border-brand hover:shadow-md transition-all">
              <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">Servicio</div>
              <div className="mt-1 font-serif text-lg text-ink flex items-center justify-between">Página web profesional <ArrowRight className="h-4 w-4 text-brand transition-transform group-hover:translate-x-1" /></div>
            </Link>
          </div>
        </section>

        {/* Cierre */}
        <section className="mx-auto max-w-4xl px-5 py-14">
          <div className="rounded-2xl bg-brand text-brand-foreground p-8 md:p-12 text-center shadow-[0_20px_50px_-15px_rgba(123,30,43,0.4)]">
            <h2 className="font-serif text-2xl md:text-3xl max-w-2xl mx-auto leading-tight">
              ¿Prefieres que lo montemos nosotros? Escríbenos por WhatsApp.
            </h2>
            <div className="mt-6 flex justify-center">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-background text-brand px-6 py-3.5 rounded-md text-sm font-semibold shadow-lg transition-all hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" />
                Escríbeme por WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
