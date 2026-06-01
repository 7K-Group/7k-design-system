---
name: 7k-design-system
description: Dark, neon-accented, manga-inflected design system for multi-project tech company 7K. Three-font system (Geist sans + Geist Mono + Geist Pixel 5 geometric variants), #FF0FF brand pulse, Tokyo neon atmosphere with 1-bit manga punctuation. 10 background texture patterns, 40+ 1-bit components, 20+ animation keyframes. One brand, sub-project accent overrides.
user-invocable: true
---

# 7k-design-system Skill

## What's inside

This package is organized as a Claude Design-style reusable skill. Each file below serves a specific role:

| File / dir | Role | Evidence basis |
|---|---|---|---|
| `DESIGN.md` | Canonical rules — visual foundations, color, type, spacing, components, motion, voice, anti-patterns | Each section opens with `Source context reference:` citing the brand brief |
| `colors_and_type.css` | Reusable CSS — all tokens as custom properties, concrete hex + token values in component classes, utilities, keyframes | Tokens derived from brand hex #FF00FF → `--magenta-500`, Geist Pixel type (5 variants), dark-first theme |
| `preview/` | 6 focused HTML review cards (colors-primary, typography-specimens, spacing-tokens, components-buttons, textures-backgrounds, brand-assets) | Each card demonstrates concrete token values with rendered swatches and specimens |
| `ui_kits/app/` | Applied React interface kit (plain JS, no JSX) — 11 landing page section components composing into a full company surface | Company landing page with hero, philosophy, projects, stats, interactive demos, effects, overlays, CTA, footer |
| `build/` | Brand runtime assets — logo-7k.svg, logo-7k-light.svg, icon.svg | Star-burst pattern SVG logo with color and light-background variants |
| `fonts/` | GeistPixel-{Square,Circle,Grid,Line,Triangle}.ttf | Geist Pixel loaded via `@font-face` — 5 geometric variant TTF files |
| `source_examples/` | Preserved high-signal source component snapshots | Sidebar.js and App.js from the dashboard UI kit pattern |

## Source context

Every design rule in this system is grounded in evidence from the brand brief (quoted inline in `DESIGN.md §1`):

| Evidence from brief | Design rule |
|---|---|---|---|
| #FF00FF brand color | `--brand-primary: var(--magenta-500)` — single brand accent for CTAs, focus rings, active borders |
| "1 font and it's Geist" (Geist superfamily) | Three-font system: Geist (sans) for headings/body, Geist Mono (monospace) for labels/code/tabular data, Geist Pixel (5 geometric variants) for ornamental display. Mono labels as "connective tissue" |
| "Logo is just '7K'" | Star-burst pattern SVG logo. Color variant (magenta accents) or light variant (black polygons for light backgrounds) |
| "Tokyo's neon atmosphere" | Dark near-black canvas (`--bg-base: #0A0A0D`), electric accent, nocturnal high contrast |
| "Manga-influenced 1-bit" | Pure black/white elements with zero radius, 10 texture patterns (scanline, halftone, dot matrix, stripes, crosshatch, checkerboard, noise, vignette), 40+ 1-bit components |
| "Abstract 1-bit animations" | 20+ keyframes: scanline-scroll, glitch (basic + complex), pixel-dots, flicker, blink, neon-pulse, typewriter, pixel-fade-in, invert-flash, scan-reveal, shimmer, noise-shift, slide-up-reveal, matrix-rain, frame-step |
| "Dark theme for website" | Dark-first: `--bg-void: #000000`, `--bg-base: #0A0A0D` — near-black, not navy, not grey. Toggle via `html[data-theme="light"]` or `@media (prefers-color-scheme: light)` |
| "Differentiate main company with projects" | Sub-project accent token override (`--accent-circle`, `--accent-grid`, `--accent-line`) — parent 7K stays magenta (`--accent-square`), child projects choose own hue |
| "Very complete and detailed" | 4px spacing grid in rem, 14-step scale, fluid type `clamp()`, 7-step radius, 4-level shadow, component specs for 5 button variants, 3 card types, 3 badge styles, inputs with focus/error, tables, tabs |

## When to use

Use when generating artifacts for any 7k-design-system branded surface. The following table maps common surfaces to the relevant package files:

| Surface | Read these files | Key rules to follow |
|---|---|---|
| Company website | DESIGN.md §1–5, preview/brand-assets.html | Dark bg, neon accent, scanline hero sections, "7K" logo |
| Product dashboard | DESIGN.md §5–7, source_examples/Sidebar.js, source_examples/App.js, preview/components-buttons.html | Sidebar nav, card grids, tabular data, 1-bit trigger animations on buttons |
| Sub-project landing | DESIGN.md §2, colors_and_type.css | Override `--accent-circle` / `--accent-grid` / `--accent-line` per child project, keep all other tokens unchanged |
| Internal tool | DESIGN.md §3, §5, §9, preview/spacing-tokens.html | Mono numerics, dense tables, minimum decoration |
| Mobile app | DESIGN.md §5 (responsive), preview/colors-theme-dark.html or preview/colors-theme-light.html | 4-column grid at 480px, bottom tab nav |
| Pitch deck / slides | DESIGN.md §7–9 | Scanline/glitch used sparingly, no warm tones |

## How to use

### Step 1 — Read the source
Open `DESIGN.md §1` for the source context first. Then read `DESIGN.md` sections §1–2 (visual theme + color), §8 (voice), and §9 (anti-patterns) for the posture and constraints.

### Step 2 — Bind tokens
Import `colors_and_type.css` in the artifact's `<head>`:
```html
<link rel="stylesheet" href="colors_and_type.css">
```
Or inline its content for a self-contained file.

### Step 3 — Override accent for sub-projects
Set the project's assigned accent token at the scope:
```css
.project-flow {
  --accent-circle: var(--cyan-500);    /* cyan accent */
  --accent-grid: var(--acid-500);      /* acid/green accent */
  --accent-line: var(--ember-500);     /* ember/orange accent */
}
```
Parent 7K uses `--accent-square` (magenta). Child projects pick one of the other four accent tokens.

### Step 4 — Preview token groups
Open any card in `preview/`:
- `preview/colors-primary.html` — accent swatches, ramps, project overrides
- `preview/typography-specimens.html` — type scale + weights + pixel variants
- `preview/spacing-tokens.html` — 4px grid, radii, shadows
- `preview/components-buttons.html` — product component states
- `preview/textures-backgrounds.html` — 10 background texture categories with composition demos
- `preview/brand-assets.html` — logo variants + brand in context

### Step 5 — Reference the applied UI kit
Open `ui_kits/app/index.html` in a browser. Components under `ui_kits/app/components/` demonstrate landing page patterns with React (plain JS, `React.createElement`). Each component exposes `window.ComponentName` per Claude Design conventions.

### Step 6 — Use build assets
Reference `build/logo-7k.svg` (color, default), `build/logo-7k-light.svg` (light backgrounds), or `build/icon.svg` (app icon).

## Design system highlights

| Feature | Detail | Source |
|---|---|---|---|
| Theme | Dark-first — `--bg-void: #000000`, `--bg-base: #0A0A0D` near-black canvas, toggle to light via `data-theme="light"` | "dark theme for website" |
| Brand accent | Magenta `--magenta-500: #FF00FF` with neon glow | #FF0FF brand hex |
| Secondary accents | Solar (`--solar-500: #FFD60A`), Cyan (`--cyan-500: #00E5FF`), Acid (`--acid-500: #7CFF00`), Ember (`--ember-500: #FF6B35`) | Tokyo neon atmosphere |
| Type | Geist Pixel (5 variants: Square/Circle/Grid/Line/Triangle) for all surfaces including code/tabular | "only 1 font and it's Geist" (Geist Pixel) |
| 1-bit textures | 10 pattern categories: scanline, halftone (3 densities), dot matrix (3 densities), diagonal stripes (3 variants), horizontal/vertical stripes, crosshatch (2 densities), checkerboard, noise (2 opacities), vignette (2 sharpnesses) | "Manga-influenced 1-bit" |
| 1-bit animations | 20+ keyframes organized as ambient (flicker, blink, neon-pulse, shimmer, accent-flicker, frame-step) and trigger (glitch, glitch-complex, pixel-dots, invert-flash, typewriter, pixel-fade, scan-reveal, slide-up-reveal) | "abstract 1-bit animations" |
| 1-bit components | 40+ unified components with zero radius, 2px borders, invert hover, thin accent layer modifiers (accent-border-top, accent-bar, accent-dot, glow-mod, accent-corner) | "Manga-influenced 1-bit" |
| Sub-projects | Accent token override via `--accent-square|triangle|circle|grid|line` — parent 7K stays magenta | "differentiate main company with projects" |
| Spacing | 4px grid in rem, 14-step scale (0–128px) | "very complete and detailed" |
| Reduced motion | All animations disabled at `prefers-reduced-motion: reduce` | System accessibility policy |
