import "server-only";
import { cookies } from "next/headers";

const ACCESS_TOKEN_COOKIE = "fhemt_web_premium_token";

// No refresh token — this token is scoped server-side (JwtHelper.SCOPE_WEB_PREMIUM)
// to only the premium-request endpoints and is never tracked in the backend's
// SessionStore, so there's nothing to rotate. It just expires after 24h and
// the student logs in again.
const baseCookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const,
  path: "/",
};

export async function setWebPremiumToken(accessToken: string) {
  const store = await cookies();
  store.set(ACCESS_TOKEN_COOKIE, accessToken, { ...baseCookieOptions, maxAge: 60 * 60 * 24 });
}

export async function clearWebPremiumToken() {
  const store = await cookies();
  store.delete(ACCESS_TOKEN_COOKIE);
}

export async function getWebPremiumToken() {
  const store = await cookies();
  return store.get(ACCESS_TOKEN_COOKIE)?.value;
}
