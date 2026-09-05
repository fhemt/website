import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Conditions d'utilisation",
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <LegalPage title="Conditions d'utilisation">
      <p>
        Cette page présentera les conditions d&apos;utilisation de Fhemt une fois notre équipe
        juridique les aura finalisées : ce que couvre l&apos;abonnement, les règles d&apos;usage
        du contenu pédagogique, la résiliation, et les responsabilités de chaque partie.
      </p>
      <p>
        En attendant la version définitive, toute question peut être adressée à{" "}
        <a href="mailto:contact@fhemt.ma" className="font-medium text-primary">
          contact@fhemt.ma
        </a>
        .
      </p>
    </LegalPage>
  );
}
