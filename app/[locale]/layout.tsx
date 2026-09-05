import type { Metadata } from "next";
import { Baloo_2, Nunito, Tajawal } from "next/font/google";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";
import "../globals.css";
import { getDictionary, isLocale, LOCALES } from "@/lib/dictionary";

const baloo2 = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700", "800"],
});

const siteUrl = "https://fhemt.ma";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return {
    metadataBase: new URL(siteUrl),
    title: { default: dict.meta.title, template: `%s | Fhemt` },
    description: dict.meta.description,
    keywords: [
      "soutien scolaire Maroc",
      "cours collège Maroc",
      "cours lycée Maroc",
      "application éducative marocaine",
      "apprendre en darija",
      "exercices collège Maroc",
      "cours de maths collège",
      "cours physique chimie collège",
      "cours SVT collège",
      "application scolaire Maroc",
    ],
    authors: [{ name: "Fhemt" }],
    alternates: {
      canonical: `/${locale}`,
      languages: { fr: "/fr", ar: "/ar" },
    },
    openGraph: {
      type: "website",
      locale: locale === "ar" ? "ar_MA" : "fr_MA",
      url: `${siteUrl}/${locale}`,
      siteName: "Fhemt",
      title: dict.meta.title,
      description: dict.meta.description,
      images: [
        {
          url: "/images/hero-children-blue-wall.jpg",
          width: 1800,
          height: 1200,
          alt: "Deux enfants marocains souriants",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: ["/images/hero-children-blue-wall.jpg"],
    },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <html
      lang={locale === "ar" ? "ar-MA" : "fr"}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={`${baloo2.variable} ${nunito.variable} ${tajawal.variable}`}
    >
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MobileApplication",
              name: "Fhemt",
              applicationCategory: "EducationalApplication",
              operatingSystem: "iOS, Android",
              description: dict.meta.description,
              inLanguage: ["fr-MA", "ar-MA"],
              audience: {
                "@type": "EducationalAudience",
                educationalRole: "student",
              },
              publisher: {
                "@type": "Organization",
                name: "Fhemt",
              },
            }),
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
