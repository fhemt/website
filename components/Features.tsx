import { BatteryCharging, ClipboardCheck, Languages, TrendingUp } from "lucide-react";

const FEATURES = [
  {
    icon: Languages,
    tint: "bg-primary-light text-primary",
    title: "Chaque leçon, en français et en darija",
    description:
      "Bascule d'une langue à l'autre en un geste. Utile le temps de bien saisir une notion, puis tu repasses au français pour l'examen.",
  },
  {
    icon: ClipboardCheck,
    tint: "bg-lilac-light text-on-lilac",
    title: "Des exercices avec correction détaillée",
    description:
      "Pas juste la bonne réponse : chaque correction explique le raisonnement, étape par étape, comme le ferait un prof particulier.",
  },
  {
    icon: TrendingUp,
    tint: "bg-success-light text-success",
    title: "Un suivi qui montre les vrais progrès",
    description:
      "Niveaux, XP et pourcentage de complétion par cours. De quoi voir concrètement le chemin parcouru depuis le premier chapitre.",
  },
  {
    icon: BatteryCharging,
    tint: "bg-secondary-light text-[#8a6200]",
    title: "Une bonne dose de jeu, sans distraire du travail",
    description:
      "Un système de vies rechargeables pour les quiz, pensé pour donner envie de revenir chaque jour plutôt que d'abandonner après un échec.",
  },
];

export function Features() {
  return (
    <section id="matieres" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl text-foreground sm:text-[42px]">
            Pensé pour comment les collégiens apprennent{" "}
            <span className="italic text-primary">vraiment</span>
          </h2>
          <p className="mt-4 text-lg text-foreground-secondary">
            Pas une bibliothèque de PDF de plus. Une app construite autour du programme marocain,
            du diagnostic de niveau jusqu&apos;à l&apos;examen blanc.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-border-light bg-surface p-7 transition hover:border-border hover:shadow-sm"
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${feature.tint}`}>
                <feature.icon className="h-5.5 w-5.5" strokeWidth={1.5} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-foreground-secondary">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
