import Link from "next/link";
import { Dictionary, Locale } from "@/lib/dictionary";
import { Logo } from "./Logo";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <footer className="border-t border-border-light bg-surface-warm">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Logo locale={locale} />
            <p className="mt-3 max-w-xs text-sm text-foreground-secondary">{dict.footer.tagline}</p>
          </div>

          {dict.footer.columns.map((column) => (
            <div key={column.title}>
              <p className="text-sm font-semibold text-foreground">{column.title}</p>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href.startsWith("#") || link.href.startsWith("mailto:") ? link.href : `/${locale}${link.href}`}
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
          <p>© {new Date().getFullYear()} Fhemt. {dict.footer.copyright}</p>
          <p>{dict.footer.madeIn}</p>
        </div>
      </div>
    </footer>
  );
}
