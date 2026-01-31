"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { HiCheckCircle, HiArrowRight } from "react-icons/hi";

const services = [
  {
    id: "asesoria",
    title: "Asesoría en Compras IT",
    subtitle: "Neutralidad y ahorro desde el día 1",
    description: "Analizamos tus necesidades tecnológicas, evaluamos proveedores de forma neutral y te ayudamos a tomar decisiones basadas en datos, no en urgencias.",
    features: [
      "Evaluación y comparación de proveedores",
      "Negociación de precios y condiciones",
      "Análisis de costos totales (TCO)",
      "Revisión de contratos y SLAs",
      "Seguimiento de entregas y cumplimiento",
      "Reportes de ahorro certificados",
    ],
    image: "/images/services/asesoria_it.png",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "consultoria",
    title: "Consultoría Extendida",
    subtitle: "Acompañamiento estratégico continuo",
    description: "Un equipo dedicado que trabaja junto a tu organización, optimizando cada aspecto de tus inversiones IT con visión a largo plazo.",
    features: [
      "Planificación estratégica IT",
      "Auditorías de infraestructura",
      "Gestión de proyectos tecnológicos",
      "Optimización de licencias y suscripciones",
      "Capacitación a equipos internos",
      "Soporte continuo y escalable",
    ],
    image: "/images/services/consultoria_extendida_v2.png",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "education",
    title: "Quantum Education",
    subtitle: "Aprende a decidir con datos",
    description: "Programas de capacitación para que tu equipo tome mejores decisiones de compra IT, con metodologías probadas y casos reales.",
    features: [
      "Workshops de evaluación de proveedores",
      "Metodología de compras basada en datos",
      "Seminarios de negociación IT",
      "Casos de estudio y mejores prácticas",
      "Certificación de equipos",
      "Material de consulta permanente",
    ],
    image: "/images/services/quantum_education.png",
    color: "from-orange-500 to-red-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function ServiciosPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />
        
        {/* Floating Orb */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/4 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl"
        />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary-400 text-sm font-semibold tracking-wider uppercase mb-4 block"
          >
            Nuestros Servicios
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Transformamos{" "}
            <span className="gradient-text">compras IT</span>
            <br />
            en inversiones estratégicas
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-foreground-muted max-w-2xl mx-auto"
          >
            Servicios diseñados para brindarte transparencia, ahorro y control en cada decisión tecnológica.
          </motion.p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-dark-950">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-16"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                variants={itemVariants}
                className="glass-card overflow-hidden scroll-mt-24"
              >
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                  {/* Imagen Grande - Ocupa toda una columna, imagen completa sin recortes */}
                  <div className={`relative h-80 lg:h-auto lg:min-h-[500px] overflow-hidden bg-dark-900 flex items-center justify-center ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-contain p-2 lg:p-4"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    {/* Subtle Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 mix-blend-overlay pointer-events-none`} />
                  </div>

                  {/* Content */}
                  <div className={`p-8 md:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="mb-6">
                      <p className={`text-sm font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent uppercase tracking-wider mb-2`}>
                        {service.subtitle}
                      </p>
                      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        {service.title}
                      </h2>
                      <p className="text-foreground-muted leading-relaxed text-lg">
                        {service.description}
                      </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-start gap-2"
                        >
                          <HiCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-foreground-muted text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    <Link href="/contacto" className="self-start">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
                      >
                        Solicitar información
                        <HiArrowRight className="w-5 h-5" />
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-dark-950 to-dark-900">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 text-center max-w-3xl mx-auto relative overflow-hidden"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10" />
            
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                ¿Listo para optimizar tus compras IT?
              </h2>
              <p className="text-foreground-muted mb-8">
                Agendá una llamada sin compromiso y descubrí cómo podemos ayudarte a ahorrar tiempo y dinero.
              </p>
              <Link href="/contacto">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary text-lg px-8 py-4"
                >
                  Agendar llamada gratuita
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
