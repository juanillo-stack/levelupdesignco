import {
  ArrowUp,
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Mail,
  Phone,
  Twitter,
} from "lucide-react";
import { Link } from "wouter";

function ThreadsIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.068c0-3.52.85-6.376 2.495-8.424C5.845 1.34 8.598.16 12.18.136h.014c2.746.018 5.137.868 6.912 2.458 1.69 1.517 2.692 3.651 2.985 6.345l-2.19.23c-.242-2.183-1.037-3.874-2.368-5.023C16.213 2.94 14.299 2.27 12.193 2.255c-2.947.02-5.168.973-6.602 2.832C4.247 6.866 3.621 9.26 3.621 12.068c0 2.806.626 5.2 1.97 7.015 1.434 1.86 3.656 2.812 6.602 2.833 1.94-.014 3.605-.512 4.897-1.47.936-.693 1.62-1.638 2.032-2.81-.787.215-1.6.325-2.432.325-1.685 0-3.204-.422-4.392-1.22-1.29-.864-2.018-2.12-2.06-3.535-.04-1.347.513-2.575 1.557-3.456 1.076-.907 2.61-1.393 4.43-1.404 1.41.008 2.667.33 3.734.96.04-.415.062-.836.062-1.258 0-1.14-.238-2.065-.729-2.754-.46-.648-1.162-1.014-2.085-1.09l.193-2.188c1.563.138 2.84.808 3.695 1.942.82 1.092 1.236 2.57 1.236 4.39 0 .77-.074 1.549-.22 2.316.533.614.945 1.295 1.23 2.032.33.855.498 1.787.498 2.77 0 4.547-3.313 7.452-8.452 7.488zm.655-10.338c-1.24.007-2.18.288-2.81.834-.592.513-.89 1.2-.868 1.994.03 1 .52 1.77 1.457 2.288.845.47 1.926.694 3.126.628 1.094-.06 2.063-.352 2.75-.823.13-.088.255-.18.374-.275a8.87 8.87 0 0 0-.31-1.77c-.33-1.07-.926-1.968-1.77-2.58a4.358 4.358 0 0 0-1.949-.296z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-6 text-slate-700">
        <div className="grid gap-6 text-sm md:grid-cols-[1.2fr_1fr_1fr_auto] md:items-start">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.32em] text-slate-500">
              Contacto
            </p>
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
            <p className="text-xs uppercase tracking-[0.32em] text-slate-500">
              Social
            </p>
            <div className="space-y-2">
              <a
                href="https://instagram.com/juanleiva.levelupdesign"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-slate-700 transition hover:text-slate-900"
              >
                <Instagram className="h-4 w-4 text-slate-500" />
                juanleiva.levelupdesign
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
                href="https://threads.net/@juanleiva.levelupdesing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-slate-700 transition hover:text-slate-900"
              >
                <ThreadsIcon className="h-4 w-4 text-slate-500" />
                juanleiva.levelupdesing
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.32em] text-slate-500">
              Redes
            </p>
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
            <p className="text-slate-500" translate="no">
              © 2025 LevelUp Design Co.
            </p>
            <Link
              to="/privacidad"
              className="text-xs text-slate-400 hover:text-slate-600 transition-colors"
            >
              Política de privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
