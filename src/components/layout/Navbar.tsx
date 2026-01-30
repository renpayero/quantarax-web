"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/precios", label: "Precios" },
  { href: "/empresa", label: "Empresa" },
  { href: "/contacto", label: "Contáctanos" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-dark-950/80 backdrop-blur-lg border-b border-glass-border"
          : "bg-transparent"
      }`}
      style={{
        borderColor: isScrolled ? "rgba(148, 163, 184, 0.1)" : "transparent",
      }}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                <span className="text-white font-bold text-xl">Q</span>
              </div>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
            </motion.div>
            <span className="text-xl font-bold text-foreground">
              Quantara<span className="text-primary-400">X</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.slice(0, -1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-foreground-muted hover:text-foreground transition-colors group"
              >
                <span className="relative z-10">{link.label}</span>
                <motion.div
                  className="absolute inset-0 rounded-lg bg-glass-bg opacity-0 group-hover:opacity-100 transition-opacity"
                  layoutId="navbar-hover"
                />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/contacto">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary"
              >
                Contáctanos
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <motion.span
                animate={{
                  rotate: isMobileMenuOpen ? 45 : 0,
                  y: isMobileMenuOpen ? 8 : 0,
                }}
                className="w-full h-0.5 bg-foreground block origin-center"
              />
              <motion.span
                animate={{
                  opacity: isMobileMenuOpen ? 0 : 1,
                }}
                className="w-full h-0.5 bg-foreground block"
              />
              <motion.span
                animate={{
                  rotate: isMobileMenuOpen ? -45 : 0,
                  y: isMobileMenuOpen ? -8 : 0,
                }}
                className="w-full h-0.5 bg-foreground block origin-center"
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-dark-950/95 backdrop-blur-lg border-b border-glass-border overflow-hidden"
            style={{ borderColor: "rgba(148, 163, 184, 0.1)" }}
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-2 text-lg text-foreground-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
