"use client";

import { useActionState, useState } from "react";
import { Check, Clock, Crown, Landmark, Loader2, LogOut, UploadCloud, XCircle } from "lucide-react";
import { Dictionary } from "@/lib/dictionary";
import { ApiPremiumRequest } from "@/lib/api/webPremium";
import { submitPremiumRequestAction, logoutAction, SubmitState } from "./actions";

type Rib = { bank: string; holder: string; number: string };

type Props = {
  locale: string;
  dict: Dictionary;
  requests: ApiPremiumRequest[];
  isPremium: boolean;
  hasPending: boolean;
  basePrice: number;
  rib: Rib;
};

function statusLabel(status: ApiPremiumRequest["status"], t: Dictionary["premium"]["panel"]) {
  if (status === "APPROVED") return t.statusApproved;
  if (status === "REJECTED") return t.statusRejected;
  return t.statusPending;
}

function statusTint(status: ApiPremiumRequest["status"]) {
  if (status === "APPROVED") return "bg-success-light text-success";
  if (status === "REJECTED") return "bg-danger-light text-danger";
  return "bg-secondary-light text-on-secondary";
}

export function PremiumPanel({ locale, dict, requests, isPremium, hasPending, basePrice, rib }: Props) {
  const t = dict.premium.panel;
  const boundSubmit = submitPremiumRequestAction.bind(null, locale);
  const [state, formAction, pending] = useActionState<SubmitState, FormData>(boundSubmit, undefined);
  const [fileName, setFileName] = useState<string | null>(null);

  const errorMessage =
    state?.error === "missingProof"
      ? null
      : state?.error === "alreadyPending"
        ? t.alreadyPendingNotice
        : state?.error === "invalidPromoCode"
          ? t.promoCodeInvalid
          : state?.error
            ? t.submitError
            : null;

  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground">{t.greeting}</h1>
          {isPremium && (
            <span className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-gold-light px-3 py-1 text-sm font-medium text-gold">
              <Crown size={14} strokeWidth={1.75} />
              {t.alreadyPremiumBadge}
            </span>
          )}
        </div>
        <form action={logoutAction.bind(null, locale)}>
          <button
            type="submit"
            className="flex items-center gap-1.5 rounded-full border border-border px-3.5 py-2 text-sm font-medium text-foreground-secondary transition hover:border-foreground/30 hover:text-foreground"
          >
            <LogOut size={15} strokeWidth={1.75} />
            {t.logout}
          </button>
        </form>
      </div>

      <section className="mb-6 rounded-2xl border border-border-light bg-surface p-6 shadow-sm">
        <div className="mb-3 flex items-center gap-2">
          <Landmark size={18} strokeWidth={1.75} className="text-primary" />
          <h2 className="font-display text-lg font-bold text-foreground">{t.ribTitle}</h2>
        </div>
        <p className="mb-4 text-sm text-foreground-secondary">{t.ribIntro}</p>
        <dl className="flex flex-col gap-2 rounded-xl bg-surface-warm p-4 text-sm">
          <div className="flex justify-between gap-4">
            <dt className="text-foreground-secondary">{t.ribBank}</dt>
            <dd className="font-medium text-foreground">{rib.bank}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-foreground-secondary">{t.ribHolder}</dt>
            <dd className="font-medium text-foreground">{rib.holder}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-foreground-secondary">{t.ribNumber}</dt>
            <dd className="font-mono font-medium text-foreground">{rib.number}</dd>
          </div>
          <div className="flex justify-between gap-4 border-t border-border-light pt-2">
            <dt className="text-foreground-secondary">{t.priceLabel}</dt>
            <dd className="font-medium text-foreground">{basePrice} DH</dd>
          </div>
        </dl>
      </section>

      {!isPremium && (
        <section className="mb-6 rounded-2xl border border-border-light bg-surface p-6 shadow-sm">
          <div className="mb-3 flex items-center gap-2">
            <UploadCloud size={18} strokeWidth={1.75} className="text-primary" />
            <h2 className="font-display text-lg font-bold text-foreground">{t.proofTitle}</h2>
          </div>
          <p className="mb-4 text-sm text-foreground-secondary">{t.proofIntro}</p>

          {hasPending ? (
            <p className="rounded-xl bg-secondary-light px-4 py-3 text-sm text-on-secondary">{t.alreadyPendingNotice}</p>
          ) : (
            <form action={formAction} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="promoCode" className="text-sm font-medium text-foreground-secondary">
                  {t.promoCodeLabel}
                </label>
                <input
                  id="promoCode"
                  name="promoCode"
                  type="text"
                  placeholder={t.promoCodePlaceholder}
                  className="w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-[15px] outline-none transition focus:border-primary focus:ring-2 focus:ring-primary-light"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="proof" className="text-sm font-medium text-foreground-secondary">
                  {t.proofLabel}
                </label>
                <label
                  htmlFor="proof"
                  className="flex cursor-pointer items-center gap-2 rounded-xl border border-dashed border-border bg-surface-warm px-4 py-3 text-sm text-foreground-secondary transition hover:border-primary"
                >
                  <UploadCloud size={16} strokeWidth={1.75} />
                  {fileName ?? t.proofLabel}
                </label>
                <input
                  id="proof"
                  name="proof"
                  type="file"
                  accept="image/jpeg,image/png,image/webp,image/heic,image/heif,application/pdf"
                  required
                  className="hidden"
                  onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
                />
              </div>

              {errorMessage && <p className="text-sm text-danger">{errorMessage}</p>}

              <button
                type="submit"
                disabled={pending}
                className="flex items-center justify-center gap-2 rounded-xl bg-primary py-2.5 text-[15px] font-semibold text-on-primary transition hover:bg-primary-pressed disabled:opacity-60"
              >
                {pending && <Loader2 size={16} className="animate-spin" />}
                {pending ? t.submitPending : t.submit}
              </button>
            </form>
          )}
        </section>
      )}

      <section className="rounded-2xl border border-border-light bg-surface p-6 shadow-sm">
        <h2 className="mb-4 font-display text-lg font-bold text-foreground">{t.historyTitle}</h2>
        {requests.length === 0 ? (
          <p className="text-sm text-foreground-tertiary">{t.historyEmpty}</p>
        ) : (
          <ul className="flex flex-col gap-3">
            {requests.map((r) => (
              <li key={r.id} className="rounded-xl border border-border-light p-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${statusTint(r.status)}`}>
                    {r.status === "APPROVED" && <Check size={12} strokeWidth={2} />}
                    {r.status === "REJECTED" && <XCircle size={12} strokeWidth={2} />}
                    {r.status === "PENDING" && <Clock size={12} strokeWidth={2} />}
                    {statusLabel(r.status, t)}
                  </span>
                  <span className="text-sm text-foreground-secondary">
                    {t.submittedOnLabel} {new Date(r.submittedAt).toLocaleDateString(locale === "ar" ? "ar-MA" : "fr-MA")}
                  </span>
                </div>
                <p className="text-sm text-foreground">
                  {t.amountLabel} : {r.pricePaid} DH{r.promoCode ? ` (${r.promoCode})` : ""}
                </p>
                {r.status === "REJECTED" && r.rejectionReason && (
                  <p className="mt-2 rounded-lg bg-danger-light px-3 py-2 text-sm text-danger">
                    {t.rejectionReasonLabel} : {r.rejectionReason}
                  </p>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
