import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Globe, Smartphone, Lightbulb, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const WHATSAPP = "https://wa.me/34606899991";

export const Route = createFileRoute("/como-conseguir-clientes-negocio")({
  head: () => ({
    meta: [
      { title: "Cómo conseguir clientes para un negocio | LevelUp Design Co." },
      { name: "description", content: "Guía profesional sobre presencia online, web que convierte, Google Business y WhatsApp como canal de captación para empresas." },
      { property: "og:title", content: "Cómo conseguir clientes con presencia digital" },
      { property: "og:description", content: "Presencia online, web profesional, Google Business y WhatsApp como sistema de captación." },
    ],
  }),
  component: Page,
});

function WhatsAppButton({ label = "Contáctame por WhatsApp" }: { label?: string }) {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-brand text-brand-foreground px-6 py-3.5 rounded-md text-sm font-semibold shadow-[0_6px_20px_rgba(123,30,43,0.3)] transition-all hover:bg-[oklch(0.28_0.13_18)] hover:shadow-[0_10px_28px_rgba(123,30,43,0.45)] hover:-translate-y-0.5"
    >
      <MessageCircle className="h-4 w-4" />
      {label}
    </a>
  );
}

function Section({ title, icon: Icon, children }: { title: string; icon: React.ElementType; children: React.ReactNode }) {
  return (
    <section className="py-10 border-b border-border last:border-0">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-md bg-brand text-brand-foreground flex items-center justify-center shadow-sm">
          <Icon className="h-5 w-5" />
        </div>
        <h2 className="font-serif text-2xl md:text-3xl text-brand font-semibold">{title}</h2>
      </div>
      <div className="mt-4 text-ink leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

function Page() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-brand bg-brand-soft px-3 py-1.5 rounded-full">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              Guía práctica
            </div>
            <h1 className="mt-5 font-serif text-4xl md:text-6xl leading-[1.02] font-semibold text-ink">
              Cómo conseguir <span className="text-brand italic">clientes</span> con una presencia digital mejor diseñada
            </h1>
            <p className="mt-5 text-lg text-ink-soft max-w-xl">
              Una guía práctica para entender qué necesita una empresa cuando quiere mejorar su visibilidad, confianza y captación online.
            </p>
            <div className="mt-7"><WhatsAppButton /></div>
          </div>
        </section>

        {/* Contenido */}
        <article className="mx-auto max-w-3xl px-5">
          <Section title="Presencia online" icon={Globe}>
            <p>
              Cuando una empresa no aparece con claridad en Google, pierde oportunidades. La base mínima es una web propia, una ficha de Google Business optimizada y una comunicación coherente.
            </p>
            <p className="text-ink-soft">Con esa estructura, la marca gana visibilidad, confianza y control sobre su primera impresión digital.</p>
          </Section>

          <Section title="WhatsApp como canal de ventas" icon={Smartphone}>
            <p>
              WhatsApp es uno de los canales más cómodos para el cliente final. Reduce fricción, evita esperas y permite iniciar conversaciones comerciales de forma directa.
            </p>
            <p className="text-ink-soft">
              Un botón visible en la web, Instagram y Google Business facilita el contacto. En LevelUp Design Co. se estructura el sistema completo de{" "}
              <Link to="/conseguir-clientes-malaga" className="text-brand font-medium underline underline-offset-2 hover:no-underline">
                web + WhatsApp en Málaga
              </Link>.
            </p>
          </Section>

          <Section title="Consejos que sí funcionan" icon={Lightbulb}>
            <ul className="space-y-2.5">
              {[
                "Responder con agilidad mejora la conversión de cada oportunidad.",
                "Solicitar reseñas en Google refuerza la confianza y la prueba social.",
                "Usar imágenes reales del trabajo transmite autenticidad y profesionalidad.",
                "Comunicar con claridad ayuda a que el cliente entienda el valor antes de decidir.",
                "Medir qué canales generan contactos permite invertir mejor en crecimiento.",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Section>
        </article>

        {/* Enlaces relacionados */}
        <section className="mx-auto max-w-3xl px-5 py-8">
          <div className="grid sm:grid-cols-2 gap-3">
            <Link to="/conseguir-clientes-malaga" className="group p-5 rounded-lg border border-border bg-background hover:border-brand hover:shadow-md transition-all">
              <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">Servicio</div>
              <div className="mt-1 font-serif text-lg text-ink flex items-center justify-between">Conseguir clientes <ArrowRight className="h-4 w-4 text-brand transition-transform group-hover:translate-x-1" /></div>
            </Link>
            <Link to="/pagina-web-malaga" className="group p-5 rounded-lg border border-border bg-background hover:border-brand hover:shadow-md transition-all">
              <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">Servicio</div>
              <div className="mt-1 font-serif text-lg text-ink flex items-center justify-between">Página web profesional <ArrowRight className="h-4 w-4 text-brand transition-transform group-hover:translate-x-1" /></div>
            </Link>
          </div>
        </section>

        {/* Cierre */}
        <section className="mx-auto max-w-4xl px-5 py-14">
          <div className="rounded-2xl bg-brand text-brand-foreground p-8 md:p-12 text-center shadow-[0_20px_50px_-15px_rgba(123,30,43,0.4)]">
            <h2 className="font-serif text-2xl md:text-3xl max-w-2xl mx-auto leading-tight">
              LevelUp Design Co. puede diseñar e implementar el sistema completo.
            </h2>
            <div className="mt-6 flex justify-center">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-background text-brand px-6 py-3.5 rounded-md text-sm font-semibold shadow-lg transition-all hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" />
                Contáctame por WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
