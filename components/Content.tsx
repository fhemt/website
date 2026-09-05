import Image from "next/image";
import { Dictionary } from "@/lib/dictionary";

export function Content({ dict }: { dict: Dictionary }) {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[1.75rem] bg-surface-secondary">
              <Image
                src="/images/pexels-chalkboard-math.jpg"
                alt="Tableau noir avec un exercice de mathématiques en français"
                fill
                sizes="(min-width: 1024px) 260px, 45vw"
                className="object-cover"
              />
            </div>
            <div className="relative mt-8 aspect-[3/4] overflow-hidden rounded-[1.75rem] bg-surface-secondary">
              <Image
                src="/images/pexels-girl-writing.jpg"
                alt="Jeune élève concentrée en train d'écrire dans son cahier"
                fill
                sizes="(min-width: 1024px) 260px, 45vw"
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className="font-display text-4xl font-bold text-foreground sm:text-[42px]">
              {dict.content.heading}
            </h2>
            <p className="mt-5 text-lg text-foreground-secondary">{dict.content.body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
