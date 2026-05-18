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
      <section className="bg-transparent">
        <div className="mx-auto max-w-5xl px-5 py-10">
          <div className="max-w-2xl">
            <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand/70">
              Servicios clave
            </div>
  
            <h2 className="mt-1.5 font-serif text-3xl text-white">
              Cómo podemos ayudarte
            </h2>

            <p className="mt-4 text-base text-white/70 max-w-xl leading-relaxed">
              Diseño y desarrollo que hacen tu negocio más atractivo, profesional y fácil de entender.
            </p>
          </div>
  
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {cards.map(({ icon: Icon, title, desc, cta, to }) => (
              <article key={title} className="flex flex-col gap-4 px-1">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-soft/15 text-brand shadow-sm shadow-black/20">
                  <Icon className="h-5 w-5" />
                </div>
  
                <div className="space-y-3">
                  <h3 className="font-serif text-xl text-white leading-tight">
                    {title}
                  </h3>
  
                  <p className="text-sm text-white/70 leading-snug">
                    {desc}
                  </p>
                </div>
  
                <Link
                  to={to}
                  className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-brand transition hover:underline"
                >
                  {cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }
  