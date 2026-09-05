import { Dictionary } from "@/lib/dictionary";

export function HowItWorks({ dict }: { dict: Dictionary }) {
  return (
    <section id="comment-ca-marche" className="bg-surface-warm py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="max-w-xl font-display text-4xl font-bold text-foreground sm:text-[42px]">
          {dict.howItWorks.heading}
        </h2>

        <div className="mt-14 grid gap-10 sm:grid-cols-3 sm:gap-8">
          {dict.howItWorks.steps.map((step, i) => (
            <div key={step.title}>
              <span className="font-display text-5xl font-bold text-primary/40">
                {String(i + 1).padStart(2, "0")}
              </span>
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
