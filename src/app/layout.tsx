import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "QuantaraX | Asesoría en Compras IT",
    template: "%s | QuantaraX",
  },
  description:
    "Tu asesor de compras IT neutral. Te ayudamos a ahorrar tiempo y dinero en cada decisión tecnológica, con transparencia, control y resultados medibles.",
  keywords: [
    "compras IT",
    "asesoría tecnológica",
    "consultoría IT",
    "tecnología empresarial",
    "optimización IT",
    "Argentina",
    "Rosario",
  ],
  authors: [{ name: "QuantaraX" }],
  creator: "QuantaraX",
  publisher: "QuantaraX",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://quantarax.net"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "QuantaraX | Asesoría en Compras IT",
    description:
      "Tu asesor de compras IT neutral. Te ayudamos a ahorrar tiempo y dinero en cada decisión tecnológica.",
    url: "https://quantarax.net",
    siteName: "QuantaraX",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QuantaraX | Asesoría en Compras IT",
    description:
      "Tu asesor de compras IT neutral. Te ayudamos a ahorrar tiempo y dinero en cada decisión tecnológica.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48", type: "image/x-icon" },
      { url: "/icon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <AnimatedBackground />
        <Navbar />
        <main className="flex-1 relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
