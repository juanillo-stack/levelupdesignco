import { MessageCircle, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-desk.png";
import { cn } from "@/lib/utils";

const WHATSAPP = "https://wa.me/34606899991";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden border-b border-border bg-background">
      <div
        className={cn(
          "relative mx-auto max-w-6xl px-5",
          "min-h-[calc(100vh-4rem)] py-12 lg:py-16",
          "flex flex-col gap-10 lg:grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:items-center lg:gap-x-14 lg:gap-y-0",
        )}
      >
        {/* Copy — left */}
        <div className="relative z-10 order-2 flex max-w-xl flex-col justify-center lg:order-1 lg:max-w-none">
          <div
            className={cn(
              "hero-enter inline-flex w-fit items-center gap-2 rounded-full border border-brand/10 bg-brand-soft/95 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-brand backdrop-blur-sm",
            )}
            style={{ animationDelay: "40ms" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Consultoría digital · Málaga
          </div>

          <h1
            className="hero-enter mt-5 font-serif text-[2.15rem] font-semibold leading-[1.05] text-ink sm:text-5xl lg:text-[3.35rem]"
            style={{ animationDelay: "120ms" }}
          >
            Desarrollo Web &
            <br />
            <span className="italic text-brand">
              Optimización de Negocios
            </span>
          </h1>

          <p
            className="hero-enter mt-4 font-serif text-xl italic text-ink-soft md:text-2xl"
            style={{ animationDelay: "200ms" }}
          >
            De idea a negocio.
          </p>

          <div
            className="hero-enter mt-8 flex flex-wrap gap-3"
            style={{ animationDelay: "280ms" }}
          >
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-medium text-brand-foreground shadow-[0_4px_14px_rgba(123,30,43,0.25)] transition-[transform,box-shadow,background-color] duration-300 ease-out hover:-translate-y-px hover:bg-[oklch(0.32_0.12_18)] hover:shadow-[0_8px_24px_rgba(123,30,43,0.35)]"
            >
              <MessageCircle className="h-4 w-4" />
              Solicitar asesoramiento por WhatsApp
            </a>

            <a
              href="#servicios"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background/90 px-5 py-3 text-sm font-medium text-ink backdrop-blur-sm transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-px hover:border-brand/40 hover:shadow-sm"
            >
              Ver servicios
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Imagen — right */}
        <div
          className={cn(
            "relative order-1 w-full lg:order-2",
            "aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto",
            "lg:h-[min(72vh,580px)] lg:min-h-[480px]",
          )}
        >
          <div className="absolute inset-0 overflow-hidden rounded-2xl ring-1 ring-black/[0.06] shadow-[0_28px_90px_-28px_rgba(0,0,0,0.35)] lg:rounded-3xl">
            <img
              src={heroImg}
              alt="Juan Leiva trabajando en su escritorio"
              decoding="async"
              fetchPriority="high"
              sizes="(min-width: 1024px) 50vw, 100vw"
              className={cn(
                "h-full w-full object-cover",
                "object-[52%_center] sm:object-[55%_center] lg:object-[58%_center]",
              )}
            />

            {/* Overlay editorial */}
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-l from-black/[0.03] via-transparent to-background/[0.08]"
            ></div>

            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-background/25 via-transparent to-background/15 lg:from-transparent lg:to-transparent"
            ></div>

            {/* Vignette */}
            <div
              aria-hidden
              className="absolute inset-0 rounded-[inherit] shadow-[inset_0_0_90px_rgba(0,0,0,0.14)]"
            ></div>

            {/* Blur lateral */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 w-[28%] max-w-[140px] bg-gradient-to-r from-background/85 via-background/25 to-transparent backdrop-blur-[2px] lg:from-background/70 lg:via-background/15"
            ></div>

            {/* Mobile fade */}
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background via-background/40 to-transparent lg:hidden"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}