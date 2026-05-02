import { MessageCircle, Linkedin, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-brand-soft/40">
      <div className="mx-auto max-w-6xl px-5 py-10 grid gap-6 md:grid-cols-3 items-center">
        <div>
          <div className="font-serif text-lg font-semibold text-brand">LevelUp Digital</div>
          <div className="text-sm text-ink-soft mt-1">Juan Leiva · Málaga, España</div>
        </div>
        <div className="flex md:justify-center gap-3">
          {[
            { icon: MessageCircle, href: "https://wa.me/34606899991", label: "WhatsApp" },
            { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
            { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
            { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="h-10 w-10 flex items-center justify-center rounded-full border border-border bg-background text-ink hover:text-brand hover:border-brand transition-all hover:shadow-sm"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
        <div className="text-sm text-ink-soft md:text-right">
          © {new Date().getFullYear()} LevelUp Digital
        </div>
      </div>
    </footer>
  );
}
