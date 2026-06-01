# 7k-design-system Applied UI Kit

This kit demonstrates the 7k-design-system with a full company landing page built using plain React (`React.createElement`, no JSX). All component demos use the **modern neon** product UI system (`.btn-modern*`, neutral surface tokens, mono-label connective tissue) — not the 1-bit component library.

## Structure

```
ui_kits/app/
├── index.html           Runnable entry — loads React 18 + colors_and_type.css
├── README.md            This file
└── components/          11 modular React components
    ├── Navbar.js         Sticky frosted nav with 7k-design-system logo + accent links
    ├── HeroSection.js    Full-bleed wordmark hero with scanline + noise textures
    ├── PhilosophySection.js  Two-column brand narrative with project accent cards
    ├── ProjectsSection.js    3 project cards with accent bars + stat blocks
    ├── StatsSection.js       4 inline-styled metrics (mono-display values)
    ├── InteractiveSection.js  Quick actions grid + recent activity feed + query runner
    ├── DataSection.js         Services table (inline-styled) + resource bars + tag display
    ├── EffectsSection.js      Animation system overview with scanline+noise demo
    ├── OverlaySection.js      Confirm deploy panel + settings drawer (inline-styled)
    ├── CtaSection.js          Full-invert CTA with diagonal-stripes-negative overlay
    ├── FooterSection.js       4-column footer with inline-styled links
    └── ThemeToggle.js         Light/dark toggle, persists to localStorage
```

## How to run

Open `ui_kits/app/index.html` in a browser. All CSS comes from `../../colors_and_type.css`.

## Source basis

This kit is built from the 7k-design-system (`DESIGN.md` + `colors_and_type.css`). Every visual token (brand magenta, neutral ramps, type scale, spacing grid, shadows, animation keyframes, textures) is referenced by CSS custom property tied to `colors_and_type.css`. The component hierarchy follows a company landing page pattern: header → hero → philosophy → projects → stats → interactive tools → data → effects → overlays → CTA → footer. Replacing the `App` root with an alternate layout pairing a `Sidebar` with an `InputBar` and a `MessageBubble` or `PreviewCard` region follows the same composition pattern.

## Design notes

- Each component exposes `window.ComponentName` for cross-file composition (plain JS, no bundler).
- Components use `React.createElement` (no JSX) for zero-build-step compatibility.
- Light/dark theme toggling reads/writes `data-theme` on `<html>` and persists to localStorage.
- The kit uses the 7k-design-system product system: dark canvas, magenta accent, Geist + Geist Mono + Geist Pixel typography, mono-label connective tissue, scanline/noise/isometric textures.
- No 1-bit component classes (`.input`, `.toggle`, `.modal`, `.badge`, `.table`, etc.) are used in kit demos — those are documented separately in `preview/components-buttons.html`.
- Background textures (`.scanline`, `.noise`, `.halftone-md`, `.isometric-grid`, `.diagonal-stripes-negative`) are used for atmospheric section backdrops where specified by DESIGN.md.

## Reuse workflow

To reuse these components in a new project:

1. **Copy the design system** — include `../../colors_and_type.css` (or copy it to your project's CSS path).
2. **Copy components** — copy individual files from `components/` into your project's JS directory.
3. **Load React 18** — add `<script>` tags for `react` and `react-dom` UMD bundles before your component scripts.
4. **Mount** — compose components via `React.createElement(ComponentName)` in a root App function and call `ReactDOM.createRoot(...).render(...)`.
5. **Theme** — the `ThemeToggle.js` component reads/writes `data-theme` attribute; include it if you want dark/light switching.
6. **Customize** — replace component content (text, links, images) by editing the `React.createElement` calls in each component file. Tokens like `--brand-primary`, `--font-sans`, `--space-*` remain available through `colors_and_type.css`.
