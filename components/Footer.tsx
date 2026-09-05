export function Footer() {
  return (
    <footer className="border-t border-border-light py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <span className="font-display text-xl text-foreground">fhemt</span>
        <p className="text-sm text-foreground-tertiary">
          © {new Date().getFullYear()} Fhemt. Fait avec soin au Maroc.
        </p>
      </div>
    </footer>
  );
}
