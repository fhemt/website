import "server-only";
import { clearWebPremiumToken, getWebPremiumToken } from "@/lib/session";
import { ApiError, SessionExpiredError } from "@/lib/api/errors";

const API_URL = process.env.API_URL ?? "http://localhost:8080";

interface ApiEnvelope<T> {
  data?: T;
  error?: { code: string; message: { fr: string; ar: string; en: string } };
}

type RequestOptions = {
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  body?: unknown;
  auth?: boolean;
};

async function rawRequest<T>(path: string, options: RequestOptions): Promise<T> {
  const { method = "GET", body, auth = true } = options;
  const headers: Record<string, string> = { "Content-Type": "application/json" };

  if (auth) {
    const token = await getWebPremiumToken();
    if (!token) throw new SessionExpiredError();
    headers.Authorization = `Bearer ${token}`;
  }

  const res = await fetch(`${API_URL}${path}`, {
    method,
    headers,
    body: body === undefined ? undefined : JSON.stringify(body),
    cache: "no-store",
  });

  const envelope: ApiEnvelope<T> = await res.json();

  if (envelope.error) {
    const { code } = envelope.error;
    // No refresh token to try here (see lib/session.ts) — any auth failure
    // just means "log in again".
    if (res.status === 401 && auth) {
      try {
        await clearWebPremiumToken();
      } catch {
        // Called from a plain Server Component render, not a Server Action —
        // cookies can't be mutated there. Harmless; overwritten on next login.
      }
      throw new SessionExpiredError();
    }
    throw new ApiError(code, res.status, envelope.error.message.fr);
  }

  return envelope.data as T;
}

/** Multipart upload (proof of payment) — bypasses rawRequest's JSON body
 * entirely; the caller builds the FormData (file + promoCode) itself. */
async function rawUpload<T>(path: string, formData: FormData): Promise<T> {
  const token = await getWebPremiumToken();
  if (!token) throw new SessionExpiredError();

  const res = await fetch(`${API_URL}${path}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    body: formData,
    cache: "no-store",
  });

  const envelope: ApiEnvelope<T> = await res.json();

  if (envelope.error) {
    if (res.status === 401) {
      try {
        await clearWebPremiumToken();
      } catch {
        // See rawRequest.
      }
      throw new SessionExpiredError();
    }
    throw new ApiError(envelope.error.code, res.status, envelope.error.message.fr);
  }

  return envelope.data as T;
}

export function apiGet<T>(path: string, options?: Omit<RequestOptions, "method" | "body">) {
  return rawRequest<T>(path, { ...options, method: "GET" });
}
export function apiPost<T>(path: string, body?: unknown, options?: Omit<RequestOptions, "method" | "body">) {
  return rawRequest<T>(path, { ...options, method: "POST", body });
}
export function apiUpload<T>(path: string, formData: FormData) {
  return rawUpload<T>(path, formData);
}
