"use client";

import { useState, FormEvent } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export function WaitlistForm({ variant = "default" }: { variant?: "default" | "compact" }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex items-center gap-2.5 rounded-full border border-success/30 bg-success-light px-5 py-3.5 text-sm font-medium text-foreground">
        <Check className="h-4 w-4 shrink-0 text-success" strokeWidth={2} />
        Tu es sur la liste. On t&apos;écrit dès qu&apos;on ouvre les portes.
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={`flex w-full flex-col gap-3 sm:flex-row ${
        variant === "compact" ? "max-w-md" : "max-w-lg"
      }`}
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="ton.email@exemple.com"
        className="w-full rounded-full border border-border bg-surface px-5 py-3.5 text-sm text-foreground placeholder:text-foreground-tertiary outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-on-primary transition hover:bg-primary-pressed disabled:opacity-60"
      >
        {status === "loading" ? (
          <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2} />
        ) : (
          <>
            Rejoindre la liste
            <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
          </>
        )}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-600 sm:absolute sm:mt-14">
          Un souci est survenu, réessaie dans un instant.
        </p>
      )}
    </form>
  );
}
