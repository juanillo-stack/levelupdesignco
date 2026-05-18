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
          <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand/70">
            Servicios
          </div>
  
          <h2 className="mt-1.5 font-serif text-3xl text-white">
            Lo que hago por tu negocio
          </h2>

          <p className="mt-4 text-base text-white/70 leading-relaxed max-w-xl">
            Soluciones digitales premium para que tu negocio funcione con una presencia clara y profesional.
          </p>
        </div>
  
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-start gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-soft/15 text-brand shadow-sm shadow-black/20">
                <Icon className="h-5 w-5" />
              </div>

              <div>
                <h3 className="font-serif text-lg text-white leading-tight">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-white/70 leading-snug">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }