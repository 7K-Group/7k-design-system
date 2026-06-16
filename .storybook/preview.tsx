import type { Preview } from '@storybook/react-vite';
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import type { ReactRenderer } from '@storybook/react';
import { initialize, mswLoader } from 'msw-storybook-addon';
import { ThemeProvider } from '../src/react/theme/ThemeProvider';
import { mswHandlers } from './msw-handlers';
import '../src/css/index.css';

initialize({ onUnhandledRequest: 'bypass' });

const preview: Preview = {
  tags: ['autodocs'],
  decorators: [
    withThemeByDataAttribute<ReactRenderer>({
      themes: {
        dark: 'dark',
        light: 'light',
      },
      defaultTheme: 'dark',
      attributeName: 'data-theme',
    }),
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  loaders: [mswLoader],
  parameters: {
    msw: { handlers: mswHandlers },

    a11y: {
      test: 'todo',
    },
  },
  async beforeEach() {
    localStorage.setItem('7k-theme', 'dark');
  },
};

export default preview;
