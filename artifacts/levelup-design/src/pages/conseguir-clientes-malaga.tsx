import { Link } from "wouter";
import { MessageCircle, CheckCircle2, TrendingUp, Clock, Users, Search, Wrench, Phone, ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const WHATSAPP = "https://wa.me/34606899991";

function WhatsAppButton({ label = "Quiero más clientes" }: { label?: string }) {
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

export default function ConseguirClientesMalagaPage() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <SEO description="LevelUp Design Co. combina diseño web y branding en Málaga con SEO y automatización para ayudar a negocios a conseguir clientes." />
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-4xl px-5 py-16 md:py-24">
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-brand bg-brand-soft px-3 py-1.5 rounded-full">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              Captación · Málaga
            </div>
            <h1 className="mt-5 font-serif text-4xl md:text-6xl leading-[1.02] font-semibold text-ink">
              Más <span className="text-brand italic">clientes</span>.<br />Menos esperar.
            </h1>
            <p className="mt-5 text-lg md:text-xl text-ink-soft max-w-xl">
              Te montamos un sistema simple para que el teléfono empiece a sonar.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <WhatsAppButton />
              <a href="#como" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md text-sm font-semibold border border-border text-ink hover:border-brand hover:text-brand transition-all">
                Ver cómo funciona <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Solución */}
        <section className="mx-auto max-w-4xl px-5 py-14">
          <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">La solución</div>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl text-ink">Web + WhatsApp. Punto.</h2>
          <div className="mt-7 grid md:grid-cols-3 gap-4">
            {[
              { t: "Web que convierte", d: "Cada sección empuja al cliente a escribirte." },
              { t: "WhatsApp directo", d: "Un clic y ya está hablando contigo." },
              { t: "Activo 24/7", d: "Sin depender de redes ni de la suerte." },
            ].map((x) => (
              <div key={x.t} className="p-5 rounded-lg border border-border bg-background hover:border-brand transition-all">
                <CheckCircle2 className="h-5 w-5 text-brand" />
                <h3 className="mt-3 font-serif text-lg text-ink font-semibold">{x.t}</h3>
                <p className="mt-1 text-sm text-ink-soft">{x.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Beneficios */}
        <section className="border-y border-border bg-brand-soft/40">
          <div className="mx-auto max-w-4xl px-5 py-14">
            <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">Resultados</div>
            <h2 className="mt-2 font-serif text-3xl md:text-4xl text-ink">Lo que vas a notar</h2>
            <div className="mt-7 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { i: Users, t: "Más contactos" },
                { i: TrendingUp, t: "Más ventas" },
                { i: Clock, t: "24/7 activo" },
                { i: Phone, t: "Sin redes sociales" },
              ].map(({ i: Icon, t }) => (
                <div key={t} className="p-5 rounded-lg bg-background border border-border">
                  <div className="h-9 w-9 rounded-md bg-brand text-brand-foreground flex items-center justify-center">
                    <Icon className="h-4 w-4" />
                  </div>
                  <p className="mt-3 font-serif text-base text-ink font-semibold">{t}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proceso */}
        <section id="como" className="mx-auto max-w-3xl px-5 py-14">
          <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">Cómo lo hacemos</div>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl text-ink">3 pasos. Sin complicaciones.</h2>
          <ol className="mt-7 space-y-4">
            {[
              { n: "01", i: Search, t: "Analizamos tu negocio", d: "Qué ofreces y cómo te encuentran hoy." },
              { n: "02", i: Wrench, t: "Montamos el sistema", d: "Web + WhatsApp listos para captar." },
              { n: "03", i: MessageCircle, t: "Recibes contactos", d: "Los clientes te escriben al móvil." },
            ].map(({ n, i: Icon, t, d }) => (
              <li key={n} className="flex gap-4 p-5 rounded-lg border border-border bg-background hover:border-brand transition-all">
                <div className="h-10 w-10 shrink-0 rounded-md bg-brand text-brand-foreground flex items-center justify-center">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="font-serif text-xs text-brand/70 tracking-wider font-semibold">{n}</span>
                    <h3 className="font-serif text-lg text-ink font-semibold">{t}</h3>
                  </div>
                  <p className="mt-1 text-sm text-ink-soft">{d}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-8"><WhatsAppButton /></div>
        </section>

        {/* Enlaces relacionados */}
        <section className="mx-auto max-w-4xl px-5 pb-4">
          <div className="grid sm:grid-cols-2 gap-3">
            <Link to="/pagina-web-malaga" className="group p-5 rounded-lg border border-border bg-background hover:border-brand hover:shadow-md transition-all">
              <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">Servicio</div>
              <div className="mt-1 font-serif text-lg text-ink flex items-center justify-between">Página web profesional <ArrowRight className="h-4 w-4 text-brand transition-transform group-hover:translate-x-1" /></div>
            </Link>
            <Link to="/como-conseguir-clientes-negocio" className="group p-5 rounded-lg border border-border bg-background hover:border-brand hover:shadow-md transition-all">
              <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">Guía</div>
              <div className="mt-1 font-serif text-lg text-ink flex items-center justify-between">Cómo conseguir clientes <ArrowRight className="h-4 w-4 text-brand transition-transform group-hover:translate-x-1" /></div>
            </Link>
          </div>
        </section>

        {/* CTA final */}
        <section className="mx-auto max-w-4xl px-5 py-14">
          <div className="rounded-2xl bg-brand text-brand-foreground p-8 md:p-12 text-center shadow-[0_20px_50px_-15px_rgba(123,30,43,0.4)]">
            <h2 className="font-serif text-2xl md:text-3xl max-w-2xl mx-auto leading-tight">
              Empieza a recibir clientes esta semana.
            </h2>
            <p className="mt-3 opacity-90">Cuéntame tu caso por WhatsApp, sin compromiso.</p>
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
