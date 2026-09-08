"use server";

import { redirect } from "next/navigation";
import * as webPremiumApi from "@/lib/api/webPremium";
import { setWebPremiumToken } from "@/lib/session";
import { ApiError } from "@/lib/api/errors";
import { isLocale, Locale } from "@/lib/dictionary";

export type ActionState = { error?: string } | undefined;

export async function webLoginAction(locale: string, _prevState: ActionState, formData: FormData): Promise<ActionState> {
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "");
  const safeLocale: Locale = isLocale(locale) ? locale : "fr";

  if (!email || !password) {
    return { error: "missing" };
  }

  try {
    const { accessToken } = await webPremiumApi.webLogin(email, password);
    await setWebPremiumToken(accessToken);
  } catch (e) {
    if (e instanceof ApiError && (e.code === "AUTH_001" || e.code === "AUTH_002")) {
      return { error: "invalid" };
    }
    return { error: "generic" };
  }

  redirect(`/${safeLocale}/abonnement`);
}
