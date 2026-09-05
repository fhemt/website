import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary, isLocale } from "@/lib/dictionary";
import { LegalPage } from "@/components/LegalPage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return { title: dict.legal.privacy.title, robots: { index: false, follow: true } };
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <LegalPage locale={locale} dict={dict} title={dict.legal.privacy.title}>
      {dict.legal.privacy.body.map((paragraph, i) =>
        i === dict.legal.privacy.body.length - 1 ? (
          <p key={i}>
            {paragraph.split("contact@fhemt.ma")[0]}
            <a href="mailto:contact@fhemt.ma" className="font-medium text-primary">
              contact@fhemt.ma
            </a>
            {paragraph.split("contact@fhemt.ma")[1]}
          </p>
        ) : (
          <p key={i}>{paragraph}</p>
        )
      )}
    </LegalPage>
  );
}
