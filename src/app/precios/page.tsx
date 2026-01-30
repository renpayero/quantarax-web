"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiCheck, HiX, HiStar } from "react-icons/hi";

const plans = [
  {
    name: "Micro",
    description: "Ideal para proyectos puntuales o consultas específicas",
    price: "Consultar",
    priceNote: "Por asesoramiento",
    popular: false,
    features: [
      { text: "Hasta 3 consultas mensuales", included: true },
      { text: "Evaluación básica de proveedores", included: true },
      { text: "Reporte de ahorro estimado", included: true },
      { text: "Soporte por email", included: true },
      { text: "Auditoría de contratos", included: false },
      { text: "Gestor dedicado", included: false },
      { text: "Capacitación de equipo", included: false },
    ],
    cta: "Solicitar información",
    color: "border-dark-600",
  },
  {
    name: "Standard",
    description: "Para empresas con necesidades recurrentes de compras IT",
    price: "Consultar",
    priceNote: "Mensual",
    popular: true,
    features: [
      { text: "Consultas ilimitadas", included: true },
      { text: "Evaluación completa de proveedores", included: true },
      { text: "Reporte de ahorro certificado", included: true },
      { text: "Soporte prioritario", included: true },
      { text: "Auditoría de contratos", included: true },
      { text: "Gestor dedicado", included: true },
      { text: "Capacitación de equipo", included: false },
    ],
    cta: "Comenzar ahora",
    color: "border-primary-500",
  },
  {
    name: "Enterprise",
    description: "Solución integral para grandes organizaciones",
    price: "Personalizado",
    priceNote: "Según necesidades",
    popular: false,
    features: [
      { text: "Consultas ilimitadas", included: true },
      { text: "Evaluación completa de proveedores", included: true },
      { text: "Reporte de ahorro certificado", included: true },
      { text: "Soporte 24/7 dedicado", included: true },
      { text: "Auditoría completa de contratos", included: true },
      { text: "Equipo dedicado full-time", included: true },
      { text: "Capacitación completa de equipos", included: true },
    ],
    cta: "Contactar ventas",
    color: "border-accent-500",
  },
];

const faqs = [
  {
    question: "¿Cómo calculan el ahorro?",
    answer: "Comparamos las cotizaciones obtenidas con el precio de mercado y el historial de compras del cliente. Cada ahorro es documentado y certificado.",
  },
  {
    question: "¿Qué pasa si no hay ahorro?",
    answer: "Nuestro modelo está diseñado para generar valor. En los casos excepcionales donde no se logre ahorro económico, garantizamos valor en tiempo ganado y transparencia.",
  },
  {
    question: "¿Cuánto tiempo toma ver resultados?",
    answer: "Generalmente, nuestros clientes ven resultados en los primeros 90 días, con ahorros promedio certificados del 10% o más.",
  },
  {
    question: "¿Trabajan con empresas de cualquier tamaño?",
    answer: "Sí, tenemos planes diseñados para desde pequeñas empresas hasta grandes corporaciones con necesidades complejas.",
  },
];

export default function PreciosPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />
        
        <motion.div
          animate={{ y: [0, -15, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/3 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl"
        />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary-400 text-sm font-semibold tracking-wider uppercase mb-4 block"
          >
            Planes y Precios
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Invertí en{" "}
            <span className="gradient-text">transparencia</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-foreground-muted max-w-2xl mx-auto"
          >
            Planes flexibles diseñados para adaptarse a las necesidades de tu organización.
          </motion.p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-dark-950">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative p-8 rounded-3xl transition-all duration-300 ${
                  plan.popular 
                    ? "glass-card border-amber-500/50 shadow-2xl shadow-amber-900/20 scale-105 z-10" 
                    : "glass-card border-white/5 hover:border-white/10 hover:bg-white/5"
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 shadow-lg shadow-amber-500/20 rounded-full">
                    <span className="flex items-center gap-1.5 bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 text-dark-950 text-sm font-bold px-5 py-1.5 rounded-full border border-yellow-200/50">
                      <HiStar className="w-4 h-4 text-dark-900" />
                      Más Popular
                    </span>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-foreground-muted text-sm mb-4">{plan.description}</p>
                  <div className="text-3xl font-bold text-foreground">{plan.price}</div>
                  <p className="text-foreground-muted text-sm">{plan.priceNote}</p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      {feature.included ? (
                        <HiCheck className="w-5 h-5 text-green-500 flex-shrink-0" />
                      ) : (
                        <HiX className="w-5 h-5 text-dark-500 flex-shrink-0" />
                      )}
                      <span className={feature.included ? "text-foreground-muted" : "text-dark-500"}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link href="/contacto" className="block">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 rounded-full font-semibold transition-all ${
                      plan.popular
                        ? "btn-primary"
                        : "btn-secondary"
                    }`}
                  >
                    {plan.cta}
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-b from-dark-950 to-dark-900">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Preguntas Frecuentes</h2>
            <p className="text-foreground-muted">
              Respuestas a las dudas más comunes sobre nuestros servicios.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">{faq.question}</h3>
                <p className="text-foreground-muted">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-dark-900">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-foreground-muted mb-4"
          >
            ¿Tenés más preguntas?
          </motion.p>
          <Link href="/contacto">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary"
            >
              Hablemos
            </motion.button>
          </Link>
        </div>
      </section>
    </>
  );
}
