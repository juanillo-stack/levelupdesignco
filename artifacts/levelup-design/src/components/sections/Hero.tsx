import { MessageCircle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const WHATSAPP = "https://wa.me/34606899991";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-transparent">
      <div className={cn(
          "relative mx-auto max-w-6xl px-5",
          "min-h-[calc(100vh-4rem)] py-20 lg:py-24",
          "flex flex-col gap-10 lg:grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.85fr)] lg:items-center lg:gap-x-14 lg:gap-y-0",
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
            CONSULTORÍA WEB & AUTOMATIZACIÓN
          </div>

          <h1
            className="hero-enter mt-5 font-serif text-[2.15rem] font-semibold leading-[1.05] text-white sm:text-5xl lg:text-[3.35rem]"
            style={{ animationDelay: "120ms" }}
          >
            Desarrollo Web &
            <br />
            <span className="italic text-brand">
              Optimización de Empresas
            </span>
          </h1>

          <p
            className="hero-enter mt-4 font-serif text-xl italic text-white/80 md:text-2xl"
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
              className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/10 px-5 py-3 text-sm font-medium text-white transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-px hover:border-brand/40 hover:shadow-sm"
            >
              Ver cómo puedo ayudarte
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}