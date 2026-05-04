import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Globe, Smartphone, CheckCircle2, Lightbulb, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const WHATSAPP = "https://wa.me/34606899991";

export const Route = createFileRoute("/como-conseguir-clientes-negocio")({
  head: () => ({
    meta: [
      { title: "Cómo conseguir clientes para tu negocio — Guía práctica" },
      { name: "description", content: "Guía clara y real sobre lo que funciona hoy para conseguir clientes: presencia online, web que convierte y WhatsApp como canal directo." },
      { property: "og:title", content: "Cómo conseguir clientes para tu negocio (guía práctica y real)" },
      { property: "og:description", content: "Lo que realmente funciona hoy para atraer clientes sin complicarte." },
    ],
  }),
  component: Page,
});

function WhatsAppButton({ label = "Hablar por WhatsApp" }: { label?: string }) {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-brand text-brand-foreground px-5 py-3 rounded-md text-sm font-medium shadow-[0_4px_14px_rgba(123,30,43,0.25)] transition-all hover:bg-[oklch(0.32_0.12_18)] hover:shadow-[0_8px_24px_rgba(123,30,43,0.35)]"
    >
      <MessageCircle className="h-4 w-4" />
      {label}
    </a>
  );
}

function Section({ title, icon: Icon, children }: { title: string; icon: React.ElementType; children: React.ReactNode }) {
  return (
    <section className="py-8 border-b border-border last:border-0">
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-md bg-brand-soft text-brand flex items-center justify-center">
          <Icon className="h-4 w-4" />
        </div>
        <h2 className="font-serif text-2xl text-ink">{title}</h2>
      </div>
      <div className="mt-3 text-ink-soft leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

function Page() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="border-b border-border bg-gradient-to-br from-brand-soft/60 to-background">
          <div className="mx-auto max-w-3xl px-5 py-14 md:py-20">
            <div className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.14em] uppercase text-brand bg-brand-soft px-3 py-1.5 rounded-full">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              Guía práctica
            </div>
            <h1 className="mt-5 font-serif text-4xl md:text-5xl leading-[1.05] font-semibold text-ink">
              Cómo conseguir clientes para tu negocio <span className="text-brand italic">(guía práctica y real)</span>
            </h1>
            <p className="mt-4 text-lg text-ink-soft">
              Lo que realmente funciona hoy para atraer clientes sin complicarte.
            </p>
            <div className="mt-6"><WhatsAppButton label="Solicitar ayuda por WhatsApp" /></div>
          </div>
        </section>

        {/* Contenido */}
        <article className="mx-auto max-w-3xl px-5">
          <Section title="Por qué la mayoría de negocios no consigue clientes" icon={Lightbulb}>
            <p>
              No es porque su producto sea malo. Es porque nadie sabe que existen, o porque cuando alguien les busca,
              no encuentra nada serio. La mayoría depende del boca a boca y de la suerte, y eso no es un sistema, es una lotería.
            </p>
            <p>
              Conseguir clientes hoy va de algo más simple: que te puedan encontrar y que cuando te encuentren, les des una
              razón clara para escribirte.
            </p>
          </Section>

          <Section title="La importancia de tener presencia online" icon={Globe}>
            <p>
              Antes de comprar o contratar algo, la gente busca en Google. Si no apareces, directamente no existes para ese cliente.
              Tener presencia online no significa estar en todas partes, significa estar bien en los sitios donde te buscan.
            </p>
            <p>
              Lo mínimo: una web propia y una ficha de Google Business decente. Con eso ya estás por delante de la mayoría.
            </p>
          </Section>

          <Section title="Tener una web que convierta" icon={CheckCircle2}>
            <p>
              Una web bonita no sirve si no te trae contactos. Lo que de verdad importa es que el visitante entienda en
              5 segundos qué ofreces y tenga claro cómo contactarte.
            </p>
            <p>Tres cosas que toda web debería tener:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Un mensaje claro arriba del todo</li>
              <li>Un botón de contacto visible en cada sección</li>
              <li>Carga rápida y buena en el móvil</li>
            </ul>
          </Section>

          <Section title="Usar WhatsApp como canal directo de ventas" icon={Smartphone}>
            <p>
              WhatsApp es el canal más cómodo para tu cliente. Le quitas fricción: no rellena formularios, no espera emails,
              te escribe y ya está hablando contigo.
            </p>
            <p>
              Pon un botón de WhatsApp visible en tu web, en tu Instagram y en tu ficha de Google. Vas a notar la diferencia
              en cuestión de días.
            </p>
          </Section>

          <Section title="Consejos prácticos que cualquier negocio puede aplicar" icon={Lightbulb}>
            <ul className="list-disc pl-5 space-y-2">
              <li>Responde rápido. La mayoría de ventas se pierden por tardar más de una hora en contestar.</li>
              <li>Pide reseñas en Google a tus clientes contentos. Una reseña vale más que mil anuncios.</li>
              <li>Ten fotos reales de tu trabajo, no de banco de imágenes.</li>
              <li>Habla en lenguaje claro, sin tecnicismos. La gente compra cuando entiende.</li>
              <li>Mide qué te trae clientes y dobla la apuesta en lo que funciona.</li>
            </ul>
          </Section>
        </article>

        {/* Cierre */}
        <section className="mx-auto max-w-4xl px-5 py-12">
          <div className="rounded-2xl border border-border bg-gradient-to-br from-brand-soft to-background p-7 md:p-9 text-center">
            <h2 className="font-serif text-2xl md:text-[1.85rem] text-ink max-w-2xl mx-auto leading-tight">
              Si prefieres no hacerlo tú y quieres que te ayudemos a montar todo esto, escríbenos por WhatsApp
            </h2>
            <div className="mt-5 flex justify-center"><WhatsAppButton /></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
