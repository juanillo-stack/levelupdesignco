import { Link } from "wouter";
import { ArrowRight, Eye, Fingerprint, Globe } from "lucide-react";

const cards = [
  {
    icon: Eye,
    title: "Claridad",
    desc: "Cuando una marca transmite orden, claridad y confianza, el cliente entiende rápidamente quién eres y por qué debería elegirte.",
    cta: "Transmitir confianza",
    to: "/pagina-web-malaga" as const,
  },
  {
    icon: Fingerprint,
    title: "Identidad",
    desc: "No trabajo con plantillas genéricas. Cada proyecto busca reflejar personalidad, intención y una imagen coherente.",
    cta: "Crear identidad",
    to: "/pagina-web-malaga" as const,
  },
  {
    icon: Globe,
    title: "Presencia",
    desc: "Una buena presencia digital no solo se ve bien. También transmite profesionalidad, valor y confianza desde el primer vistazo.",
    cta: "Mejorar presencia",
    to: "/conseguir-clientes-malaga" as const,
  },
];

export function HowWeHelp() {
  return (
    <section className="bg-transparent">
      <div className="mx-auto max-w-5xl px-5 py-10">
        <div className="max-w-2xl">
          <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand/70">
            Servicios clave
          </div>

          <h2 className="mt-1.5 font-serif text-3xl text-white">
            Tu presencia online habla antes que tú
          </h2>

          <p className="mt-4 text-base text-white/70 max-w-xl leading-relaxed">
            La forma en la que tu negocio se presenta influye directamente en cómo te perciben tus clientes.
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
