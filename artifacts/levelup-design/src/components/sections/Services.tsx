import { Globe, MessageCircle, Share2, LayoutDashboard } from "lucide-react";

const items = [
  {
    icon: Globe,
    title: "Página web profesional",
    desc: "Diseño moderno orientado a captar clientes y transmitir profesionalidad.",
  },
  {
    icon: MessageCircle,
    title: "Automatización WhatsApp + Google Business",
    desc: "Atención rápida, automatizada y mayor visibilidad local.",
  },
  {
    icon: Share2,
    title: "Gestión de redes sociales + correo corporativo",
    desc: "Imagen profesional y presencia online coherente para tu negocio.",
  },
  {
    icon: LayoutDashboard,
    title: "Aplicación personalizada para tu negocio",
    desc: "Gestión de clientes, presupuestos, contactos y calendario en un solo lugar.",
  },
];

export function Services() {
  return (
    <section id="servicios" className="mx-auto max-w-6xl px-5 py-12">
      <div className="max-w-2xl">
        <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand/70">
          Servicios
        </div>

        <h2 className="mt-2 font-serif text-3xl text-white">
          Lo que hago por tu negocio
        </h2>

        <p className="mt-4 text-base text-white/70 leading-relaxed max-w-xl">
          Soluciones digitales premium para que tu negocio funcione con una presencia clara y profesional.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="flex flex-col gap-4 rounded-2xl border border-white/8 bg-white/[0.035] p-6 backdrop-blur-sm"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-soft/15 text-brand shadow-sm shadow-black/20 shrink-0">
              <Icon className="h-5 w-5" />
            </div>

            <div>
              <h3 className="font-serif text-lg text-white leading-snug">
                {title}
              </h3>
              <p className="mt-2 text-sm text-white/65 leading-relaxed">
                {desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
