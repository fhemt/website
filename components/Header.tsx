import Link from "next/link";
import { Dictionary, Locale } from "@/lib/dictionary";
import { Logo } from "./Logo";

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const navLinks = [
    { href: "#comment-ca-marche", label: dict.nav.howItWorks },
    { href: "#matieres", label: dict.nav.subjects },
    { href: "#faq", label: dict.nav.faq },
  ];
  const otherLocale: Locale = locale === "fr" ? "ar" : "fr";

  return (
    <header className="sticky top-0 z-50 border-b border-border-light bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Logo locale={locale} />

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-foreground-secondary transition hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={`/${otherLocale}`}
            className="rounded-full border border-border px-3 py-2 text-sm font-medium text-foreground-secondary transition hover:border-foreground/30 hover:text-foreground"
          >
            {otherLocale === "ar" ? "العربية" : "Français"}
          </Link>
          <a
            href="#telecharger"
            className="rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-on-primary transition hover:bg-primary-pressed sm:px-5"
          >
            {dict.nav.download}
          </a>
        </div>
      </div>
    </header>
  );
}
