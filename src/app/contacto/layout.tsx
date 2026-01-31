import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Ponete en contacto con nosotros. Estamos listos para ayudarte a optimizar tus inversiones tecnológicas.",
};

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
