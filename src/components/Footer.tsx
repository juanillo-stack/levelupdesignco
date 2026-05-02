import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-brand-soft/40">
      <div className="mx-auto max-w-6xl px-5 py-8">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          {/* Izquierda: contacto */}
          <div className="text-sm text-ink leading-7 space-y-0.5">
            <div>Juan Leiva · Málaga, España</div>
            <div>
              Tel:{" "}
              <a href="tel:+34606899991" className="hover:text-brand transition-colors">
                606 899 991
              </a>
            </div>
            <div>
              Email:{" "}
              <a href="mailto:juanleivacontact@gmail.com" className="hover:text-brand transition-colors">
                juanleivacontact@gmail.com
              </a>
            </div>
            <div>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/juanillo-stack/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand transition-colors"
              >
                linkedin.com/in/juanillo-stack
              </a>
            </div>
          </div>

          {/* Derecha: marca + copy + scroll top */}
          <div className="md:text-right md:items-end flex flex-col gap-2">
            <div className="flex items-center gap-2 md:justify-end">
              {/* Espacio reservado para logo futuro */}
              <span aria-hidden className="h-7 w-7 rounded-md border border-dashed border-border/80" />
              <span className="font-serif text-2xl font-semibold text-brand">LevelUp Digital</span>
            </div>
            <p className="text-xs text-ink-soft">
              © 2026 LevelUp Digital · Todos los derechos reservados
            </p>
            <a
              href="#top"
              aria-label="Volver arriba"
              className="mt-1 inline-flex items-center gap-1.5 text-xs font-medium text-brand hover:text-ink transition-colors md:self-end"
            >
              <span className="h-8 w-8 rounded-full border border-border bg-background flex items-center justify-center hover:border-brand hover:shadow-sm transition-all">
                <ArrowUp className="h-4 w-4" />
              </span>
              Inicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
