import { notFound } from "next/navigation";
import { getDictionary, isLocale } from "@/lib/dictionary";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Content } from "@/components/Content";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Community } from "@/components/Community";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <>
      <Header locale={locale} dict={dict} />
      <main>
        <Hero dict={dict} />
        <Problem dict={dict} />
        <Content dict={dict} />
        <Features dict={dict} />
        <HowItWorks dict={dict} />
        <Community dict={dict} />
        <Faq dict={dict} />
        <FinalCta dict={dict} />
      </main>
      <Footer locale={locale} dict={dict} />
    </>
  );
}
