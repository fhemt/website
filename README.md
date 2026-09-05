# Fhemt — Website

Marketing landing page for Fhemt, a mobile app that reprend Moroccan collège
and lycée courses in French and Darija. Built with Next.js (App Router),
TypeScript, and Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `app/page.tsx` — the landing page, composed from `components/`.
- `components/DownloadButtons.tsx` — App Store / Google Play buttons.
  Store URLs are placeholders (`#`) until the app is actually published —
  swap them for the real listing links at launch.
- `public/images/` — real photography (Unsplash), not stock illustrations.

## Deployment

Deployed on Vercel from the `dev` / `staging` / `prod` branches.
