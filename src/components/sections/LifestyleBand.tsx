import lifestyleImg from "@/assets/lifestyle-walking.png";
import { ScrollReveal } from "@/components/ScrollReveal";

export function LifestyleBand() {
  return (
    <section
      className="relative min-h-[280px] sm:min-h-[340px] md:min-h-[400px] overflow-hidden"
      aria-label="Identidad y estilo de marca"
    >
      <img
        src={lifestyleImg}
        alt=""
        decoding="async"
        loading="lazy"
        sizes="100vw"
        className="absolute inset-0 h-full w-full object-cover object-[center_38%] md:object-[center_42%]"
      />
      <div aria-hidden className="absolute inset-0 bg-black/45 md:bg-black/40" />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent md:from-black/50 md:via-black/15"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/25"
      />

      <div className="relative z-10 mx-auto flex min-h-[inherit] max-w-6xl items-center px-5 py-14 md:py-16">
        <ScrollReveal>
          <p className="max-w-xl font-serif text-2xl sm:text-3xl md:text-[2.15rem] leading-snug text-white/95 tracking-tight">
            Construyendo marcas digitales con{" "}
            <span className="italic text-[oklch(0.92_0.04_18)]">identidad propia</span>.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
