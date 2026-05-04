import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, AlertTriangle, CheckCircle2, Smartphone, Layout, MousePointerClick, Sparkles, ShieldCheck, Users } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const WHATSAPP = "https://wa.me/34606899991";

export const Route = createFileRoute("/pagina-web-malaga")({
  head: () => ({
    meta: [
      { title: "Crear página web en Málaga — LevelUp Digital" },
      { name: "description", content: "Creamos tu página web profesional en Málaga. Webs simples, rápidas y pensadas para convertir visitas en clientes." },
      { property: "og:title", content: "Creamos tu página web profesional en Málaga" },
      { property: "og:description", content: "No es solo una web: es una herramienta para conseguir clientes." },
    ],
  }),
  component: Page,
});

function WhatsAppButton({ label = "Solicitar web por WhatsApp" }: { label?: string }) {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-brand text-brand-foreground px-5 py-3 rounded-md text-sm font-medium shadow-[0_4px_14px_rgba(123,30,43,0.25)] transition-all hover:bg-[oklch(0.32_0.12_18)] hover:shadow-[0_8px_24px_rgba(123,30,43,0.35)]"
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
        <section className="border-b border-border bg-gradient-to-br from-brand-soft/60 to-background">
          <div className="mx-auto max-w-4xl px-5 py-14 md:py-20">
            <div className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.14em] uppercase text-brand bg-brand-soft px-3 py-1.5 rounded-full">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              Diseño web · Málaga
            </div>
            <h1 className="mt-5 font-serif text-4xl md:text-5xl leading-[1.05] font-semibold text-ink">
              Creamos tu <span className="text-brand italic">página web profesional</span> en Málaga
            </h1>
            <p className="mt-4 text-lg text-ink-soft max-w-2xl">
              No es solo una web: es una herramienta para conseguir clientes.
            </p>
            <div className="mt-6"><WhatsAppButton /></div>
          </div>
        </section>

        {/* Problema */}
        <section className="mx-auto max-w-4xl px-5 py-10">
          <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">El problema</div>
          <h2 className="mt-1.5 font-serif text-2xl md:text-3xl text-ink">Una web bonita no es una web que vende</h2>
          <div className="mt-5 grid md:grid-cols-2 gap-3">
            {[
              "Muchos negocios tienen una web que está ahí, pero no genera ni una llamada.",
              "Otros directamente no tienen web y pierden clientes que les buscan en Google.",
            ].map((t) => (
              <div key={t} className="p-4 rounded-lg border border-border bg-background">
                <AlertTriangle className="h-5 w-5 text-brand" />
                <p className="mt-2 text-sm text-ink leading-relaxed">{t}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Solución */}
        <section className="border-y border-border bg-brand-soft/30">
          <div className="mx-auto max-w-4xl px-5 py-10">
            <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">La solución</div>
            <h2 className="mt-1.5 font-serif text-2xl md:text-3xl text-ink">Webs simples, rápidas y enfocadas en convertir</h2>
            <p className="mt-3 text-ink-soft max-w-2xl">
              Diseñamos cada web pensando en una sola cosa: que la persona que entra acabe escribiéndote.
            </p>
          </div>
        </section>

        {/* Qué incluye */}
        <section className="mx-auto max-w-4xl px-5 py-10">
          <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">Qué incluye</div>
          <h2 className="mt-1.5 font-serif text-2xl md:text-3xl text-ink">Lo que llevas incluido</h2>
          <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { i: Layout, t: "Diseño profesional", d: "Imagen cuidada y a tu marca." },
              { i: Smartphone, t: "Adaptada al móvil", d: "Se ve perfecta en cualquier pantalla." },
              { i: MessageCircle, t: "Botón directo de WhatsApp", d: "Contacto en un solo clic." },
              { i: MousePointerClick, t: "Estructura para captar", d: "Cada sección guía al cliente a contactar." },
            ].map(({ i: Icon, t, d }) => (
              <div key={t} className="p-4 rounded-lg border border-border bg-background hover:border-brand/40 transition-colors">
                <div className="h-8 w-8 rounded-md bg-brand-soft text-brand flex items-center justify-center">
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="mt-2 font-serif text-base text-ink">{t}</h3>
                <p className="mt-1 text-xs text-ink-soft leading-snug">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-6"><WhatsAppButton /></div>
        </section>

        {/* Beneficios */}
        <section className="border-y border-border bg-brand-soft/20">
          <div className="mx-auto max-w-4xl px-5 py-10">
            <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">Beneficios</div>
            <h2 className="mt-1.5 font-serif text-2xl md:text-3xl text-ink">Lo que ganas teniendo una web bien hecha</h2>
            <div className="mt-5 grid md:grid-cols-3 gap-3">
              {[
                { i: Sparkles, t: "Mejor imagen", d: "Tu negocio se percibe más serio y profesional." },
                { i: ShieldCheck, t: "Más confianza", d: "El cliente decide más rápido cuando ve algo cuidado." },
                { i: Users, t: "Más clientes", d: "Más contactos entrando cada semana." },
              ].map(({ i: Icon, t, d }) => (
                <div key={t} className="p-4 rounded-lg border border-border bg-background">
                  <div className="h-8 w-8 rounded-md bg-brand-soft text-brand flex items-center justify-center">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="mt-2 font-serif text-base text-ink">{t}</h3>
                  <p className="mt-1 text-sm text-ink-soft">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="mx-auto max-w-4xl px-5 py-12">
          <div className="rounded-2xl border border-border bg-gradient-to-br from-brand-soft to-background p-7 md:p-9 text-center">
            <h2 className="font-serif text-2xl md:text-[1.85rem] text-ink max-w-2xl mx-auto leading-tight">
              Si necesitas una web que realmente te traiga clientes, escríbeme por WhatsApp
            </h2>
            <div className="mt-5 flex justify-center"><WhatsAppButton /></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
