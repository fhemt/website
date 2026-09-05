import Link from "next/link";
import { Locale } from "@/lib/dictionary";

export function Logo({ locale, className }: { locale: Locale; className?: string }) {
  return (
    <Link
      href={`/${locale}`}
      className={`font-display text-2xl font-bold text-foreground ${className ?? ""}`}
    >
      fhemt
    </Link>
  );
}
