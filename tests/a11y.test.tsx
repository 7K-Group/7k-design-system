import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Button, Input, Badge, ThemeProvider, ThemeToggle, Stat, EmptyState, DataTable } from '../src/react';

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

describe('Accessibility - Stat', () => {
  it('has no accessibility violations', async () => {
    const results = await testA11y(<Stat value="12" label="Clusters" />);
    expect(results).toHaveNoViolations();
  });

  it('has no violations with trend and accent', async () => {
    const results = await testA11y(<Stat value="3" label="Pending" trend="+1" accent />);
    expect(results).toHaveNoViolations();
  });
});

describe('Accessibility - EmptyState', () => {
  it('has no accessibility violations', async () => {
    const results = await testA11y(
      <EmptyState title="No clusters" body="Register one to get started" />
    );
    expect(results).toHaveNoViolations();
  });

  it('has no violations with an action', async () => {
    const results = await testA11y(
      <EmptyState title="No clusters" action={<button>Register</button>} />
    );
    expect(results).toHaveNoViolations();
  });
});

describe('Accessibility - DataTable', () => {
  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'status', label: 'Status', mono: true, sortable: true },
  ];
  const rows = [
    { id: '1', name: 'alpha', status: 'healthy' },
    { id: '2', name: 'beta', status: 'degraded' },
  ];

  it('has no accessibility violations', async () => {
    const results = await testA11y(
      <DataTable columns={columns} rows={rows} rowKey="id" onSort={() => undefined} />
    );
    expect(results).toHaveNoViolations();
  });

  it('has no violations in loading state', async () => {
    const results = await testA11y(<DataTable columns={columns} rows={[]} rowKey="id" loading />);
    expect(results).toHaveNoViolations();
  });

  it('has no violations in empty state', async () => {
    const results = await testA11y(
      <DataTable columns={columns} rows={[]} rowKey="id" empty={<EmptyState title="No rows" />} />
    );
    expect(results).toHaveNoViolations();
  });
});
