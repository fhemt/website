import { DownloadButtons } from "./DownloadButtons";

export function FinalCta() {
  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-display text-4xl font-bold text-on-secondary sm:text-[42px]">
          Prêt à comprendre tes cours ?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-lg text-on-secondary/80">
          Télécharge Fhemt et commence dès aujourd&apos;hui, à ton rythme.
        </p>
        <div className="mt-8 flex justify-center">
          <DownloadButtons />
        </div>
      </div>
    </section>
  );
}
