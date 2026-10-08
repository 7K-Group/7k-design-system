import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Stat, EmptyState, DataTable } from '../src/react';

describe('Stat', () => {
  it('renders value and label', () => {
    render(<Stat value="12" label="Clusters" />);
    expect(screen.getByText('12')).toHaveClass('stat-value');
    expect(screen.getByText('Clusters')).toHaveClass('stat-label');
  });

  it('applies accent class when accent is true', () => {
    const { container } = render(<Stat value="3" label="Pending" accent />);
    expect(container.firstChild).toHaveClass('stat-accent');
  });

  it('renders optional trend', () => {
    render(<Stat value="9" label="Resources" trend="+2" />);
    expect(screen.getByText('+2')).toBeInTheDocument();
  });
});

describe('EmptyState', () => {
  it('renders title, body and action', () => {
    render(
      <EmptyState title="No clusters" body="Register one to get started" action={<button>Register</button>} />
    );
    expect(screen.getByText('No clusters')).toBeInTheDocument();
    expect(screen.getByText('Register one to get started')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Register' })).toBeInTheDocument();
  });

  it('uses the .empty class', () => {
    const { container } = render(<EmptyState title="Empty" />);
    expect(container.firstChild).toHaveClass('empty');
  });
});

describe('DataTable', () => {
  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'status', label: 'Status', mono: true },
  ];
  const rows = [
    { id: '1', name: 'alpha', status: 'healthy' },
    { id: '2', name: 'beta', status: 'degraded' },
  ];

  it('renders rows and mono uppercase headers', () => {
    render(<DataTable columns={columns} rows={rows} rowKey="id" />);
    expect(screen.getByText('alpha')).toBeInTheDocument();
    expect(screen.getByText('beta')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
  });

  it('renders skeleton rows when loading', () => {
    const { container } = render(<DataTable columns={columns} rows={[]} rowKey="id" loading />);
    expect(container.querySelectorAll('.skeleton').length).toBeGreaterThan(0);
  });

  it('renders empty slot when no rows', () => {
    render(<DataTable columns={columns} rows={[]} rowKey="id" empty={<div>Nothing here</div>} />);
    expect(screen.getByText('Nothing here')).toBeInTheDocument();
  });

  it('calls onSort for sortable columns', () => {
    const onSort = vi.fn();
    const sortable = [{ key: 'name', label: 'Name', sortable: true }, columns[1]];
    render(<DataTable columns={sortable} rows={rows} rowKey="id" onSort={onSort} />);
    fireEvent.click(screen.getByRole('button', { name: /name/i }));
    expect(onSort).toHaveBeenCalledWith('name');
  });

  it('uses custom render for cells', () => {
    const cols = [{ key: 'name', label: 'Name', render: (row: { name: string }) => <strong>{row.name}</strong> }];
    render(<DataTable columns={cols} rows={rows} rowKey="id" />);
    expect(screen.getByText('alpha').tagName).toBe('STRONG');
  });
});
