import Image from "next/image";
import { Zap } from "lucide-react";
import { WaitlistForm } from "./WaitlistForm";

export function Hero() {
  return (
    <section id="rejoindre" className="relative overflow-hidden pt-16 pb-24 sm:pt-24 sm:pb-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium text-foreground-secondary">
            Bientôt disponible sur iOS et Android
          </span>

          <h1 className="mt-6 font-display text-5xl leading-[1.05] text-foreground sm:text-6xl lg:text-[64px]">
            Ce que ton prof dit en français,{" "}
            <span className="font-display italic text-primary">on te l&apos;explique en darija.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-foreground-secondary">
            Fhemt reprend le programme du collège marocain, leçon par leçon, avec des exercices
            et des quiz pour vérifier que t&apos;as vraiment compris, pas juste lu en diagonale.
          </p>

          <div className="mt-8">
            <WaitlistForm />
            <p className="mt-3 text-sm text-foreground-tertiary">
              Aucun spam. Un seul email, le jour où l&apos;app ouvre.
            </p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-surface-secondary">
            <Image
              src="/images/hero-children-blue-wall.jpg"
              alt="Deux enfants qui rient devant un mur bleu, dans une médina marocaine"
              fill
              priority
              sizes="(min-width: 1024px) 480px, 90vw"
              className="object-cover"
            />
          </div>

          <div className="absolute -left-4 bottom-8 flex items-center gap-3 rounded-2xl border border-border-light bg-surface px-4 py-3 shadow-[0_12px_32px_-12px_rgba(26,26,26,0.18)] sm:-left-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary-light">
              <Zap className="h-5 w-5 text-secondary" strokeWidth={1.75} fill="currentColor" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Chapitre 3 terminé</p>
              <p className="text-xs text-foreground-tertiary">+40 XP gagnés</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
