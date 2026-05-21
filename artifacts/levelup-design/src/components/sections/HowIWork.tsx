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
      <div className="relative z-10 mx-auto max-w-3xl px-5 py-14">
        <div className="flex items-end justify-between flex-wrap gap-3 mb-5">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">
              Método
            </div>

            <h2 className="mt-1.5 font-serif text-2xl md:text-3xl text-white">
              Metodología de trabajo
            </h2>
          </div>

          <Link
            to="/trabajos"
            className="group inline-flex items-center gap-2 text-base font-medium text-brand border-b-2 border-brand/40 hover:border-brand pb-1 px-1 transition-all hover:gap-3"
          >
            Ver proyectos
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <ol className="relative space-y-8">
          {steps.map(({ n, icon: Icon, title, sub, desc }) => (
            <li key={n} className="relative pl-12 pb-4 last:pb-0">
              <div className="absolute left-0 top-0 h-8 w-8 rounded-full bg-brand/15 text-brand flex items-center justify-center shadow-sm shadow-black/20">
                <Icon className="h-4 w-4" />
              </div>

              <div className="flex items-baseline gap-3">
                <span className="font-serif text-xs text-brand/60 tracking-wider">
                  {n}
                </span>
                <h3 className="font-serif text-lg text-white">{title}</h3>
              </div>

              <p className="mt-0.5 text-sm text-white/50">{sub}</p>
              <p className="mt-1 text-sm text-white/65 leading-relaxed">{desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
