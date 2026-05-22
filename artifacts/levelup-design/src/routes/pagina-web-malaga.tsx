import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Smartphone, Layout, MousePointerClick, ShieldCheck, Users, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const WHATSAPP = "https://wa.me/34606899991";

export const Route = createFileRoute("/pagina-web-malaga")({
  head: () => ({
    meta: [
      { title: "LevelUp Design Co." },
      { name: "description", content: "Diseño web y branding en Málaga para negocios que necesitan una web profesional, SEO local y automatización conectada a WhatsApp." },
      { property: "og:title", content: "LevelUp Design Co." },
      { property: "og:description", content: "Diseño web y branding en Málaga, SEO y automatización para negocios." },
    ],
  }),
  component: Page,
});

function WhatsAppButton({ label = "Necesito una web" }: { label?: string }) {
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

function Page() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-4xl px-5 py-16 md:py-24">
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-brand bg-brand-soft px-3 py-1.5 rounded-full">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              Diseño web · Málaga
            </div>
            <h1 className="mt-5 font-serif text-4xl md:text-6xl leading-[1.02] font-semibold text-ink">
              Tu <span className="text-brand italic">página web</span> que vende.
            </h1>
            <p className="mt-5 text-lg md:text-xl text-ink-soft max-w-xl">
              No es solo una web bonita. Es una herramienta para conseguir clientes.
            </p>
            <div className="mt-7"><WhatsAppButton /></div>
          </div>
        </section>

        {/* Qué incluye */}
        <section className="mx-auto max-w-4xl px-5 py-14">
          <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">Qué incluye</div>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl text-ink">Lo esencial. Bien hecho.</h2>
          <div className="mt-7 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { i: Layout, t: "Diseño profesional" },
              { i: Smartphone, t: "100% móvil" },
              { i: MessageCircle, t: "Botón WhatsApp" },
              { i: MousePointerClick, t: "Pensada para captar" },
            ].map(({ i: Icon, t }) => (
              <div key={t} className="p-5 rounded-lg border border-border bg-background hover:border-brand transition-all">
                <div className="h-9 w-9 rounded-md bg-brand text-brand-foreground flex items-center justify-center">
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="mt-3 font-serif text-base text-ink font-semibold">{t}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Beneficios */}
        <section className="border-y border-border bg-brand-soft/40">
          <div className="mx-auto max-w-4xl px-5 py-14">
            <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">Resultados</div>
            <h2 className="mt-2 font-serif text-3xl md:text-4xl text-ink">Lo que ganas</h2>
            <div className="mt-7 grid md:grid-cols-3 gap-3">
              {[
                { i: Users, t: "Más clientes", d: "Más contactos cada semana." },
                { i: MessageCircle, t: "Más contactos", d: "WhatsApp directo a tu móvil." },
                { i: ShieldCheck, t: "Más confianza", d: "Tu negocio se ve serio y profesional." },
              ].map(({ i: Icon, t, d }) => (
                <div key={t} className="p-5 rounded-lg border border-border bg-background">
                  <div className="h-9 w-9 rounded-md bg-brand text-brand-foreground flex items-center justify-center">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="mt-3 font-serif text-lg text-ink font-semibold">{t}</h3>
                  <p className="mt-1 text-sm text-ink-soft">{d}</p>
                </div>
              ))}
            </div>
            <div className="mt-8"><WhatsAppButton /></div>
          </div>
        </section>

        {/* Enlace siguiente */}
        <section className="mx-auto max-w-4xl px-5 py-10">
          <Link to="/conseguir-clientes-malaga" className="group flex items-center justify-between gap-4 p-5 rounded-lg border border-border bg-background hover:border-brand hover:shadow-md transition-all">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">Siguiente paso</div>
              <div className="mt-1 font-serif text-lg text-ink font-semibold">Sistema completo para conseguir clientes</div>
              <p className="mt-1 text-sm text-ink-soft">Web + WhatsApp para que el teléfono empiece a sonar.</p>
            </div>
            <div className="h-10 w-10 rounded-full bg-brand text-brand-foreground flex items-center justify-center shrink-0 transition-transform group-hover:translate-x-1">
              <TrendingUp className="h-4 w-4" />
            </div>
          </Link>
        </section>

        {/* CTA final */}
        <section className="mx-auto max-w-4xl px-5 py-14">
          <div className="rounded-2xl bg-brand text-brand-foreground p-8 md:p-12 text-center shadow-[0_20px_50px_-15px_rgba(123,30,43,0.4)]">
            <h2 className="font-serif text-2xl md:text-3xl max-w-2xl mx-auto leading-tight">
              ¿Necesitas una web que traiga clientes?
            </h2>
            <p className="mt-3 opacity-90">Cuéntame qué buscas por WhatsApp.</p>
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
