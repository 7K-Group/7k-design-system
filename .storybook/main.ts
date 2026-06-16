import type { StorybookConfig } from '@storybook/react-vite';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const mdxReactShim = require.resolve('@storybook/addon-docs/mdx-react-shim');

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-vitest',
    '@storybook/addon-mcp',
    '@storybook/addon-themes',
  ],
  framework: '@storybook/react-vite',
  staticDirs: ['../public'],
  viteFinal: async (config) => {
    config.resolve = config.resolve ?? {};
    config.resolve.alias = {
      ...config.resolve.alias,
      '@storybook/addon-docs/mdx-react-shim': mdxReactShim,
      '@storybook/blocks': require.resolve('@storybook/addon-docs/blocks'),
    };
    config.build = config.build ?? {};
    config.build.rollupOptions = config.build.rollupOptions ?? {};
    config.build.rollupOptions.external = [
      ...(Array.isArray(config.build.rollupOptions.external)
        ? config.build.rollupOptions.external
        : []),
      '@storybook/addon-docs/mdx-react-shim',
    ];
    return config;
  },
};

export default config;
