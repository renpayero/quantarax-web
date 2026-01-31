import Link from "next/link";
import { FaLinkedinIn, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";

const footerLinks = {
  servicios: [
    { label: "Asesoría en Compras IT", href: "/servicios#asesoria" },
    { label: "Consultoría Extendida", href: "/servicios#consultoria" },
    { label: "Quantum Education", href: "/servicios#education" },
  ],
  empresa: [
    { label: "Sobre Nosotros", href: "/empresa" },
    { label: "Nuestro Equipo", href: "/empresa#equipo" },
    { label: "Precios", href: "/precios" },
  ],
  legal: [
    { label: "Términos y Condiciones", href: "/legal/terminos" },
    { label: "Política de Privacidad", href: "/legal/privacidad" },
  ],
};

const socialLinks = [
  { icon: FaLinkedinIn, href: "https://ar.linkedin.com/in/administracion-quantarax-12254a39b", label: "LinkedIn" },
  { icon: FaInstagram, href: "https://www.instagram.com/quantarax_?igsh=MTIzb3F2MHBtN2dkYw%3D%3D", label: "Instagram" },
  { icon: FaWhatsapp, href: "https://wa.me/5493412709415", label: "WhatsApp" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-dark-950 border-t border-glass-border" style={{ borderColor: "rgba(148, 163, 184, 0.1)" }}>
      {/* Gradient Glow */}
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-foreground">
                <span className="text-primary text-4xl">Q</span>uantaraX
              </span>
            </Link>
            <p className="text-foreground-muted text-sm leading-relaxed mb-6">
              Tu asesor de compras IT neutral. Te ayudamos a ahorrar tiempo y dinero en cada decisión, con transparencia, control y resultados medibles.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-glass-bg border border-glass-border flex items-center justify-center text-foreground-muted hover:text-primary-400 hover:border-primary-500 transition-all duration-300 hover:scale-110"
                  style={{ borderColor: "rgba(148, 163, 184, 0.1)" }}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-foreground font-semibold mb-4 pt-4">Servicios</h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-foreground-muted hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-foreground font-semibold mb-4 pt-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-foreground-muted hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-foreground font-semibold mb-4 pt-4">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <HiLocationMarker className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <span className="text-foreground-muted text-sm">
                  Santa Fe, Rosario 2000<br />Argentina
                </span>
              </li>
              <li className="flex items-center gap-3">
                <HiPhone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a
                  href="tel:+5493412709415"
                  className="text-foreground-muted hover:text-foreground transition-colors text-sm"
                >
                  +54 9 341 270-9415
                </a>
              </li>
              <li className="flex items-center gap-3">
                <HiMail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a
                  href="mailto:administracion@quantarax.net"
                  className="text-foreground-muted hover:text-foreground transition-colors text-sm"
                >
                  administracion@quantarax.net
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-glass-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderColor: "rgba(148, 163, 184, 0.1)" }}>
          <p className="text-foreground-muted text-sm mb-4">
            © {currentYear} QuantaraX. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground-muted hover:text-foreground transition-colors text-sm mb-4"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
