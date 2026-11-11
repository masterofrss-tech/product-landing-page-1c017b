# Kiln — landing page

A single-page marketing site for **Kiln**, a product that turns scattered customer feedback (support tickets, sales calls, reviews, Slack) into ranked, evidence-backed roadmap decisions.

The page includes a hero with an animated product preview, a scrolling customer-logo strip, numbered feature highlights, a results band, testimonials, a full-bleed call-to-action, and a footer with a newsletter signup.

## Tech

- [TanStack Start](https://tanstack.com/start) + React 19, Vite 8, strict TypeScript
- Tailwind CSS 4 (theme tokens in `src/styles.css`)
- Google Fonts: Bricolage Grotesque, Instrument Serif, Geist, Geist Mono
- Netlify Forms for newsletter signups (no backend code)

## Run locally

```bash
pnpm install
pnpm dev          # http://localhost:3000
# or, with Netlify emulation:
netlify dev
```

Newsletter submissions are only processed on a deployed Netlify site; locally the form reports that nothing was sent.

## Editing copy

All text — product name, tagline, features, stats, testimonials, logos, footer links — lives in `src/lib/content.ts`. Swap the placeholder customer names, quotes, and figures for real ones before launch.
