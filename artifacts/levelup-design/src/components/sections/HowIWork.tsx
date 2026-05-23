import { Link } from "wouter";
import { Search, PenTool, Code2, Gauge, ArrowUpRight } from "lucide-react";

export function HowIWork() {
  const steps = [
    {
      n: "01",
      icon: Search,
      title: "Análisis",
      sub: "Negocio y objetivos",
      desc: "El proceso parte de un estudio en profundidad del negocio, los objetivos reales y la percepción de marca deseada.",
    },
    {
      n: "02",
      icon: PenTool,
      title: "Diseño",
      sub: "Presencia digital",
      desc: "Diseño visual estratégico que refleja la personalidad, los valores y la propuesta de valor de cada proyecto.",
    },
    {
      n: "03",
      icon: Code2,
      title: "Desarrollo",
      sub: "Web y herramientas",
      desc: "Construcción de la solución digital completa: web, automatizaciones y herramientas adaptadas a cada negocio.",
    },
    {
      n: "04",
      icon: Gauge,
      title: "Optimización",
      sub: "Resultado final",
      desc: "Revisión exhaustiva de cada componente para garantizar una experiencia fluida, clara y coherente.",
    },
  ];

  return (
    <section id="como-trabajo" className="relative overflow-hidden bg-transparent">
      <div className="relative z-10 mx-auto max-w-6xl px-5 pb-14 pt-6 md:pt-8 md:pb-16">
        <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
          <p className="max-w-xl font-serif text-2xl leading-snug tracking-tight text-white sm:text-3xl md:text-[2.15rem]">
            Construyendo marcas con{" "}
            <span className="italic text-brand">identidad propia</span>.
          </p>

          <Link
            to="/trabajos"
            className="group inline-flex shrink-0 items-center gap-2 self-start border-b-2 border-brand/40 px-1 pb-1 text-base font-medium text-brand transition-all hover:gap-3 hover:border-brand sm:self-auto"
          >
            Ver nuestros proyectos
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="mb-5">
            <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">
              Método
            </div>

            <h2 className="mt-1.5 font-serif text-2xl text-white md:text-3xl">
              Metodología de trabajo
            </h2>
          </div>

          <ol className="relative space-y-8">
            {steps.map(({ n, icon: Icon, title, sub, desc }) => (
              <li key={n} className="relative pl-12 pb-4 last:pb-0">
                <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-brand/15 text-brand shadow-sm shadow-black/20">
                  <Icon className="h-4 w-4" />
                </div>

                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-xs tracking-wider text-brand/60">
                    {n}
                  </span>
                  <h3 className="font-serif text-lg text-white">{title}</h3>
                </div>

                <p className="mt-0.5 text-sm text-white/50">{sub}</p>
                <p className="mt-1 text-sm leading-relaxed text-white/65">{desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
