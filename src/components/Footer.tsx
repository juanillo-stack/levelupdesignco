import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-soft/30">
      <div className="mx-auto max-w-6xl px-5 py-5">
        <div className="flex flex-col gap-3 text-sm text-white/80 md:flex-row md:items-center md:justify-between">
          <p className="text-white/90">
            © 2026 LevelUp Design Co. · Málaga, España
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-2 text-brand transition hover:text-white"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-brand transition-all">
              <ArrowUp className="h-4 w-4" />
            </span>
            Volver arriba
          </a>
        </div>
      </div>
    </footer>
  );
}
