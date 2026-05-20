import { Globe, MapPin, Mail, Share2, LayoutDashboard } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Página web profesional",
    desc: "Diseño moderno orientado a captar clientes.",
  },
  {
    icon: MapPin,
    title: "Google Business + WhatsApp automatizado",
    desc: "Más visibilidad local y atención automática para clientes.",
  },
  {
    icon: Mail,
    title: "Dominio y correo corporativo",
    desc: "Imagen profesional desde el primer email.",
  },
  {
    icon: Share2,
    title: "Redes sociales y presencia online",
    desc: "Tu negocio visible y preparado para generar confianza.",
  },
  {
    icon: LayoutDashboard,
    title: "Aplicación adaptada a tu negocio",
    desc: "Organiza clientes, contactos y presupuestos en un solo lugar.",
  },
];

export function HowWeHelp() {
  return (
    <section className="bg-transparent">
      <div className="mx-auto max-w-5xl px-5 py-14 md:py-16">
        <div className="max-w-2xl">
          <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand/70">
            Servicios clave
          </div>

          <h2 className="mt-2 font-serif text-3xl md:text-4xl text-white leading-tight">
            Lo que hago por tu negocio
          </h2>

          <p className="mt-4 text-base text-white/70 max-w-xl leading-relaxed">
            Soluciones digitales premium para que tu negocio funcione con una presencia clara y profesional.
          </p>
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <article key={title} className="flex flex-col gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft/15 text-brand shadow-sm shadow-black/20 shrink-0">
                <Icon className="h-5 w-5" />
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-xl text-white leading-tight">
                  {title}
                </h3>
                <p className="text-sm text-white/65 leading-relaxed">
                  {desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
