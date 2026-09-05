import type { Metadata } from "next";
import { Baloo_2, Nunito } from "next/font/google";
import "./globals.css";

const baloo2 = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const siteUrl = "https://fhemt.ma";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Fhemt, le soutien scolaire à la maison",
    template: "%s | Fhemt",
  },
  description:
    "Fhemt reprend tes cours de collège et de lycée en leçons courtes, expliquées en français et en darija, avec des exercices corrigés pour réussir tes examens. Disponible sur iOS et Android.",
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
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: siteUrl,
    siteName: "Fhemt",
    title: "Fhemt, le soutien scolaire à la maison",
    description:
      "Des cours de collège et de lycée en leçons courtes, en français et en darija, avec des exercices corrigés pour réussir tes examens.",
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
    title: "Fhemt, le soutien scolaire à la maison",
    description:
      "Des cours de collège et de lycée en français et en darija, avec des exercices corrigés pour réussir tes examens.",
    images: ["/images/hero-children-blue-wall.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${baloo2.variable} ${nunito.variable}`}
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
              description:
                "Fhemt reprend les cours de collège et de lycée marocains en leçons courtes, en français et en darija, avec des exercices corrigés pour réussir les examens.",
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
      </body>
    </html>
  );
}
