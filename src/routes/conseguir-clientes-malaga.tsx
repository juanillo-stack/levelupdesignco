import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, AlertTriangle, CheckCircle2, TrendingUp, Clock, Users, Search, Wrench, Phone, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const WHATSAPP = "https://wa.me/34606899991";

export const Route = createFileRoute("/conseguir-clientes-malaga")({
  head: () => ({
    meta: [
      { title: "Conseguir clientes en Málaga — LevelUp Digital" },
      { name: "description", content: "Sistema simple con web + WhatsApp para conseguir más clientes reales para tu negocio en Málaga. Sin depender del boca a boca." },
      { property: "og:title", content: "Cómo conseguir más clientes para tu negocio en Málaga" },
      { property: "og:description", content: "Montamos un sistema web + WhatsApp que te trae contactos reales, 24/7." },
    ],
  }),
  component: Page,
});

function WhatsAppButton({ label = "Solicitar asesoramiento por WhatsApp" }: { label?: string }) {
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
              Captación de clientes · Málaga
            </div>
            <h1 className="mt-5 font-serif text-4xl md:text-5xl leading-[1.05] font-semibold text-ink">
              Cómo conseguir más clientes <span className="text-brand italic">para tu negocio en Málaga</span>
            </h1>
            <p className="mt-4 text-lg text-ink-soft max-w-2xl">
              Si no te llegan clientes, te montamos un sistema simple con web + WhatsApp para generar contactos reales.
            </p>
            <div className="mt-6"><WhatsAppButton /></div>
          </div>
        </section>

        {/* Problema */}
        <section className="mx-auto max-w-4xl px-5 py-10">
          <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">El problema</div>
          <h2 className="mt-1.5 font-serif text-2xl md:text-3xl text-ink">Por qué muchos negocios no consiguen clientes</h2>
          <div className="mt-5 grid md:grid-cols-3 gap-3">
            {[
              "No reciben suficientes contactos cada mes para mantener el negocio creciendo.",
              "Dependen del boca a boca y de la suerte, sin un canal estable que les traiga gente nueva.",
              "No tienen presencia online real: o no tienen web, o la que tienen no les genera nada.",
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
            <h2 className="mt-1.5 font-serif text-2xl md:text-3xl text-ink">Un sistema simple que sí funciona</h2>
            <p className="mt-3 text-ink-soft max-w-2xl">
              Nada de fórmulas complicadas. Te montamos lo que de verdad genera contactos hoy:
            </p>
            <div className="mt-5 grid md:grid-cols-3 gap-3">
              {[
                { t: "Web optimizada", d: "Pensada para que el visitante entienda lo que ofreces y te escriba." },
                { t: "Contacto directo por WhatsApp", d: "Un clic y ya está hablando contigo. Sin formularios largos." },
                { t: "Estructura para captar", d: "Cada sección está diseñada para empujar al cliente a contactar." },
              ].map((x) => (
                <div key={x.t} className="p-4 rounded-lg border border-border bg-background">
                  <CheckCircle2 className="h-5 w-5 text-brand" />
                  <h3 className="mt-2 font-serif text-lg text-ink">{x.t}</h3>
                  <p className="mt-1 text-sm text-ink-soft leading-relaxed">{x.d}</p>
                </div>
              ))}
            </div>
            <div className="mt-6"><WhatsAppButton /></div>
          </div>
        </section>

        {/* Beneficios */}
        <section className="mx-auto max-w-4xl px-5 py-10">
          <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">Beneficios</div>
          <h2 className="mt-1.5 font-serif text-2xl md:text-3xl text-ink">Lo que vas a notar</h2>
          <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { i: Users, t: "Más contactos reales" },
              { i: TrendingUp, t: "Más ventas" },
              { i: Clock, t: "Sistema activo 24/7" },
              { i: Phone, t: "Sin depender de redes sociales" },
            ].map(({ i: Icon, t }) => (
              <div key={t} className="p-4 rounded-lg border border-border bg-background hover:border-brand/40 transition-colors">
                <div className="h-8 w-8 rounded-md bg-brand-soft text-brand flex items-center justify-center">
                  <Icon className="h-4 w-4" />
                </div>
                <p className="mt-2 font-serif text-base text-ink">{t}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Proceso */}
        <section className="border-y border-border bg-brand-soft/20">
          <div className="mx-auto max-w-3xl px-5 py-10">
            <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">Proceso</div>
            <h2 className="mt-1.5 font-serif text-2xl md:text-3xl text-ink">Cómo lo hacemos</h2>
            <ol className="mt-6 relative">
              <div aria-hidden className="absolute left-[15px] top-2 bottom-2 w-px bg-border" />
              {[
                { n: "01", i: Search, t: "Analizamos tu negocio", d: "Vemos qué ofreces, a quién y cómo te encuentran hoy." },
                { n: "02", i: Wrench, t: "Creamos tu sistema", d: "Web + WhatsApp listos para captar contactos." },
                { n: "03", i: MessageCircle, t: "Empiezas a recibir contactos", d: "Los clientes te escriben directos al móvil." },
              ].map(({ n, i: Icon, t, d }) => (
                <li key={n} className="relative pl-12 pb-5 last:pb-0">
                  <div className="absolute left-0 top-0 h-8 w-8 rounded-full bg-background border border-brand/30 flex items-center justify-center shadow-sm">
                    <Icon className="h-4 w-4 text-brand" />
                  </div>
                  <div className="flex items-baseline gap-3">
                    <span className="font-serif text-xs text-brand/60 tracking-wider">{n}</span>
                    <h3 className="font-serif text-lg text-ink">{t}</h3>
                  </div>
                  <p className="mt-1 text-sm text-ink-soft">{d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Credibilidad */}
        <section className="mx-auto max-w-3xl px-5 py-10">
          <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">Por qué nosotros</div>
          <h2 className="mt-1.5 font-serif text-2xl md:text-3xl text-ink">Trabajamos con negocios reales</h2>
          <p className="mt-3 text-ink-soft leading-relaxed">
            No vendemos humo ni promesas imposibles. Trabajamos con negocios locales y autónomos que necesitan algo concreto:
            que el teléfono suene y que entren contactos. Nos enfocamos en resultados prácticos, no en métricas que no significan nada.
          </p>
          <p className="mt-3 text-ink-soft leading-relaxed">
            Para que el sistema funcione bien, normalmente combinamos esto con una{" "}
            <Link to="/pagina-web-malaga" className="text-brand underline underline-offset-2 hover:no-underline">
              página web profesional pensada para convertir
            </Link>
            . Si quieres ver primero qué funciona y qué no, échale un vistazo a la{" "}
            <Link to="/como-conseguir-clientes-negocio" className="text-brand underline underline-offset-2 hover:no-underline">
              guía sobre cómo conseguir clientes
            </Link>
            .
          </p>
        </section>

        {/* Enlaces relacionados */}
        <section className="mx-auto max-w-4xl px-5 pb-4">
          <div className="grid sm:grid-cols-2 gap-3">
            <Link to="/pagina-web-malaga" className="group p-4 rounded-lg border border-border bg-background hover:border-brand/40 transition-all">
              <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">Servicio</div>
              <div className="mt-1 font-serif text-lg text-ink flex items-center justify-between">Página web profesional <ArrowRight className="h-4 w-4 text-brand transition-transform group-hover:translate-x-1" /></div>
              <p className="mt-1 text-sm text-ink-soft">Webs simples y rápidas pensadas para convertir visitas en clientes.</p>
            </Link>
            <Link to="/como-conseguir-clientes-negocio" className="group p-4 rounded-lg border border-border bg-background hover:border-brand/40 transition-all">
              <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">Guía</div>
              <div className="mt-1 font-serif text-lg text-ink flex items-center justify-between">Cómo conseguir clientes <ArrowRight className="h-4 w-4 text-brand transition-transform group-hover:translate-x-1" /></div>
              <p className="mt-1 text-sm text-ink-soft">Lo que realmente funciona hoy para atraer clientes a tu negocio.</p>
            </Link>
          </div>
        </section>

        {/* CTA final */}
        <section className="mx-auto max-w-4xl px-5 pb-12">
          <div className="rounded-2xl border border-border bg-gradient-to-br from-brand-soft to-background p-7 md:p-9 text-center">
            <h2 className="font-serif text-2xl md:text-[1.85rem] text-ink max-w-2xl mx-auto leading-tight">
              Si quieres empezar a recibir clientes, escríbeme por WhatsApp y vemos tu caso sin compromiso
            </h2>
            <div className="mt-5 flex justify-center"><WhatsAppButton /></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
