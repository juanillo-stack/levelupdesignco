import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, ArrowRight, Globe, Share2, MapPin, Bot, Search, PenTool, Code2, Gauge, ArrowUpRight, AtSign, Palette, Users, BookOpen } from "lucide-react";
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
    <div id="top" className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <Hero />
        <HowWeHelp />
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
    <section className="relative w-full border-b border-border overflow-hidden">
      {/* Imagen full width como fondo */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Escritorio profesional con tonos burdeos frente a ventanal"
          className="w-full h-full object-cover"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/30" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
      </div>

      {/* Contenido */}
      <div className="relative mx-auto max-w-6xl px-5 min-h-[calc(100vh-4rem)] flex items-center py-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.14em] uppercase text-brand bg-brand-soft/90 backdrop-blur px-3 py-1.5 rounded-full">
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
              className="inline-flex items-center gap-2 border border-border bg-background/90 backdrop-blur px-5 py-3 rounded-md text-sm font-medium text-ink transition-all hover:border-brand/40 hover:shadow-sm"
            >
              Ver servicios
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemSolution() {
  return (
    <section className="bg-brand-soft/40 border-b border-border">
      <div className="mx-auto max-w-5xl px-5 py-7 grid md:grid-cols-2 gap-3">
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

// Iconos oficiales de marca (SVG inline)
const LinkedInIcon = ({ className = "h-3.5 w-3.5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.22 0z"/>
  </svg>
);
const InstagramIcon = ({ className = "h-3.5 w-3.5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.86 5.86 0 0 0-2.13 1.38A5.86 5.86 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.73 1.46 1.38 2.13a5.86 5.86 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.86 5.86 0 0 0 2.13-1.38 5.86 5.86 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.86 5.86 0 0 0-1.38-2.13A5.86 5.86 0 0 0 19.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84zm0 10.16A4 4 0 1 1 12 8a4 4 0 0 1 0 8zm6.4-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/>
  </svg>
);
const FacebookIcon = ({ className = "h-3.5 w-3.5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.52c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z"/>
  </svg>
);

function Services() {
  const items = [
    { icon: Globe, title: "Página web profesional", desc: "Diseño moderno orientado a captar clientes." },
    { icon: MapPin, title: "Google Business", desc: "Más visibilidad local." },
    { icon: Bot, title: "Automatización WhatsApp", desc: "Atención rápida y eficiente." },
    { icon: AtSign, title: "Dominio y correo corporativo", desc: "Imagen profesional desde el primer email." },
  ];
  return (
    <section id="servicios" className="mx-auto max-w-5xl px-5 py-9">
      <div className="max-w-2xl">
        <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">Servicios</div>
        <h2 className="mt-1.5 font-serif text-2xl md:text-3xl text-ink">Lo que hago por tu negocio</h2>
      </div>

      <div className="mt-5 grid grid-cols-2 lg:grid-cols-4 gap-2">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="p-3 rounded-lg border border-border bg-background hover:border-brand/40 hover:shadow-[0_8px_20px_-12px_rgba(123,30,43,0.25)] transition-all">
            <div className="h-7 w-7 rounded-md bg-brand-soft text-brand flex items-center justify-center">
              <Icon className="h-3.5 w-3.5" />
            </div>
            <h3 className="mt-2 font-serif text-[15px] text-ink leading-tight">{title}</h3>
            <p className="mt-0.5 text-xs text-ink-soft leading-snug">{desc}</p>
          </div>
        ))}
      </div>

      {/* Redes sociales + Diseño web personalizado */}
      <div className="mt-2 grid md:grid-cols-2 gap-2">
        {/* Redes sociales: bloque vertical */}
        <div className="p-3 rounded-lg border border-border bg-background hover:border-brand/40 hover:shadow-[0_8px_20px_-12px_rgba(123,30,43,0.25)] transition-all">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-brand-soft text-brand flex items-center justify-center">
              <Share2 className="h-3.5 w-3.5" />
            </div>
            <h3 className="font-serif text-[15px] text-ink leading-tight">Redes sociales</h3>
          </div>
          <p className="mt-1 text-xs text-ink-soft leading-snug">Perfiles cuidados y coherentes en:</p>
          <ul className="mt-2 flex flex-col gap-1.5 text-sm text-ink">
            <li className="flex items-center gap-2">
              <span className="h-6 w-6 rounded-md bg-brand-soft text-brand flex items-center justify-center">
                <LinkedInIcon />
              </span>
              LinkedIn
            </li>
            <li className="flex items-center gap-2">
              <span className="h-6 w-6 rounded-md bg-brand-soft text-brand flex items-center justify-center">
                <InstagramIcon />
              </span>
              Instagram
            </li>
            <li className="flex items-center gap-2">
              <span className="h-6 w-6 rounded-md bg-brand-soft text-brand flex items-center justify-center">
                <FacebookIcon />
              </span>
              Facebook
            </li>
          </ul>
        </div>

        {/* Diseño web personalizado + logo */}
        <div className="p-3 rounded-lg border border-border bg-background hover:border-brand/40 hover:shadow-[0_8px_20px_-12px_rgba(123,30,43,0.25)] transition-all">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-brand-soft text-brand flex items-center justify-center">
              <Palette className="h-3.5 w-3.5" />
            </div>
            <h3 className="font-serif text-[15px] text-ink leading-tight">Diseño web personalizado + logo de empresa</h3>
          </div>
          <p className="mt-1.5 text-xs text-ink-soft leading-snug">
            Diseño web a medida junto con creación de identidad visual y logo profesional para tu negocio.
          </p>
        </div>
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
      <div className="mx-auto max-w-3xl px-5 py-9">
        <div className="flex items-end justify-between flex-wrap gap-3 mb-5">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">Método</div>
            <h2 className="mt-1.5 font-serif text-2xl md:text-3xl text-ink">Cómo trabajo</h2>
          </div>
          <Link
            to="/trabajos"
            className="group inline-flex items-center gap-2 text-base font-medium text-brand border-b-2 border-brand/40 hover:border-brand pb-1 px-1 transition-all hover:gap-3"
          >
            Ver nuestros proyectos
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <ol className="relative">
          <div aria-hidden className="absolute left-[15px] top-2 bottom-2 w-px bg-border" />
          {steps.map(({ n, icon: Icon, title, desc }) => (
            <li key={n} className="relative pl-12 pb-4 last:pb-0">
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
    <section className="mx-auto max-w-4xl px-5 py-9">
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
