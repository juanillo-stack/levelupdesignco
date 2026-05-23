import type { ReactNode } from "react";
import {
  ArrowUp,
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import { Link } from "wouter";
import { site, socialLinks, whatsappLinks } from "@/lib/site";

const iconByLabel = {
  Facebook,
  Instagram,
  LinkedIn: Linkedin,
};

function FooterColumn({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2.5">
      <p className="text-xs uppercase tracking-[0.28em] text-white/35">{label}</p>
      {children}
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-5 py-8 md:py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,2.4fr)_auto] lg:items-start lg:gap-x-10">
          <div>
            <p className="font-serif text-xl text-white md:text-2xl" translate="no">
              LevelUp <span className="text-brand">Design Co.</span>
            </p>
            <p className="mt-2 max-w-[14rem] text-sm leading-snug text-white/55">
              Diseño web, branding, SEO y automatización.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6 lg:gap-10">
            <FooterColumn label="Contacto">
              <div className="flex flex-col items-start gap-2">
                <a
                  href={`tel:${site.phoneHref}`}
                  className="inline-flex items-center gap-2.5 text-sm text-white/65 transition hover:text-white"
                >
                  <Phone className="h-3.5 w-3.5 shrink-0 text-brand" />
                  {site.phoneDisplay}
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2.5 text-sm text-white/65 transition hover:text-white"
                >
                  <Mail className="h-3.5 w-3.5 shrink-0 text-brand" />
                  {site.email}
                </a>
                <a
                  href="https://goo.gl/maps/4pYj5BqQYFy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm text-white/65 transition hover:text-white"
                >
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-brand" />
                  {site.location}
                </a>
              </div>
            </FooterColumn>

            <FooterColumn label="Redes">
              <div className="flex flex-col items-start gap-2">
                {socialLinks.map(({ label, href }) => {
                  const Icon = iconByLabel[label as keyof typeof iconByLabel];

                  return (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 text-sm text-white/65 transition hover:text-white"
                    >
                      <Icon className="h-3.5 w-3.5 shrink-0 text-brand" />
                      {label}
                    </a>
                  );
                })}
              </div>
            </FooterColumn>

            <FooterColumn label="Legal">
              <div className="flex flex-col items-start gap-2 text-sm text-white/60">
                <Link to="/aviso-legal" className="transition hover:text-white">
                  Aviso legal
                </Link>
                <Link to="/privacidad" className="transition hover:text-white">
                  Política de privacidad
                </Link>
                <Link to="/cookies" className="transition hover:text-white">
                  Política de cookies
                </Link>
              </div>
            </FooterColumn>
          </div>

          <div className="flex flex-col items-start gap-3 sm:col-span-2 lg:col-span-1 lg:items-end lg:text-right">
            <a
              href={whatsappLinks.call}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-brand/35 bg-brand/10 px-4 py-2 text-sm font-semibold text-white transition-[transform,border-color,background-color] duration-300 hover:-translate-y-0.5 hover:border-brand hover:bg-brand/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-soft"
            >
              Reservar llamada
            </a>
            <a
              href="#top"
              className="inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white"
            >
              Volver arriba
              <ArrowUp className="h-4 w-4 text-brand" />
            </a>
            <p className="text-xs text-white/40" translate="no">
              © {year} LevelUp Design Co.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
