import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

export default function CookiesPage() {
  return (
    <div id="top" className="min-h-screen bg-slate-950">
      <SEO
        description="Política de cookies de LevelUp Design Co., diseño web y branding en Málaga con SEO y automatización para negocios."
      />
      <Header />
      <main className="pt-16">
        <div className="mx-auto max-w-3xl px-5 py-16 md:py-20 text-white">
          <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand/70">
            Legal
          </div>
          <h1 className="mt-3 font-serif text-3xl md:text-4xl text-white">
            Política de cookies
          </h1>
          <p className="mt-2 text-sm text-white/40">Última actualización: mayo 2026</p>

          <div className="mt-10 space-y-10 text-sm leading-relaxed text-white/70">
            <section className="space-y-3">
              <h2 className="font-serif text-lg text-white">1. Qué son las cookies</h2>
              <p>
                Las cookies son pequeños archivos que un sitio web puede almacenar en el navegador para recordar información técnica, mejorar la navegación o medir el uso del servicio. También pueden existir tecnologías similares, como almacenamiento local o identificadores técnicos.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-lg text-white">2. Uso de cookies en este sitio</h2>
              <p>
                LevelUp Design Co. mantiene una web informativa y minimalista. No se instalan cookies propias de publicidad comportamental ni se recogen datos personales mediante formularios integrados en la web.
              </p>
              <p>
                Pueden utilizarse cookies técnicas o mecanismos equivalentes estrictamente necesarios para la seguridad, carga, mantenimiento y disponibilidad del sitio, especialmente los gestionados por el proveedor de alojamiento o infraestructura.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-lg text-white">3. Cookies de terceros</h2>
              <p>
                El sitio enlaza a servicios externos como WhatsApp, LinkedIn, Instagram, Facebook o Google Maps. Al acceder a dichos servicios, sus titulares pueden instalar cookies o tratar datos conforme a sus propias políticas. LevelUp Design Co. no controla esas cookies externas.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-lg text-white">4. Gestión y desactivación</h2>
              <p>
                La persona usuaria puede configurar, bloquear o eliminar cookies desde las preferencias de su navegador. La desactivación de cookies técnicas puede afectar a determinadas funciones básicas de navegación o seguridad.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-lg text-white">5. Actualizaciones</h2>
              <p>
                Esta política puede actualizarse si se incorporan nuevas herramientas, servicios de analítica, funcionalidades o cambios normativos. La fecha de última actualización aparece al inicio del documento.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
