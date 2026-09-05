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
    default: "Fhemt, l'appli qui explique tes cours de collège",
    template: "%s | Fhemt",
  },
  description:
    "Fhemt explique tes cours de collège en français et en darija, avec des exercices, des quiz et un suivi de progression pensés pour les élèves marocains. Bientôt disponible sur iOS et Android.",
  keywords: [
    "soutien scolaire Maroc",
    "cours collège Maroc",
    "application éducative marocaine",
    "apprendre en darija",
    "exercices collège Maroc",
    "cours de maths collège",
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
    title: "Fhemt, l'appli qui explique tes cours de collège",
    description:
      "L'application qui explique tes cours en français et en darija, avec des exercices et un suivi de progression fait pour les élèves marocains.",
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
    title: "Fhemt, l'appli qui explique tes cours de collège",
    description:
      "L'application qui explique tes cours en français et en darija, pensée pour les élèves marocains.",
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
                "Fhemt explique les cours de collège en français et en darija, avec exercices, quiz et suivi de progression pour les élèves marocains.",
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
