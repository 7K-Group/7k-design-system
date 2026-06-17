# 7k-design-system

> Version: 1.0.0-alpha.1 (production-ready)
> Category: Custom · Surface: web, mobile, desktop
> Font: Geist + Geist Mono + Geist Pixel · Brand color: #FF0FF · Logo: 7K · Theme: Dark-first
> 1-bit textures: 10 patterns · 1-bit components: 40+ · 1-bit animations: 20+ keyframes
> React UI kit: Button, Input, Badge, ThemeToggle, ThemeProvider, useTheme
> Build: Vite + PostCSS + TypeScript · Test: Vitest + Testing Library · Docs: Storybook

## Source context

Dark-first dual-theme design system for a tech holding. One parent brand (7K · magenta) with five sub-projects each defined by the pairing of one Geist Pixel variant with one brand color ramp. Engineering-blueprint aesthetic; mono labels as connective tissue; magenta strictly rationed.

The brand brief specifies: "We only have 1 font and it's Geist. Our logo is just '7K' and our main brand color is #FF0FF. We are a tech company with different projects and we're open on an approach to differentiate brand wise the 'main company' with the other projects. We want to use inspiration from Tokyo's neon atmosphere and Manga-influenced 1-bit using black and white as well as abstract 1-bit animations. We're using a dark theme for websites."

Key constraints derived from the source:
- **Three-font system** → Geist (sans-serif) for body and headings, Geist Mono for labels, code, and tabular data, Geist Pixel (5 geometric variants: Square, Circle, Grid, Line, Triangle) for ornamental and pixel-constrained display use.
- **Single brand color** → #FF0FF (vivid magenta) as the sole brand accent. No secondary brand color.
- **Logo** → Star-burst pattern logo in `build/logos/logo-7k.svg`: a geometric radial pattern with #FF0FF brand accent tones. Light variant at `build/logos/logo-7k-light.svg` (black polygons for light backgrounds). App icon at `build/icons/icon.svg`.
- **Dark theme** → All surfaces start from near-black. Light theme is opt-in only.
- **Project differentiation** → Child projects get their own accent (solar, cyan, acid, ember) on the same dark base. Parent 7K retains magenta. Each Geist Pixel geometric variant pairs with one accent: Square=magenta, Circle=cyan, Grid=acid, Line=ember, Triangle=solar.
- **Tokyo neon** → High contrast, nocturnal canvas, electric accents, no warm/beige tones.
- **1-bit manga influence** → 10-texture background pattern library (scanline, halftone, dot matrix, stripes, crosshatch, checkerboard, noise, vignette). All textures are CSS gradients — no images, no SVG humans.
- **Abstract 1-bit animations** → 20+ animation keyframes organized as ambient (continuous) and trigger (burst) categories. Step timing for retro feel, reduced-motion collapse.
- **1-bit component system** → 40+ components with zero radius, 2px white borders, invert hover state. Unified black/white visual language with thin accent layer modifiers for color moments.
- **React UI kit** → TypeScript React components (Button, Input, Badge, ThemeToggle) with ThemeProvider + useTheme hook for theme management.
- **Modular CSS** → 10 source files in `src/css/` compiled into `dist/7k-design-system.css`.

## Package Structure

The design system is distributed as an npm package with dual entry points: CSS-only and React.

```
7k-design-system/
├── src/
│   ├── css/                    # Modular CSS source (10 files)
│   │   ├── index.css           # Entry point: imports all modules
│   │   ├── fonts.css           # @font-face declarations (Geist + Geist Pixel)
│   │   ├── tokens.css          # All design tokens (colors, type, spacing, motion)
│   │   ├── themes.css          # Dark default + light theme overrides
│   │   ├── base.css            # Reset, body, html base styles
│   │   ├── textures.css        # 10 texture pattern categories
│   │   ├── isometric.css       # CSS-only 3D isometric patterns
│   │   ├── components.css      # 40+ 1-bit component classes
│   │   ├── modifiers.css       # Accent layer modifiers
│   │   ├── animations.css      # 20+ keyframe animations
│   │   └── accessibility.css   # Reduced motion, focus-visible, a11y
│   ├── react/                  # React TypeScript components
│   │   ├── index.ts            # Public API exports
│   │   ├── types.ts            # Shared TypeScript interfaces
│   │   ├── components/
│   │   │   ├── Button.tsx      # Button with variant/size props
│   │   │   ├── Input.tsx       # Controlled input wrapper
│   │   │   ├── Badge.tsx       # Status badge with variants
│   │   │   └── ThemeToggle.tsx # Dark/light toggle button
│   │   └── theme/
│   │       ├── ThemeProvider.tsx  # Context provider + persistence
│   │       ├── ThemeContext.ts    # React context definition
│   │       └── useTheme.ts        # useContext hook
│   └── stories/                # Storybook documentation
│       ├── Overview.mdx
│       ├── Tokens.mdx
│       ├── Components.stories.tsx
│       └── Textures.stories.tsx
├── tests/                      # Vitest test suite
│   ├── Button.test.tsx
│   ├── Input.test.tsx
│   ├── Badge.test.tsx
│   ├── ThemeProvider.test.tsx
│   ├── ThemeToggle.test.tsx
│   └── a11y.test.tsx
├── preview/                    # 6 HTML review cards
│   ├── colors-primary.html
│   ├── typography-specimens.html
│   ├── spacing-tokens.html
│   ├── components-buttons.html
│   ├── textures-backgrounds.html
│   └── brand-assets.html
├── build/                      # Brand assets
│   ├── logo-7k.svg
│   ├── logo-7k-light.svg
│   └── icon.svg
├── fonts/                      # Geist Pixel TTFs (5 variants)
├── examples/legacy/ui_kits/app/  # Legacy landing page kit (plain JS React)
├── dist/                       # Build outputs
│   ├── 7k-design-system.css    # Compiled CSS bundle
│   ├── tokens.css              # Standalone tokens
│   ├── components.css          # Standalone components
│   ├── textures.css            # Standalone textures
│   ├── animations.css          # Standalone animations
│   └── react/                  # Compiled React bundle
│       ├── index.js            # ESM build
│       ├── index.cjs           # CJS build
│       └── index.d.ts          # TypeScript declarations
├── package.json
├── DESIGN.md                   # This file — canonical design documentation
├── SKILL.md                    # AI agent usage guide
├── CONSUMER_GUIDE.md           # End-user integration guide
├── vite.css.config.ts          # Vite build config for CSS
├── vite.react.config.ts        # Vite build config for React
└── postcss.config.cjs          # PostCSS pipeline (import, nesting, autoprefixer)
```

### npm Package Exports

```json
{
  "exports": {
    ".": "./dist/7k-design-system.css",
    "./css": "./dist/7k-design-system.css",
    "./css/tokens": "./dist/tokens.css",
    "./css/components": "./dist/components.css",
    "./css/textures": "./dist/textures.css",
    "./css/animations": "./dist/animations.css",
    "./react": {
      "import": "./dist/react/index.js",
      "require": "./dist/react/index.cjs",
      "types": "./dist/react/index.d.ts"
    },
    "./fonts/*": "./fonts/*",
    "./build/*": "./build/*"
  }
}
```

**CSS-only usage:**
```typescript
import '7k-design-system/css';           // Full bundle
import '7k-design-system/css/tokens';    // Tokens only
import '7k-design-system/css/components'; // Components only
import '7k-design-system/css/textures';  // Textures only
import '7k-design-system/css/animations'; // Animations only
```

**React usage:**
```typescript
import { Button, Input, Badge, ThemeToggle, ThemeProvider, useTheme } from '7k-design-system/react';
import '7k-design-system/css';
```

### Build System

- **CSS build:** `vite build --config vite.css.config.ts` — compiles `src/css/index.css` into `dist/7k-design-system.css` with PostCSS pipeline (postcss-import, postcss-nesting, autoprefixer, cssnano)
- **React build:** `vite build --config vite.react.config.ts` — compiles TypeScript React components into ESM + CJS bundles with `.d.ts` declarations via vite-plugin-dts
- **Asset copy:** `node scripts/copy-assets.js` — copies preview/, fonts/, build/ to dist/
- **Development:** `npm run dev` — Vite dev server; `npm run storybook` — Storybook at port 6006
- **Testing:** `npm test` — Vitest + jsdom + @testing-library/react; `npm run test:a11y` — axe-core accessibility tests
- **Linting:** `npm run lint` — ESLint (TS/TSX) + Stylelint (CSS); `npm run typecheck` — `tsc --noEmit`

## 1. Visual Theme & Atmosphere

**Source context reference:** The brand brief specifies "Tokyo's neon atmosphere and Manga-influenced 1-bit using black and white as well as abstract 1-bit animations" and "We're using a dark theme for websites." These three constraints — neon, 1-bit, dark — define the entire visual posture below.

Tokyo neon meets manga-influenced 1-bit. The canvas is deep near-black, with sharp white text, electric magenta (`#FF0FF`) as the primary brand accent, and cyan as a secondary project accent. Black-and-white 1-bit textures — scanline overlays, halftone dot noise, glitch keyframes — provide rhythm and atmosphere. The mood is nocturnal, high-contrast, and unapologetically digital.

Company/project differentiation: the parent 7K brand uses vivid magenta (`--brand-primary`). Child projects adopt their own accent (solar, cyan, acid, ember) on the same dark base. Same system, distinct at a glance.

**Logo:** Star-burst pattern logo in `build/logos/logo-7k.svg` — a geometric radial pattern with #FF0FF brand accent tones. Light variant at `build/logos/logo-7k-light.svg` (light backgrounds). App icon at `build/icons/icon.svg`.

**1-bit texture primitives (background patterns):**
- **Scanline**: `repeating-linear-gradient(0deg, transparent 2px, rgba(255,255,255,0.03) 2px)` — horizontal scan lines, scroll-animated. Two speeds: slow (8s) and fast (3s).
- **Halftone dots**: `radial-gradient(color 1px, transparent 1px)` at 4px/6px/10px spacing — manga screentone at three densities (sm/md/lg). Accent-tinted variant uses magenta dots.
- **Dot matrix**: Uniform dot grid at 3px (dense), 6px (standard), or 12px (sparse) spacing for texture depth.
- **Diagonal stripes**: 45° hatch lines at 7px or 4px pitch. Negative variant overlays pure white-on-black for high-contrast sections.
- **Horizontal / vertical stripes**: Linear parallel lines at 9px or 5px pitch for directional motion cues.
- **Crosshatch**: Dual-angle hatch (45° + -45°) for dense shading in manga panel style. Standard and dense variants.
- **Checkerboard**: 12px alternating squares for pixel-art motifs. One-bit variant uses pure black/white for retro game sections.
- **Noise**: SVG fractal noise overlay at 128px tile, 4%–12% opacity for analog CRT grain. Animatable with translate keyframes.
- **Vignette**: Radial gradient from transparent center to black edge. Sharp variant clips tighter for manga panel corner fade.

**Glitch primitives:**
- Basic glitch: 5-frame translate jitter, 0.3s, 3 iterations
- Complex glitch: multi-axis + skew + clip-path splits, 0.8s, 2 iterations
- Invert flash: full-screen filter inversion, 0.15s burst

## 1b. Background Design — 1-bit Texture System

**Source context reference:** The brief's "Manga-influenced 1-bit using black and white as well as abstract 1-bit animations" requires a structured texture system. Every background pattern below is a standalone CSS class in `src/css/textures.css` that can be applied directly or composed via `::before`/`::after` pseudo-elements.

### Texture categories

| Category | Classes | Density variants | Use case |
|----------|---------|------------------|----------|
| Scanline | `.scanline`, `.scanline-fast` | slow (8s), fast (3s) | Hero sections, full-bleed walls |
| Halftone dots | `.halftone-sm`, `.halftone-md`, `.halftone-lg`, `.halftone-accent` | 4px/6px/10px grid, accent-tinted | Manga panel backgrounds, card surfaces |
| Dot matrix | `.dot-matrix-dense`, `.dot-matrix`, `.dot-matrix-sparse` | 3px/6px/12px grid | Texture depth behind text, dividers |
| Diagonal stripes | `.diagonal-stripes`, `.diagonal-stripes-dense`, `.diagonal-stripes-negative` | 7px/4px pitch, pure B/W | Directional cues, loading areas |
| Horizontal stripes | `.stripes-h`, `.stripes-h-dense` | 9px/5px pitch | Section rhythm, horizontal dividers |
| Vertical stripes | `.stripes-v`, `.stripes-v-dense` | 9px/5px pitch | Sidebar textures, column dividers |
| Crosshatch | `.crosshatch`, `.crosshatch-dense` | 7px/4px dual-angle | Dense manga shading, error states |
| Checkerboard | `.checkerboard`, `.checkerboard-onebit` | 12px/16px grid, pure B/W | Retro sections, QR motifs |
| Noise | `.noise`, `.noise-heavy`, `.noise-animated` | 4%/12% opacity, SVG fractal | CRT grain, analog texture |
| Vignette | `.vignette-onebit`, `.vignette-onebit-sharp` | Soft/sharp radial fade | Panel corner fade, hero-edge vignette |

### Texture composition rules

1. **One texture per section layer.** Apply at most one texture on the background layer and one on the overlay layer (`::after`). Scanline + halftone is the default pair for hero sections.
2. **Opacity scales with section density.** Hero/landing sections use lighter textures (5–10% opacity). Data-dense utility sections use stronger textures (10–15% opacity) or none.
3. **No texture on interactive surfaces.** Cards, buttons, inputs, and form controls must not carry background textures that interfere with legibility. Use solid `--bg-elevated` instead.
4. **Texture as section separator.** When transitioning between full-bleed sections, add a `.separator-onebit` or `.stripes-h` band (40–80px tall) as a visual break — never use shadow or blur transitions.
5. **Layering order:** Base color → texture background → content container → optional scanline overlay. The overlay must have `pointer-events: none` and `z-index: 1` so it does not block interaction.
6. **Full-bleed hero walls** use scanline + vignette simultaneously: scanline on `::after` for the line pattern, vignette on `::before` for the edge fade. Both get `pointer-events: none`.

### Section rhythm (background arc)

```
Section 1 (hero)    — Scanline overlay + noise grain, full-bleed
  ↓ separator-onebit
Section 2 (content) — Solid surface, no texture (reading zone)
  ↓ separator-onebit
Section 3 (stats)   — Halftone-md background with accent tint
  ↓ separator-onebit
Section 4 (cta)     — Scanline-fast overlay, invert section if 1-bit
```

### 1-bit section variants

- **Full invert section**: swap `--bg-base` with `--onebit-white`, `--text-primary` with `--onebit-black`. Used for CTAs, callout panels, or manga-style splash panels. Add `.diagonal-stripes-negative` for max contrast.
- **Scanline hero**: dark canvas, scanline overlay, accent headline with glow. The scanline `::after` sits above the background but below all content (`z-index: 1`). Content gets `position: relative; z-index: 2`.
- **Halftone card wall**: grid of cards with `.halftone-sm` or `.halftone-md` on the section container. Each card has solid `.card` background that breaks the texture — texture only lives between cards.
- **Noise backdrop**: `.noise` on full-page backgrounds for analog feel. Use `.noise-heavy` only on splash/loading screens where content density is low.
- **Vignette frame**: `.vignette-onebit` on slide/scene containers to draw the eye center. Used in intro animations and splash panels.

## 1c. Isometric Backgrounds — CSS-only 3D Perspective Patterns

**Source context reference:** The brief's "Manga-influenced 1-bit" and "Tokyo's neon atmosphere" extend naturally into isometric perspective. These patterns use CSS gradients at 30°/-30°/150°/60° angles to create the illusion of 3D space — diamond grids, cube walls, pyramid steps, honeycomb hex grids, pipe tunnels, and multi-layer terrain — all rendered in pure CSS with no images.

### Isometric pattern library

| Class | Description | Technique |
|-------|-------------|-----------|
| `.isometric-grid` | Diamond tiling from dual 30°/-30° hatch lines at 24px pitch | `repeating-linear-gradient(30deg)` + `(-30deg)` |
| `.isometric-grid-dense` | Tighter 12px diamond grid | Same technique, denser pitch |
| `.isometric-grid-accent` | Magenta-tinted 24px diamond grid | Same, with `--magenta-500 / 0.12` stroke |
| `.isometric-cubes` | 3-face cube wall: right (150°), top (-30°), left (30°) faces at 40px | 3 `repeating-linear-gradient` layers with face-specific opacity |
| `.isometric-cubes-dense` | 20px cube wall | Same, finer resolution |
| `.isometric-cubes-accent` | Magenta-tinted cube wall | Same, with accent hue fills |
| `.isometric-pyramid` | Ascending zigzag steps: 150° + -30° gradients | Dual gradient with offset phase |
| `.isometric-hex` | Honeycomb hex grid from 60°/-60°/0° overlapping | 3 `repeating-linear-gradient` layers |
| `.isometric-pipes` | Converging tunnel perspective: left/right walls (30°/-30°) + floor (0°) | 3-gradient tunnel simulation |
| `.isometric-pipes-fast` | Denser tunnel, 8px walls | Same, tighter spacing |
| `.isometric-terrain` | Multi-layer depth: horizontal + 30° + -30° zigzag | 3-layer parallax-ready composition |

### Composition rules

1. **One isometric pattern per section.** Apply at most one isometric gradient per container. Stack with scanline overlay via class stacking.
2. **No texture on interactive surfaces.** Cards, buttons, inputs, and form controls must not carry isometric backgrounds — use solid `--bg-elevated` instead.
3. **Animate with animation classes.** Combine with `.iso-grid-scroll` for diagonal grid movement, `.iso-terrain-shift` for parallax depth layers.
4. **Reduced motion:** All isometric animations collapse at `prefers-reduced-motion: reduce`.

## 2. Color

**Source context reference:** The brand hex #FF0FF is the single brand color. All color tokens use hex values mapped through CSS custom properties.

The color system has three strict layers:

1. **Raw ramps** — 11-step scales (50–950) for Neutral, Magenta, Solar, Cyan, Acid, Ember, plus extended below-ramp values (1000, void) and 4 semantic ramps (Success, Warning, Danger, Info). Never reference these directly in components.
2. **Theme role mapping** — `--bg-*`, `--text-*`, `--border-*`, `--brand-*`, `--status-*`, `--accent-*` tokens that map ramp values to functional roles. Remap per dark/light theme. This is the only layer components touch.
3. **Semantic colors** — `--status-success/warning/danger/info` tokens bound by **meaning, not decoration**. Use only for actual machine-state indication (badges, toasts, validation). Never use for decorative borders, accent accents, or non-status backgrounds.

> See `preview/colors-theme-dark.html` for the default theme or `preview/colors-theme-light.html` for the opt-in light theme.

---
### Layer 1 — Raw Color Ramps

All ramps follow the same 11-step pattern (50 = lightest, 950 = darkest). Two extra steps exist below the ramp for true backgrounds.

#### Neutral ramp (slight cool cast, hue ~330)

| Token | Hex | Dark role | Light role |
|-------|-----|-----------|------------|
| `--neutral-50`  | `#FAFAFB` | — | `--bg-base`, `--bg-void` |
| `--neutral-100` | `#EEEEF1` | — | `--bg-elevated` |
| `--neutral-200` | `#D7D7DC` | — | `--bg-raised`, `--status-neutral-bg` |
| `--neutral-300` | `#B0B0B8` | `--text-secondary` | `--bg-overlay`, `--text-disabled`, `--status-neutral-fg` |
| `--neutral-400` | `#82828A` | `--status-neutral` | `--bg-pressed`, `--text-tertiary`, `--text-placeholder` |
| `--neutral-500` | `#6B6B72` | `--text-tertiary`, `--text-placeholder` | `--text-secondary` |
| `--neutral-600` | `#50505A` | `--text-disabled` | — |
| `--neutral-700` | `#3A3A42` | `--bg-pressed` | — |
| `--neutral-800` | `#26262B` | `--bg-overlay`, `--status-neutral-bg` | — |
| `--neutral-900` | `#1C1C22` | `--bg-raised` | `--text-primary` |
| `--neutral-950` | `#131318` | `--bg-elevated` | — |
| `--neutral-1000` | `#0A0A0D` | `--bg-base` | — |
| `--neutral-void` | `#000000` | `--bg-void`, `--text-on-brand`, `--text-inverse` | — |

**Usage rule:** Components reference the *role* tokens (e.g. `var(--bg-elevated)`), never the raw ramp tokens (e.g. `var(--neutral-950)`). The ramp table above documents what each step maps to — not what you should write.

#### Brand ramp — Magenta (hue ~330)

| Token | Hex | Dark role | Light role |
|-------|-----|-----------|------------|
| `--magenta-50`  | `#FFE5FF` | `--brand-primary-subtle` (dark) | — |
| `--magenta-100` | `#FFC2FF` | — | `--brand-primary-subtle` (light) |
| `--magenta-200` | `#FF99FF` | — | `--brand-primary-muted` (light) |
| `--magenta-300` | `#FF66FF` | — | — |
| `--magenta-400` | `#FF33FF` | `--brand-primary-hover` (dark) | — |
| `--magenta-500` | `#FF00FF` | `--brand-primary` · `--border-focus` · `--border-brand` · `--accent-square` | same across themes |
| `--magenta-600` | `#D600D6` | `--brand-primary-active` (dark) | `--brand-primary-hover` (light) |
| `--magenta-700` | `#A800A8` | — | `--brand-primary-active` (light) |
| `--magenta-800` | `#800080` | `--brand-primary-muted` (dark) | — |
| `--magenta-900` | `#570057` | — | — |
| `--magenta-950` | `#330033` | `--brand-primary-subtle` (dark) | — |

#### Project accent ramps — Solar / Cyan / Acid / Ember

Each child project gets a single accent hue. Same 11-step structure; only the base (--500) and the theme-mapped hover (--600 in light) differ.

**Solar — Triangle (hue ~50)**

`--solar-50: #FFFCE5` → `--solar-500: #FFD60A` → `--solar-950: #332B02`.  
Accent token: `--accent-triangle`. Dark: `var(--solar-500)`, Light: `var(--solar-600)`.

**Cyan — Circle (hue ~190)**

`--cyan-50: #E5FBFF` → `--cyan-500: #00E5FF` → `--cyan-950: #002A2E`.  
Accent token: `--accent-circle`. Dark: `var(--cyan-500)`, Light: `var(--cyan-600)`.

**Acid — Grid (hue ~105)**

`--acid-50: #F2FFE5` → `--acid-500: #7CFF00` → `--acid-950: #172E00`.  
Accent token: `--accent-grid`. Dark: `var(--acid-500)`, Light: `var(--acid-600)`.

**Ember — Line (hue ~15)**

`--ember-50: #FFEEE5` → `--ember-500: #FF6B35` → `--ember-950: #331205`.  
Accent token: `--accent-line`. Dark: `var(--ember-500)`, Light: `var(--ember-600)`.

#### Semantic ramps (raw)

Each has a full 11-step scale (50–950). Never use directly — always go through `--status-{name}`, `--status-{name}-bg`, or `--status-{name}-fg`.

| Ramp | 50 | 100 | 300 | 500 (base) | 700 | 950 |
|------|----|-----|-----|------------|-----|-----|
| Success | `#E5FCEF` | `#B8F5D2` | `#5CE69A` | `#00E676` | `#008A46` | `#002915` |
| Warning | `#FFF8E5` | `#FFEAB8` | `#FFCE5C` | `#FFB300` | `#A87600` | `#332400` |
| Danger  | `#FFE5EB` | `#FFB8C5` | `#FF5C7A` | `#FF3B5C` | `#A82338` | `#330A10` |
| Info    | `#E5EFFF` | `#B8D2FF` | `#5C99FF` | `#3F8EFF` | `#1F58A8` | `#091A33` |

#### 1-bit primitives

- `--onebit-black: #000000` (`oklch(0% 0 0)`)
- `--onebit-white: #FFFFFF` (`oklch(100% 0 0)`)

---
### Layer 2 — Theme Role Mapping

**Dark is the default.** Light is opt-in via `@media (prefers-color-scheme: light)` or `html[data-theme="light"` (set by `ThemeToggle` component in `src/react/components/ThemeToggle.tsx`). The same ramp primitives are used by both themes — only the role-to-ramp mapping changes.

#### Surface ladder — backgrounds

| Token | Dark value | Light value | Usage rule |
|-------|-----------|-------------|------------|
| `--bg-void` | `--neutral-void` | `--neutral-50` | Page background only. Outermost canvas. |
| `--bg-base` | `--neutral-1000` | `--neutral-50` | Default surface. Most common container. |
| `--bg-elevated` | `--neutral-950` | `--neutral-100` | Cards, panels, section backgrounds. |
| `--bg-raised` | `--neutral-900` | `--neutral-200` | Modals, dropdowns, popovers, inputs. |
| `--bg-overlay` | `--neutral-800` | `--neutral-300` | Hover surfaces, tooltip backgrounds. |
| `--bg-pressed` | `--neutral-700` | `--neutral-400` | Active/pressed state. |
| `--bg-translucent` | `rgba(255,255,255,0.04)` | `rgba(0,0,0,0.04)` | Subtle backdrop overlay. |

**Ladder rule:** Step one level for each layer of depth. Never skip from `--bg-void` to `--bg-raised`.  
`void → base → elevated → raised → overlay → pressed`

#### Text ladder

| Token | Dark value | Light value | Usage rule |
|-------|-----------|-------------|------------|
| `--text-primary` | `--neutral-50` | `--neutral-900` | Headlines, body paragraphs, labels. |
| `--text-secondary` | `--neutral-300` | `--neutral-500` | Lede, card body, subtle headings. |
| `--text-tertiary` | `--neutral-500` | `--neutral-400` | Captions, mono labels, metadata. |
| `--text-placeholder` | `--neutral-500` | `--neutral-400` | Form field hints and placeholders. |
| `--text-disabled` | `--neutral-600` | `--neutral-300` | Truly inactive elements. |
| `--text-inverse` | `--neutral-void` | `--neutral-50` | Text on inverted/dark surfaces. |

#### Border ladder

| Token | Dark value | Light value | Usage rule |
|-------|-----------|-------------|------------|
| `--border-subtle` | `rgba(255,255,255,0.06)` | `rgba(0,0,0,0.06)` | Internal dividers, hr rules. |
| `--border-default` | `rgba(255,255,255,0.10)` | `rgba(0,0,0,0.10)` | Cards, inputs, container strokes. |
| `--border-strong` | `rgba(255,255,255,0.18)` | `rgba(0,0,0,0.18)` | Hover emphasis, focus rings. |
| `--border-focus` | `--magenta-500` | `--magenta-500` | Form focus rings (brand). |
| `--border-brand` | `--magenta-500` | `--magenta-500` | Decorative brand border. |

**Ladder rule:** `subtle → default → strong → focus/brand`. Use `--border-subtle` for separators, `--border-default` for card outlines.

#### Brand tokens

| Token | Dark value | Light value | Usage rule |
|-------|-----------|-------------|------------|
| `--brand-primary` | `--magenta-500` | `--magenta-500` | CTAs, focus rings, active nav, brand text. |
| `--brand-primary-hover` | `--magenta-400` | `--magenta-600` | Accent hover state. |
| `--brand-primary-active` | `--magenta-600` | `--magenta-700` | Accent pressed state. |
| `--brand-primary-muted` | `--magenta-800` | `--magenta-200` | Muted brand backgrounds. |
| `--brand-primary-subtle` | `--magenta-950` | `--magenta-100` | Subtle brand surfaces. |
| `--brand-primary-glow` | `color-mix(in srgb, var(--magenta-500) 25%, transparent)` | `color-mix(in srgb, var(--magenta-500) 15%, transparent)` | Glow shadow source. |
| `--text-on-brand` | `--neutral-void` | `--neutral-void` | Text on brand-colored fills. |

#### Status tokens

| Token | Dark value | Light value | Usage rule |
|-------|-----------|-------------|------------|
| `--status-success` | `--success-500` | `--success-500` | Positive outcome / online. |
| `--status-success-bg` | `--success-950` | `--success-100` | Background for success badges. |
| `--status-success-fg` | `--success-300` | `--success-700` | Foreground for success badges. |
| `--status-warning` | `--warning-500` | `--warning-500` | Attention needed. |
| `--status-warning-bg` | `--warning-950` | `--warning-100` | Background for warning badges. |
| `--status-warning-fg` | `--warning-300` | `--warning-700` | Foreground for warning badges. |
| `--status-danger` | `--danger-500` | `--danger-500` | Error / destructive. |
| `--status-danger-bg` | `--danger-950` | `--danger-100` | Background for danger badges. |
| `--status-danger-fg` | `--danger-300` | `--danger-700` | Foreground for danger badges. |
| `--status-info` | `--info-500` | `--info-500` | Informational. |
| `--status-info-bg` | `--info-950` | `--info-100` | Background for info badges. |
| `--status-info-fg` | `--info-300` | `--info-700` | Foreground for info badges. |
| `--status-neutral` | `--neutral-400` | `--neutral-400` | Default / inactive. |
| `--status-neutral-bg` | `--neutral-900` | `--neutral-200` | Background for neutral badges. |
| `--status-neutral-fg` | `--neutral-300` | `--neutral-700` | Foreground for neutral badges. |

**Rule:** Status bg/fg tokens are 5-step deep from the base (dark: base+450, light: base−400 for bg; dark: base−200, light: base+200 for fg). This gives tinted backgrounds in light mode and deep backgrounds in dark mode — always translucent-feeling without alpha.

#### Project accent tokens

| Token | Dark base | Light base | Project |
|-------|-----------|------------|---------|
| `--accent-square` | `--magenta-500` | `--magenta-500` | 7K parent |
| `--accent-triangle` | `--solar-500` | `--solar-600` | Triangle |
| `--accent-circle` | `--cyan-500` | `--cyan-600` | Circle |
| `--accent-grid` | `--acid-500` | `--acid-600` | Grid |
| `--accent-line` | `--ember-500` | `--ember-600` | Line |

Light theme shifts project accents one step darker (500→600) to maintain contrast against the brighter background.

---
### Layer 3 — Semantic Colors: Meaning, Not Decoration

Semantic colors exist **only** for status indication. Each maps to exactly one meaning.

| Match | Token | Example |
|-------|-------|---------|
| Positive outcome / online | `--status-success` + `--status-success-bg` | Badge: "Online" in green |
| Attention needed | `--status-warning` + `--status-warning-bg` | Badge: "Pending" in amber |
| Error / destructive | `--status-danger` + `--status-danger-bg` | Badge: "Error" in red |
| Informational | `--status-info` + `--status-info-bg` | Badge: "Info" in blue |
| Default / inactive | `--status-neutral` + `--status-neutral-bg` | Badge: "Offline" in grey |

**Do not use semantic colors for:**
- Decorative borders on cards
- Accent accent headers
- Non-status icon fills
- Background washes for sections

---
### Usage rules

1. **Neutral ladder** — Step one surface layer per depth level: `void → base → elevated → raised → overlay → pressed`. Never skip a level for visual emphasis.
2. **Accent on action, not surface** — Brand appears on primary CTAs, focus rings, active borders, brand typography. Never as a full surface background fill.
3. **Semantic = meaning only** — Status hues exist for machine-state communication (badge bg, toast icon, validation message, online/offline dot). If it doesn't communicate a machine state, use the raw ramps instead.
4. **Status bg uses `--*-bg`** — Status badges and pills use the `--status-*-bg` token, never the solid `--*-500` as a fill.
5. **Project scoping** — Parent 7K uses `--accent-square` (magenta). Child projects swap `--accent-*` for their own hue. The neutral ramp stays unchanged.
6. **No raw ramp references in components** — Always reference role tokens (`--bg-elevated`, `--text-primary`, `--border-default`), never raw ramp tokens (`--neutral-950`, `--neutral-50`, etc.). This is how theme switching works.
7. **Dark is default, light is opt-in** — `:root` holds dark token mappings. `@media (prefers-color-scheme: light)` overrides only the role tokens. Primitive ramps are shared and unchanged.

## 3. Typography

**Source context reference:** The brand brief says "We only have 1 font and it's Geist." The system interprets this as the **Geist superfamily**: Geist (sans-serif) for body and headings, Geist Mono for labels/code/tabular data, and Geist Pixel (5 geometric variants) for ornamental display moments. Mono labels serve as the "connective tissue" — the engineering-blueprint aesthetic comes from seeing mono metadata everywhere.

### Three-font system

| Family | Role | Weight range | Source |
|--------|------|-------------|--------|
| **Geist** (sans) | Display, headings, body, UI text | 100–900 | CDN (`geist` npm package) |
| **Geist Mono** | Labels, code, tabular data, metadata | 400, 500 | CDN (`geist` npm package) |
| **Geist Pixel** (5 variants) | Ornamental display, pixel-constrained surfaces, hero wordmarks | 400–800 (one per variant) | Local `fonts/` TTFs |

### Geist Pixel variant → project accent pairing

| Variant | Weight | Pairs with | Best for |
|---------|--------|------------|----------|
| **Square** | 400 (Regular) | Magenta (7K parent) | Body-sized pixel text, data displays |
| **Circle** | 500 (Medium) | Cyan | Buttons, badges, navigation |
| **Grid** | 600 (SemiBold) | Acid (Grid project) | Section titles, stat values |
| **Line** | 700 (Bold) | Ember (Line project) | Display headlines, hero text |
| **Triangle** | 800 (ExtraBold) | Solar (Triangle project) | Hero wordmarks, giant headlines |

### Font stacks
```
--font-sans:  'Geist', system-ui, -apple-system, sans-serif;
--font-mono:  'Geist Mono', ui-monospace, 'SF Mono', Menlo, monospace;
--font-pixel: 'Geist Pixel', monospace;
```

### Type scale — engineering blueprint

| Token | Size | Family / Weight | Usage |
|-------|------|----------------|-------|
| `--text-display` | `clamp(48px, 8vw, 160px)` | Geist 900 -0.04em | Hero numerals, giant headlines |
| `--text-h1` | 4rem (64px) | Geist 700 -0.04em | Page titles |
| `--text-h2` | 3rem (48px) | Geist 700 -0.03em | Section titles |
| `--text-h3` | 2rem (32px) | Geist 600 -0.02em | Sub-section headers |
| `--text-h4` | 1.5rem (24px) | Geist 600 -0.02em | Card titles |
| `--text-body-lg` | 1.125rem (18px) | Geist 400 -0.01em | Larger body / lede |
| `--text-body` | 1rem (16px) | Geist 400 -0.01em | Body paragraphs |
| `--text-body-sm` | 0.875rem (14px) | Geist 400 -0.01em | Secondary text |
| `--text-caption` | 0.75rem (12px) | Geist 500 | Metadata, timestamps |
| `--text-mono-label` | 0.6875rem (11px) | Geist Mono 500 0.12em uppercase | Labels, badges, form labels — the "connective tissue" |
| `--text-mono-body` | 0.8125rem (13px) | Geist Mono 400 | Code blocks, tabular data |

### Legacy alignment tokens (deprecated but kept for compatibility)
```
--text-7xl  7.5rem (120px)    --text-6xl  5.5rem (88px)
--text-5xl  4rem (64px)       --text-4xl  3rem (48px)
--text-3xl  2.25rem (36px)    --text-2xl  1.75rem (28px)
--text-xl   1.375rem (22px)   --text-lg   1.125rem (18px)
--text-base 1rem (16px)       --text-sm   0.875rem (14px)
--text-xs   0.75rem (12px)    --text-2xs  0.625rem (10px)
```

### Weight scale
```
--weight-thin: 100    --weight-extralight: 200  --weight-light: 300
--weight-regular: 400  --weight-medium: 500    --weight-semibold: 600
--weight-bold: 700     --weight-extrabold: 800 --weight-black: 900
```

### Line heights
```
--leading-none:   1         --leading-tight:  1.15
--leading-snug:   1.3       --leading-normal: 1.5
--leading-relaxed: 1.65
```

### Letter spacing
```
--tracking-tightest: -0.04em   --tracking-tighter:  -0.02em
--tracking-tight:    -0.01em   --tracking-normal:   0
--tracking-wide:     0.02em    --tracking-wider:    0.06em
--tracking-widest:   0.14em
```

### Mono-label language — "connective tissue"
Every label, badge, form label, tab, breadcrumb, and status indicator uses `--text-mono-label` (Geist Mono, 11px, 500 weight, 0.12em uppercase). This creates the engineering-blueprint aesthetic: the reader always knows which layer they are looking at because the meta-information reads like a schematic.

### Numerics
- All data / metrics use `font-family: var(--font-mono)` with `font-variant-numeric: tabular-nums`
- Display: -0.04em, h1: -0.04em, h2: -0.03em, h3: -0.02em, h4: -0.02em

## 4. Spacing

**Source context reference:** The brief calls for "a very complete and detailed design system" without specifying spacing units. A 4px baseline grid is chosen as industry standard for web-scale systems, with 14 steps to cover micro-spacing through section gaps.

### Scale (4px grid, rem values)

```
--space-0  0          --space-1  0.25rem (4px)  --space-2  0.5rem (8px)
--space-3  0.75rem (12px)  --space-4  1rem (16px)   --space-5  1.25rem (20px)
--space-6  1.5rem (24px)   --space-8  2rem (32px)   --space-10 2.5rem (40px)
--space-12 3rem (48px)     --space-16 4rem (64px)   --space-20 5rem (80px)
--space-24 6rem (96px)     --space-32 8rem (128px)
```

### Radius

```
--radius-none 0    --radius-xs 2px     --radius-sm 4px
--radius-md  8px   --radius-lg 12px    --radius-xl 16px
--radius-2xl 24px  --radius-full 9999px
```

Sharp (0px) and subtle (2–4px) are preferred for 1-bit elements. 8–12px for interactive cards and dialogs.

### Shadows

```
--shadow-sm:  0 1px 2px   rgba(0,0,0,0.4)
--shadow-md:  0 4px 12px  rgba(0,0,0,0.5)
--shadow-lg:  0 12px 32px rgba(0,0,0,0.6)
--shadow-xl:  0 24px 64px rgba(0,0,0,0.7)
--shadow-glow:  0 0 0 1px var(--brand-primary), 0 0 24px var(--brand-primary-glow)
--shadow-inset: inset 0 1px 0 rgba(255,255,255,0.04)
```

### Motion

```
--ease-out:      cubic-bezier(0.16, 1, 0.3, 1)
--ease-in-out:   cubic-bezier(0.65, 0, 0.35, 1)
--ease-spring:   cubic-bezier(0.34, 1.56, 0.64, 1)
--duration-instant: 80ms
--duration-fast:    150ms
--duration-base:    240ms
--duration-slow:    400ms
--duration-slower:  640ms
```

## 5. Layout & Composition

**Source context reference:** The brief's "tech company with different projects" suggests a dashboard/app-shell layout pattern. The 12-column grid supports both marketing pages and data-dense project dashboards.

### Container widths
```
--container-sm:  640px
--container-md:  960px
--container-lg:  1200px
--container-xl:  1440px
--grid-gutter:   var(--space-6)
```

### Z-index scale
```
--z-base:    0
--z-raised:  10
--z-sticky:  100
--z-overlay: 200
--z-modal:   300
--z-toast:   400
--z-max:     999
```

### Grid
- 12-column responsive grid, `--grid-gutter` (24px) gutter
- Breakpoints: 480px (mobile), 768px (tablet), 1024px (desktop), 1440px (wide)
- Max content width: 1280px, centered

### Navigation
- Sticky top nav (frosted glass) on dark bg
- Bottom tab bar on mobile, side nav for app shells
- Active nav item: accent dot indicator

### 1-bit section rhythm
- Scanline overlay on hero / full-bleed sections
- Halftone dot separators between content blocks
- Full-bleed sections use `.separator-onebit` (2px white line at 25% opacity) as rhythm breaks
- Texture shift between sections: scanline → solid → halftone → solid → scanline. Never two textured sections adjacent.
- Manga panel composition: content is the "panel" (solid black border), background is the "page" (noise or scanline). Each panel gets a `.vignette-onebit` edge fade.

### Product shell layout
```
┌──────────────────────────────────────────┐
│ Sidebar (240px)  │  Main content area     │
│ ┌──────────────┐ │  ┌──────────────────┐  │
│ │ 7K logo      │ │  │ Page heading     │  │
│ │              │ │  │ Stat grid (4×)   │  │
│ ├──────────────┤ │  │ Module cards (4×)│  │
│ │ Nav items    │ │  │                  │  │
│ │ ● Dashboard  │ │  └──────────────────┘  │
│ │ ● Projects   │ │  ┌──────────────────┐  │
│ │ ● Analytics  │ │  │ Command input    │  │
│ │ ● Settings   │ │  └──────────────────┘  │
│ └──────────────┘ │                        │
└──────────────────────────────────────────┘
```

## 6. Components

**Source context reference:** The 7K design system uses a **unified 1-bit component library**. All components share pure black backgrounds (`#000000`), pure white foreground (`#FFFFFF`), zero-radius corners, 2px white borders, and invert-on-hover interaction. Thin accent layer modifiers add color to specific components without breaking the 1-bit feel.

### 6a. Button system

**Modern neon** — the only button system. All buttons use `mono-label` typography (Geist Mono, 11px, 500 weight, 0.12em uppercase) and 4px border-radius. Accent fills use the brand-primary ramp (500→hover:400→active:600). Button groups, split buttons, and loading state are built on the same base.

| Class | Description |
|-------|-------------|
| `.btn-modern` | Base: mono-label typography, 12px/20px padding, `rounded.sm` (4px) |
| `.btn-modern-primary` | `--brand-primary` (`--magenta-500`) fill, `--brand-primary-hover` on hover + glow shadow |
| `.btn-modern-secondary` | `--bg-raised` fill, `--bg-overlay` on hover |
| `.btn-modern-ghost` | Transparent, `--text-secondary` text, subtle bg on hover |
| `.btn-modern-glow` | `--magenta-500` fill + neon glow, `--magenta-400` on hover |
| `.btn-modern-glow-cyan` | `--cyan-500` fill + cyan glow, `--cyan-400` on hover |
| `.btn-modern-glow-grid` | `--acid-500` fill + acid glow, `--acid-400` on hover |
| `.btn-modern-danger` | Transparent + danger border, danger fill on hover |
| `.btn-modern-sm/lg` | Size variants (8px/16px small, 16px/28px large) |
| `.btn-modern-icon` | 40×40 square icon button |
| `.btn-modern-lg-icon` | 52×52 large icon button |
| `.btn-modern-loading` | Loading state — `onebit-spin` replaces icon |
| `.btn-group` | Inline flex container for grouped buttons (adjacent borders merge) |
| `.btn-split` | Split button trigger — last child gets narrower padding + left border |

All variants use standard CSS transitions for interaction states:
- **`:hover`** → fill shifts to `--brand-primary-hover` (`--magenta-400`), optional glow shadow intensifies
- **`:focus-visible`** → outline ring
- **`:active`** → fill shifts to `--brand-primary-active` (`--magenta-600`)
- **`Loading`** → `onebit-spin` (0.6s steps(4) infinite — square frame rotation)

### 6b. Form controls

| Class | Description |
|-------|-------------|
| `.input` | Text input: black bg, 2px white border, accent glow on focus |
| `.textarea` | Multi-line input, same tokens |
| `.select-native` | Custom dropdown, SVG chevron |
| `.checkbox` | 16px square, checked fills white (`.checkbox-accent`: fills magenta) |
| `.radio` | 16px square, selected fills white (`.radio-accent`: fills magenta) |
| `.toggle` | 36x18 switch, on state fills white (`.toggle-accent`: fills magenta) |
| `.range` | 6px track, 16px square thumb |
| `.form-group` | Flex column with gap |
| `.form-label` | Mono uppercase label, 11px |
| `.field-error` | Red mono error text |
| `.input-group` | Inline input + addon |
| `.input-addon` | Prefix/suffix decoration |
| `.color-swatch` | 32px square, accent shadow on selected |

### 6c. Navigation

| Class | Description |
|-------|-------------|
| `.nav` | Vertical nav container |
| `.nav-item` | Nav link with optional bullet, invert on active |
| `.nav-item-accent` | Magenta border on active |
| `.tabs` | Horizontal tab bar, 2px bottom border |
| `.tab` | Mono uppercase tab, white underline on active |
| `.tab-accent` | Magenta underline on active |
| `.pagination` | Inline page button group |
| `.page-btn` | 32px square, invert on active |
| `.breadcrumb` | Mono slash-separated trail |
| `.stepper` | Numbered step indicator with connecting line |

### 6d. Data display

| Class | Description |
|-------|-------------|
| `.table` | Collapsed table, 2px header border, mono uppercase headers |
| `.badge` | Inline uppercase label, 11px, 1px border |
| `.badge-inverted` | White bg, black text |
| `.badge-accent` / `.badge-success` / `.badge-warning` / `.badge-danger` | Colored border variants |
| `.tag` | 11px uppercase inline, 3 variants (default, outlined, inverted) |
| `.chip` | Removable inline tag with close button |
| `.chip-accent` | Magenta border variant |
| `.avatar` | 32x32 square, 2px border, mono initial |
| `.avatar-sm` / `.avatar-lg` / `.avatar-group` | Size + overlap group |
| `.stat` | Value + label vertical pair |
| `.stat-accent` | Magenta value color |
| `.kbd` | Keyboard key with 3px bottom border weight |
| `.code-block` | Pre block, 2px border, 13px mono |
| `.code-inline` | Inline code snippet |
| `.link` | Underlined white text, thicker hover |
| `.link-accent` | Magenta colored link |
| `.list` | Bordered list group with 2px border |
| `.list-item` | 13px item with hover/active states |
| `.tree` | Nested tree with lines |
| `.tree-item` | Indented with left border, accent on active |

### 6e. Overlays

| Class | Description |
|-------|-------------|
| `.modal` | Black bg, 2px border, 8px hard offset shadow |
| `.drawer` | Side panel, 300-480px width |
| `.toast` | Notification with 4px hard offset shadow, slide-up animation |
| `.toast-success` / `.toast-error` / `.toast-warning` | Colored icon variants |
| `.tooltip` | Positioned label on hover |
| `.alert` | Inline message with icon |
| `.alert-success` / `.alert-error` / `.alert-warning` | Colored border variants |

### 6f. Feedback

| Class | Description |
|-------|-------------|
| `.progress` | 12px bar, 2px border |
| `.progress-accent` | Magenta fill |
| `.progress-indeterminate` | Scanning bar animation |
| `.progress-striped` | Striped fill overlay |
| `.spinner` | 20px square rotating frame, 90° steps |
| `.spinner-accent` / `.spinner-cyan` | Colored border variants |
| `.skeleton` | Loading placeholder, opacity pulse |
| `.empty` | Dashed border placeholder, centered content |
| `.loading-screen` | Full block loading with blinking label |
| `.banner` | Full-width colored message bar |

### 6g. Media & Layout

| Class | Description |
|-------|-------------|
| `.image-frame` | 2px border placeholder |
| `.video-frame` | 16:9 frame with play button + timeline |
| `.icon-box` | 40x40 square icon container |
| `.icon-box-sm` / `.icon-box-lg` / `.icon-box-accent` / `.icon-box-cyan` | Variants |
| `.container` | 1280px centered max-width |
| `.grid` / `.grid-2` / `.grid-3` / `.grid-4` | Grid with 24px gap |
| `.hr` / `.hr-thick` | Horizontal rules |

### 6h. Misc

| Class | Description |
|-------|-------------|
| `.menu` | Dropdown menu list |
| `.menu-item` | Menu entry with divider support |
| `.toolbar` | Icon button row with separators |
| `.status-dot` | 8px square dot (live/away/busy/offline) |
| `.timeline` | Vertical timeline with dots + lines |
| `.countdown` | Tabular numeric countdown with labels |
| `.rating` | 5-star rating, 20px squares, accent on hover |
| `.combobox` | Searchable select with dropdown menu |
| `.date-input` | Date field with segmented parts |

### 6i. Accent layer modifiers

These classes add thin color to any 1-bit component without breaking the black/white base. Apply alongside the component class.

| Class | Effect |
|-------|--------|
| `.accent-border-top` / `.accent-border-left` / `.accent-border-bottom` | 3px magenta border on one edge |
| `.cyan-border-top` / `.grid-border-top` / `.line-border-top` | 3px colored top border |
| `.accent-underline` / `.cyan-underline` | Colored underline on text |
| `.accent-dot` / `.cyan-dot` / `.grid-dot` | Small colored dot after element |
| `.accent-bar` / `.cyan-bar` / `.grid-bar` / `.line-bar` | Thin colored bar across top |
| `.glow-mod` / `.glow-mod-cyan` | Colored glow shadow |
| `.border-mod-accent` / `.border-mod-cyan` | Border color override |
| `.accent-corner` / `.cyan-corner` | Small colored corner badge |

### 1-bit composition rules
- **No radii.** Every 1-bit component uses `border-radius: 0`. Sharp corners are part of the identity.
- **No blur shadows.** Only hard offset shadows (`box-shadow: 8px 8px 0 #FFFFFF`) on modal and toast.
- **2px borders.** All bordered 1-bit components use 2px `solid` white borders unless specified.
- **Invert interaction.** The primary hover/focus state is inversion — white bg, black text.
- **Mono for data.** All numeric, code, and pagination elements use `Geist Pixel`. Labels and body use `Geist Pixel`.
- **Uppercase label language.** Tags, badges, breadcrumbs, form labels default to uppercase with letter-spacing.
- **Accent is thin.** Color enters components through edges (3px top border), dots (6px), glows (shadow), or hover fills — never as full surface backgrounds.
- **Empty = dashed border.** Empty states use a 2px dashed white border at 25% opacity — never grey placeholders.

## 7. Motion & Interaction

**Source context reference:** The brief's "abstract 1-bit animations" directly motivates the scanline-scroll, glitch, and halftone keyframe primitives. Reduced-motion support is a standard accessibility requirement.

### Durations & easing
```
--ease-out:       cubic-bezier(0.16, 1, 0.3, 1)
--ease-in-out:    cubic-bezier(0.65, 0, 0.35, 1)
--ease-spring:    cubic-bezier(0.34, 1.56, 0.64, 1)
--duration-instant: 80ms
--duration-fast:    150ms
--duration-base:    240ms
--duration-slow:    400ms
--duration-slower:  640ms
```

### Full 1-bit Animation Library

| Animation | Class | Duration | Type | Description |
|-----------|-------|----------|------|-------------|
| Scanline scroll | `.scanline` (::after) | 8s linear infinite | Ambient | Horizontal lines scroll down — signature 7K texture |
| Scanline fast | `.scanline-fast` (::after) | 3s linear infinite | Ambient | Faster variant for high-energy sections |
| Basic glitch | `.glitch` | 0.3s, 3 iterations | Trigger | Translate jitter on 5 random frames |
| Complex glitch | `.glitch-complex` | 0.8s, 2 iterations | Trigger | Multi-axis + skew + clip-path splits |
| Glitch accent | `.glitch-accent` | 0.4s, 2 iterations | Trigger | Glitch with magenta glow trail |
| CRT flicker | `.flicker` / `.flicker-fast` | 4s / 1.5s infinite | Ambient | Opacity stutter at irregular intervals |
| Binary blink | `.blink` / `.blink-fast` | 1s / 0.4s step-end | Ambient | Sharp on/off toggle |
| Typewriter | `.typewriter` | 1.5s (30 steps) | Trigger | Text reveal from left |
| Neon pulse | `.neon-pulse` / `.neon-pulse-cyan` | 2s ease-in-out | Ambient | Accent glow oscillation |
| Noise shift | `.noise-animated` | 0.5s, steps(5) | Ambient | SVG noise translates in discrete positions |
| Scan reveal | `.scan-reveal` | 2s, 1 iteration | Trigger | White bar sweeps down |
| Pixel fade-in | `.pixel-fade-in` | 0.6s, steps(8) | Trigger | Left-to-right reveal in pixel steps |
| Invert flash | `.invert-flash` | 0.15s, 2 iterations | Trigger | Full filter inversion burst |
| Pixel dots | `.pixel-dots` / `.pixel-dots-fast` | 0.3s, steps(4), 2 iterations | Trigger | Small black squares scatter at random positions — 1-bit corruption effect |
| Progress scan | `.progress-indeterminate` | 1.5s | Loading | Bar sweeps left-to-right |
| Skeleton pulse | `.skeleton` | 1.2s ease-in-out | Loading | Opacity pulse |
| Slide-up reveal | `.slide-up-reveal` | 0.5s ease-out | Trigger | Content rises with clip-path |
| Shimmer sweep | `.shimmer` | 2s linear infinite | Loading | Horizontal gradient sweep |
| Frame step | `.frame-step` (::after) | 0.8s steps(1) | Ambient | Binary character cycle (▌▐█▀) |
| One-bit spin | `.spinner` | 0.6s linear | Loading | Square frame in 90° increments |
| Matrix rain | `.matrix-rain-char` | 2s linear infinite | Ambient | Falling character column |
| Accent flicker | `.accent-flicker` | 1.8s step-end infinite | Ambient | Blinking accent color text |

### Isometric Animation Library

| Animation | Class | Duration | Type | Description |
|-----------|-------|----------|------|-------------|
| Isometric float | `.iso-float` | 3s ease-in-out infinite | Ambient | Block bobs up/down with subtle scale depth shift |
| Float + spin | `.iso-float-spin` | 4s ease-in-out infinite | Ambient | Float + slow Y-axis rotation (90° steps) |
| Grid scroll | `.iso-grid-scroll` | 4s linear infinite | Ambient | Isometric diamond grid scrolls diagonally |
| Terrain shift | `.iso-terrain-shift` | 6s linear infinite | Ambient | 3 parallax layers move at different speeds |
| Rotate cube | `.iso-rotate-cube` | 6s linear infinite | Ambient | Full 3D cube rotation in isometric space |
| Assemble blocks | `.iso-assemble` | 0.8s ease-out forwards | Trigger | Blocks rise from below into position (5 delay variants: `.iso-assemble-2` through `-5`) |
| Perspective dolly | `.iso-perspective-dolly` | 1s ease-out forwards | Trigger | Content zooms toward viewer with blur-in |
| Step build | `.iso-step-build` | 0.4s steps(6) forwards | Trigger | Square reveals in pixel-step sequence |

### Animation composition rules

1. **One ambient + one trigger.** At most one ambient animation (scanline, noise, flicker, shimmer, iso-grid-scroll) runs continuously. Triggered animations (glitch, invert-flash, scan-reveal, iso-assemble, iso-perspective-dolly) fire on interaction.
2. **Glitch is a burst, not a loop.** Basic glitch runs exactly 3 iterations (0.9s total) on the class utility. Pixel-dots runs 2 iterations (0.6s) for a quick corruption scatter. Never loop glitch infinitely.
3. **Scanline is the default ambient.** Every hero/full-bleed section should evaluate whether `.scanline` adds atmosphere. UI content sections (dashboard, settings) must not use ambient animation.
4. **Cascade: reduced-motion wins.** All animations collapse to 0.01ms at `prefers-reduced-motion: reduce`. No exceptions.
5. **Step timing for pixel-perfect animation.** Keyframes that simulate digital/retro effects use `steps()` timing instead of `ease`. This preserves sharp on/off quality.
6. **Overlay animations must have `pointer-events: none`.** Scanline, vignette, noise, and scan-reveal use `::before`/`::after` pseudo-elements.

### Animation timing — when 1-bit animations apply

| Surface | Ambient animation | Trigger animation |
|---------|-------------------|-------------------|
| Landing / marketing hero | `.scanline` (8s) | `.scan-reveal` on load |
| Dashboard / app shell | None | `.glitch` on filter change |
| Loading state | `.skeleton` or `.shimmer` | None |
| Error state | None | `.glitch-complex` on container |
| 1-bit splash / manga panel | `.scanline-fast` (3s) | `.invert-flash` on page enter |
| Toast / notification | None | `.slide-up-reveal` on mount |
| Button (accent) | None | Color transition on hover |
| Accent text | `.accent-flicker` | None |

## 8. React UI Kit

The React UI kit provides TypeScript components that wrap the CSS component classes. All components are thin wrappers — they apply the correct CSS classes and forward refs. No inline styles beyond what the CSS system provides.

### Installation

```bash
npm install 7k-design-system
```

```typescript
// App entry point
import '7k-design-system/css';
import { ThemeProvider } from '7k-design-system/react';

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <YourApp />
    </ThemeProvider>
  );
}
```

### Button

```typescript
import { Button } from '7k-design-system/react';

<Button
  variant="primary"     // 'primary' | 'secondary' | 'ghost' | 'glow' | 'glow-cyan' | 'glow-grid' | 'danger'
  size="md"             // 'sm' | 'md' | 'lg'
  disabled={false}
  onClick={() => {}}
  type="button"         // 'button' | 'submit' | 'reset'
  className=""
>
  Click me
</Button>
```

**CSS classes applied:**
- Base: `.btn-modern`
- Variant: `.btn-modern-{variant}` (e.g., `.btn-modern-primary`)
- Size: `.btn-modern-sm` | `.btn-modern-lg` (md applies no extra class)

**Behavior:** Forwards ref to `<button>`. Combines `className` prop with generated classes.

### Input

```typescript
import { Input } from '7k-design-system/react';

<Input
  type="text"
  placeholder="Hint text"
  disabled={false}
  value={value}
  onChange={(value) => setValue(value)}  // string callback, not event
  className=""
/>
```

**CSS class applied:** `.input`

**Behavior:** Forwards ref to `<input>`. `onChange` receives the raw string value (not an event). All standard HTML input props pass through.

### Badge

```typescript
import { Badge } from '7k-design-system/react';

<Badge variant="default">   // 'default' | 'success' | 'warning' | 'danger' | 'info' | 'neutral'
  Status
</Badge>
```

**CSS classes applied:**
- Base: `.badge`
- Variant: `.badge-{variant}` (e.g., `.badge-success`)

**Behavior:** Forwards ref to `<span>`. Children render as text content.

### ThemeToggle

```typescript
import { ThemeToggle } from '7k-design-system/react';

<ThemeToggle className="" />
```

**Behavior:** Renders a 32×32 square button with `☀` / `☾` icon. Uses `useTheme()` internally. Calls `toggleTheme()` on click. Sets `data-theme` attribute on `<html>` and persists to `localStorage` under key `7k-theme`.

### ThemeProvider

```typescript
import { ThemeProvider } from '7k-design-system/react';

<ThemeProvider
  defaultTheme="dark"      // 'dark' | 'light'
  storageKey="7k-theme"    // localStorage key
>
  {children}
</ThemeProvider>
```

**Behavior:**
- On mount: reads `localStorage` for stored theme, falls back to `defaultTheme`
- On theme change: sets `document.documentElement.setAttribute('data-theme', theme)` and writes to `localStorage`
- Exposes context value: `{ theme, toggleTheme, setTheme }`

### useTheme

```typescript
import { useTheme } from '7k-design-system/react';

const { theme, toggleTheme, setTheme } = useTheme();
```

**Returns:**
- `theme: 'dark' | 'light'` — current active theme
- `toggleTheme: () => void` — flips dark ↔ light
- `setTheme: (theme: 'dark' | 'light') => void` — sets explicit theme

**Error:** Throws if called outside a `ThemeProvider`.

### TypeScript Types

```typescript
// src/react/types.ts
interface BaseProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'glow' | 'glow-cyan' | 'glow-grid' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';
interface ButtonProps extends BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

type BadgeVariant = 'default' | 'success' | 'warning' | 'danger' | 'info' | 'neutral';
interface BadgeProps extends BaseProps {
  variant?: BadgeVariant;
}

interface InputProps extends BaseProps {
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  value?: string;
  onChange?: (value: string) => void;
}

type Theme = 'dark' | 'light';
interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}
```

## 9. Modular CSS Architecture

The CSS is split into 10 source files under `src/css/`, compiled into `dist/7k-design-system.css`. Each file has a single responsibility. Import `src/css/index.css` to load all modules, or import individual modules for tree-shaking.

| File | Size | Responsibility |
|------|------|---------------|
| `fonts.css` | ~1.7KB | `@font-face` for Geist Pixel 5 variants; CDN imports for Geist Sans/Mono |
| `tokens.css` | ~12.5KB | All design tokens: color ramps, semantic roles, typography, spacing, radii, shadows, motion, layout, z-index |
| `themes.css` | ~7.2KB | Dark default in `:root`; light overrides in `@media (prefers-color-scheme: light)` and `html[data-theme="light"]` |
| `base.css` | ~7.6KB | CSS reset, body/html base styles, `.mono-label` utility, `.display`/`.h1`–`.h4`/`.body` type utilities |
| `textures.css` | ~12.4KB | 10 texture categories: scanline, halftone, dot matrix, stripes, crosshatch, checkerboard, noise, vignette |
| `isometric.css` | ~12.5KB | 11 isometric patterns: grid, cubes, pyramid, hex, pipes, terrain + animation variants |
| `components.css` | ~36KB | 40+ component classes: buttons, forms, nav, data display, overlays, feedback, media, misc |
| `modifiers.css` | ~2.2KB | Accent layer modifiers: border-top, underline, dot, bar, glow, corner |
| `animations.css` | ~15.8KB | 20+ keyframe animations: glitch, flicker, blink, typewriter, neon-pulse, scan-reveal, pixel-fade, iso-float |
| `accessibility.css` | ~0.6KB | `prefers-reduced-motion` collapse, `:focus-visible` rings, `prefers-contrast` support, screen-reader utilities |

### PostCSS Pipeline

```
src/css/index.css
  → postcss-import      (inline @import)
  → postcss-nesting     (native CSS nesting)
  → autoprefixer        (vendor prefixes)
  → cssnano             (minification for production)
  → dist/7k-design-system.css
```

### Standalone CSS Exports

```typescript
import '7k-design-system/css';           // Full bundle (~115KB)
import '7k-design-system/css/tokens';    // Tokens only (~12KB)
import '7k-design-system/css/components'; // Components only (~36KB)
import '7k-design-system/css/textures';  // Textures only (~12KB)
import '7k-design-system/css/animations'; // Animations only (~16KB)
```

### Build Commands

```bash
npm run build:css       # Compile CSS bundle + standalone modules
npm run build:react     # Compile React ESM + CJS + .d.ts
npm run build:copy-assets  # Copy preview/, fonts/, build/ to dist/
npm run build           # Run all three build steps
```

## 10. Testing & Documentation

### Test Suite (Vitest)

Location: `tests/`
Runner: Vitest + jsdom + @testing-library/react + jest-axe

| File | Coverage |
|------|----------|
| `Button.test.tsx` | Rendering, variant/size classes, click handler, disabled state |
| `Input.test.tsx` | Rendering, value/onChange callback, disabled state, placeholder |
| `Badge.test.tsx` | Rendering, variant classes, children content |
| `ThemeProvider.test.tsx` | Default theme, localStorage persistence, `data-theme` attribute |
| `ThemeToggle.test.tsx` | Click toggles theme, icon changes, aria-label updates |
| `a11y.test.tsx` | axe-core accessibility checks on Button, Input, Badge |

**Run tests:**
```bash
npm test           # Unit tests
npm run test:a11y  # Accessibility tests
npm run test:watch # Watch mode
```

### Storybook

Location: `src/stories/`
Port: 6006

| Story | Content |
|-------|---------|
| `Design System/Overview` (`Overview.mdx`) | Design principles, color palette, usage examples |
| `Design System/Tokens` (`Tokens.mdx`) | Token reference tables |
| `Components/Button` (`Components.stories.tsx`) | All Button variants and sizes |
| `Components/Input` (`Components.stories.tsx`) | Input states |
| `Components/Badge` (`Components.stories.tsx`) | Badge variants |
| `Components/ThemeToggle` (`Components.stories.tsx`) | Theme toggle button |
| `Textures/All` (`Textures.stories.tsx`) | All 10 texture patterns |
| `Textures/Isometric` (`Textures.stories.tsx`) | All 11 isometric patterns |

**Run Storybook:**
```bash
npm run storybook       # Dev server at http://localhost:6006
npm run build-storybook # Static build for deployment
npm run chromatic       # Visual regression testing
```

### Preview HTML Cards

Location: `preview/` (copied to `dist/preview/` on build)

| File | Purpose |
|------|---------|
| `colors-primary.html` | Accent swatches, ramps, project overrides |
| `typography-specimens.html` | Type scale + weights + pixel variants |
| `spacing-tokens.html` | 4px grid, radii, shadows |
| `components-buttons.html` | Product component states |
| `textures-backgrounds.html` | 10 background texture categories with composition demos |
| `brand-assets.html` | Logo variants + brand in context |

## 11. Voice & Brand

**Source context reference:** The brief's "our logo is just '7K'" and "tech company with different projects" inform the minimal brand identity. The logo is a geometric polygon SVG — dark (#111) background polygons frame the "7K" letterforms as clear white polygon shapes with thin #FF0FF accent shapes. Sub-projects differentiate by accent hue while keeping the wordmark structure.

- **Tone**: Direct, technical, slightly playful. "Built for midnight."
- **Capitalization**: Sentence case for headings, uppercase only for kickers/labels
- **Company**: 7K (always uppercase with the numeral). Child projects: "7K Project Neon"
- **Logo**: Star-burst pattern SVG in `build/logos/logo-7k.svg` with #FF0FF brand accent tones. Light variant at `build/logos/logo-7k-light.svg` (black polygons for light backgrounds). App icon at `build/icons/icon.svg`.
- **Terminology**: "Surface" for pages, "module" for components, "canvas" for background
- **No filler**: never use "streamlined", "innovative", "leveraging" unless literal
- **Error messages**: direct, no "oops". "Connection failed. Retry." not "Something went wrong."

## 12. Anti-patterns

**Source context reference:** Each anti-pattern below derives from a specific brief constraint: dark theme (no warm backgrounds), three-font system kept to Geist family only, 1-bit influence (no rounded corners on 1-bit elements), neon Tokyo (no generic purple gradients), brand-color-only accent (no color proliferation).

| Anti-pattern | Why |
|---|---|
| Warm beige/cream/peach backgrounds | System is dark-first; light theme is precise white |
| Multiple font families outside the system | Three fonts only: Geist (sans), Geist Mono, Geist Pixel (5 variants). No other families. |
| Over-rounded everything | Sharp 0px or subtle 4px preferred |
| Gradient overload | Max one gradient per page; no full-page gradient backgrounds |
| Emoji iconography | Use CSS/SVG instead |
| Drop shadows on text | Use high-contrast fg instead |
| Stock photography | Use 1-bit halftone texture library |
| Generic purple/violet gradients | Accent is magenta (#FF0FF), not purple |
| Invented metrics/fake stats | Use real data or grey stubs |
| Circular spinners on 1-bit elements | Spinner is square — never mix circular |
| Rounded checkboxes/radios | One-bit form controls are square |
| Blurred drop shadows on 1-bit components | Shadow is a hard offset, not a blur |
| SVG humans / scenery / illustrations | 1-bit means abstract texture, not hand-drawn |
| Glitch as a continuous loop | Glitch is a 2–3 iteration burst |
| Warm/beige tones anywhere | System is nocturnal dark + neon |
| Multiple textures on the same section layer | Max one background + one overlay per section |
| Continuous animation on UI surfaces | Ambient animations are for hero/landing sections only |
| Isometric animation on interactive UI | Isometric bg + motion is for hero/splash sections only; never on cards, buttons, or form controls |
| Mixing 1-bit button patterns into product surfaces | Use the modern button system (.btn-modern*) for all product surfaces. 1-bit button classes (.btn, .btn-primary, .btn-accent) are removed — do not reintroduce raw invert-hover buttons in place of modern neon buttons. |
