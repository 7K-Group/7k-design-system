# 7k-design-system

> Dark-first, neon-accented, manga-inflected design system for multi-project tech company 7K.
> Built for midnight. Three-font system. Major neon #FF0FF. Secondary neon cyan (thematic per project). Background textures on components. Manga panels. Isometric animations.

## Product Overview

**7k-design-system** is a dark-first dual-theme design system created for 7K, a technology holding company with multiple sub-projects. The system embodies a Tokyo neon atmosphere — high contrast, nocturnal canvas, electric accents — combined with manga-influenced 1-bit visual language using pure black and white textures.

**Source product:** 7K is a technology holding company that builds infrastructure, AI pipelines, and digital products across multiple sub-projects. This design system serves as the visual foundation for 7K and all its child projects, providing a unified design language that differentiates sub-projects through accent color overrides while maintaining consistent typography, spacing, component patterns, and animation systems across all surfaces.

### Primary Surfaces

The design system supports five primary surfaces:

| Surface                 | Description                                                              | Key Files                                                              |
| ----------------------- | ------------------------------------------------------------------------ | ---------------------------------------------------------------------- |
| **Company Website**     | Dark landing pages with scanline heroes, project showcases, stats grids  | `DESIGN.md` §1–5, `src/stories/Components.stories.tsx`                 |
| **Product Dashboard**   | Data-dense admin interfaces with sidebar nav, tables, status cards       | `src/react/components/`, `src/stories/Components.stories.tsx`          |
| **Sub-project Landing** | Child project pages with accent hue overrides (cyan, acid, ember, solar) | `DESIGN.md` §2 (accent tokens), `src/css/projects.css`                 |
| **Internal Tools**      | CLI-like interfaces, monitoring panels, resource dashboards              | `DESIGN.md` §3 (mono labels), `src/stories/Tokens.mdx`                 |
| **Mobile App**          | Responsive adaptations with bottom tab nav, touch-friendly targets       | `DESIGN.md` §5 (responsive grid), `src/stories/Components.stories.tsx` |

### Core Capabilities

The system provides these core capabilities:

- **Dark-first theming** with opt-in light mode via `data-theme="light"`
- **Major neon accent** (#FF0FF magenta) + **secondary neon accent** (cyan by default, thematic per project)
- **Three-font system**: Geist Sans (display/body), Geist Mono (labels/code), Geist Pixel (5 geometric variants for ornamental use)
- **Texture categories**: scanline, halftone, dot matrix, stripes, crosshatch, checkerboard, noise, vignette, isometric, manga panels
- **40+ 1-bit components**: zero-radius, 2px white borders, invert-on-hover, thin accent modifiers
- **Textured component variants**: halftone, scanline, noise, dots, crosshatch on cards, panels, modals, drawers, toasts, buttons
- **20+ animations**: ambient (scanline scroll, CRT flicker, neon pulse) and trigger (glitch, pixel-dots, invert-flash)
- **Isometric geometry animations**: combined animated background classes (`.isometric-grid-animated`, etc.)
- **Engineering-blueprint aesthetic**: mono labels as "connective tissue" throughout all surfaces
- **React UI kit**: 20+ TypeScript components wrapping the CSS system

## Source & Context References

Every design rule is grounded in the original brand brief (quoted inline in `DESIGN.md`):

| Evidence from Brief                    | Design Rule                                                                                  |
| -------------------------------------- | -------------------------------------------------------------------------------------------- |
| "We only have 1 font and it's Geist"   | Three-font system: Geist Sans + Geist Mono + Geist Pixel (5 variants)                        |
| "Our logo is just '7K'"                | Star-burst pattern SVG logo with #FF0FF accent tones                                         |
| "Our main brand color is #FF0FF"       | Major magenta accent; cyan secondary (thematic per project)                                  |
| "Tech company with different projects" | Sub-project accent overrides via `--brand-secondary` and `--accent-*` tokens                 |
| "Tokyo's neon atmosphere"              | Dark near-black canvas (`#0A0A0D`), electric accents, no warm/beige tones                    |
| "Manga-influenced 1-bit"               | Pure black/white elements, texture patterns, manga panel utilities, zero radius, 2px borders |
| "Abstract 1-bit animations"            | 20+ keyframes with step timing for retro digital feel                                        |
| "Dark theme for websites"              | Dark-first: `--bg-void: #000000`, `--bg-base: #0A0A0D`; light is opt-in                      |

## Package Contents

```
7k-design-system/
├── DESIGN.md                    # Canonical design system documentation
├── SKILL.md                     # Agent-facing usage guide with surface mapping
├── CONSUMER_GUIDE.md            # End-user integration guide
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
├── src/                         # Source code
│   ├── css/                     # Modular CSS source files
│   └── react/                   # TypeScript React UI kit
│
├── tests/                       # Vitest test suite
├── src/stories/                 # Storybook documentation
│
├── examples/legacy/             # Legacy UI kit (deprecated)
│   └── ui_kits/app/             # Applied React interface kit
│
└── dist/                        # Distribution build
    ├── 7k-design-system.css     # Self-contained CSS bundle
    ├── tokens.css               # Standalone tokens
    ├── components.css           # Standalone components
    ├── textures.css             # Standalone textures
    ├── animations.css           # Standalone animations
    ├── projects.css             # Standalone project overrides
    ├── fonts/                   # Copied Geist Pixel files for distribution
    └── build/                   # Copied brand assets for distribution
```

## Storybook

Run Storybook to preview components, textures, tokens, and themes interactively.

```bash
npm run storybook       # Dev server at http://localhost:6006
npm run build-storybook # Static build for deployment
```

| Story                | Path                                  | What It Demonstrates                                                                                                                                                                    | Source-Backed Components                                 |
| -------------------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| **Colors & Tokens**  | `src/stories/Tokens.mdx`              | Magenta/cyan brand ramps, semantic brand tokens, neutral/status colors, typography scale, spacing, radii, shadows                                                                       | `src/css/tokens.css`; `DESIGN.md` §2–4                   |
| **Components**       | `src/stories/Components.stories.tsx`  | Modern neon button system (primary, glow, secondary, ghost, danger), cards, modals, drawers, toasts, tooltips, alerts, tabs, nav, inputs, toggles, selects, textareas, texture overlays | `src/react/components/`; `src/css/components.css`        |
| **Textures**         | `src/stories/Textures.stories.tsx`    | All texture categories with density variants: scanline, halftone, dot matrix, stripes, crosshatch, checkerboard, noise, vignette, separators, manga panels                              | `src/css/textures.css`; `src/css/manga.css`; `DESIGN.md` |
| **Icons & Logos**    | `src/stories/Icons.stories.tsx`       | Curated icon set, logo variants, brand application rules, contextual previews                                                                                                           | `build/` directory; `src/react/components/Icon.tsx`      |
| **Theme / Projects** | `src/stories/ThemeToggle.stories.tsx` | Light/dark/system theme switching and project accent overrides                                                                                                                          | `src/react/theme/`; `src/css/projects.css`               |
| **Overview**         | `src/stories/Overview.mdx`            | Design principles, voice/tone, anti-patterns, reuse workflow                                                                                                                            | `DESIGN.md`; `SKILL.md`; `CONSUMER_GUIDE.md`             |

## Quick Start

### Option 1: CDN (when published)

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/7k-design-system@latest/dist/7k-design-system.css"
/>
```

### Option 2: Self-hosted

```html
<link rel="stylesheet" href="dist/7k-design-system.css" />
```

Copy the `dist/` folder to your project. Geist Pixel fonts will load from `dist/fonts/`.

### Option 3: Source CSS

```html
<link rel="stylesheet" href="colors_and_type.css" />
```

Requires self-hosting the `fonts/` directory for Geist Pixel variants.

## Reuse Workflow

### For Designers / Agents

1. **Read the source** — Open `DESIGN.md` §1 for visual theme and constraints, §8 for voice/tone, §9 for anti-patterns
2. **Bind tokens** — Import `colors_and_type.css` (or `dist/7k-design-system.css` for external use)
3. **Override accent** — For child projects, set the appropriate `--accent-*` token:
   ```css
   .project-neon {
     --accent-circle: var(--cyan-500);
   }
   .project-grid {
     --accent-grid: var(--acid-500);
   }
   ```
4. **Preview tokens** — Run `npm run storybook` and open the Colors, Tokens, Textures, and Components stories to verify values render correctly
5. **Reference UI kit** — Study `examples/legacy/ui_kits/app/components/` for composition patterns; copy React components from `src/react/components/` into your project
6. **Use build assets** — Reference `build/logos/logo-7k.svg` (dark), `build/logos/logo-7k-light.svg` (light), `build/icons/icon.svg` (app)

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

- **`build/`** — Preserved original brand assets. These are the source-of-truth SVGs referenced by `DESIGN.md` and Storybook. Do not modify.
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
