import { ScrollReveal } from "@/components/ScrollReveal";

export function Founder() {
  return (
    <section
      id="quienes-somos"
      className="relative overflow-hidden bg-transparent text-white"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[420px] w-[420px] rounded-full bg-brand/25 blur-[100px] opacity-70"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-20%] left-[-15%] h-[380px] w-[380px] rounded-full bg-[oklch(0.22_0.04_40)]/30 blur-[90px]"
      />

      <div className="relative mx-auto max-w-6xl px-5 py-16 md:py-20 lg:py-24">
        <div className="grid gap-12 lg:gap-16">
          <ScrollReveal className="max-w-xl">
            <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-soft">
              Quiénes somos
            </div>
            <h2 className="mt-3 font-serif text-3xl md:text-[2.35rem] leading-tight text-white">
              Un estudio que trabaja directamente con cada cliente
            </h2>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-white/72 font-sans">
              LevelUp Design Co. diseña y desarrolla webs para negocios y marcas personales que quieren una presencia profesional y auténtica.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/55 max-w-md">
              Cada proyecto se trabaja de forma directa, combinando diseño, desarrollo y visión real de negocio.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
