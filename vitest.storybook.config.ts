import { defineConfig, mergeConfig } from 'vitest/config';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import viteReactConfig from './vite.react.config';

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default mergeConfig(
  viteReactConfig,
  defineConfig({
    plugins: [
      storybookTest({
        configDir: path.join(dirname, '.storybook'),
        storybookScript: 'npm run storybook -- --ci',
      }),
    ],
    test: {
      name: 'storybook',
      browser: {
        enabled: true,
        provider: playwright({}),
        headless: true,
        instances: [{ browser: 'chromium' }],
      },
      setupFiles: [],
    },
  })
);
