import { Dictionary } from "@/lib/dictionary";

// Store URLs are placeholders until the app is actually published — swap
// these hrefs for the real App Store / Play Store listing links at launch.
const APP_STORE_URL = "#";
const PLAY_STORE_URL = "#";

function AppleMark() {
  return (
    <svg viewBox="0 0 384 512" className="h-7 w-7" fill="currentColor" aria-hidden="true">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141 4 184.8 4 273.5c0 26.2 4.8 53.3 14.4 81.2 12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
}

function PlayMark() {
  return (
    <svg viewBox="0 0 512 512" className="h-7 w-7" aria-hidden="true">
      <path d="M47 28.1C39.1 35.9 34.6 47.9 34.6 63.4v385.2c0 15.5 4.5 27.5 12.4 35.3l2.1 1.9L268 264v-2.7v-2.7L48.9 26.4z" fill="#00D2FF" />
      <path d="M268 264l-2.7-2.7v5.4L268 264z" fill="#00D2FF" />
      <path d="M341.7 337.9L268 264.3v-.3l73.7-73.6 1.7 1L432 240.7c25.2 14.3 25.2 37.7 0 52.1l-88.6 49.1z" fill="#FFB900" />
      <path d="M341.7 337.9L266.7 262.9 47 483c8.2 8.6 21.7 9.7 36.9 1.1z" fill="#FF3A44" />
      <path d="M341.7 187.1L83.9 42.9C68.7 34.3 55.2 35.4 47 44l219.7 219.9z" fill="#00E267" />
    </svg>
  );
}

export function DownloadButtons({ dict }: { dict: Dictionary }) {
  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={APP_STORE_URL}
        className="flex items-center gap-3 rounded-2xl bg-foreground px-5 py-3 text-background transition hover:opacity-85"
      >
        <AppleMark />
        <span className="text-start leading-tight">
          <span className="block text-[11px] text-background/70">{dict.download.appStoreCaption}</span>
          <span className="block text-[17px] font-semibold">App Store</span>
        </span>
      </a>

      <a
        href={PLAY_STORE_URL}
        className="flex items-center gap-3 rounded-2xl bg-foreground px-5 py-3 text-background transition hover:opacity-85"
      >
        <PlayMark />
        <span className="text-start leading-tight">
          <span className="block text-[11px] text-background/70">{dict.download.playCaption}</span>
          <span className="block text-[17px] font-semibold">Google Play</span>
        </span>
      </a>
    </div>
  );
}
