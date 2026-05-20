import { ArrowUp, Facebook, Github, Hash, Instagram, Linkedin, MapPin, Mail, Phone, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-6 text-slate-700">
        <div className="grid gap-6 text-sm md:grid-cols-[1.2fr_1fr_1fr_auto] md:items-start">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.32em] text-slate-500">Contacto</p>
            <div className="space-y-2">
              <a
                href="tel:606899991"
                className="inline-flex items-center gap-3 text-slate-700 transition hover:text-slate-900"
              >
                <Phone className="h-4 w-4 text-slate-500" />
                606 899 991
              </a>
              <a
                href="mailto:contacto@levelupdesign.com"
                className="inline-flex items-center gap-3 text-slate-700 transition hover:text-slate-900"
              >
                <Mail className="h-4 w-4 text-slate-500" />
                contacto@levelupdesign.com
              </a>
              <a
                href="https://goo.gl/maps/4pYj5BqQYFy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-slate-700 transition hover:text-slate-900"
              >
                <MapPin className="h-4 w-4 text-slate-500" />
                Málaga, España
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.32em] text-slate-500">Social</p>
            <div className="space-y-2">
              <a
                href="https://instagram.com/juanillo.levelupdesign"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-slate-700 transition hover:text-slate-900"
              >
                <Instagram className="h-4 w-4 text-slate-500" />
                juanillo.levelupdesign
              </a>
              <a
                href="https://www.facebook.com/LevelUpDesignCo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-slate-700 transition hover:text-slate-900"
              >
                <Facebook className="h-4 w-4 text-slate-500" />
                LevelUp Design Co
              </a>
              <a
                href="https://threads.net/@juanillo.levelupdesign"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-slate-700 transition hover:text-slate-900"
              >
                <Hash className="h-4 w-4 text-slate-500" />
                juanillo.levelupdesign
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.32em] text-slate-500">Enlaces</p>
            <div className="flex flex-col gap-2">
              <a
                href="https://linkedin.com/company/levelupdesignco"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-700 transition hover:text-slate-900"
              >
                <Linkedin className="h-4 w-4 text-slate-500" />
                LevelUp Design Co
              </a>
              <a
                href="https://x.com/levelupdesignco"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-700 transition hover:text-slate-900"
              >
                <Twitter className="h-4 w-4 text-slate-500" />
                @levelupdesignco
              </a>
              <a
                href="https://github.com/juanillo-stack"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-700 transition hover:text-slate-900"
              >
                <Github className="h-4 w-4 text-slate-500" />
                <span>Mi desarrollo web</span>
                <span className="text-slate-400">↗</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col items-start justify-between gap-3 text-right md:items-end">
            <a
              href="#top"
              className="inline-flex items-center gap-2 text-slate-700 transition hover:text-slate-900"
            >
              Volver arriba
              <ArrowUp className="h-4 w-4 text-slate-500" />
            </a>
            <p className="text-slate-500">Todos los derechos reservados</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
