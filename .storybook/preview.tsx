import type { Preview } from '@storybook/react-vite';
import '../src/css/index.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'error',
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: true,
          },
        ],
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#0A0A0D',
        },
        {
          name: 'light',
          value: '#FAFAFB',
        },
        {
          name: 'black',
          value: '#000000',
        },
      ],
    },
    chromatic: {
      modes: {
        dark: {
          backgrounds: { value: '#0A0A0D' },
          theme: 'dark',
        },
        light: {
          backgrounds: { value: '#FAFAFB' },
          theme: 'light',
        },
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '24px' }}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
