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
import { cn } from "@/lib/utils";
import { site, socialLinks, whatsappLinks } from "@/lib/site";

const iconByLabel = {
  Facebook,
  Instagram,
  LinkedIn: Linkedin,
};

function FooterColumn({
  label,
  className,
  children,
  shrink = true,
}: {
  label: string;
  className?: string;
  children: ReactNode;
  shrink?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2.5",
        shrink ? "min-w-0" : "shrink-0",
        className,
      )}
    >
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
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_max-content_max-content_max-content_auto] lg:items-start lg:gap-x-8 xl:gap-x-12">
          <div className="min-w-0 lg:col-span-1">
            <p className="font-serif text-xl text-white md:text-2xl" translate="no">
              LevelUp <span className="text-brand">Design Co.</span>
            </p>
            <p className="mt-2 max-w-[14rem] text-sm leading-snug text-white/55">
              Diseño web, branding, SEO y automatización.
            </p>
          </div>

          <FooterColumn label="Contacto" shrink={false} className="lg:pl-4 xl:pl-8">
            <div className="flex flex-col items-start gap-2">
              <a
                href={`tel:${site.phoneHref}`}
                className="inline-flex w-max items-center gap-2.5 text-sm text-white/65 transition hover:text-white"
              >
                <Phone className="h-3.5 w-3.5 shrink-0 text-brand" />
                <span className="whitespace-nowrap">{site.phoneDisplay}</span>
              </a>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex w-max max-w-none items-center gap-2.5 text-sm text-white/65 transition hover:text-white"
              >
                <Mail className="h-3.5 w-3.5 shrink-0 text-brand" />
                <span className="whitespace-nowrap">{site.email}</span>
              </a>
              <a
                href="https://goo.gl/maps/4pYj5BqQYFy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex max-w-full items-center gap-2.5 text-sm text-white/65 transition hover:text-white"
              >
                <MapPin className="h-3.5 w-3.5 shrink-0 text-brand" />
                <span>{site.location}</span>
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

          <FooterColumn label="Aviso legal" shrink={false} className="min-w-[11.5rem]">
            <div className="flex flex-col items-start gap-2">
              <Link
                to="/aviso-legal"
                className="inline-flex w-full items-center text-sm leading-snug text-white/60 transition hover:text-white"
              >
                Aviso legal
              </Link>
              <Link
                to="/privacidad"
                className="inline-flex w-full items-center text-sm leading-snug text-white/60 transition hover:text-white"
              >
                Política de privacidad
              </Link>
              <Link
                to="/cookies"
                className="inline-flex w-full items-center text-sm leading-snug text-white/60 transition hover:text-white"
              >
                Política de cookies
              </Link>
            </div>
          </FooterColumn>

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
