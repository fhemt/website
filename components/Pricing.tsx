import { Check } from "lucide-react";

const FREE_FEATURES = [
  "Tous les cours et leçons du niveau",
  "Quiz de fin de leçon",
  "5 vies rechargeables par jour",
  "2 exercices gratuits par chapitre",
];

const PREMIUM_FEATURES = [
  "Tout ce qui est inclus dans Gratuit",
  "Vies illimitées sur les quiz",
  "Collection complète d'exercices",
  "Corrections détaillées pas à pas",
  "Tous les examens blancs",
];

export function Pricing() {
  return (
    <section id="tarifs" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-xl">
          <h2 className="font-display text-4xl text-foreground sm:text-[42px]">Des tarifs simples</h2>
          <p className="mt-4 text-lg text-foreground-secondary">
            Commence gratuitement. Passe à Premium seulement si tu sens que ça vaut le coup.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[1.75rem] border border-border-light bg-surface p-8">
            <p className="text-sm font-semibold tracking-wide text-foreground-secondary">GRATUIT</p>
            <p className="mt-3 font-display text-4xl text-foreground">0 DH</p>
            <ul className="mt-7 space-y-3.5">
              {FREE_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-3 text-[15px] text-foreground-secondary">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-foreground-tertiary" strokeWidth={2} />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[1.75rem] border-2 border-gold bg-gold-light p-8">
            <p className="text-sm font-semibold tracking-wide text-gold">PREMIUM</p>
            <p className="mt-3 flex items-baseline gap-1.5">
              <span className="font-display text-4xl text-foreground">199 DH</span>
              <span className="text-sm text-foreground-secondary">/ mois</span>
            </p>
            <ul className="mt-7 space-y-3.5">
              {PREMIUM_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-3 text-[15px] text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={2} />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-6 text-sm text-foreground-tertiary">
          Prof ou établissement partenaire ? Écris-nous pour un code promo à partager avec tes élèves.
        </p>
      </div>
    </section>
  );
}
