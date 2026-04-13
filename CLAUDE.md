# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
# Install dependencies
npm install

# Start dev server at localhost:4321
npm run dev

# Type-check and build for production (outputs to ./dist/)
npm run build

# Preview production build locally
npm run preview
```

The `build` script runs `astro check` (TypeScript/Astro type checking) before `astro build`. Run `npx astro check` alone for type checking without building.

## Architecture

This is a **single-page Astro site** — a landing page for "Liebe Verbindet," a Valentine's Day AR app built by ISTII students. It has no routing beyond the root `index.astro`.

**Tech stack:** Astro 6 + React 18 (islands) + Tailwind CSS 4 + TypeScript

**Page composition** (`src/pages/index.astro`):
- `Layout.astro` — HTML shell with OG meta tags, Outfit Variable font, and a pink radial gradient background. Accepts `title`, `description`, and `urlImage` props.
- `Hero.astro` — Header with logo SVGs.
- `Banner.astro` — Main CTA section with headline, `DownloadButton` (React island), `ResourcesButton`, and `AndroidBadge`.
- `QR.astro` — Floating animated QR code circle (hidden on mobile, positioned absolutely on small screens, relatively on large).
- `Footer.astro` — Copyright and social links.

**React islands:** Only `DownloadButton.jsx` and its `DownloadIcon.jsx` are React components. Everything else is static Astro.

**Environment variable:** `URL_APK` (used in `DownloadButton.jsx` via `import.meta.env.URL_APK`) holds the APK download URL.

**Tailwind CSS v4 config** (`src/styles/globals.css`) — CSS-first, no `tailwind.config.mjs`:
- Integrated via `@tailwindcss/vite` plugin in `astro.config.mjs`.
- Extra breakpoints: `--breakpoint-xs` (425px), `--breakpoint-xsm` (520px) — used heavily for responsive layout.
- Custom color palette: `--color-valentines-day-*` (50–950 pink shades).
- Custom animation: `--animate-text-gradient` + `@keyframes text-gradient` for gradient text cycling.
- Plugin: `@plugin "@midudev/tailwind-animations"` (provides `animate-float`, etc.).
