---
name: 7k-design-system
description: Dark, neon-accented, manga-inflected design system for multi-project tech company 7K. Three-font system (Geist sans + Geist Mono + Geist Pixel 5 geometric variants), #FF0FF major neon + cyan secondary (thematic per project), Tokyo neon atmosphere with 1-bit manga punctuation. Background textures on components, manga panel utilities, isometric geometry animations, 40+ 1-bit components, 20+ animation keyframes. React TypeScript UI kit (Button, Input, Badge, Card, Modal, Drawer, Toast, Tooltip, Alert, Tabs, Nav, Checkbox, Radio, Toggle, Select, Textarea, ThemeToggle, ThemeProvider, ProjectProvider, useTheme, useProject). Production-ready npm package with Vite + PostCSS build, Vitest test suite, Storybook documentation.
user-invocable: true
---

# 7k-design-system Skill

## What's inside

This package is organized as a Claude Design-style reusable skill. Each file below serves a specific role:

| File / dir               | Role                                                                                                                                                                                                                | Evidence basis                                                             |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `DESIGN.md`              | Canonical rules — visual foundations, color, type, spacing, components, motion, voice, anti-patterns, React UI kit, modular CSS architecture, build system, testing                                                 | Each section opens with `Source context reference:` citing the brand brief |
| `src/css/index.css`      | Modular CSS entry point — imports source files (fonts, tokens, themes, projects, base, textures, isometric, manga, components, modifiers, animations, accessibility)                                                | Compiled to `dist/7k-design-system.css` via Vite + PostCSS                 |
| `src/css/tokens.css`     | All design tokens: 11-step color ramps, semantic role mapping, typography, spacing, motion, layout                                                                                                                  | Single source of truth for all token values                                |
| `src/css/components.css` | 40+ 1-bit component classes + modern neon button system + textured component variants                                                                                                                               | Zero radius, 2px borders, invert hover, accent modifiers, texture overlays |
| `src/css/manga.css`      | Manga panel system — frames, gutters, speed lines, speech bubbles, screentone overlay                                                                                                                               | Manga-influenced layout primitives                                         |
| `src/react/`             | TypeScript React UI kit — Button, Input, Badge, Card, Modal, Drawer, Toast, Tooltip, Alert, Tabs, Nav, Checkbox, Radio, Toggle, Select, Textarea, ThemeToggle, ThemeProvider, ProjectProvider, useTheme, useProject | Thin wrappers over CSS classes with ref forwarding and ARIA attributes     |
| `src/stories/`           | Storybook documentation — Overview, Tokens, Components, Textures                                                                                                                                                    | MDX + CSF stories for interactive documentation                            |

## Source context

Every design rule in this system is grounded in evidence from the brand brief (quoted inline in `DESIGN.md §1`):

| Evidence from brief                         | Design rule                                                                                                                                                                                                            |
| ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| #FF00FF brand color                         | `--brand-primary: var(--magenta-500)` — single brand accent for CTAs, focus rings, active borders                                                                                                                      |
| "1 font and it's Geist" (Geist superfamily) | Three-font system: Geist (sans) for headings/body, Geist Mono (monospace) for labels/code/tabular data, Geist Pixel (5 geometric variants) for ornamental display. Mono labels as "connective tissue"                  |
| "Logo is just '7K'"                         | Star-burst pattern SVG logo. Color variant (magenta accents) or light variant (black polygons for light backgrounds)                                                                                                   |
| "Tokyo's neon atmosphere"                   | Dark near-black canvas (`--bg-base: #0A0A0D`), electric accent, nocturnal high contrast                                                                                                                                |
| "Manga-influenced 1-bit"                    | Pure black/white elements with zero radius, 10 texture patterns (scanline, halftone, dot matrix, stripes, crosshatch, checkerboard, noise, vignette), 40+ 1-bit components                                             |
| "Abstract 1-bit animations"                 | 20+ keyframes: scanline-scroll, glitch (basic + complex), pixel-dots, flicker, blink, neon-pulse, typewriter, pixel-fade-in, invert-flash, scan-reveal, shimmer, noise-shift, slide-up-reveal, matrix-rain, frame-step |
| "Dark theme for website"                    | Dark-first: `--bg-void: #000000`, `--bg-base: #0A0A0D` — near-black, not navy, not grey. Toggle via `html[data-theme="light"]` or `@media (prefers-color-scheme: light)`                                               |
| "Differentiate main company with projects"  | Sub-project accent token override (`--accent-circle`, `--accent-grid`, `--accent-line`) — parent 7K stays magenta (`--accent-square`), child projects choose own hue                                                   |
| "Very complete and detailed"                | 4px spacing grid in rem, 14-step scale, fluid type `clamp()`, 7-step radius, 4-level shadow, component specs for 5 button variants, 3 card types, 3 badge styles, inputs with focus/error, tables, tabs                |

## When to use

Use when generating artifacts for any 7k-design-system branded surface. The following table maps common surfaces to the relevant package files:

| Surface              | Read these files                                               | Key rules to follow                                                             |
| -------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| Company website      | DESIGN.md §1–5, src/stories/Icons.stories.tsx                  | Dark bg, neon accent, scanline hero sections, "7K" logo                         |
| Product dashboard    | DESIGN.md §5–7, src/stories/Components.stories.tsx             | Sidebar nav, card grids, tabular data, 1-bit trigger animations on buttons      |
| Sub-project landing  | DESIGN.md §2, src/css/tokens.css, src/css/projects.css         | Override `--brand-secondary` per child project, keep all other tokens unchanged |
| Internal tool        | DESIGN.md §3, §5, §9, src/stories/Tokens.mdx                   | Mono numerics, dense tables, minimum decoration                                 |
| Mobile app           | DESIGN.md §5 (responsive), src/stories/ThemeToggle.stories.tsx | 4-column grid at 480px, bottom tab nav                                          |
| Pitch deck / slides  | DESIGN.md §7–9                                                 | Scanline/glitch used sparingly, no warm tones                                   |
| React application    | DESIGN.md §8 (React UI kit), CONSUMER_GUIDE.md                 | Import from `7k-design-system/react`, wrap with `ThemeProvider`                 |
| CSS-only static site | DESIGN.md §6, §9, CONSUMER_GUIDE.md §2                         | Import `7k-design-system/css`, use component classes directly                   |

## How to use

### Step 1 — Read the source

Open `DESIGN.md §1` for the source context first. Then read `DESIGN.md` sections §1–2 (visual theme + color), §8 (voice), and §9 (anti-patterns) for the posture and constraints.

### Step 2 — Choose your integration path

#### Path A: CSS-only (static sites, vanilla JS, full control)

Import the compiled CSS bundle:

```html
<link rel="stylesheet" href="node_modules/7k-design-system/dist/7k-design-system.css" />
```

Or via ES module import:

```typescript
import '7k-design-system/css';
```

Or import modular CSS for tree-shaking:

```typescript
import '7k-design-system/css/tokens'; // Tokens only
import '7k-design-system/css/components'; // Components only
import '7k-design-system/css/textures'; // Textures only
import '7k-design-system/css/animations'; // Animations only
```

#### Path B: React (TypeScript components, theme management)

```tsx
// main.tsx — import CSS once at app entry
import '7k-design-system/css';

// App.tsx — wrap with ThemeProvider
import { ThemeProvider } from '7k-design-system/react';

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <YourApp />
    </ThemeProvider>
  );
}
```

Use components:

```tsx
import { Button, Input, Badge, ThemeToggle, useTheme } from '7k-design-system/react';

function Header() {
  const { theme, toggleTheme } = useTheme();
  return (
    <header>
      <ThemeToggle />
      <Badge variant="success">Online</Badge>
      <Button variant="primary" onClick={handleClick}>
        Submit
      </Button>
      <Input placeholder="Search..." value={query} onChange={setQuery} />
    </header>
  );
}
```

### Step 3 — Override accent for sub-projects

Set the project's assigned secondary brand color at the scope:

```css
[data-project='flow'] {
  --brand-secondary: var(--cyan-500); /* cyan accent */
}

[data-project='grid'] {
  --brand-secondary: var(--acid-500); /* acid/green accent */
}

[data-project='ember'] {
  --brand-secondary: var(--ember-500); /* ember/orange accent */
}
```

Parent 7K keeps the default `--brand-secondary: var(--cyan-500)`. Use `--accent-square`, `--accent-circle`, `--accent-grid`, `--accent-line`, `--accent-triangle` only when pairing a specific Geist Pixel variant with a hue.

Alternatively, use the React provider:

```tsx
import { ProjectProvider } from '7k-design-system/react';

<ProjectProvider project="flow">
  <App />
</ProjectProvider>;
```

### Step 4 — Preview token groups

Run Storybook to inspect tokens, components, textures, and themes interactively:

```bash
npm run storybook
```

Key stories:

- `src/stories/Tokens.mdx` — accent swatches, ramps, typography, spacing
- `src/stories/Components.stories.tsx` — product component states
- `src/stories/Textures.stories.tsx` — texture categories with composition demos
- `src/stories/Icons.stories.tsx` — logo variants + brand in context
- `src/stories/ThemeToggle.stories.tsx` — light/dark/system themes and project overrides

### Step 5 — Reference the legacy UI kit

Open `examples/legacy/ui_kits/app/index.html` in a browser. Components under `examples/legacy/ui_kits/app/components/` demonstrate landing page patterns with React (plain JS, `React.createElement`). Each component exposes `window.ComponentName` per Claude Design conventions. **Note:** This is legacy code preserved for reference. New work should use the React UI kit in `src/react/`.

### Step 6 — Use build assets

Reference `build/logos/logo-7k.svg` (color, default), `build/logos/logo-7k-light.svg` (light backgrounds), or `build/icons/icon.svg` (app icon).

## Design system highlights

| Feature           | Detail                                                                                                                                                                                                                               | Source                                     |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------ | ------ | ---- | ------------------------------- | ------------------------------------------ |
| Theme             | Dark-first — `--bg-void: #000000`, `--bg-base: #0A0A0D` near-black canvas, toggle to light via `data-theme="light"`                                                                                                                  | "dark theme for website"                   |
| Brand accent      | Magenta `--magenta-500: #FF00FF` with neon glow                                                                                                                                                                                      | #FF0FF brand hex                           |
| Secondary accents | Solar (`--solar-500: #FFD60A`), Cyan (`--cyan-500: #00E5FF`), Acid (`--acid-500: #7CFF00`), Ember (`--ember-500: #FF6B35`)                                                                                                           | Tokyo neon atmosphere                      |
| Type              | Geist Pixel (5 variants: Square/Circle/Grid/Line/Triangle) for all surfaces including code/tabular                                                                                                                                   | "only 1 font and it's Geist" (Geist Pixel) |
| 1-bit textures    | 10 pattern categories: scanline, halftone (3 densities), dot matrix (3 densities), diagonal stripes (3 variants), horizontal/vertical stripes, crosshatch (2 densities), checkerboard, noise (2 opacities), vignette (2 sharpnesses) | "Manga-influenced 1-bit"                   |
| 1-bit animations  | 20+ keyframes organized as ambient (flicker, blink, neon-pulse, shimmer, accent-flicker, frame-step) and trigger (glitch, glitch-complex, pixel-dots, invert-flash, typewriter, pixel-fade, scan-reveal, slide-up-reveal)            | "abstract 1-bit animations"                |
| 1-bit components  | 40+ unified components with zero radius, 2px borders, invert hover, thin accent layer modifiers (accent-border-top, accent-bar, accent-dot, glow-mod, accent-corner)                                                                 | "Manga-influenced 1-bit"                   |
| React UI kit      | Button, Input, Badge, ThemeToggle, ThemeProvider, useTheme — TypeScript components with ref forwarding                                                                                                                               | Production-ready component library         |
| Modular CSS       | 10 source files compiled via Vite + PostCSS; standalone exports for tokens, components, textures, animations                                                                                                                         | Tree-shakeable, performant                 |
| Sub-projects      | Accent token override via `--accent-square                                                                                                                                                                                           | triangle                                   | circle | grid | line` — parent 7K stays magenta | "differentiate main company with projects" |
| Spacing           | 4px grid in rem, 14-step scale (0–128px)                                                                                                                                                                                             | "very complete and detailed"               |
| Reduced motion    | All animations disabled at `prefers-reduced-motion: reduce`                                                                                                                                                                          | System accessibility policy                |
| Testing           | Vitest + @testing-library/react + jest-axe — 6 test files covering components and a11y                                                                                                                                               | Production quality assurance               |
| Documentation     | Storybook with Overview, Tokens, Components, and Textures stories                                                                                                                                                                    | Interactive component documentation        |

## Quick reference — exact class names and tokens

### Modern button classes (use these, not legacy .btn-\*)

```
.btn-modern .btn-modern-primary .btn-modern-secondary .btn-modern-ghost
.btn-modern-glow .btn-modern-glow-cyan .btn-modern-glow-grid .btn-modern-danger
.btn-modern-sm .btn-modern-lg .btn-modern-icon .btn-modern-lg-icon .btn-modern-loading
```

### Texture classes

```
.scanline .scanline-fast
.halftone-sm .halftone-md .halftone-lg .halftone-accent
.dot-matrix-dense .dot-matrix .dot-matrix-sparse
.diagonal-stripes .diagonal-stripes-dense .diagonal-stripes-negative
.stripes-h .stripes-h-dense .stripes-v .stripes-v-dense
.crosshatch .crosshatch-dense
.checkerboard .checkerboard-onebit
.noise .noise-heavy .noise-animated
.vignette-onebit .vignette-onebit-sharp
```

### Animation classes

```
.glitch .glitch-complex .glitch-accent
.flicker .flicker-fast .blink .blink-fast
.typewriter .neon-pulse .neon-pulse-cyan
.scan-reveal .pixel-fade-in .invert-flash
.pixel-dots .pixel-dots-fast .accent-flicker
.slide-up-reveal .shimmer .frame-step .spinner .skeleton
.iso-float .iso-float-spin .iso-grid-scroll .iso-terrain-shift
.iso-assemble .iso-assemble-2 ..-5 .iso-perspective-dolly .iso-step-build
```

### Key role tokens (always use these, never raw ramps)

```
--bg-void --bg-base --bg-elevated --bg-raised --bg-overlay --bg-pressed
--text-primary --text-secondary --text-tertiary --text-disabled --text-inverse
--border-subtle --border-default --border-strong --border-focus --border-brand
--brand-primary --brand-primary-hover --brand-primary-active --brand-primary-glow
--status-success --status-warning --status-danger --status-info --status-neutral
--accent-square --accent-triangle --accent-circle --accent-grid --accent-line
```

## Build and development

```bash
# Development
npm run dev           # Vite dev server
npm run storybook     # Storybook at http://localhost:6006

# Build
npm run build         # CSS + React + assets
npm run build:css     # CSS bundle only
npm run build:react   # React bundle only

# Quality
npm test              # Unit tests (Vitest)
npm run test:a11y     # Accessibility tests (axe-core)
npm run lint          # ESLint + Stylelint
npm run typecheck     # TypeScript check
npm run format        # Prettier format
```

## Package exports reference

```typescript
// Full CSS bundle
import '7k-design-system/css';

// Modular CSS (tree-shakeable)
import '7k-design-system/css/tokens';
import '7k-design-system/css/components';
import '7k-design-system/css/textures';
import '7k-design-system/css/animations';

// React components + hooks
import { Button, Input, Badge, ThemeToggle, ThemeProvider, useTheme } from '7k-design-system/react';

// Static assets
import logo from '7k-design-system/build/logos/logo-7k.svg';
import logoLight from '7k-design-system/build/logos/logo-7k-light.svg';
import icon from '7k-design-system/build/icons/icon.svg';
```
