"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import * as webPremiumApi from "@/lib/api/webPremium";
import { clearWebPremiumToken } from "@/lib/session";
import { ApiError, SessionExpiredError } from "@/lib/api/errors";
import { isLocale, Locale } from "@/lib/dictionary";

export type SubmitState = { error?: string } | undefined;

export async function submitPremiumRequestAction(
  locale: string,
  _prevState: SubmitState,
  formData: FormData
): Promise<SubmitState> {
  const proof = formData.get("proof");
  const promoCode = String(formData.get("promoCode") ?? "").trim() || null;
  const safeLocale: Locale = isLocale(locale) ? locale : "fr";

  if (!(proof instanceof File) || proof.size === 0) {
    return { error: "missingProof" };
  }

  try {
    await webPremiumApi.submitPremiumRequest(promoCode, proof);
  } catch (e) {
    if (e instanceof SessionExpiredError) redirect(`/${safeLocale}/abonnement/login`);
    if (e instanceof ApiError && e.code === "PREMIUM_002") return { error: "alreadyPending" };
    if (e instanceof ApiError && e.code === "AFFILIATE_001") return { error: "invalidPromoCode" };
    return { error: "generic" };
  }

  revalidatePath(`/${safeLocale}/abonnement`);
  return { error: undefined };
}

export async function logoutAction(locale: string) {
  await clearWebPremiumToken();
  const safeLocale: Locale = isLocale(locale) ? locale : "fr";
  redirect(`/${safeLocale}/abonnement/login`);
}
