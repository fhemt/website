import Image from "next/image";

export function Problem() {
  return (
    <section className="bg-lilac-light py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.75rem] bg-surface-secondary lg:order-2">
          <Image
            src="/images/classroom-desks.jpg"
            alt="Salle de classe vide avec des bureaux colorés"
            fill
            sizes="(min-width: 1024px) 560px, 90vw"
            className="object-cover"
          />
        </div>

        <div className="lg:order-1">
          <h2 className="font-display text-4xl font-bold text-foreground sm:text-[42px]">
            Après les cours, <span className="text-on-lilac">qui réexplique à la maison ?</span>
          </h2>
          <p className="mt-5 text-lg text-foreground-secondary">
            Tout le monde n&apos;a pas un prof particulier sous la main pour revoir un cours de
            maths ou de SVT le soir. Fhemt joue ce rôle : des leçons courtes et guidées, comme sur
            Duolingo, que tu peux reprendre seul autant de fois qu&apos;il le faut.
          </p>
          <p className="mt-4 text-lg text-foreground-secondary">
            Et pour que ça reste clair, chaque leçon existe aussi en darija. De quoi comprendre le
            fond, pas juste retenir des mots en français.
          </p>
        </div>
      </div>
    </section>
  );
}
