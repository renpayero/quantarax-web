"use client";

import { motion } from "framer-motion";

export default function PrivacidadPage() {
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
            Política de <span className="gradient-text">Privacidad</span>
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
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Recopilación de Información</h2>
            <p>
              En QuantaraX respetamos tu privacidad. Solo recopilamos la información necesaria para brindarte nuestros servicios,
              como datos de contacto (nombre, email, teléfono) y detalles sobre tus necesidades empresariales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Uso de la Información</h2>
            <p>
              Utilizamos tu información para:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Proveer y mejorar nuestros servicios de consultoría.</li>
              <li>Comunicarnos con vos sobre tus proyectos y novedades.</li>
              <li>Cumplir con obligaciones legales y regulatorias.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Protección de Datos</h2>
            <p>
              Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos contra accesos no autorizados,
              pérdida o alteración. No compartimos tu información con terceros sin tu consentimiento, salvo obligación legal.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Cookies</h2>
            <p>
              Nuestro sitio utiliza cookies para mejorar la experiencia de navegación. Podes configurar tu navegador para rechazar
              cookies, aunque esto podría afectar ciertas funcionalidades del sitio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Tus Derechos</h2>
            <p>
              Tenés derecho a acceder, corregir o eliminar tu información personal en cualquier momento. Para ejercer estos derechos,
              contactanos a administracion@quantarax.net.
            </p>
          </section>
        </motion.div>
      </div>
    </section>
  );
}
