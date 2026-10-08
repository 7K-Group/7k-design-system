import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stat } from './Stat';
import { EmptyState } from './EmptyState';
import { DataTable } from './DataTable';
import { Button } from './Button';

const meta = {
  component: Stat,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Stat, EmptyState, and DataTable — data display primitives for dashboards.',
      },
    },
  },
  tags: ['ai-generated'],
} satisfies Meta<typeof Stat>;

export default meta;

type StatStory = StoryObj<typeof Stat>;

export const StatDefault: StatStory = {
  render: () => <Stat value="24" label="Clusters" />,
};

export const StatAccent: StatStory = {
  render: () => <Stat value="3" label="Pending approvals" accent />,
};

export const StatWithTrend: StatStory = {
  render: () => <Stat value="18" label="Resources" trend="+2 this week" />,
};

export const EmptyStateDefault: StoryObj<typeof EmptyState> = {
  render: () => (
    <EmptyState
      title="No clusters"
      body="Register a cluster to get started."
      action={<Button variant="accent">Register cluster</Button>}
    />
  ),
};

type Row = { id: string; name: string; status: string; version: string };

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'status', label: 'Status', mono: true, sortable: true },
  { key: 'version', label: 'Version', mono: true },
];

const rows: Row[] = [
  { id: '1', name: 'cluster-acme-1', status: 'healthy', version: 'v1.30.2' },
  { id: '2', name: 'cluster-acme-2', status: 'degraded', version: 'v1.29.4' },
];

export const DataTableDefault: StoryObj<typeof DataTable<Row>> = {
  render: () => <DataTable<Row> columns={columns} rows={rows} rowKey="id" />,
};

export const DataTableLoading: StoryObj<typeof DataTable<Row>> = {
  render: () => <DataTable<Row> columns={columns} rows={[]} rowKey="id" loading />,
};

export const DataTableEmpty: StoryObj<typeof DataTable<Row>> = {
  render: () => (
    <DataTable<Row> columns={columns} rows={[]} rowKey="id" empty={<EmptyState title="No clusters" />} />
  ),
};
