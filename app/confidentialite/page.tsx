import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Politique de confidentialité">
      <p>
        Cette page détaillera précisément quelles données Fhemt collecte (compte, progression
        d&apos;apprentissage, paiement), comment elles sont stockées et protégées, et les droits
        dont tu disposes sur tes données, une fois la version définitive validée par notre équipe
        juridique.
      </p>
      <p>
        En attendant, toute question peut être adressée à{" "}
        <a href="mailto:contact@fhemt.ma" className="font-medium text-primary">
          contact@fhemt.ma
        </a>
        .
      </p>
    </LegalPage>
  );
}
