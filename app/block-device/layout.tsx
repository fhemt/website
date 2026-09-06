import type { Metadata } from "next";
import { Baloo_2, Nunito } from "next/font/google";
import "../globals.css";

const baloo2 = Baloo_2({ variable: "--font-baloo", subsets: ["latin"], weight: ["600", "700", "800"] });
const nunito = Nunito({ variable: "--font-nunito", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sécurité du compte | Fhemt",
  robots: { index: false, follow: false },
};

export default function BlockDeviceLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${baloo2.variable} ${nunito.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
