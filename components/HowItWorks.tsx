const STEPS = [
  {
    number: "01",
    title: "Dis-nous où t'en es",
    description:
      "Un petit test de niveau au départ. S'il montre que tu maîtrises déjà un chapitre, il se débloque direct, pas besoin de le refaire.",
  },
  {
    number: "02",
    title: "Avance leçon par leçon",
    description:
      "Chaque leçon se termine par un quiz. Tu dois le réussir pour débloquer la suivante, donc rien n'est jamais suivi à moitié.",
  },
  {
    number: "03",
    title: "Entraîne-toi jusqu'à l'examen",
    description:
      "Exercices corrigés en détail, puis examens blancs une fois le cours terminé, dans les conditions du vrai contrôle.",
  },
];

export function HowItWorks() {
  return (
    <section id="comment-ca-marche" className="border-t border-border-light bg-surface-warm py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="max-w-xl font-display text-4xl text-foreground sm:text-[42px]">
          Comment ça marche
        </h2>

        <div className="mt-14 grid gap-10 sm:grid-cols-3 sm:gap-8">
          {STEPS.map((step) => (
            <div key={step.number}>
              <span className="font-display text-5xl text-primary/40">{step.number}</span>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-foreground-secondary">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
