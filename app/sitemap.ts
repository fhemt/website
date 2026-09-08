import type { MetadataRoute } from "next";
import { LOCALES } from "@/lib/dictionary";

export default function sitemap(): MetadataRoute.Sitemap {
  return LOCALES.flatMap((locale) => [
    {
      url: `https://fhemt.ma/${locale}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: locale === "fr" ? 1 : 0.8,
    },
    {
      url: `https://fhemt.ma/${locale}/mot-du-fondateur`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: locale === "fr" ? 0.6 : 0.5,
    },
  ]);
}
