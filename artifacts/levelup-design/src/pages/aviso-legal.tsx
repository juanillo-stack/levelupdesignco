import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

export default function AvisoLegalPage() {
  return (
    <div id="top" className="min-h-screen bg-slate-950">
      <SEO
        title="Aviso legal | LevelUp Design Co."
        description="Aviso legal de LevelUp Design Co. con información del titular, condiciones de uso, propiedad intelectual y responsabilidades."
      />
      <Header />
      <main className="pt-16">
        <div className="mx-auto max-w-3xl px-5 py-16 md:py-20 text-white">
          <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand/70">
            Legal
          </div>
          <h1 className="mt-3 font-serif text-3xl md:text-4xl text-white">
            Aviso legal
          </h1>
          <p className="mt-2 text-sm text-white/40">Última actualización: mayo 2026</p>

          <div className="mt-10 space-y-10 text-sm leading-relaxed text-white/70">
            <section className="space-y-3">
              <h2 className="font-serif text-lg text-white">1. Titular del sitio web</h2>
              <p>
                <strong className="text-white/90">Titular:</strong> Juan Leiva, bajo la denominación comercial LevelUp Design Co.<br />
                <strong className="text-white/90">Actividad:</strong> diseño web profesional, desarrollo digital, automatización, branding y optimización de presencia online para empresas.<br />
                <strong className="text-white/90">Email:</strong> contacto@levelupdesign.com<br />
                <strong className="text-white/90">Teléfono:</strong> 606 899 991<br />
                <strong className="text-white/90">Ubicación:</strong> Málaga, España.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-lg text-white">2. Objeto</h2>
              <p>
                Este sitio web ofrece información sobre los servicios digitales de LevelUp Design Co., proyectos realizados, contenidos orientativos y canales de contacto profesional.
              </p>
              <p>
                El acceso y uso de la web implica la aceptación de este aviso legal, la política de privacidad y la política de cookies.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-lg text-white">3. Condiciones de uso</h2>
              <p>
                La persona que navega por este sitio se compromete a utilizarlo de forma lícita, diligente y respetuosa, sin realizar acciones que puedan dañar la web, impedir su funcionamiento o afectar a terceros.
              </p>
              <p>
                LevelUp Design Co. puede actualizar, modificar o retirar contenidos del sitio sin necesidad de aviso previo para mantener la información alineada con sus servicios y obligaciones legales.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-lg text-white">4. Propiedad intelectual e industrial</h2>
              <p>
                Los textos, diseño, estructura visual, identidad, composición, elementos gráficos y contenidos propios de este sitio pertenecen a LevelUp Design Co. o cuentan con derechos de uso suficientes. No se permite su reproducción, distribución o transformación sin autorización previa.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-lg text-white">5. Enlaces externos</h2>
              <p>
                La web puede incluir enlaces a plataformas de terceros, redes sociales, herramientas de mensajería o mapas. LevelUp Design Co. no se responsabiliza del contenido, políticas o funcionamiento de dichos sitios externos.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-lg text-white">6. Responsabilidad</h2>
              <p>
                LevelUp Design Co. trabaja para mantener la información actualizada y el sitio disponible, pero no garantiza la ausencia de interrupciones, errores técnicos o contenidos externos modificados por terceros. La información publicada tiene carácter general y no sustituye una propuesta profesional personalizada.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-lg text-white">7. Legislación aplicable</h2>
              <p>
                Este aviso legal se rige por la legislación española y europea aplicable. Para cualquier controversia, las partes se someterán a los juzgados y tribunales que correspondan conforme a la normativa vigente.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
