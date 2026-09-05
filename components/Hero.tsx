import Image from "next/image";
import { Zap } from "lucide-react";
import { WaitlistForm } from "./WaitlistForm";

export function Hero() {
  return (
    <section id="rejoindre" className="relative overflow-hidden pt-14 pb-20 sm:pt-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10">
          <div>
            <h1 className="font-display text-5xl font-bold leading-[1.08] text-foreground sm:text-6xl lg:text-[60px]">
              Ce que ton prof dit en français,{" "}
              <span className="text-primary">on te l&apos;explique en darija.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-foreground-secondary">
              Fhemt reprend le programme du collège marocain, leçon par leçon, avec des exercices
              et des quiz pour vérifier que t&apos;as vraiment compris, pas juste lu en diagonale.
            </p>

            <div className="mt-8">
              <WaitlistForm />
              <p className="mt-3 text-sm text-foreground-tertiary">
                Aucun spam, un seul email le jour du lancement. Bientôt sur iOS et Android.
              </p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative rounded-[2rem] bg-lilac-light p-4">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.5rem] bg-surface-secondary">
                <Image
                  src="/images/hero-children-blue-wall.jpg"
                  alt="Deux enfants qui rient devant un mur bleu, dans une médina marocaine"
                  fill
                  priority
                  sizes="(min-width: 1024px) 480px, 90vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="absolute -left-4 bottom-2 flex items-center gap-3 rounded-2xl bg-secondary px-4 py-3 shadow-[0_12px_32px_-12px_rgba(26,26,26,0.25)] sm:-left-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/70">
                <Zap className="h-5 w-5 text-on-secondary" strokeWidth={1.75} fill="currentColor" />
              </div>
              <div>
                <p className="text-sm font-bold text-on-secondary">Chapitre 3 terminé</p>
                <p className="text-xs text-on-secondary/70">+40 XP gagnés</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
