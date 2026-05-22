import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

export default function PrivacidadPage() {
  return (
    <div id="top" className="min-h-screen bg-slate-950">
      <SEO
        title="Política de privacidad | LevelUp Design Co."
        description="Política de privacidad de LevelUp Design Co. adaptada al RGPD y a la normativa española de protección de datos."
      />
      <Header />
      <main className="pt-16">
        <div className="mx-auto max-w-3xl px-5 py-16 md:py-20 text-white">
          <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand/70">
            Legal
          </div>
          <h1 className="mt-3 font-serif text-3xl md:text-4xl text-white">
            Política de privacidad
          </h1>
          <p className="mt-2 text-sm text-white/40">Última actualización: mayo 2026</p>

          <div className="mt-10 space-y-10 text-sm text-white/70 leading-relaxed">
            <section className="space-y-3">
              <h2 className="font-serif text-lg text-white">1. Responsable del tratamiento</h2>
              <p>
                <strong className="text-white/90">Responsable:</strong> Juan Leiva, bajo la denominación comercial LevelUp Design Co.<br />
                <strong className="text-white/90">Email de contacto:</strong> contacto@levelupdesign.com<br />
                <strong className="text-white/90">Teléfono:</strong> 606 899 991<br />
                <strong className="text-white/90">Ámbito de actividad:</strong> diseño web, desarrollo digital, automatización y branding para empresas.<br />
                <strong className="text-white/90">Ubicación:</strong> Málaga, España.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-lg text-white">2. Datos personales tratados</h2>
              <p>
                Este sitio web no dispone de formularios de registro ni áreas privadas. Los datos personales que pueden tratarse son los facilitados voluntariamente por la persona interesada a través de:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>Mensajes enviados por WhatsApp al número indicado en la web.</li>
                <li>Correos electrónicos enviados a la dirección de contacto.</li>
                <li>Comunicaciones profesionales derivadas de solicitudes de información, presupuestos o contratación de servicios.</li>
              </ul>
              <p>
                Los datos pueden incluir nombre, empresa, teléfono, dirección de email, información del proyecto y cualquier dato que la persona facilite libremente en la comunicación.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-lg text-white">3. Finalidad del tratamiento</h2>
              <p>Los datos facilitados se utilizan para:</p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>Responder consultas, solicitudes de información y comunicaciones comerciales iniciadas por la persona interesada.</li>
                <li>Preparar propuestas, presupuestos o recomendaciones vinculadas a servicios digitales.</li>
                <li>Gestionar la relación contractual o precontractual con clientes.</li>
                <li>Cumplir obligaciones legales, administrativas y fiscales cuando resulten aplicables.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-lg text-white">4. Base legal</h2>
              <p>
                La base legal del tratamiento puede ser el consentimiento de la persona interesada al iniciar una comunicación, la aplicación de medidas precontractuales solicitadas por ella, la ejecución de un contrato de servicios o el cumplimiento de obligaciones legales, conforme al Reglamento (UE) 2016/679 (RGPD).
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-lg text-white">5. Conservación de datos</h2>
              <p>
                Los datos se conservarán durante el tiempo necesario para atender la solicitud, gestionar la relación profesional y cumplir los plazos legales aplicables. Cuando dejen de ser necesarios, se suprimirán o bloquearán de acuerdo con la normativa vigente.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-lg text-white">6. Comunicación de datos y proveedores</h2>
              <p>
                No se ceden datos a terceros salvo obligación legal o cuando sea necesario para prestar un servicio solicitado. El uso de WhatsApp implica que las comunicaciones se gestionan conforme a las condiciones y políticas de Meta Platforms Ireland Ltd. El alojamiento web, correo electrónico u otras herramientas técnicas pueden implicar acceso por parte de proveedores tecnológicos que actúan como encargados del tratamiento.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-lg text-white">7. Derechos de las personas interesadas</h2>
              <p>La persona interesada puede ejercer los siguientes derechos:</p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>Acceso a sus datos personales.</li>
                <li>Rectificación de datos inexactos o incompletos.</li>
                <li>Supresión cuando los datos ya no sean necesarios.</li>
                <li>Limitación u oposición al tratamiento.</li>
                <li>Portabilidad de los datos cuando proceda.</li>
              </ul>
              <p>
                Para ejercer estos derechos, se puede escribir a <strong className="text-white/90">contacto@levelupdesign.com</strong>, indicando el derecho que se desea ejercer y aportando información suficiente para verificar la identidad.
              </p>
              <p>
                También existe derecho a presentar una reclamación ante la Agencia Española de Protección de Datos a través de www.aepd.es.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-lg text-white">8. Cookies y datos de navegación</h2>
              <p>
                La información sobre cookies se detalla en la Política de cookies. El sitio no incorpora, por defecto, formularios propios ni herramientas de analítica invasiva. Pueden existir registros técnicos mínimos del proveedor de alojamiento necesarios para seguridad, disponibilidad y funcionamiento del servicio.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-lg text-white">9. Cambios en esta política</h2>
              <p>
                Esta política puede actualizarse para adaptarse a cambios legales o del servicio. Se recomienda revisarla periódicamente. La fecha de última actualización aparece al inicio del documento.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
