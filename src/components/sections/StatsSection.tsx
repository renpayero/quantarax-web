"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  {
    value: 95,
    suffix: "%",
    label: "de satisfacción del cliente",
    description: "Nuestros clientes confían en nosotros",
  },
  {
    value: 10,
    prefix: "+",
    suffix: "%",
    label: "de ahorro promedio certificado",
    description: "En compras IT optimizadas",
  },
  {
    value: 95,
    suffix: " Días",
    label: "Tiempo promedio de ROI",
    description: "Retorno de inversión garantizado",
  },
  {
    value: 95,
    prefix: "≥",
    suffix: "%",
    label: "Cumplimiento de SLA",
    description: "En cada operación realizada",
  },
  {
    value: 500,
    prefix: "+",
    suffix: " Horas",
    label: "Ganadas al año por cliente",
    description: "Gracias a procesos claros",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function StatsSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-950" />
      
      {/* Animated Line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Objetivos principales en nuestro{" "}
            <span className="gradient-text">crecimiento empresarial</span>
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            Desde ofrecer neutralidad total en las compras IT hasta generar ahorros comprobables y más horas productivas para nuestros clientes.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card p-6 text-center group hover:border-primary-500/50 transition-colors duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2 group-hover:text-primary-400 transition-colors">
                <AnimatedCounter
                  end={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  duration={2}
                />
              </div>
              <div className="text-sm text-foreground-muted font-medium mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-foreground-muted/60 hidden md:block">
                {stat.description}
              </div>
              
              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/10 to-accent-500/10" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
