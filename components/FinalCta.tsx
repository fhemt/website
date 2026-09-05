import { WaitlistForm } from "./WaitlistForm";

export function FinalCta() {
  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-display text-4xl font-bold text-on-secondary sm:text-[42px]">
          Sois parmi les premiers à l&apos;essayer
        </h2>
        <p className="mx-auto mt-4 max-w-md text-lg text-on-secondary/80">
          Laisse ton email, on te préviendra dès que Fhemt ouvre ses portes.
        </p>
        <div className="mt-8 flex justify-center">
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}
