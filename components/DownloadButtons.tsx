// Store URLs are placeholders until the app is actually published — swap
// these hrefs for the real App Store / Play Store listing links at launch.
const APP_STORE_URL = "#";
const PLAY_STORE_URL = "#";

function AppleMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
      <path d="M16.365 1.43c0 1.14-.44 2.06-1.32 2.86-.98.9-2.06 1.4-3.14 1.32-.12-1.1.42-2.14 1.28-2.9.9-.8 2.14-1.36 3.18-1.28zM20.5 17.4c-.4.94-.6 1.36-1.12 2.2-.72 1.16-1.74 2.62-3 2.64-1.12.02-1.4-.72-2.92-.72-1.52 0-1.84.7-2.94.74-1.24.04-2.18-1.26-2.92-2.4-1.6-2.44-2.82-6.9-1.18-9.92.82-1.5 2.28-2.44 3.86-2.46 1.18-.02 2.3.8 3.02.8.72 0 2.06-.98 3.48-.84.6.02 2.28.24 3.36 1.82-.08.06-2 1.18-1.98 3.5.02 2.78 2.44 3.7 2.46 3.72-.02.06-.38 1.32-1.06 2.62z" />
    </svg>
  );
}

function PlayMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path d="M4.5 3.5v17c0 .3.32.5.6.36l14.4-8.5c.27-.16.27-.56 0-.72l-14.4-8.5a.42.42 0 0 0-.6.36z" fill="currentColor" />
    </svg>
  );
}

export function DownloadButtons() {
  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={APP_STORE_URL}
        className="flex items-center gap-3 rounded-2xl bg-foreground px-5 py-3 text-background transition hover:opacity-85"
      >
        <AppleMark />
        <span className="text-left leading-tight">
          <span className="block text-[11px] text-background/70">Télécharger sur</span>
          <span className="block text-[15px] font-semibold">App Store</span>
        </span>
      </a>

      <a
        href={PLAY_STORE_URL}
        className="flex items-center gap-3 rounded-2xl bg-foreground px-5 py-3 text-background transition hover:opacity-85"
      >
        <PlayMark />
        <span className="text-left leading-tight">
          <span className="block text-[11px] text-background/70">Disponible sur</span>
          <span className="block text-[15px] font-semibold">Google Play</span>
        </span>
      </a>
    </div>
  );
}
