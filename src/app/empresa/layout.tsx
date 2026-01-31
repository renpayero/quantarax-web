import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Empresa",
  description: "Sobre QuantaraX. Nuestra historia, misión, valores y el equipo de expertos detrás de tu asesor de compras IT.",
};

export default function EmpresaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
