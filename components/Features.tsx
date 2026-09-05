import { BatteryCharging, ClipboardCheck, Languages, TrendingUp } from "lucide-react";

const FEATURES = [
  {
    icon: Languages,
    bg: "bg-primary-light",
    iconBg: "bg-primary",
    iconColor: "text-on-primary",
    textColor: "text-foreground",
    title: "Chaque leçon, en français et en darija",
    description:
      "Bascule d'une langue à l'autre en un geste. Utile le temps de bien saisir une notion, puis tu repasses au français pour l'examen.",
  },
  {
    icon: ClipboardCheck,
    bg: "bg-lilac-light",
    iconBg: "bg-lilac",
    iconColor: "text-on-lilac",
    textColor: "text-on-lilac",
    title: "Plein d'exercices, avec correction détaillée",
    description:
      "Pas juste la bonne réponse : chaque correction explique le raisonnement, étape par étape. De quoi arriver à l'examen prêt, et rendre tes parents aussi fiers que toi.",
  },
  {
    icon: TrendingUp,
    bg: "bg-success-light",
    iconBg: "bg-success",
    iconColor: "text-on-success",
    textColor: "text-foreground",
    title: "Un suivi qui montre les vrais progrès",
    description:
      "Niveaux, XP et pourcentage de complétion par cours. De quoi voir concrètement le chemin parcouru depuis le premier chapitre.",
  },
  {
    icon: BatteryCharging,
    bg: "bg-secondary-light",
    iconBg: "bg-secondary",
    iconColor: "text-on-secondary",
    textColor: "text-foreground",
    title: "Des leçons courtes, façon Duolingo",
    description:
      "Un système de vies rechargeables et de petits objectifs à la fois, pensé pour donner envie de revenir chaque jour plutôt que d'abandonner après un échec.",
  },
];

const SUBJECTS = ["Mathématiques", "Physique-Chimie", "SVT"];

export function Features() {
  return (
    <section id="matieres" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl font-bold text-foreground sm:text-[42px]">
            Pensé pour comment les collégiens apprennent <span className="text-primary">vraiment</span>
          </h2>
          <p className="mt-4 text-lg text-foreground-secondary">
            Pas une bibliothèque de PDF de plus. Une app construite autour du programme marocain,
            du diagnostic de niveau jusqu&apos;à l&apos;examen blanc.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            {SUBJECTS.map((subject) => (
              <span
                key={subject}
                className="rounded-full border border-border bg-surface px-4 py-1.5 text-sm font-medium text-foreground-secondary"
              >
                {subject}
              </span>
            ))}
            <span className="text-sm text-foreground-tertiary">
              et d&apos;autres matières à venir
            </span>
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {FEATURES.map((feature) => (
            <div key={feature.title} className={`rounded-3xl ${feature.bg} p-7`}>
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${feature.iconBg}`}>
                <feature.icon className={`h-5.5 w-5.5 ${feature.iconColor}`} strokeWidth={1.5} />
              </div>
              <h3 className={`mt-5 text-lg font-bold ${feature.textColor}`}>{feature.title}</h3>
              <p className={`mt-2 text-[15px] leading-relaxed ${feature.textColor} opacity-80`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
