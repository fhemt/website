import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="font-display text-4xl font-bold text-foreground">{title}</h1>
        <p className="mt-2 text-sm text-foreground-tertiary">
          Dernière mise à jour : en cours de rédaction
        </p>
        <div className="mt-10 space-y-6 text-[15px] leading-relaxed text-foreground-secondary">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
