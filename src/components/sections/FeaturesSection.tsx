"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const features = [
  {
    title: "Neutralidad Total",
    description: "Evaluamos todos los proveedores por igual, sin favoritismos ni comisiones ocultas.",
    image: "/images/features/neutralidad_total.png",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Horas Ganadas",
    description: "Liberá a tu equipo de la carga operativa de las compras IT.",
    image: "/images/features/horas_ganadas.png",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "De la Urgencia al Control",
    description: "Transformamos decisiones caóticas en procesos estratégicos basados en datos.",
    image: "/images/features/urgencia_al_control.png",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Ahorro Certificado",
    description: "Cada optimización viene respaldada con métricas claras y auditables.",
    image: "/images/features/ahorro_certificado.png",
    color: "from-green-500 to-emerald-500",
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-950" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
            ¿Por qué QuantaraX?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ecosistema de <span className="gradient-text">confianza</span>
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            Trabajamos con proveedores y marcas líderes en el mercado IT, garantizando siempre transparencia y neutralidad.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-8 group cursor-pointer relative overflow-hidden flex flex-col items-center text-center"
            >
              {/* Image Container - Mucho más grande y prominente */}
              {/* Image Container - Glassy & Professional */}
              <div className="relative w-44 h-44 mb-8 rounded-[2rem] p-[2px] bg-gradient-to-br from-white/10 to-transparent group-hover:scale-105 transition-all duration-500 shadow-2xl shadow-black/50">
                <div className="relative w-full h-full rounded-[calc(2rem-2px)] overflow-hidden bg-dark-950/50 backdrop-blur-sm">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  {/* Internal colored glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-20 mix-blend-overlay group-hover:opacity-40 transition-opacity duration-500`} />
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                {/* External Glow Blur */}
                <div className={`absolute -inset-4 bg-gradient-to-br ${feature.color} opacity-20 blur-2xl -z-10 group-hover:opacity-40 transition-opacity duration-500`} />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-foreground-muted text-sm leading-relaxed">
                {feature.description}
              </p>
              
              {/* Gradient Border on Hover */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-br ${feature.color} opacity-20 pointer-events-none`}
                style={{
                  mask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Calidad y eficiencia en cada decisión IT
          </h3>
          <p className="text-foreground-muted max-w-2xl mx-auto mb-8">
            Nuestro compromiso es acompañarte con datos y transparencia, para que cada inversión tenga impacto positivo en tu negocio y en el futuro.
          </p>
          <Link href="/servicios">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary"
            >
              Descubrir cómo optimizar tus compras
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
