import { ArrowUp, Mail, Phone } from "lucide-react";

const LinkedInMark = ({
  className = "h-4 w-4 shrink-0 mt-1 text-brand",
}: {
  className?: string;
}) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.22 0z" />
  </svg>
);

export function Footer() {
  return (
    <footer className="border-t border-border bg-brand-soft/40">
      <div className="mx-auto max-w-6xl px-5 py-8">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          {/* Izquierda: contacto */}
          <div className="text-sm text-ink leading-7 space-y-2">
            <div>Juan Leiva · Málaga, España</div>
            <div className="flex items-start gap-2.5">
              <Phone className="h-4 w-4 shrink-0 mt-1 text-brand" aria-hidden />
              <a href="tel:+34606899991" className="hover:text-brand transition-colors">
                606 899 991
              </a>
            </div>
            <div className="flex items-start gap-2.5">
              <Mail className="h-4 w-4 shrink-0 mt-1 text-brand" aria-hidden />
              <a href="mailto:juanleiva.contact@gmail.com" className="hover:text-brand transition-colors break-all">
                juanleiva.contact@gmail.com
              </a>
            </div>
            <div className="flex items-start gap-2.5">
              <LinkedInMark />
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
              <span className="font-serif text-2xl font-semibold text-brand">LevelUp Design Co.</span>
            </div>
            <p className="text-xs text-ink-soft">
              © 2026 LevelUp Design Co. · Todos los derechos reservados
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
