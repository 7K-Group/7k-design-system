# Contributing to 7K Design System

Thank you for your interest in contributing! This document outlines the process for contributing to the 7K Design System.

## Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-org/7k-design-system.git
   cd 7k-design-system
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development**
   ```bash
   npm run dev
   ```

## Project Structure

```
7k-design-system/
├── src/                    # Source files
│   ├── css/               # Modular CSS files
│   ├── react/             # React UI kit components
│   └── tokens/            # Design tokens in JSON format
├── build/                 # Brand assets (SVGs)
├── fonts/                 # Geist Pixel font files
├── preview/               # HTML preview cards
├── dist/                  # Build output (generated)
└── tests/                 # Test files
```

## Workflow

### 1. Create a Branch

```bash
git checkout -b feat/your-feature-name
```

Branch naming conventions:
- `feat/` — New features
- `fix/` — Bug fixes
- `docs/` — Documentation changes
- `refactor/` — Code refactoring
- `test/` — Test additions/changes

### 2. Make Your Changes

- Follow the existing code style
- Use design tokens instead of hard-coded values
- Ensure accessibility standards are met
- Add or update tests as needed

### 3. Run Quality Checks

```bash
# Linting
npm run lint

# Type checking
npm run typecheck

# Tests
npm run test

# Build verification
npm run build
```

### 4. Commit

We use [Conventional Commits](https://www.conventionalcommits.org/):

```bash
git commit -m "feat: add new button variant"
git commit -m "fix: correct token value in dark theme"
git commit -m "docs: update installation instructions"
```

### 5. Submit a Pull Request

- Fill out the PR template
- Link related issues
- Ensure CI checks pass
- Request review from maintainers

## Design System Principles

When contributing, keep these principles in mind:

1. **Dark-first** — Default to dark theme; light mode is opt-in
2. **Token-driven** — Always use CSS custom properties; never hard-code values
3. **1-bit aesthetic** — Pure black/white elements, zero radius, 2px borders
4. **Accessibility** — Maintain WCAG 2.1 AA compliance minimum
5. **Performance** — Keep bundle size reasonable; prefer CSS over JS

## Code Style

- **CSS**: Follow BEM-like naming; use custom properties
- **TypeScript**: Strict mode enabled; explicit return types on public APIs
- **React**: Functional components with hooks; forward refs for component wrappers

## Testing

- Write tests for new components and utilities
- Run visual regression tests for UI changes
- Verify accessibility with axe-core

## Questions?

Open an issue or reach out to the maintainers.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
