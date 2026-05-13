import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wanderley Oliveira Imóveis | Corretor em Sergipe",
  description:
    "Atendimento imobiliário em Sergipe para compra, venda, avaliação e consultoria com Wanderley Oliveira, CRECI 5355.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full scroll-smooth antialiased">
      <body className="min-h-full bg-black text-white">{children}</body>
    </html>
  );
}
