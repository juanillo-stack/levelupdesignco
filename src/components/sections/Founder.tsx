import founderImg from "@/assets/about-vision.png";
import { ScrollReveal } from "@/components/ScrollReveal";

export function Founder() {
  return (
    <section
      id="quien-soy"
      className="relative overflow-hidden border-y border-white/10 bg-[oklch(0.14_0.018_260)] text-white"
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
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.95fr)] lg:gap-16 lg:items-center">
          <ScrollReveal className="order-2 lg:order-1 max-w-xl">
            <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-soft">
              Quién soy
            </div>
            <h2 className="mt-3 font-serif text-3xl md:text-[2.35rem] leading-tight text-white">
              Trabajo directamente contigo
            </h2>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-white/72 font-sans">
              Desarrollo webs y sistemas digitales para negocios reales. Sin plantillas genéricas ni
              procesos impersonales.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/55 max-w-md">
              Cada proyecto lo encaro con criterio técnico y visión de negocio, con comunicación
              clara de principio a fin.
            </p>
          </ScrollReveal>

          <ScrollReveal className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px]">
              <div
                aria-hidden
                className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-brand/35 via-transparent to-transparent opacity-80 blur-2xl"
              />
              <div className="relative overflow-hidden rounded-3xl ring-1 ring-white/12 shadow-[0_24px_70px_-20px_rgba(0,0,0,0.65)] transition-[transform,box-shadow] duration-500 ease-out hover:shadow-[0_28px_80px_-18px_rgba(0,0,0,0.55)]">
                <img
                  src={founderImg}
                  alt="Juan Leiva, desarrollador y consultor digital en Málaga"
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 1024px) 420px, 90vw"
                  className="aspect-[4/5] sm:aspect-[3/4] w-full object-cover object-[85%_center] sm:object-[80%_center]"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 rounded-[inherit] shadow-[inset_0_0_70px_rgba(0,0,0,0.35)]"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
