import Link from "next/link";

const FOOTER_COLUMNS = [
  {
    title: "Produit",
    links: [
      { href: "#comment-ca-marche", label: "Comment ça marche" },
      { href: "#matieres", label: "Matières" },
      { href: "#faq", label: "FAQ" },
    ],
  },
  {
    title: "Entreprise",
    links: [{ href: "mailto:contact@fhemt.ma", label: "Nous contacter" }],
  },
  {
    title: "Légal",
    links: [
      { href: "/conditions-utilisation", label: "Conditions d'utilisation" },
      { href: "/confidentialite", label: "Politique de confidentialité" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border-light bg-surface-warm">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <span className="font-display text-2xl font-bold text-foreground">fhemt</span>
            <p className="mt-3 max-w-xs text-sm text-foreground-secondary">
              L&apos;application qui explique les cours du collège marocain en français et en
              darija.
            </p>
          </div>

          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title}>
              <p className="text-sm font-semibold text-foreground">{column.title}</p>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground-secondary transition hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-border-light pt-8 text-sm text-foreground-tertiary sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Fhemt. Tous droits réservés.</p>
          <p>Fait avec soin au Maroc.</p>
        </div>
      </div>
    </footer>
  );
}
