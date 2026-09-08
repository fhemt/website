import "server-only";
import { apiGet, apiPost, apiUpload } from "@/lib/api/client";

export type ApiPremiumRequestStatus = "PENDING" | "APPROVED" | "REJECTED";

export interface ApiWebLoginUser {
  userId: string;
  email: string;
  firstName: string;
  lastName: string;
  premium: boolean;
}

export interface ApiPremiumRequest {
  id: string;
  status: ApiPremiumRequestStatus;
  submittedAt: string;
  reviewedAt: string | null;
  rejectionReason: string | null;
  proofFileName: string;
  pricePaid: number;
  promoCode: string | null;
  affiliateOwnerName: string | null;
}

export interface ApiAffiliateLookup {
  code: string;
  ownerName: string;
  discountedPrice: number;
}

export function webLogin(email: string, password: string) {
  return apiPost<{ accessToken: string; user: ApiWebLoginUser }>("/api/v1/auth/web-login", { email, password }, { auth: false });
}

export function getMyPremiumRequests() {
  return apiGet<ApiPremiumRequest[]>("/api/v1/premium-requests/me");
}

export function lookupAffiliateCode(code: string) {
  return apiGet<ApiAffiliateLookup>(`/api/v1/premium-requests/affiliate-codes/${encodeURIComponent(code)}`);
}

export function submitPremiumRequest(promoCode: string | null, proof: File) {
  const formData = new FormData();
  formData.append("proof", proof, proof.name);
  const query = promoCode ? `?promoCode=${encodeURIComponent(promoCode)}` : "";
  return apiUpload<ApiPremiumRequest>(`/api/v1/premium-requests${query}`, formData);
}
