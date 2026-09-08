import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { getDictionary, isLocale } from "@/lib/dictionary";
import { getMyPremiumRequests } from "@/lib/api/webPremium";
import { SessionExpiredError } from "@/lib/api/errors";
import { PREMIUM_BASE_PRICE } from "@/lib/premium";
import { PremiumPanel } from "./PremiumPanel";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return { title: dict.premium.panel.metaTitle, robots: { index: false, follow: false } };
}

export default async function AbonnementPanelPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  let requests;
  try {
    requests = await getMyPremiumRequests();
  } catch (e) {
    if (e instanceof SessionExpiredError) redirect(`/${locale}/abonnement/login`);
    throw e;
  }

  const sorted = [...requests].sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime());
  const isPremium = sorted.some((r) => r.status === "APPROVED");
  const hasPending = sorted.some((r) => r.status === "PENDING");

  return (
    <PremiumPanel
      locale={locale}
      dict={dict}
      requests={sorted}
      isPremium={isPremium}
      hasPending={hasPending}
      basePrice={PREMIUM_BASE_PRICE}
      rib={{
        bank: process.env.PREMIUM_RIB_BANK ?? "",
        holder: process.env.PREMIUM_RIB_HOLDER ?? "",
        number: process.env.PREMIUM_RIB_NUMBER ?? "",
      }}
    />
  );
}
