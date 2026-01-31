"use client";

import { motion } from "framer-motion";

export default function TerminosPage() {
  return (
    <section className="relative min-h-screen pt-32 pb-16 bg-dark-950">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="text-primary-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Términos y <span className="gradient-text">Condiciones</span>
          </h1>
          <p className="text-foreground-muted text-lg">
            Última actualización: Enero 2026
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card p-8 md:p-12 space-y-8 prose prose-invert prose-lg max-w-none text-foreground-muted"
        >
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Introducción</h2>
            <p>
              Bienvenido a QuantaraX. Estos términos y condiciones rigen el uso de nuestro sitio web
              y nuestros servicios de asesoría en compras IT. Al acceder a nuestra plataforma, aceptas cumplir con estos términos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Servicios</h2>
            <p>
              QuantaraX ofrece servicios de consultoría, asesoramiento neutral en compras de tecnología, y programas educativos.
              Nos comprometemos a brindar información imparcial y basada en datos para optimizar las inversiones de nuestros clientes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Propiedad Intelectual</h2>
            <p>
              Todo el contenido, marcas, logos y materiales educativos presentes en este sitio son propiedad exclusiva de QuantaraX
              o de sus licenciantes, y están protegidos por las leyes de propiedad intelectual vigentes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Limitación de Responsabilidad</h2>
            <p>
              QuantaraX no será responsable por daños indirectos, incidentales o consecuentes que surjan del uso de nuestros servicios.
              Nuestra responsabilidad se limita al alcance acordado en cada contrato de consultoría específico.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Modificaciones</h2>
            <p>
              Nos reservamos el derecho de modificar estos términos en cualquier momento. Las actualizaciones se publicarán en esta página
              y entrarán en vigor inmediatamente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Contacto</h2>
            <p>
              Si tenés alguna duda sobre estos términos, por favor contactanos a través de nuestro formulario web o escribinos a administracion@quantarax.net.
            </p>
          </section>
        </motion.div>
      </div>
    </section>
  );
}
