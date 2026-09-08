import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { getDictionary, isLocale } from "@/lib/dictionary";
import { getWebPremiumToken } from "@/lib/session";
import { Logo } from "@/components/Logo";
import { LoginForm } from "./LoginForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return { title: dict.premium.login.metaTitle, robots: { index: false, follow: false } };
}

export default async function AbonnementLoginPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  if (await getWebPremiumToken()) redirect(`/${locale}/abonnement`);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-md">
        <div className="mb-6 flex justify-center">
          <Logo locale={locale} />
        </div>
        <div className="rounded-2xl border border-border-light bg-surface p-8 shadow-sm">
          <h1 className="mb-1 font-display text-2xl font-bold text-foreground">{dict.premium.login.title}</h1>
          <p className="mb-6 text-sm text-foreground-secondary">{dict.premium.login.subtitle}</p>
          <LoginForm locale={locale} dict={dict} />
        </div>
      </div>
    </div>
  );
}
