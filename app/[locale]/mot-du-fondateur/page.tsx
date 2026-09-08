import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getDictionary, isLocale } from "@/lib/dictionary";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const LINKEDIN_URL = "https://www.linkedin.com/in/dia-eddine-el-keantaoui-778677225/";
const siteUrl = "https://fhemt.ma";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return {
    title: dict.founder.metaTitle,
    description: dict.founder.metaDescription,
    alternates: {
      canonical: `/${locale}/mot-du-fondateur`,
      languages: { fr: "/fr/mot-du-fondateur", ar: "/ar/mot-du-fondateur" },
    },
    openGraph: {
      type: "profile",
      url: `${siteUrl}/${locale}/mot-du-fondateur`,
      title: dict.founder.metaTitle,
      description: dict.founder.metaDescription,
      images: [{ url: "/images/founder-dia-eddine.jpg", width: 768, height: 768, alt: dict.founder.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.founder.metaTitle,
      description: dict.founder.metaDescription,
      images: ["/images/founder-dia-eddine.jpg"],
    },
    robots: { index: true, follow: true },
  };
}

export default async function FounderPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: dict.founder.name,
            jobTitle: dict.founder.role,
            image: `${siteUrl}/images/founder-dia-eddine.jpg`,
            url: `${siteUrl}/${locale}/mot-du-fondateur`,
            sameAs: [LINKEDIN_URL],
            worksFor: { "@type": "Organization", name: "Fhemt", url: siteUrl },
          }),
        }}
      />
      <Header locale={locale} dict={dict} />
      <main className="mx-auto max-w-3xl px-6 py-20">
        <div className="flex flex-col items-center text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">{dict.founder.eyebrow}</p>
          <div className="mt-6 h-28 w-28 overflow-hidden rounded-full border border-border-light">
            <Image
              src="/images/founder-dia-eddine.jpg"
              alt={dict.founder.name}
              width={112}
              height={112}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <h1 className="mt-5 font-display text-3xl font-bold text-foreground">{dict.founder.name}</h1>
          <p className="mt-1 text-sm text-foreground-secondary">{dict.founder.role}</p>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground-secondary transition hover:border-foreground/30 hover:text-foreground"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.33V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
            </svg>
            {dict.founder.linkedinLabel}
          </a>
        </div>

        <div className="mt-14 space-y-5 text-[15px] leading-relaxed text-foreground-secondary">
          {dict.founder.paragraphs.map((paragraph, i) => (
            <p key={i}>
              {paragraph.split("\n").map((line, j, arr) => (
                <span key={j}>
                  {line}
                  {j < arr.length - 1 && <br />}
                </span>
              ))}
            </p>
          ))}
        </div>
      </main>
      <Footer locale={locale} dict={dict} />
    </>
  );
}
