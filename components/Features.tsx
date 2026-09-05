import { BatteryCharging, ClipboardCheck, Languages, TrendingUp } from "lucide-react";
import { Dictionary } from "@/lib/dictionary";

const ICONS = [Languages, ClipboardCheck, TrendingUp, BatteryCharging];
const STYLES = [
  { bg: "bg-primary-light", iconBg: "bg-primary", iconColor: "text-on-primary", textColor: "text-foreground" },
  { bg: "bg-lilac-light", iconBg: "bg-lilac", iconColor: "text-on-lilac", textColor: "text-on-lilac" },
  { bg: "bg-success-light", iconBg: "bg-success", iconColor: "text-on-success", textColor: "text-foreground" },
  { bg: "bg-secondary-light", iconBg: "bg-secondary", iconColor: "text-on-secondary", textColor: "text-foreground" },
];

export function Features({ dict }: { dict: Dictionary }) {
  return (
    <section id="matieres" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl font-bold text-foreground sm:text-[42px]">
            {dict.features.heading1}
            <span className="text-primary">{dict.features.headingAccent}</span>
          </h2>
          <p className="mt-4 text-lg text-foreground-secondary">{dict.features.subheading}</p>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            {dict.features.subjects.map((subject) => (
              <span
                key={subject}
                className="rounded-full border border-border bg-surface px-4 py-1.5 text-sm font-medium text-foreground-secondary"
              >
                {subject}
              </span>
            ))}
            <span className="text-sm text-foreground-tertiary">{dict.features.subjectsMore}</span>
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {dict.features.items.map((feature, i) => {
            const Icon = ICONS[i];
            const style = STYLES[i];
            return (
              <div key={feature.title} className={`rounded-3xl ${style.bg} p-7`}>
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${style.iconBg}`}>
                  <Icon className={`h-5.5 w-5.5 ${style.iconColor}`} strokeWidth={1.5} />
                </div>
                <h3 className={`mt-5 text-lg font-bold ${style.textColor}`}>{feature.title}</h3>
                <p className={`mt-2 text-[15px] leading-relaxed ${style.textColor} opacity-80`}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
