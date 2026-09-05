import Image from "next/image";
import { Dictionary } from "@/lib/dictionary";

export function Community({ dict }: { dict: Dictionary }) {
  return (
    <section className="bg-success-light py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-4">
              <div className="relative aspect-square overflow-hidden rounded-[1.75rem] bg-surface-secondary">
                <Image
                  src="/images/success-smiling-girl.jpg"
                  alt="Jeune fille marocaine qui rit avec ses camarades"
                  fill
                  sizes="(min-width: 1024px) 260px, 45vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-[1.75rem] bg-surface-secondary">
                <Image
                  src="/images/pexels-backpack-hug.jpg"
                  alt="Deux enfants qui se prennent dans les bras à la sortie de l'école"
                  fill
                  sizes="(min-width: 1024px) 260px, 45vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="relative mt-8 aspect-[3/5] overflow-hidden rounded-[1.75rem] bg-surface-secondary">
              <Image
                src="/images/pexels-group-mural.jpg"
                alt="Groupe d'élèves marocains souriants devant une fresque murale"
                fill
                sizes="(min-width: 1024px) 260px, 45vw"
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className="font-display text-4xl font-bold text-foreground sm:text-[42px]">
              {dict.community.heading}
            </h2>
            <p className="mt-5 text-lg text-foreground-secondary">{dict.community.body1}</p>
            <p className="mt-4 text-lg text-foreground-secondary">{dict.community.body2}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
