import { MessageCircle } from "lucide-react";

const WHATSAPP = "https://wa.me/34606899991?text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20asesoramiento%20para%20mi%20negocio.";

export function FinalCTA() {
  return (
    <section className="bg-transparent">
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-20 text-center">
        <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand/70">
          Contacto
        </div>

        <h2 className="mt-3 font-serif text-3xl md:text-4xl text-white leading-tight">
          Creamos experiencias digitales pensadas para hacer crecer negocios reales.
        </h2>

        <p className="mt-5 text-base text-white/60 leading-relaxed max-w-xl mx-auto">
          Si una empresa necesita mejorar su imagen, captar más clientes o estructurar su presencia online, LevelUp Design Co. puede valorar el proyecto y proponer una solución clara.
        </p>

        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2.5 rounded-md bg-brand px-7 py-3.5 text-sm font-medium text-brand-foreground shadow-[0_4px_20px_rgba(123,30,43,0.3)] transition-[transform,box-shadow,background-color] duration-300 ease-out hover:-translate-y-px hover:bg-[oklch(0.32_0.12_18)] hover:shadow-[0_8px_28px_rgba(123,30,43,0.45)]"
        >
          <MessageCircle className="h-4 w-4" />
          Contáctame por WhatsApp
        </a>
      </div>
    </section>
  );
}
