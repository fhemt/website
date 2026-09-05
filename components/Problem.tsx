import Image from "next/image";
import { Dictionary } from "@/lib/dictionary";

export function Problem({ dict }: { dict: Dictionary }) {
  return (
    <section className="bg-lilac-light py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.75rem] bg-surface-secondary lg:order-2">
          <Image
            src="/images/pexels-classroom-mask.jpg"
            alt="Élève marocain qui sourit en classe, entouré de ses camarades"
            fill
            sizes="(min-width: 1024px) 560px, 90vw"
            className="object-cover"
          />
        </div>

        <div className="lg:order-1">
          <h2 className="font-display text-4xl font-bold text-foreground sm:text-[42px]">
            {dict.problem.title1}
            <span className="text-on-lilac">{dict.problem.titleAccent}</span>
          </h2>
          <p className="mt-5 text-lg text-foreground-secondary">{dict.problem.body1}</p>
          <p className="mt-4 text-lg text-foreground-secondary">{dict.problem.body2}</p>
        </div>
      </div>
    </section>
  );
}
