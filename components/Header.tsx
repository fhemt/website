import Link from "next/link";

const NAV_LINKS = [
  { href: "#comment-ca-marche", label: "Comment ça marche" },
  { href: "#matieres", label: "Matières" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border-light bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="font-display text-2xl font-bold text-foreground">
          fhemt
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-foreground-secondary transition hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#rejoindre"
          className="rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-on-primary transition hover:bg-primary-pressed sm:px-5"
        >
          Liste d&apos;attente
        </a>
      </div>
    </header>
  );
}
