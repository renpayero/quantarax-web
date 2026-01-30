"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { HiLightningBolt, HiEye, HiHeart, HiShieldCheck } from "react-icons/hi";

const values = [
  {
    icon: HiEye,
    title: "Transparencia",
    description: "Cada decisión, cada cotización, cada ahorro es documentado y compartido con nuestros clientes.",
  },
  {
    icon: HiShieldCheck,
    title: "Neutralidad",
    description: "No representamos a ningún proveedor. Nuestra única lealtad es hacia tus intereses.",
  },
  {
    icon: HiLightningBolt,
    title: "Eficiencia",
    description: "Optimizamos tiempo y recursos para que puedas enfocarte en lo que realmente importa.",
  },
  {
    icon: HiHeart,
    title: "Compromiso",
    description: "Tu éxito es nuestro éxito. Trabajamos como si fuéramos parte de tu equipo.",
  },
];

const timeline = [
  {
    year: "2020",
    title: "El Inicio",
    description: "Identificamos una necesidad crítica: las empresas necesitaban un asesor neutral en compras IT.",
  },
  {
    year: "2021",
    title: "Primeros Clientes",
    description: "Comenzamos a trabajar con empresas locales, demostrando ahorros certificados del 10% o más.",
  },
  {
    year: "2022",
    title: "Expansión Regional",
    description: "Ampliamos nuestros servicios a toda Argentina, incorporando consultoría extendida.",
  },
  {
    year: "2023",
    title: "Quantum Education",
    description: "Lanzamos nuestro programa de capacitación para equipos de compras IT.",
  },
  {
    year: "2024",
    title: "Crecimiento Sostenido",
    description: "Más de 500 horas ganadas al año por cliente y un NPS superior al 95%.",
  },
];

const team = [
  {
    name: "Equipo de Asesoría",
    role: "Expertos en Compras IT",
    description: "Profesionales con amplia experiencia en evaluación de soluciones tecnológicas.",
    image: "/images/team/equipo_asesoria.png",
  },
  {
    name: "Equipo de Consultoría",
    role: "Estrategia y Planificación",
    description: "Especialistas en optimización de procesos y gestión de proyectos IT.",
    image: "/images/team/equipo_consultoria.png",
  },
  {
    name: "Equipo de Educación",
    role: "Capacitación y Desarrollo",
    description: "Formadores dedicados a empoderar a tu equipo con conocimiento práctico.",
    image: "/images/team/equipo_educacion.png",
  },
];

export default function EmpresaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />
        
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-primary-500/15 rounded-full blur-3xl"
        />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary-400 text-sm font-semibold tracking-wider uppercase mb-4 block"
          >
            Sobre Nosotros
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Somos <span className="gradient-text">QuantaraX</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-foreground-muted max-w-2xl mx-auto"
          >
            Un equipo apasionado por transformar la forma en que las empresas invierten en tecnología.
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-dark-950">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
                Nuestra Misión
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Empoderar decisiones IT con <span className="gradient-text">datos y transparencia</span>
              </h2>
              <p className="text-foreground-muted leading-relaxed mb-6">
                Creemos que cada empresa merece tomar decisiones tecnológicas informadas, libres de presiones comerciales y basadas en datos reales.
              </p>
              <p className="text-foreground-muted leading-relaxed">
                Nuestra misión es ser el aliado neutral que te acompaña en cada inversión IT, garantizando que obtengas el máximo valor por tu dinero y tiempo.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent" />
              <div className="relative z-10">
                <div className="text-5xl font-bold text-foreground mb-2">+10%</div>
                <p className="text-foreground-muted mb-6">Ahorro promedio certificado</p>
                
                <div className="text-5xl font-bold text-foreground mb-2">+500</div>
                <p className="text-foreground-muted mb-6">Horas ganadas al año por cliente</p>
                
                <div className="text-5xl font-bold text-foreground mb-2">95%</div>
                <p className="text-foreground-muted">Cumplimiento de SLA</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-b from-dark-950 to-dark-900">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
              Nuestros Valores
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Principios que nos guían
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card p-6 text-center group"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <value.icon className="w-7 h-7 text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-foreground-muted text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-dark-900">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
              Nuestra Historia
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Un camino de crecimiento
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-accent-500 to-transparent" />
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-20"
                >
                  {/* Year Bubble */}
                  <div className="absolute left-0 w-16 h-16 rounded-full bg-dark-800 border border-primary-500/50 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary-400">{item.year}</span>
                  </div>
                  
                  <div className="glass-card p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-foreground-muted text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="equipo" className="py-24 bg-gradient-to-b from-dark-900 to-dark-950 scroll-mt-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
              Nuestro Equipo
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Profesionales <span className="gradient-text">apasionados</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card p-8 text-center group"
              >
                {/* Avatar - Más grande y con mejor presentación */}
                <div className="relative w-36 h-36 mx-auto mb-6 overflow-hidden rounded-full bg-gradient-to-br from-primary-500 to-accent-500 p-1 group-hover:scale-105 transition-transform duration-500 shadow-xl shadow-primary-500/20">
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-dark-900">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                <p className="text-primary-400 text-sm font-medium mb-3">{member.role}</p>
                <p className="text-foreground-muted text-sm leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-dark-950">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              ¿Querés ser parte de la transformación IT?
            </h2>
            <p className="text-foreground-muted mb-8 max-w-xl mx-auto">
              Contactanos y descubrí cómo podemos ayudarte a tomar mejores decisiones tecnológicas.
            </p>
            <Link href="/contacto">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary text-lg px-8 py-4"
              >
                Hablemos
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
