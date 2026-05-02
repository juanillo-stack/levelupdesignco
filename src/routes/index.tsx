import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, ArrowRight, Globe, Share2, MapPin, Bot, Search, PenTool, Code2, Gauge, ArrowUpRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const WHATSAPP = "https://wa.me/34606899991";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LevelUp Digital — Desarrollo Web & Optimización de Negocios" },
      { name: "description", content: "De idea a negocio. Desarrollo web profesional y optimización digital para captar más clientes. Juan Leiva, Málaga." },
      { property: "og:title", content: "LevelUp Digital — Desarrollo Web & Optimización de Negocios" },
      { property: "og:description", content: "De idea a negocio. Web, redes, Google Business y automatización con WhatsApp." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <Hero />
        <ProblemSolution />
        <Services />
        <HowIWork />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      {/* Subtle background accents */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-brand-soft blur-3xl opacity-70" />
        <div className="absolute -bottom-40 -left-32 h-[380px] w-[380px] rounded-full bg-brand-soft blur-3xl opacity-60" />
      </div>

      <div className="mx-auto max-w-5xl px-5 min-h-[calc(100vh-4rem)] flex flex-col justify-center py-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.14em] uppercase text-brand bg-brand-soft px-3 py-1.5 rounded-full">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Consultoría digital · Málaga
          </div>
          <h1 className="mt-6 font-serif text-[2.4rem] sm:text-5xl md:text-[3.6rem] leading-[1.05] font-semibold text-ink">
            Desarrollo Web &<br className="hidden sm:block" />
            <span className="text-brand italic"> Optimización de Negocios</span>
          </h1>
          <p className="mt-5 font-serif text-xl md:text-2xl text-ink-soft italic">
            De idea a negocio.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand text-brand-foreground px-6 py-3.5 rounded-md text-sm font-medium shadow-[0_4px_14px_rgba(123,30,43,0.25)] transition-all hover:bg-[oklch(0.32_0.12_18)] hover:shadow-[0_8px_24px_rgba(123,30,43,0.35)]"
            >
              <MessageCircle className="h-4 w-4" />
              Solicitar asesoramiento por WhatsApp
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center gap-2 border border-border bg-background px-6 py-3.5 rounded-md text-sm font-medium text-ink transition-all hover:border-brand/40 hover:shadow-sm"
            >
              Ver servicios
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Subtle trust line */}
          <div className="mt-10 flex items-center justify-center gap-6 text-xs text-ink-soft">
            <span className="flex items-center gap-1.5"><span className="h-1 w-1 rounded-full bg-brand" /> Web profesional</span>
            <span className="flex items-center gap-1.5"><span className="h-1 w-1 rounded-full bg-brand" /> Redes optimizadas</span>
            <span className="flex items-center gap-1.5"><span className="h-1 w-1 rounded-full bg-brand" /> Automatización</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemSolution() {
  return (
    <section className="bg-brand-soft/40 border-b border-border">
      <div className="mx-auto max-w-5xl px-5 py-10 grid md:grid-cols-2 gap-4">
        <div className="bg-background border border-border rounded-xl p-6">
          <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft">Problema</div>
          <p className="mt-2 font-serif text-xl text-ink leading-snug">
            Muchos negocios tienen presencia online, pero no está bien organizada.
          </p>
        </div>
        <div className="bg-brand text-brand-foreground rounded-xl p-6">
          <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-foreground/70">Solución</div>
          <p className="mt-2 font-serif text-xl leading-snug">
            Organizo tu negocio digital para que funcione y genere clientes.
          </p>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    { icon: Globe, title: "Página web profesional", desc: "Diseño moderno orientado a captar clientes." },
    { icon: Share2, title: "Redes sociales", desc: "Perfiles cuidados y coherentes." },
    { icon: MapPin, title: "Google Business", desc: "Más visibilidad local." },
    { icon: Bot, title: "Automatización WhatsApp", desc: "Atención rápida y eficiente." },
  ];
  return (
    <section id="servicios" className="mx-auto max-w-5xl px-5 py-12">
      <div className="max-w-2xl">
        <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">Servicios</div>
        <h2 className="mt-1.5 font-serif text-3xl md:text-4xl text-ink">Lo que hago por tu negocio</h2>
      </div>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="p-5 rounded-xl border border-border bg-background hover:border-brand/40 hover:shadow-[0_8px_24px_-12px_rgba(123,30,43,0.25)] transition-all">
            <div className="h-9 w-9 rounded-lg bg-brand-soft text-brand flex items-center justify-center">
              <Icon className="h-4.5 w-4.5" />
            </div>
            <h3 className="mt-3 font-serif text-lg text-ink leading-tight">{title}</h3>
            <p className="mt-1.5 text-sm text-ink-soft leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function HowIWork() {
  const steps = [
    { n: "01", icon: Search, title: "Analizo", desc: "Tu negocio y objetivos" },
    { n: "02", icon: PenTool, title: "Diseño", desc: "Tu presencia digital" },
    { n: "03", icon: Code2, title: "Desarrollo", desc: "Web y herramientas" },
    { n: "04", icon: Gauge, title: "Optimizo", desc: "Todo funcionando" },
  ];
  return (
    <section id="como-trabajo" className="bg-brand-soft/30 border-y border-border">
      <div className="mx-auto max-w-3xl px-5 py-12">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">Método</div>
            <h2 className="mt-1.5 font-serif text-3xl md:text-4xl text-ink">Cómo trabajo</h2>
          </div>
          <Link
            to="/trabajos"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-brand border-b border-border hover:border-brand pb-0.5 transition-colors"
          >
            Ver nuestros trabajos
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <ol className="relative">
          {/* Vertical line */}
          <div aria-hidden className="absolute left-[15px] top-2 bottom-2 w-px bg-border" />
          {steps.map(({ n, icon: Icon, title, desc }) => (
            <li key={n} className="relative pl-12 pb-7 last:pb-0">
              <div className="absolute left-0 top-0 h-8 w-8 rounded-full bg-background border border-brand/30 flex items-center justify-center shadow-sm">
                <Icon className="h-4 w-4 text-brand" />
              </div>
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-sm text-brand/60 tracking-wider">{n}</span>
                <h3 className="font-serif text-xl text-ink">{title}</h3>
              </div>
              <p className="mt-1 text-sm text-ink-soft">{desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-14">
      <div className="rounded-2xl border border-border bg-gradient-to-br from-brand-soft to-background p-8 md:p-10 text-center">
        <h2 className="font-serif text-2xl md:text-[2rem] text-ink max-w-2xl mx-auto leading-tight">
          Empieza a mejorar tu negocio desde hoy
        </h2>
        <div className="mt-6 flex justify-center">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand text-brand-foreground px-6 py-3.5 rounded-md text-sm font-medium shadow-[0_4px_14px_rgba(123,30,43,0.25)] transition-all hover:bg-[oklch(0.32_0.12_18)] hover:shadow-[0_8px_24px_rgba(123,30,43,0.35)]"
          >
            <MessageCircle className="h-4 w-4" />
            Solicitar asesoramiento por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
