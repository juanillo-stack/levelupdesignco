import type { LucideIcon, ReactNode } from "react";
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
}: {
  label: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("flex w-max flex-col gap-2.5", className)}>
      <p className="text-xs uppercase tracking-[0.28em] text-white/35">{label}</p>
      {children}
    </div>
  );
}

function FooterRow({
  icon: Icon,
  href,
  to,
  children,
  external = false,
}: {
  icon?: LucideIcon;
  href?: string;
  to?: string;
  children: ReactNode;
  external?: boolean;
}) {
  const rowClass =
    "grid grid-cols-[14px_max-content] items-center gap-x-2.5 text-sm leading-none text-white/65 transition hover:text-white";

  const content = (
    <>
      {Icon ? (
        <Icon className="h-3.5 w-3.5 shrink-0 text-brand" />
      ) : (
        <span className="h-3.5 w-3.5 shrink-0" aria-hidden />
      )}
      <span className="whitespace-nowrap">{children}</span>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={rowClass}>
        {content}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={rowClass}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {content}
    </a>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-5 py-8 md:py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_repeat(3,max-content)_auto] lg:items-start lg:gap-x-10 xl:gap-x-14">
          <div className="min-w-0 lg:col-span-1">
            <p className="font-serif text-xl text-white md:text-2xl" translate="no">
              LevelUp <span className="text-brand">Design Co.</span>
            </p>
            <p className="mt-2 max-w-[14rem] text-sm leading-snug text-white/55">
              Diseño web, branding, SEO y automatización.
            </p>
          </div>

          <FooterColumn label="Contacto">
            <div className="flex flex-col gap-2">
              <FooterRow icon={Phone} href={`tel:${site.phoneHref}`}>
                {site.phoneDisplay}
              </FooterRow>
              <FooterRow icon={Mail} href={`mailto:${site.email}`}>
                {site.email}
              </FooterRow>
              <FooterRow
                icon={MapPin}
                href="https://goo.gl/maps/4pYj5BqQYFy"
                external
              >
                {site.location}
              </FooterRow>
            </div>
          </FooterColumn>

          <FooterColumn label="Redes">
            <div className="flex flex-col gap-2">
              {socialLinks.map(({ label, href }) => {
                const Icon = iconByLabel[label as keyof typeof iconByLabel];

                return (
                  <FooterRow key={label} icon={Icon} href={href} external>
                    {label}
                  </FooterRow>
                );
              })}
            </div>
          </FooterColumn>

          <FooterColumn label="Legal">
            <div className="flex flex-col gap-2">
              <FooterRow to="/aviso-legal">Aviso legal</FooterRow>
              <FooterRow to="/privacidad">Política de privacidad</FooterRow>
              <FooterRow to="/cookies">Política de cookies</FooterRow>
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
