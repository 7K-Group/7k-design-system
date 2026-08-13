import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { ThemeToggle } from './ThemeToggle';

const meta = {
  component: ThemeToggle,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Button that toggles between dark and light themes.',
      },
    },
  },
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS class',
    },
  },
  tags: ['ai-generated'],
} satisfies Meta<typeof ThemeToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button');
    await expect(button).toHaveAttribute('aria-label', 'Switch to light theme');
  },
};
