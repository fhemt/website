async function blockDevice(token: string): Promise<boolean> {
  const apiUrl = process.env.API_URL ?? "http://localhost:8080";
  try {
    const res = await fetch(`${apiUrl}/api/v1/auth/block-device?token=${encodeURIComponent(token)}`, {
      method: "POST",
      cache: "no-store",
    });
    const envelope = await res.json();
    return res.ok && !envelope.error;
  } catch {
    return false;
  }
}

export default async function BlockDevicePage({ searchParams }: { searchParams: Promise<{ token?: string }> }) {
  const { token } = await searchParams;
  const success = token ? await blockDevice(token) : false;

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-md rounded-2xl border border-border-light bg-surface p-8 text-center shadow-sm">
        <span className="mb-6 block font-display text-xl font-extrabold text-primary">fhemt</span>
        {success ? (
          <>
            <h1 className="mb-2 font-display text-2xl font-bold text-foreground">Appareil bloqué</h1>
            <p className="text-[15px] leading-relaxed text-foreground-secondary">
              Cet appareil a été bloqué et ta session a été fermée. Ouvre l&apos;application Fhemt et utilise
              &laquo;&nbsp;Mot de passe oublié&nbsp;&raquo; pour te reconnecter.
            </p>
          </>
        ) : (
          <>
            <h1 className="mb-2 font-display text-2xl font-bold text-foreground">Lien invalide ou expiré</h1>
            <p className="text-[15px] leading-relaxed text-foreground-secondary">
              Ce lien de blocage n&apos;est plus valide. Si tu penses que ton compte est compromis, contacte-nous
              directement.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
