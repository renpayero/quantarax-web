"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { HiMail, HiPhone, HiLocationMarker, HiCheckCircle, HiExclamationCircle } from "react-icons/hi";
import { FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";

const contactInfo = [
  {
    icon: HiMail,
    label: "Email",
    value: "administracion@quantarax.net",
    href: "mailto:administracion@quantarax.net",
  },
  {
    icon: HiPhone,
    label: "Teléfono",
    value: "+54 9 341 270-9415",
    href: "tel:+5493412709415",
  },
  {
    icon: HiLocationMarker,
    label: "Ubicación",
    value: "Santa Fe, Rosario 2000, Argentina",
    href: null,
  },
];

const socialLinks = [
  { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: FaWhatsapp, href: "https://wa.me/5493412709415", label: "WhatsApp" },
];

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Error al enviar el mensaje");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Error desconocido");
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden pt-32 pb-12">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />
        
        <motion.div
          animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/4 w-60 h-60 bg-accent-500/15 rounded-full blur-3xl"
        />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary-400 text-sm font-semibold tracking-wider uppercase mb-4 block"
          >
            Contáctanos
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Hablemos de tu{" "}
            <span className="gradient-text">próximo paso</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-foreground-muted max-w-xl mx-auto"
          >
            Estamos listos para ayudarte a tomar mejores decisiones IT.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-dark-950">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <h2 className="text-2xl font-bold mb-6">Envianos un mensaje</h2>
              
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <HiCheckCircle className="w-16 h-16 text-green-500 mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">¡Mensaje enviado!</h3>
                  <p className="text-foreground-muted">
                    Nos pondremos en contacto contigo pronto.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground-muted mb-2">
                        Nombre *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-foreground placeholder-dark-400 focus:outline-none focus:border-primary-500 transition-colors"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground-muted mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-foreground placeholder-dark-400 focus:outline-none focus:border-primary-500 transition-colors"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground-muted mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-foreground placeholder-dark-400 focus:outline-none focus:border-primary-500 transition-colors"
                        placeholder="+54 9 000 000-0000"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground-muted mb-2">
                        Empresa
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-foreground placeholder-dark-400 focus:outline-none focus:border-primary-500 transition-colors"
                        placeholder="Nombre de tu empresa"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground-muted mb-2">
                      Asunto *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-foreground focus:outline-none focus:border-primary-500 transition-colors"
                    >
                      <option value="">Selecciona un asunto</option>
                      <option value="Asesoría en Compras IT">Asesoría en Compras IT</option>
                      <option value="Consultoría Extendida">Consultoría Extendida</option>
                      <option value="Quantum Education">Quantum Education</option>
                      <option value="Información de Precios">Información de Precios</option>
                      <option value="Otro">Otro</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground-muted mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-foreground placeholder-dark-400 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                      placeholder="Contanos cómo podemos ayudarte..."
                    />
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-2 text-red-500 text-sm">
                      <HiExclamationCircle className="w-5 h-5" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={status === "loading"}
                    whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
                    whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
                    className="w-full btn-primary py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? "Enviando..." : "Enviar mensaje"}
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold mb-6">Información de contacto</h2>
                <p className="text-foreground-muted mb-8">
                  Estamos disponibles para responder tus consultas y ayudarte en cada paso del camino.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <motion.div
                    key={item.label}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary-400" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground-muted">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-foreground hover:text-primary-400 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t border-dark-700">
                <p className="text-foreground-muted text-sm mb-4">Seguinos en redes</p>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-12 h-12 rounded-full bg-dark-800 border border-dark-600 flex items-center justify-center text-foreground-muted hover:text-primary-400 hover:border-primary-500 transition-all duration-300 hover:scale-110"
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="glass-card p-1 overflow-hidden">
                <div className="w-full h-64 bg-dark-800 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <HiLocationMarker className="w-12 h-12 text-primary-500 mx-auto mb-2" />
                    <p className="text-foreground-muted text-sm">Rosario, Santa Fe<br />Argentina</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
