import type { Meta, StoryObj } from '@storybook/react-vite';
import { Spinner } from './Spinner';
import { Skeleton } from './Skeleton';
import { Avatar } from './Avatar';
import { Progress } from './Progress';

const meta = {
  title: 'React/Components/Feedback',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Loading and identity primitives: Spinner, Skeleton, Avatar, Progress.',
      },
    },
  },
  tags: ['ai-generated'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Spinners: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      <Spinner size="sm" />
      <Spinner />
      <Spinner size="lg" />
    </div>
  ),
};

export const Skeletons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 320 }}>
      <Skeleton height={16} />
      <Skeleton height={16} width="70%" />
      <Skeleton height={64} />
    </div>
  ),
};

export const Avatars: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <Avatar size="sm" initials="7K" />
      <Avatar initials="NK" />
      <Avatar size="lg" initials="AI" circle />
    </div>
  ),
};

export const ProgressBars: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 320 }}>
      <Progress value={60} />
      <Progress value={35} variant="accent" />
      <Progress value={80} variant="danger" />
    </div>
  ),
};
