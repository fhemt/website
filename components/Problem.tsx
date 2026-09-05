import Image from "next/image";

export function Problem() {
  return (
    <section className="border-t border-border-light bg-surface-warm py-24">
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
          <h2 className="font-display text-4xl text-foreground sm:text-[42px]">
            Le cours a été donné en français.{" "}
            <span className="italic text-primary">Mais t&apos;as compris en darija.</span>
          </h2>
          <p className="mt-5 text-lg text-foreground-secondary">
            C&apos;est le décalage que vivent des milliers de collégiens chaque jour : suivre un
            cours de maths ou de SVT dans une langue qu&apos;on ne maîtrise pas encore à 100%, puis
            rentrer à la maison où personne ne peut le réexpliquer en français.
          </p>
          <p className="mt-4 text-lg text-foreground-secondary">
            Fhemt fait le pont. Chaque leçon existe en français ET en darija, pour que tu
            comprennes vraiment le fond, pas juste les mots.
          </p>
        </div>
      </div>
    </section>
  );
}
