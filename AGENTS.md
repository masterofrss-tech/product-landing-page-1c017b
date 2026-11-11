# Kiln landing page — agent notes

Single-page marketing site for the fictional-placeholder product "Kiln" (feedback → roadmap decisions). TanStack Start + React 19 + Tailwind CSS 4, deployed on Netlify.

## Layout

- `src/lib/content.ts` — **all copy and data** (site name, hero signals/themes, logos, features, stats, testimonials, footer links, newsletter form config). Edit copy here, not in components.
- `src/routes/__root.tsx` — HTML shell, meta tags, Google Fonts links, inline script that adds `.js` to `<html>` (gates scroll-reveal styles so content is visible without JS), nav + footer.
- `src/routes/index.tsx` — the whole landing page, split into section components (Hero, HeroVisual, LogoStrip, Features, Stats, Testimonials, CallToAction) plus the `useReveal` IntersectionObserver hook.
- `src/components/SiteNavigation.tsx` — sticky header and the `KilnMark` SVG logo.
- `src/components/SiteFooter.tsx` / `NewsletterForm.tsx` — footer with Netlify Forms newsletter signup (`#newsletter`).
- `public/__forms.html` — static Netlify Forms registration. Field names (`form-name`, `email`, `bot-field`) must match `NewsletterForm.tsx`.
- `src/styles.css` — Tailwind `@theme` tokens and keyframes.

## Design system (keep it consistent)

- Palette: `paper` (#f2ece1) background, `ink` (#16130f) text, single accent `ember` (#e4471b). Don't introduce new hues.
- Type: `font-display` (Bricolage Grotesque, heavy, tight tracking) for headings; `.serif-accent` (Instrument Serif italic) for one emphasised word per heading; `font-sans` (Geist) body; `.eyebrow` (Geist Mono uppercase) for labels.
- Motion: `.rise` / `.slide-in` / `.bar-grow` load animations with inline `animationDelay`; `data-reveal` for scroll reveals (`--reveal-delay` for stagger). All motion is disabled under `prefers-reduced-motion`.
- Note: Tailwind has a `grow` utility, so custom animation classes must not reuse Tailwind utility names.

## Conventions

- Netlify Forms submissions POST URL-encoded to `/__forms.html` (the SSR catch-all would swallow `/`). Only show success after a 2xx that isn't the unprocessed registration HTML.
- In-page navigation uses plain `#hash` anchors; sections set `scroll-mt-*` to clear the sticky header.
- `src/routeTree.gen.ts` is generated at build time; don't edit it.
