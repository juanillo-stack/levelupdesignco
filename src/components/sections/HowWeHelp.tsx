import { Link } from "@tanstack/react-router";
import { ArrowRight, Globe, Users, BookOpen } from "lucide-react";


export function HowWeHelp() {
    const cards = [
      {
        icon: Users,
        title: "Conseguir clientes",
        desc: "Si no te llegan clientes, te ayudamos a generar contactos reales con un sistema simple.",
        cta: "Quiero más clientes",
        to: "/conseguir-clientes-malaga" as const,
      },
      {
        icon: Globe,
        title: "Página web profesional",
        desc: "Creamos webs simples y efectivas que convierten visitas en clientes.",
        cta: "Necesito una web",
        to: "/pagina-web-malaga" as const,
      },
      {
        icon: BookOpen,
        title: "Cómo conseguir clientes",
        desc: "Descubre lo que realmente funciona para atraer clientes a tu negocio.",
        cta: "Ver cómo hacerlo",
        to: "/como-conseguir-clientes-negocio" as const,
      },
    ];
  
    return (
      <section className="border-b border-border">
        <div className="mx-auto max-w-5xl px-5 py-10">
          <div className="max-w-2xl">
            <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">
              Servicios clave
            </div>
  
            <h2 className="mt-1.5 font-serif text-2xl md:text-3xl text-ink">
              Cómo podemos ayudarte
            </h2>
          </div>
  
          <div className="mt-5 grid md:grid-cols-3 gap-3">
            {cards.map(({ icon: Icon, title, desc, cta, to }) => (
              <div
                key={title}
                className="flex flex-col p-5 rounded-xl border border-border bg-background hover:border-brand/40 hover:shadow-[0_8px_20px_-12px_rgba(123,30,43,0.25)] transition-all"
              >
                <div className="h-9 w-9 rounded-md bg-brand-soft text-brand flex items-center justify-center">
                  <Icon className="h-4 w-4" />
                </div>
  
                <h3 className="mt-3 font-serif text-lg text-ink leading-tight">
                  {title}
                </h3>
  
                <p className="mt-1.5 text-sm text-ink-soft leading-snug flex-1">
                  {desc}
                </p>
  
                <Link
                  to={to}
                  className="mt-4 inline-flex items-center justify-center gap-2 bg-brand text-brand-foreground px-4 py-2.5 rounded-md text-sm font-medium shadow-[0_4px_14px_rgba(123,30,43,0.25)] transition-all hover:bg-[oklch(0.32_0.12_18)] hover:shadow-[0_8px_24px_rgba(123,30,43,0.35)]"
                >
                  {cta}
                </Link>
              </div>
            ))}
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
            <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
              Problema
            </div>
  
            <p className="mt-2 font-serif text-lg text-ink leading-snug">
              Muchos negocios tienen presencia online, pero no está bien
              organizada.
            </p>
          </div>
  
          <div className="bg-brand text-brand-foreground rounded-xl p-5">
            <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-foreground/70">
              Solución
            </div>
  
            <p className="mt-2 font-serif text-lg leading-snug">
              Organizo tu negocio digital para que funcione y genere clientes.
            </p>
          </div>
        </div>
      </section>
    );
  }
  