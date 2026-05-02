import { MessageCircle, Linkedin, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-brand-soft/40">
      <div className="mx-auto max-w-4xl px-5 py-10 text-center">
        <div className="font-serif text-2xl font-semibold text-brand">LevelUp Digital</div>
        <div className="mt-3 text-sm text-ink leading-relaxed">
          Juan Leiva · Málaga, España<br />
          Tel: <a href="tel:+34606899991" className="hover:text-brand transition-colors">606 899 991</a>
          <span className="mx-2 text-ink-soft">·</span>
          Email: <a href="mailto:juanleivacontact@gmail.com" className="hover:text-brand transition-colors">juanleivacontact@gmail.com</a>
        </div>

        <div className="mt-5 flex justify-center gap-3">
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

        <div className="mt-6 text-xs text-ink-soft">
          © {new Date().getFullYear()} LevelUp Digital · Todos los derechos reservados
        </div>
      </div>
    </footer>
  );
}
