import { ShieldCheck, LayoutGrid, TrendingUp, Zap, BadgeCheck } from "lucide-react";

const results = [
  {
    icon: ShieldCheck,
    title: "Más confianza visual",
    desc: "Una imagen profesional que genera credibilidad desde el primer vistazo.",
  },
  {
    icon: LayoutGrid,
    title: "Mejor organización",
    desc: "Herramientas adaptadas para gestionar clientes, tareas y presupuestos con orden.",
  },
  {
    icon: TrendingUp,
    title: "Más visibilidad online",
    desc: "Presencia en Google y redes sociales para que te encuentren fácilmente.",
  },
  {
    icon: Zap,
    title: "Atención más rápida",
    desc: "Automatizaciones que responden y filtran clientes sin esfuerzo manual.",
  },
  {
    icon: BadgeCheck,
    title: "Imagen más profesional",
    desc: "Dominio, correo corporativo y web alineados con la calidad de tu trabajo.",
  },
];

export function HowWeHelp() {
  return (
    <section className="bg-transparent">
      <div className="mx-auto max-w-5xl px-5 py-14 md:py-16">
        <div className="max-w-2xl">
          <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand/70">
            Resultados
          </div>

          <h2 className="mt-2 font-serif text-3xl md:text-4xl text-white leading-tight">
            Qué resultados obtienes
          </h2>

          <p className="mt-4 text-base text-white/70 max-w-xl leading-relaxed">
            Una presencia profesional pensada para generar confianza, mejorar organización y facilitar el crecimiento de tu negocio.
          </p>
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {results.map(({ icon: Icon, title, desc }) => (
            <article key={title} className="flex flex-col gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft/15 text-brand shadow-sm shadow-black/20 shrink-0">
                <Icon className="h-5 w-5" />
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-xl text-white leading-tight">
                  {title}
                </h3>
                <p className="text-sm text-white/65 leading-relaxed">
                  {desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
