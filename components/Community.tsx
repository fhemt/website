import Image from "next/image";

export function Community() {
  return (
    <section className="bg-success-light py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[1.75rem] bg-surface-secondary">
              <Image
                src="/images/urban-boys-skateboard.jpg"
                alt="Un groupe d'enfants marocains dans une rue, le soir"
                fill
                sizes="(min-width: 1024px) 260px, 45vw"
                className="object-cover"
              />
            </div>
            <div className="relative mt-8 aspect-[3/4] overflow-hidden rounded-[1.75rem] bg-surface-secondary">
              <Image
                src="/images/success-smiling-girl.jpg"
                alt="Jeune fille marocaine qui rit avec ses camarades"
                fill
                sizes="(min-width: 1024px) 260px, 45vw"
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className="font-display text-4xl font-bold text-foreground sm:text-[42px]">
              Conçu au Maroc, pour les élèves marocains
            </h2>
            <p className="mt-5 text-lg text-foreground-secondary">
              Le programme, les exemples, la façon d&apos;expliquer un exercice : tout est pensé
              pour coller à ce qui se passe réellement en classe ici, pas à un programme importé
              et traduit à la va-vite.
            </p>
            <p className="mt-4 text-lg text-foreground-secondary">
              Et le contenu continue de s&apos;enrichir avec des profs marocains qui relisent et
              valident chaque cours avant qu&apos;il n&apos;arrive dans l&apos;app.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
