import {
    Globe,
    Share2,
    MapPin,
    Bot,
    AtSign,
    Palette,
  } from "lucide-react";
export function Services(){
    const items = [
      {
        icon: Globe,
        title: "Página web profesional",
        desc: "Diseño moderno orientado a captar clientes.",
      },
      {
        icon: MapPin,
        title: "Google Business",
        desc: "Más visibilidad local.",
      },
      {
        icon: Bot,
        title: "Automatización WhatsApp",
        desc: "Atención rápida y eficiente.",
      },
      {
        icon: AtSign,
        title: "Dominio y correo corporativo",
        desc: "Imagen profesional desde el primer email.",
      },
    ];
  
    return (
      <section id="servicios" className="mx-auto max-w-5xl px-5 py-9">
        <div className="max-w-2xl">
          <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">
            Servicios
          </div>
  
          <h2 className="mt-1.5 font-serif text-2xl md:text-3xl text-ink">
            Lo que hago por tu negocio
          </h2>
        </div>
  
        <div className="mt-5 grid grid-cols-2 lg:grid-cols-4 gap-2">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="p-3 rounded-lg border border-border bg-background hover:border-brand/40 hover:shadow-[0_8px_20px_-12px_rgba(123,30,43,0.25)] transition-all"
            >
              <div className="h-7 w-7 rounded-md bg-brand-soft text-brand flex items-center justify-center">
                <Icon className="h-3.5 w-3.5" />
              </div>
  
              <h3 className="mt-2 font-serif text-[15px] text-ink leading-tight">
                {title}
              </h3>
  
              <p className="mt-0.5 text-xs text-ink-soft leading-snug">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }