import { Dictionary, Locale } from "@/lib/dictionary";
import { Header } from "./Header";
import { Footer } from "./Footer";

type LegalSection = { heading: string; body: string[] };

function renderParagraph(paragraph: string, key: number) {
  if (!paragraph.includes("contact@fhemt.ma")) return <p key={key}>{paragraph}</p>;
  const [before, after] = paragraph.split("contact@fhemt.ma");
  return (
    <p key={key}>
      {before}
      <a href="mailto:contact@fhemt.ma" className="font-medium text-primary">
        contact@fhemt.ma
      </a>
      {after}
    </p>
  );
}

export function LegalPage({
  locale,
  dict,
  title,
  sections,
}: {
  locale: Locale;
  dict: Dictionary;
  title: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <Header locale={locale} dict={dict} />
      <main className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="font-display text-4xl font-bold text-foreground">{title}</h1>
        <p className="mt-2 text-sm text-foreground-tertiary">{dict.legal.lastUpdated}</p>
        <div className="mt-10 space-y-10">
          {sections.map((section, i) => (
            <section key={i} className="space-y-4">
              <h2 className="font-display text-xl font-bold text-foreground">{section.heading}</h2>
              <div className="space-y-4 text-[15px] leading-relaxed text-foreground-secondary">
                {section.body.map((paragraph, j) => renderParagraph(paragraph, j))}
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer locale={locale} dict={dict} />
    </>
  );
}
