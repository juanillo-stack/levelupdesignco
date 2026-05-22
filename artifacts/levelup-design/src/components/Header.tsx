import { Link } from "wouter";
import { MessageCircle } from "lucide-react";

const WHATSAPP = "https://wa.me/34606899991";

export function Header() {
  const servicesHref = `${import.meta.env.BASE_URL}#servicios`;

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-5 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-baseline gap-1.5 group">
          <span className="font-serif text-xl font-semibold text-brand" translate="no">LevelUp</span>
          <span className="font-sans text-sm font-medium tracking-wide text-ink-soft" translate="no">Design Co.</span>
        </Link>
        <div className="flex items-center gap-3 sm:gap-4">
          <nav
            aria-label="Navegación principal"
            className="hidden md:flex items-center gap-5 pr-1 text-sm font-medium text-ink-soft"
          >
            <a href={servicesHref} className="transition-colors hover:text-brand">
              Servicios
            </a>
            <Link to="/trabajos" className="transition-colors hover:text-brand">
              Trabajos
            </Link>
          </nav>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex items-center justify-center h-9 w-9 rounded-full bg-brand text-brand-foreground transition-shadow hover:shadow-[0_4px_14px_rgba(123,30,43,0.35)]"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="hidden sm:inline text-sm font-medium text-ink hover:text-brand transition-colors">
            Solicitar presupuesto
          </a>
        </div>
      </div>
    </header>
  );
}
