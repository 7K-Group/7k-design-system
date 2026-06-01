# 7k-design-system

> Dark-first, neon-accented, manga-inflected design system for multi-project tech company 7K.
> Built for midnight. Three-font system. One brand color. Ten 1-bit textures. Forty components. Twenty animations.

## Product Overview

**7k-design-system** is a dark-first dual-theme design system created for 7K, a technology holding company with multiple sub-projects. The system embodies a Tokyo neon atmosphere — high contrast, nocturnal canvas, electric accents — combined with manga-influenced 1-bit visual language using pure black and white textures.

**Source product:** 7K is a technology holding company that builds infrastructure, AI pipelines, and digital products across multiple sub-projects. This design system serves as the visual foundation for 7K and all its child projects, providing a unified design language that differentiates sub-projects through accent color overrides while maintaining consistent typography, spacing, component patterns, and animation systems across all surfaces.

### Primary Surfaces

The design system supports five primary surfaces:

| Surface | Description | Key Files |
|---------|-------------|-----------|
| **Company Website** | Dark landing pages with scanline heroes, project showcases, stats grids | `DESIGN.md` §1–5, `preview/brand-assets.html` |
| **Product Dashboard** | Data-dense admin interfaces with sidebar nav, tables, status cards | `source_examples/App.js`, `source_examples/Sidebar.js`, `preview/components-buttons.html` |
| **Sub-project Landing** | Child project pages with accent hue overrides (cyan, acid, ember, solar) | `DESIGN.md` §2 (accent tokens), `colors_and_type.css` |
| **Internal Tools** | CLI-like interfaces, monitoring panels, resource dashboards | `DESIGN.md` §3 (mono labels), `preview/spacing-tokens.html` |
| **Mobile App** | Responsive adaptations with bottom tab nav, touch-friendly targets | `DESIGN.md` §5 (responsive grid), `preview/colors-primary.html` |

### Core Capabilities

The system provides these core capabilities:

- **Dark-first theming** with opt-in light mode via `data-theme="light"`
- **Single brand accent** (#FF0FF magenta) with 4 project-specific accent overrides
- **Three-font system**: Geist Sans (display/body), Geist Mono (labels/code), Geist Pixel (5 geometric variants for ornamental use)
- **10 texture categories**: scanline, halftone, dot matrix, stripes, crosshatch, checkerboard, noise, vignette, isometric, separators
- **40+ 1-bit components**: zero-radius, 2px white borders, invert-on-hover, thin accent modifiers
- **20+ animations**: ambient (scanline scroll, CRT flicker, neon pulse) and trigger (glitch, pixel-dots, invert-flash)
- **Engineering-blueprint aesthetic**: mono labels as "connective tissue" throughout all surfaces

## Source & Context References

Every design rule is grounded in the original brand brief (quoted inline in `DESIGN.md`):

| Evidence from Brief | Design Rule |
|---|---|
| "We only have 1 font and it's Geist" | Three-font system: Geist Sans + Geist Mono + Geist Pixel (5 variants) |
| "Our logo is just '7K'" | Star-burst pattern SVG logo with #FF0FF accent tones |
| "Our main brand color is #FF0FF" | Single magenta accent; no secondary brand color |
| "Tech company with different projects" | Sub-project accent overrides: `--accent-circle`, `--accent-grid`, `--accent-line`, `--accent-triangle` |
| "Tokyo's neon atmosphere" | Dark near-black canvas (`#0A0A0D`), electric accents, no warm/beige tones |
| "Manga-influenced 1-bit" | Pure black/white elements, 10 texture patterns, zero radius, 2px borders |
| "Abstract 1-bit animations" | 20+ keyframes with step timing for retro digital feel |
| "Dark theme for websites" | Dark-first: `--bg-void: #000000`, `--bg-base: #0A0A0D`; light is opt-in |

## Package Contents

```
7k-design-system/
├── DESIGN.md                    # Canonical design system documentation (809 lines)
├── SKILL.md                     # Agent-facing usage guide with surface mapping
├── colors_and_type.css          # Complete CSS token system (custom properties + component classes)
├── README.md                    # This file
├── package.json                 # npm package manifest
│
├── build/                       # Brand runtime assets (preserved originals)
│   ├── logo-7k.svg              # Star-burst pattern logo with magenta accents
│   ├── logo-7k-light.svg        # Black polygon variant for light backgrounds
│   └── icon.svg                 # App icon (208×207)
│
├── fonts/                       # Geist Pixel font files (preserved originals)
│   ├── GeistPixel-Square.ttf    # 400 weight · pairs with magenta (7K parent)
│   ├── GeistPixel-Circle.ttf    # 500 weight · pairs with cyan
│   ├── GeistPixel-Grid.ttf      # 600 weight · pairs with acid
│   ├── GeistPixel-Line.ttf      # 700 weight · pairs with ember
│   └── GeistPixel-Triangle.ttf  # 800 weight · pairs with solar
│
├── preview/                     # HTML review cards (see Preview Manifest below)
│   ├── colors-primary.html
│   ├── typography-specimens.html
│   ├── spacing-tokens.html
│   ├── components-buttons.html
│   ├── textures-backgrounds.html
│   └── brand-assets.html
│
├── examples/legacy/             # Legacy UI kit (deprecated)
│   └── ui_kits/app/             # Applied React interface kit
│   ├── index.html               # Runnable entry point (loads React 18 + CSS)
│   ├── README.md                # UI kit documentation
│   └── components/              # 11 modular React components (plain JS, no JSX)
│       ├── Icon7k.js
│       ├── Navbar.js
│       ├── HeroSection.js
│       ├── PhilosophySection.js
│       ├── ProjectsSection.js
│       ├── StatsSection.js
│       ├── InteractiveSection.js
│       ├── DataSection.js
│       ├── EffectsSection.js
│       ├── OverlaySection.js
│       ├── CtaSection.js
│       ├── FooterSection.js
│       └── ThemeToggle.js
│
└── dist/                        # Distribution build
    ├── 7k-design-system.css     # Self-contained CSS with working CDN font URLs
    ├── test-isolation.html      # Automated test page for external validation
    ├── fonts/                   # Copied Geist Pixel files for distribution
    ├── build/                   # Copied brand assets for distribution
    └── preview/                 # Copied preview cards for distribution
```

## Preview Manifest

Each preview card is a standalone HTML file that loads `../colors_and_type.css` and demonstrates a specific token group or component set. Open any card in a browser to inspect rendered values.

| Preview Card | Path | What It Demonstrates | Source-Backed Components |
|---|---|---|---|
| **Colors — Brand Primary** | `preview/colors-primary.html` | Magenta 11-step ramp, semantic brand tokens (`--brand-primary`, `--brand-primary-hover`, etc.), project accent overrides (`--accent-square` through `--accent-line`), neutral ramp, status colors | `colors_and_type.css` §Layer 1–2 color tokens; `DESIGN.md` §2 |
| **Typography Specimens** | `preview/typography-specimens.html` | Geist Sans display/body scale (`--text-display` through `--text-caption`), Geist Mono "connective tissue" labels, Geist Pixel 5 geometric variants with project pairings, weight scale (100–900) | `colors_and_type.css` §Typography; `DESIGN.md` §3; `fonts/` |
| **Spacing Tokens** | `preview/spacing-tokens.html` | 4px baseline grid (`--space-0` through `--space-32`), radius scale (`--radius-none` through `--radius-full`), shadow elevation (`--shadow-sm` through `--shadow-glow`), applied spacing examples | `colors_and_type.css` §Spacing; `DESIGN.md` §4 |
| **Buttons** | `preview/components-buttons.html` | Modern neon button system: primary, glow (magenta/cyan/grid), secondary, ghost, danger variants; sizes (sm/default/lg); icon buttons; button groups; split buttons; loading state; real product copy examples | `colors_and_type.css` §Button system; `DESIGN.md` §6a |
| **Textures & Backgrounds** | `preview/textures-backgrounds.html` | All 10 texture categories with density variants: scanline (slow/fast), halftone (sm/md/lg/accent), dot matrix (dense/standard/sparse), stripes (diagonal/horizontal/vertical, dense/negative), crosshatch (standard/dense), checkerboard (standard/one-bit), noise (standard/heavy), vignette (standard/sharp), separators, section composition examples | `colors_and_type.css` §Textures; `DESIGN.md` §1b |
| **Brand Assets** | `preview/brand-assets.html` | Logo variants (`build/logo-7k.svg`, `build/logo-7k-light.svg`, `build/icon.svg`) rendered at multiple sizes, brand application rules, contextual previews (scanline hero, manga section, brand fill, glow wordmark) | `build/` directory; `DESIGN.md` §8 (logo spec) |

## Quick Start

### Option 1: CDN (when published)

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/7k-design-system@latest/dist/7k-design-system.css">
```

### Option 2: Self-hosted

```html
<link rel="stylesheet" href="dist/7k-design-system.css">
```

Copy the `dist/` folder to your project. Geist Pixel fonts will load from `dist/fonts/`.

### Option 3: Source CSS

```html
<link rel="stylesheet" href="colors_and_type.css">
```

Requires self-hosting the `fonts/` directory for Geist Pixel variants.

## Reuse Workflow

### For Designers / Agents

1. **Read the source** — Open `DESIGN.md` §1 for visual theme and constraints, §8 for voice/tone, §9 for anti-patterns
2. **Bind tokens** — Import `colors_and_type.css` (or `dist/7k-design-system.css` for external use)
3. **Override accent** — For child projects, set the appropriate `--accent-*` token:
   ```css
   .project-neon { --accent-circle: var(--cyan-500); }
   .project-grid { --accent-grid: var(--acid-500); }
   ```
4. **Preview tokens** — Open relevant `preview/*.html` cards to verify token values render correctly
5. **Reference UI kit** — Study `ui_kits/app/components/` for composition patterns; copy components into your project
6. **Use build assets** — Reference `build/logo-7k.svg` (dark), `build/logo-7k-light.svg` (light), `build/icon.svg` (app)

### For Developers

1. **Install** — `npm install 7k-design-system` (when published)
2. **Import** — `import '7k-design-system/dist/7k-design-system.css'`
3. **Use tokens** — All CSS custom properties are available globally:
   ```css
   .my-component {
     background: var(--bg-elevated);
     color: var(--text-primary);
     border: 2px solid var(--border-default);
     font-family: var(--font-sans);
   }
   ```
4. **Apply textures** — Add classes like `.scanline`, `.halftone-md`, `.noise` to sections
5. **Use components** — Apply classes like `.btn-modern-primary`, `.badge-success`, `.input`

## File Structure Notes

- **`build/`** — Preserved original brand assets. These are the source-of-truth SVGs referenced by `DESIGN.md` and `preview/brand-assets.html`. Do not modify.
- **`fonts/`** — Preserved original Geist Pixel TTF files. These are loaded via `@font-face` in `colors_and_type.css`. The files are also copied to `dist/fonts/` for distribution.
- **`source_examples/`** — Preserved high-signal component snapshots from the original dashboard UI kit. `App.js` and `Sidebar.js` demonstrate the app-shell layout pattern with state management, project cards, and accent-colored navigation.
- **`ui_kits/app/`** — Applied interface kit demonstrating a complete company landing page. Components use plain React (`React.createElement`, no JSX) for zero-build-step compatibility. Each component exposes `window.ComponentName` for cross-file composition.

## Documentation

- **`DESIGN.md`** — Complete design system documentation (809 lines): visual theme, color system, typography, spacing, layout, components, motion, voice, anti-patterns
- **`SKILL.md`** — Agent-facing usage guide: surface mapping, token binding, accent overrides, preview card index, reuse workflow
- **`ui_kits/app/README.md`** — UI kit documentation: component index, run instructions, source basis, design notes, reuse workflow
- **`source_examples/README.md`** — Source examples documentation: component descriptions, dashboard patterns, usage instructions

## License

MIT
