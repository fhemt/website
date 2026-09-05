# Fhemt — Website

Marketing landing page for Fhemt, a mobile app that explains Moroccan collège
courses in French and Darija. Built with Next.js (App Router), TypeScript,
and Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `app/page.tsx` — the landing page, composed from `components/`.
- `app/api/waitlist/route.ts` — waitlist signup endpoint. Currently a
  placeholder (validates and logs only) until the backend exists — swap it
  for a call to the real backend's waitlist endpoint once that's deployed.
- `public/images/` — real photography (Unsplash), not stock illustrations.

## Deployment

Deployed on Vercel from the `dev` / `staging` / `prod` branches.
