import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios",
  description: "Conocé nuestros servicios de asesoría en compras IT, consultoría extendida y educación empresarial. Soluciones neutrales y transparentes.",
};

export default function ServiciosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
