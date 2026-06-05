# Consumer Guide — Building with 7K Design System

This guide shows you how to create a new website or application using the 7K Design System.

## Table of Contents

1. [Setup](#setup)
2. [CSS-Only Usage](#css-only-usage)
3. [React Usage](#react-usage)
4. [Project Customization](#project-customization)
5. [Best Practices](#best-practices)

---

## Setup

### 1. Create Your Project

```bash
# React + Vite (recommended)
npm create vite@latest my-project -- --template react-ts

# Next.js
npx create-next-app@latest my-project

# Or any framework you prefer
```

### 2. Install the Design System

```bash
# When published to npm
npm install 7k-design-system

# Or install from GitHub
npm install github:7K-Group/7k-design-system

# Or clone and link locally
git clone https://github.com/7K-Group/7k-design-system.git
cd 7k-design-system
npm link
cd ../my-project
npm link 7k-design-system
```

---

## CSS-Only Usage

Use this approach for static sites, vanilla JS projects, or when you want full control over markup.

### Import the Full CSS

```typescript
// main.tsx or main.js
import '7k-design-system/css';
```

### Import Modular CSS (Tree-shakeable)

```typescript
// Only tokens and base styles
import '7k-design-system/css/tokens';

// Add specific modules as needed
import '7k-design-system/css/components';
import '7k-design-system/css/textures';
import '7k-design-system/css/animations';
```

### Use Component Classes

```html
<!-- Buttons -->
<button class="btn-modern btn-modern-primary">Primary</button>
<button class="btn-modern btn-modern-secondary">Secondary</button>
<button class="btn-modern btn-modern-ghost">Ghost</button>

<!-- Forms -->
<input class="input" placeholder="Enter text" />
<textarea class="textarea" rows="4"></textarea>
<select class="select-native">
  <option>Option 1</option>
  <option>Option 2</option>
</select>

<!-- Badges -->
<span class="badge">Default</span>
<span class="badge badge-success">Success</span>
<span class="badge badge-danger">Danger</span>

<!-- Navigation -->
<nav style="display: flex; gap: 4px;">
  <a href="#" class="nav-item active">Home</a>
  <a href="#" class="nav-item">About</a>
  <a href="#" class="nav-item">Contact</a>
</nav>

<!-- Textures -->
<section class="scanline">
  <h1>Hero Section with Scanlines</h1>
</section>

<div class="halftone-md">
  <p>Manga screentone texture</p>
</div>
```

### Use Design Tokens

All CSS custom properties are available globally:

```css
.my-component {
  /* Colors */
  background: var(--bg-elevated);
  color: var(--text-primary);
  border: 2px solid var(--border-default);
  
  /* Typography */
  font-family: var(--font-sans);
  font-size: var(--text-body);
  line-height: var(--leading-normal);
  
  /* Spacing */
  padding: var(--space-4);
  gap: var(--space-2);
  
  /* Brand accent */
  border-color: var(--brand-primary);
}
```

---

## React Usage

Use this approach for React applications. Components are thin wrappers around CSS classes with proper TypeScript support.

### 1. Wrap Your App with ThemeProvider

```tsx
// App.tsx
import { ThemeProvider } from '7k-design-system/react';
import '7k-design-system/css';

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <YourApp />
    </ThemeProvider>
  );
}
```

### 2. Use Components

```tsx
// pages/Home.tsx
import { Button, Input, Badge, ThemeToggle } from '7k-design-system/react';

function Home() {
  return (
    <div style={{ padding: '24px' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 className="display">Welcome</h1>
        <ThemeToggle />
      </header>

      <section style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
        <Button variant="primary">Get Started</Button>
        <Button variant="secondary">Learn More</Button>
        <Button variant="ghost">Documentation</Button>
      </section>

      <section style={{ marginTop: '24px', maxWidth: '400px' }}>
        <Input placeholder="Enter your email" type="email" />
      </section>

      <section style={{ display: 'flex', gap: '8px', marginTop: '24px' }}>
        <Badge>Draft</Badge>
        <Badge variant="success">Published</Badge>
        <Badge variant="warning">Review</Badge>
      </section>
    </div>
  );
}
```

### 3. Use the Theme Hook

```tsx
import { useTheme } from '7k-design-system/react';

function ThemeAwareComponent() {
  const { theme, toggleTheme, setTheme } = useTheme();
  
  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle</button>
      <button onClick={() => setTheme('dark')}>Force Dark</button>
      <button onClick={() => setTheme('light')}>Force Light</button>
    </div>
  );
}
```

### 4. Component Props Reference

#### Button

```tsx
<Button
  variant="primary"    // 'primary' | 'secondary' | 'ghost' | 'glow' | 'glow-cyan' | 'glow-grid' | 'danger'
  size="md"            // 'sm' | 'md' | 'lg'
  disabled={false}
  onClick={() => {}}
  type="button"        // 'button' | 'submit' | 'reset'
>
  Click me
</Button>
```

#### Input

```tsx
<Input
  type="text"          // any HTML input type
  placeholder="Hint"
  disabled={false}
  value={value}
  onChange={(value) => setValue(value)}
/>
```

#### Badge

```tsx
<Badge
  variant="default"    // 'default' | 'success' | 'warning' | 'danger' | 'info' | 'neutral'
>
  Status
</Badge>
```

---

## Project Customization

Each 7K sub-project can override the accent color while keeping the same base design.

### Override Accent Colors

```css
/* project-neon.css */
.project-neon {
  /* Circle project — cyan accent */
  --accent-circle: var(--cyan-500);
}

/* project-grid.css */
.project-grid {
  /* Grid project — acid green accent */
  --accent-grid: var(--acid-500);
}

/* project-ember.css */
.project-ember {
  /* Line project — orange accent */
  --accent-line: var(--ember-500);
}
```

### Apply to Root Element

```tsx
// App.tsx
function App() {
  return (
    <ThemeProvider>
      <div className="project-neon">
        <YourApp />
      </div>
    </ThemeProvider>
  );
}
```

### Custom Component Styles

```css
/* Always use tokens, never hard-code */
.my-hero {
  background: var(--bg-base);
  color: var(--text-primary);
  border: 2px solid var(--border-default);
  padding: var(--space-8);
}

.my-hero-accent {
  /* Use project accent */
  border-color: var(--accent-circle);
  box-shadow: 0 0 20px color-mix(in srgb, var(--accent-circle) 25%, transparent);
}
```

---

## Best Practices

### DO

- **Use tokens** — Always reference `var(--*)` instead of hard-coding colors
- **Import once** — Import CSS at your app entry point, not in every component
- **Use ThemeProvider** — Wrap your app to enable theme switching
- **Apply textures sparingly** — One texture per section, don't nest them
- **Use mono labels** — Add `.mono-label` class to section headers for the blueprint aesthetic

```tsx
<section>
  <span className="mono-label">FEATURES</span>
  <h2>What We Build</h2>
</section>
```

### DON'T

- **Don't hard-code colors** — Avoid hex values; use design tokens
- **Don't import CSS in components** — Import once at app level
- **Don't mix textures** — Don't put `.scanline` inside `.halftone`
- **Don't override component internals** — Style via props or wrapper classes
- **Don't forget data-theme** — Light mode requires `data-theme="light"` on <html>

### File Structure for a New Project

```
my-project/
├── src/
│   ├── main.tsx              # Import design system CSS here
│   ├── App.tsx               # ThemeProvider wrapper
│   ├── components/           # Your app components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   └── Footer.tsx
│   ├── pages/                # Page components
│   │   ├── Home.tsx
│   │   └── About.tsx
│   └── styles/
│       └── project-neon.css  # Project-specific overrides
├── public/
│   └── fonts/                # If self-hosting Geist Pixel
├── index.html
└── package.json
```

### Example: Complete Landing Page

```tsx
// src/pages/Home.tsx
import { Button, ThemeToggle } from '7k-design-system/react';

export function Home() {
  return (
    <div className="project-neon">
      <nav style={{ 
        position: 'sticky', 
        top: 0, 
        display: 'flex', 
        justifyContent: 'space-between',
        padding: '12px 24px',
        background: 'var(--bg-base)',
        borderBottom: '2px solid var(--border-default)'
      }}>
        <span className="mono-label">7K GROUP</span>
        <ThemeToggle />
      </nav>

      <section 
        className="scanline" 
        style={{ 
          minHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: 'var(--space-8)'
        }}
      >
        <span className="mono-label" style={{ color: 'var(--brand-primary)' }}>
          EST. 2024
        </span>
        <h1 className="display" style={{ marginTop: 'var(--space-4)' }}>
          Built for Midnight
        </h1>
        <p className="body-lg" style={{ maxWidth: '600px', marginTop: 'var(--space-4)' }}>
          A multi-project technology company crafting infrastructure, 
          AI pipelines, and digital products.
        </p>
        <div style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-6)' }}>
          <Button variant="glow">Explore Projects</Button>
          <Button variant="secondary">View Docs</Button>
        </div>
      </section>

      <section 
        className="halftone-md"
        style={{ padding: 'var(--space-8)' }}
      >
        <span className="mono-label">PHILOSOPHY</span>
        <h2 className="h2">Dark First</h2>
        <p className="body">
          We design for the dark. Light mode is opt-in, not default.
        </p>
      </section>
    </div>
  );
}
```

---

## Troubleshooting

### Fonts not loading?

Make sure Geist Sans/Mono CDN is accessible or self-host them:

```bash
npm install geist
```

```typescript
import 'geist/font/sans.css';
import 'geist/font/mono.css';
```

### Light mode not working?

Ensure `data-theme="light"` is set on the root element. The ThemeProvider handles this automatically.

### CSS classes not applying?

Check that you're importing the CSS:

```typescript
import '7k-design-system/css';
```

### TypeScript errors?

Make sure your `tsconfig.json` includes:

```json
{
  "compilerOptions": {
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  }
}
```

---

## Next Steps

1. Run `npm run storybook` in the design system repo to explore all components
2. Open `preview/*.html` files to see token values rendered
3. Read `DESIGN.md` for detailed design principles and constraints
4. Check `CONTRIBUTING.md` if you want to contribute back
