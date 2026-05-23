import { Link } from "wouter";
import { MessageCircle } from "lucide-react";
import { homeSection, site, whatsappLinks } from "@/lib/site";

export function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-slate-950/85 text-white shadow-[0_1px_30px_rgba(0,0,0,0.22)] backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link to="/" className="group flex shrink-0 items-baseline gap-1.5">
          <span
            className="font-serif text-xl font-semibold text-brand transition-colors group-hover:text-brand-soft"
            translate="no"
          >
            LevelUp
          </span>
          <span
            className="font-sans text-sm font-medium tracking-wide text-white/60 transition-colors group-hover:text-white/80"
            translate="no"
          >
            Design Co.
          </span>
        </Link>

        <div className="ml-auto flex items-center gap-3 sm:gap-4 lg:gap-5">
          <nav
            aria-label="Navegación principal"
            className="hidden items-center gap-5 md:flex lg:gap-6"
          >
            <a
              href={homeSection("servicios")}
              className="text-sm font-medium text-white/65 transition-colors hover:text-white"
            >
              Servicios
            </a>
            <Link
              to="/trabajos"
              className="text-sm font-medium text-white/65 transition-colors hover:text-white"
            >
              Proyectos Web
            </Link>
          </nav>

          <a
            href={whatsappLinks.budget}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white/80 transition-[transform,border-color,color,background-color] duration-300 hover:-translate-y-0.5 hover:border-brand/50 hover:bg-brand/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-soft sm:inline-flex"
          >
            Solicitar presupuesto
          </a>

          <a
            href={whatsappLinks.contact}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Contactar con ${site.name} por WhatsApp`}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand text-brand-foreground shadow-[0_8px_24px_rgba(123,30,43,0.28)] transition-[transform,box-shadow,background-color] duration-300 hover:-translate-y-0.5 hover:bg-[oklch(0.32_0.12_18)] hover:shadow-[0_12px_30px_rgba(123,30,43,0.42)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-soft"
          >
            <MessageCircle className="h-4 w-4" />
          </a>

          <span
            className="hidden border-l border-white/10 pl-4 text-sm text-white/45 lg:inline"
            translate="no"
          >
            {site.owner}
          </span>
        </div>
      </div>
    </header>
  );
}
