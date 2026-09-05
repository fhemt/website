import type { MetadataRoute } from "next";
import { LOCALES } from "@/lib/dictionary";

export default function sitemap(): MetadataRoute.Sitemap {
  return LOCALES.map((locale) => ({
    url: `https://fhemt.ma/${locale}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: locale === "fr" ? 1 : 0.8,
  }));
}
