import { Store, User, TrendingUp, RefreshCw } from "lucide-react";

const profiles = [
  {
    icon: Store,
    title: "Negocios locales",
    desc: "Para negocios que necesitan una presencia más profesional y captar más clientes.",
  },
  {
    icon: User,
    title: "Marcas personales",
    desc: "Para profesionales que quieren transmitir autoridad y diferenciarse.",
  },
  {
    icon: TrendingUp,
    title: "Empresas en crecimiento",
    desc: "Para negocios que necesitan sistemas digitales más organizados y eficientes.",
  },
  {
    icon: RefreshCw,
    title: "Negocios desactualizados",
    desc: "Para marcas con una imagen antigua o una presencia online poco cuidada.",
  },
];

export function ForWhom() {
  return (
    <section className="bg-transparent">
      <div className="mx-auto max-w-5xl px-5 py-14 md:py-16">
        <div className="max-w-2xl">
          <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand/70">
            Para quién
          </div>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl text-white leading-tight">
            ¿Para quién es esto?
          </h2>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {profiles.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="flex flex-col gap-4 rounded-2xl border border-white/8 bg-white/4 px-5 py-6 backdrop-blur-sm"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/15 text-brand shadow-sm shadow-black/20">
                <Icon className="h-5 w-5" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-lg text-white leading-tight">
                  {title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
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
