import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Button, Input, Badge, ThemeProvider, ThemeToggle } from '../src/react';

expect.extend(toHaveNoViolations);

// Helper to run axe on a rendered component
async function testA11y(ui: React.ReactElement) {
  const { container } = render(ui);
  const results = await axe(container);
  return results;
}

describe('Accessibility - Button', () => {
  it('has no accessibility violations', async () => {
    const results = await testA11y(<Button>Click me</Button>);
    expect(results).toHaveNoViolations();
  });

  it('has no violations when disabled', async () => {
    const results = await testA11y(<Button disabled>Disabled</Button>);
    expect(results).toHaveNoViolations();
  });
});

describe('Accessibility - Input', () => {
  it('has no accessibility violations', async () => {
    const results = await testA11y(<Input placeholder="Enter text" />);
    expect(results).toHaveNoViolations();
  });

  it('has no violations when disabled', async () => {
    const results = await testA11y(<Input disabled placeholder="Disabled" />);
    expect(results).toHaveNoViolations();
  });
});

describe('Accessibility - Badge', () => {
  it('has no accessibility violations', async () => {
    const results = await testA11y(<Badge>Status</Badge>);
    expect(results).toHaveNoViolations();
  });

  it('has no violations with all variants', async () => {
    const results = await testA11y(
      <>
        <Badge>Default</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="danger">Danger</Badge>
      </>
    );
    expect(results).toHaveNoViolations();
  });
});

describe('Accessibility - ThemeToggle', () => {
  it('has no accessibility violations', async () => {
    const results = await testA11y(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );
    expect(results).toHaveNoViolations();
  });
});
