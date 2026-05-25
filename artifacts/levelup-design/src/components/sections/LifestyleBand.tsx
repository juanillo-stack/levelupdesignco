import { ScrollReveal } from "@/components/ScrollReveal";

export function LifestyleBand() {
  return (
    <section
      className="relative min-h-[280px] sm:min-h-[340px] md:min-h-[400px] overflow-hidden"
      aria-label="Identidad y estilo de marca"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,160,90,0.14),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(255,120,55,0.08),transparent_28%)]"
      />
      <div className="relative z-10 mx-auto flex min-h-[inherit] max-w-6xl items-center px-5 py-14 md:py-16">
        <ScrollReveal>
          <p className="max-w-xl font-serif text-2xl sm:text-3xl md:text-[2.15rem] leading-snug text-white tracking-tight">
            Construyendo marcas con <span className="italic text-white">identidad propia</span>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
