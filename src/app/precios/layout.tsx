import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Precios",
  description: "Planes flexibles y transparentes. Desde consultas puntuales hasta soluciones Enterprise para grandes organizaciones.",
};

export default function PreciosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
