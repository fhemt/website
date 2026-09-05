import { NextRequest, NextResponse } from "next/server";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Placeholder until the backend exists: validates the address and returns
// success without persisting anything. Swap this for a real call to the
// backend's waitlist endpoint once it's deployed.
export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const email = typeof body?.email === "string" ? body.email.trim() : "";

  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json(
      { error: "Adresse email invalide." },
      { status: 400 }
    );
  }

  console.log("[waitlist] new signup:", email);

  return NextResponse.json({ ok: true });
}
