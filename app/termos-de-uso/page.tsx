import type { Metadata } from "next";
import { LegalPage } from "../_components/legal-page";

export const metadata: Metadata = {
  title: "Termos de Uso | Wanderley Oliveira Imóveis",
};

export default function TermosDeUsoPage() {
  return <LegalPage title="Termos de Uso" markdownFile="11-termos-de-uso.md" />;
}
