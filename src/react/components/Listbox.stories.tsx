import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Listbox } from './Listbox';

const options = [
  { value: 'dash', label: 'Dashboard' },
  { value: 'proj', label: 'Projects' },
  { value: 'ana', label: 'Analytics' },
  { value: 'set', label: 'Settings', disabled: true },
];

const meta = {
  component: Listbox,
  args: { options },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Styled select dropdown with keyboard navigation. Follows the active project accent.',
      },
    },
  },
  tags: ['ai-generated'],
} satisfies Meta<typeof Listbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => {
    const [value, setValue] = useState<string>();
    return (
      <div style={{ width: 280 }}>
        <Listbox options={options} value={value} onChange={setValue} />
      </div>
    );
  },
};

export const WithValue: Story = {
  args: {},
  render: () => {
    const [value, setValue] = useState('proj');
    return (
      <div style={{ width: 280 }}>
        <Listbox options={options} value={value} onChange={setValue} />
      </div>
    );
  },
};

export const Disabled: Story = {
  args: {},
  render: () => (
    <div style={{ width: 280 }}>
      <Listbox options={options} disabled placeholder="Disabled" />
    </div>
  ),
};
