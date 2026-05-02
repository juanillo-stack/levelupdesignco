import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, ArrowRight, Globe, Share2, MapPin, Bot, Search, PenTool, Code2, Gauge, ArrowUpRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import heroImg from "@/assets/hero-workspace.jpg";

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
      <div className="mx-auto max-w-6xl px-5 min-h-[calc(100vh-4rem)] flex items-center py-8">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-8 lg:gap-12 items-center w-full">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.14em] uppercase text-brand bg-brand-soft px-3 py-1.5 rounded-full">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              Consultoría digital · Málaga
            </div>
            <h1 className="mt-5 font-serif text-[2.2rem] sm:text-5xl lg:text-[3.4rem] leading-[1.05] font-semibold text-ink">
              Desarrollo Web &<br />
              <span className="text-brand italic">Optimización de Negocios</span>
            </h1>
            <p className="mt-4 font-serif text-xl md:text-2xl text-ink-soft italic">
              De idea a negocio.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand text-brand-foreground px-5 py-3 rounded-md text-sm font-medium shadow-[0_4px_14px_rgba(123,30,43,0.25)] transition-all hover:bg-[oklch(0.32_0.12_18)] hover:shadow-[0_8px_24px_rgba(123,30,43,0.35)]"
              >
                <MessageCircle className="h-4 w-4" />
                Solicitar asesoramiento por WhatsApp
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center gap-2 border border-border bg-background px-5 py-3 rounded-md text-sm font-medium text-ink transition-all hover:border-brand/40 hover:shadow-sm"
              >
                Ver servicios
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="relative">
            <div aria-hidden className="absolute -inset-3 bg-gradient-to-tr from-brand-soft to-transparent rounded-2xl -z-10" />
            <img
              src={heroImg}
              alt="Escritorio profesional con tonos burdeos frente a ventanal"
              width={1536}
              height={1024}
              className="rounded-xl shadow-[0_20px_50px_-20px_rgba(0,0,0,0.25)] border border-border/60 w-full h-auto object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemSolution() {
  return (
    <section className="bg-brand-soft/40 border-b border-border">
      <div className="mx-auto max-w-5xl px-5 py-8 grid md:grid-cols-2 gap-3">
        <div className="bg-background border border-border rounded-xl p-5">
          <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft">Problema</div>
          <p className="mt-2 font-serif text-lg text-ink leading-snug">
            Muchos negocios tienen presencia online, pero no está bien organizada.
          </p>
        </div>
        <div className="bg-brand text-brand-foreground rounded-xl p-5">
          <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-foreground/70">Solución</div>
          <p className="mt-2 font-serif text-lg leading-snug">
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
    <section id="servicios" className="mx-auto max-w-5xl px-5 py-10">
      <div className="max-w-2xl">
        <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">Servicios</div>
        <h2 className="mt-1.5 font-serif text-2xl md:text-3xl text-ink">Lo que hago por tu negocio</h2>
      </div>
      <div className="mt-5 grid grid-cols-2 lg:grid-cols-4 gap-2.5">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="p-4 rounded-lg border border-border bg-background hover:border-brand/40 hover:shadow-[0_8px_20px_-12px_rgba(123,30,43,0.25)] transition-all">
            <div className="h-8 w-8 rounded-md bg-brand-soft text-brand flex items-center justify-center">
              <Icon className="h-4 w-4" />
            </div>
            <h3 className="mt-2.5 font-serif text-base text-ink leading-tight">{title}</h3>
            <p className="mt-1 text-xs text-ink-soft leading-relaxed">{desc}</p>
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
    <section id="como-trabajo" className="border-y border-border bg-brand-soft/20">
      <div className="mx-auto max-w-3xl px-5 py-10">
        <div className="flex items-end justify-between flex-wrap gap-3 mb-6">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">Método</div>
            <h2 className="mt-1.5 font-serif text-2xl md:text-3xl text-ink">Cómo trabajo</h2>
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
          <div aria-hidden className="absolute left-[15px] top-2 bottom-2 w-px bg-border" />
          {steps.map(({ n, icon: Icon, title, desc }) => (
            <li key={n} className="relative pl-12 pb-5 last:pb-0">
              <div className="absolute left-0 top-0 h-8 w-8 rounded-full bg-background border border-brand/30 flex items-center justify-center shadow-sm">
                <Icon className="h-4 w-4 text-brand" />
              </div>
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-xs text-brand/60 tracking-wider">{n}</span>
                <h3 className="font-serif text-lg text-ink">{title}</h3>
              </div>
              <p className="mt-0.5 text-sm text-ink-soft">{desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-10">
      <div className="rounded-2xl border border-border bg-gradient-to-br from-brand-soft to-background p-7 md:p-9 text-center">
        <h2 className="font-serif text-2xl md:text-[1.85rem] text-ink max-w-2xl mx-auto leading-tight">
          Empieza a mejorar tu negocio desde hoy
        </h2>
        <div className="mt-5 flex justify-center">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand text-brand-foreground px-5 py-3 rounded-md text-sm font-medium shadow-[0_4px_14px_rgba(123,30,43,0.25)] transition-all hover:bg-[oklch(0.32_0.12_18)] hover:shadow-[0_8px_24px_rgba(123,30,43,0.35)]"
          >
            <MessageCircle className="h-4 w-4" />
            Solicitar asesoramiento por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
