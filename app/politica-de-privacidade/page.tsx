import type { Metadata } from "next";
import { LegalPage } from "../_components/legal-page";

export const metadata: Metadata = {
  title: "Política de Privacidade | Wanderley Oliveira Imóveis",
};

export default function PoliticaDePrivacidadePage() {
  return (
    <LegalPage
      title="Política de Privacidade"
      markdownFile="10-politica-privacidade.md"
    />
  );
}
