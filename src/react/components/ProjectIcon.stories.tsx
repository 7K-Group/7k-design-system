import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProjectIcon } from './ProjectIcon';

const meta = {
  component: ProjectIcon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Stylized 7K icon for the active project. Resolves from the Project toolbar — one blob takes the project accent, strokes stay 7KGroup magenta.',
      },
    },
  },
  argTypes: {
    size: { control: { type: 'range', min: 16, max: 128, step: 8 } },
  },
  tags: ['ai-generated'],
} satisfies Meta<typeof ProjectIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { size: 96 },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      <ProjectIcon size={24} />
      <ProjectIcon size={48} />
      <ProjectIcon size={96} />
    </div>
  ),
};
