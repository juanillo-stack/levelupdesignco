import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, ArrowRight, Globe, Share2, MapPin, Bot, Search, PenTool, Code2, Gauge, Phone, Mail, ArrowUpRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import heroImg from "@/assets/hero-workspace.jpg";

const WHATSAPP = "https://wa.me/34606899991";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LevelUp Digital — Organizo tu negocio y tu presencia online" },
      { name: "description", content: "Ayudo a negocios a mejorar su operativa y tener una presencia online que genere resultados reales. Web, redes, Google Business y automatización con WhatsApp." },
      { property: "og:title", content: "LevelUp Digital — Más clientes, mejor organización" },
      { property: "og:description", content: "Web profesional, redes optimizadas, Google Business y automatización con WhatsApp." },
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
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 py-14 md:py-20 grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-medium tracking-wide uppercase text-brand bg-brand-soft px-3 py-1.5 rounded-full">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Consultoría digital · Málaga
          </div>
          <h1 className="mt-5 font-serif text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.05] font-semibold text-ink">
            Organizo tu negocio y tu <span className="text-brand italic">presencia online</span> para que consigas más clientes
          </h1>
          <p className="mt-5 text-base md:text-lg text-ink-soft max-w-xl leading-relaxed">
            Ayudo a negocios a mejorar su operativa y tener una presencia online que genere resultados reales.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand text-brand-foreground px-5 py-3 rounded-md text-sm font-medium transition-shadow hover:shadow-[0_8px_24px_rgba(123,30,43,0.28)]"
            >
              <MessageCircle className="h-4 w-4" />
              Solicitar asesoramiento por WhatsApp
            </a>
            <a
              href="#como-trabajo"
              className="inline-flex items-center gap-2 border border-border bg-background px-5 py-3 rounded-md text-sm font-medium text-ink transition-shadow hover:shadow-sm hover:border-brand/40"
            >
              Ver cómo trabajo
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-tr from-brand-soft to-transparent rounded-2xl -z-10" />
          <img
            src={heroImg}
            alt="Entorno de trabajo digital profesional"
            width={1536}
            height={1024}
            className="rounded-xl shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)] border border-border/60 w-full h-auto object-cover aspect-[3/2]"
          />
        </div>
      </div>
    </section>
  );
}

function ProblemSolution() {
  return (
    <section className="bg-brand-soft/40 border-y border-border">
      <div className="mx-auto max-w-6xl px-5 py-14 grid md:grid-cols-2 gap-6">
        <div className="bg-background border border-border rounded-xl p-7">
          <div className="text-xs font-semibold uppercase tracking-wider text-ink-soft">El problema</div>
          <h3 className="mt-2 font-serif text-2xl text-ink">Presencia sin estrategia</h3>
          <p className="mt-3 text-ink-soft leading-relaxed">
            Muchos negocios tienen presencia online, pero no está bien organizada. Redes sin movimiento, webs que no convierten y oportunidades que se pierden.
          </p>
        </div>
        <div className="bg-brand text-brand-foreground rounded-xl p-7">
          <div className="text-xs font-semibold uppercase tracking-wider text-brand-foreground/70">La solución</div>
          <h3 className="mt-2 font-serif text-2xl">Todo conectado y orientado a clientes</h3>
          <p className="mt-3 text-brand-foreground/85 leading-relaxed">
            Organizo tu negocio y tus herramientas digitales para que todo funcione de forma clara, conectada y orientada a generar clientes.
          </p>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    { icon: Globe, title: "Página web profesional", desc: "Diseño moderno, claro y orientado a captar clientes." },
    { icon: Share2, title: "Redes sociales optimizadas", desc: "Perfiles cuidados, coherentes y preparados para generar confianza." },
    { icon: MapPin, title: "Google Business optimizado", desc: "Más visibilidad local y mejor imagen para tu negocio." },
    { icon: Bot, title: "Automatización con WhatsApp", desc: "Respuestas rápidas y mejor atención al cliente." },
  ];
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <div className="max-w-2xl">
        <div className="text-xs font-semibold uppercase tracking-wider text-brand">Servicios</div>
        <h2 className="mt-2 font-serif text-3xl md:text-4xl text-ink">Lo que hago por tu negocio</h2>
      </div>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group p-6 rounded-xl border border-border bg-background hover:border-brand/40 hover:shadow-[0_10px_30px_-15px_rgba(123,30,43,0.25)] transition-all">
            <div className="h-10 w-10 rounded-lg bg-brand-soft text-brand flex items-center justify-center">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-serif text-lg text-ink">{title}</h3>
            <p className="mt-2 text-sm text-ink-soft leading-relaxed">{desc}</p>
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
    <section id="como-trabajo" className="bg-ink text-background py-16">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-brand-soft/80">Método</div>
            <h2 className="mt-2 font-serif text-3xl md:text-4xl">Cómo trabajo</h2>
          </div>
          <Link
            to="/trabajos"
            className="inline-flex items-center gap-2 text-sm font-medium text-background/90 hover:text-background border-b border-background/30 hover:border-background pb-0.5 transition-colors"
          >
            Ver nuestros trabajos
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-background/10 rounded-xl overflow-hidden">
          {steps.map(({ n, icon: Icon, title, desc }) => (
            <div key={n} className="bg-ink p-6">
              <div className="flex items-center justify-between">
                <span className="font-serif text-2xl text-brand-soft/60">{n}</span>
                <Icon className="h-5 w-5 text-brand-soft/80" />
              </div>
              <h3 className="mt-6 font-serif text-xl">{title}</h3>
              <p className="mt-1 text-sm text-background/65">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-16">
      <div className="rounded-2xl border border-border bg-gradient-to-br from-brand-soft to-background p-8 md:p-12 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-ink max-w-2xl mx-auto">
          Empieza a mejorar tu negocio desde hoy
        </h2>
        <p className="mt-4 text-ink-soft max-w-xl mx-auto">
          Si quieres organizar mejor tu negocio y empezar a generar más clientes, puedo ayudarte.
        </p>
        <div className="mt-7 flex flex-wrap gap-3 justify-center">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand text-brand-foreground px-5 py-3 rounded-md text-sm font-medium transition-shadow hover:shadow-[0_8px_24px_rgba(123,30,43,0.28)]"
          >
            <MessageCircle className="h-4 w-4" />
            Solicitar asesoramiento por WhatsApp
          </a>
          <a href="#contacto" className="inline-flex items-center gap-2 border border-border bg-background px-5 py-3 rounded-md text-sm font-medium text-ink hover:shadow-sm hover:border-brand/40 transition-shadow">
            Contacta conmigo
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contacto" className="mx-auto max-w-6xl px-5 pb-20">
      <div className="grid md:grid-cols-3 gap-4">
        {[
          { icon: Phone, label: "Teléfono", value: "606 899 991", href: "tel:+34606899991" },
          { icon: Mail, label: "Email", value: "juanleivacontact@gmail.com", href: "mailto:juanleivacontact@gmail.com" },
          { icon: MapPin, label: "Ubicación", value: "Málaga, España" },
        ].map(({ icon: Icon, label, value, href }) => {
          const Cmp: React.ElementType = href ? "a" : "div";
          return (
            <Cmp key={label} {...(href ? { href } : {})} className="p-5 rounded-xl border border-border bg-background flex items-center gap-4 hover:border-brand/40 hover:shadow-sm transition-all">
              <div className="h-10 w-10 rounded-lg bg-brand-soft text-brand flex items-center justify-center shrink-0">
                <Icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-wide text-ink-soft">{label}</div>
                <div className="text-sm font-medium text-ink truncate">{value}</div>
              </div>
            </Cmp>
          );
        })}
      </div>
      <div className="mt-6 flex justify-center">
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-brand text-brand-foreground px-6 py-3 rounded-md text-sm font-medium transition-shadow hover:shadow-[0_8px_24px_rgba(123,30,43,0.28)]"
        >
          <MessageCircle className="h-4 w-4" />
          Solicitar asesoramiento por WhatsApp
        </a>
      </div>
    </section>
  );
}
