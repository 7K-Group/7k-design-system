import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: false,
    cssCodeSplit: true,
    rollupOptions: {
      input: {
        '7k-design-system': resolve(__dirname, 'src/css/index.css'),
        tokens: resolve(__dirname, 'src/css/tokens.css'),
        components: resolve(__dirname, 'src/css/components.css'),
        textures: resolve(__dirname, 'src/css/textures.css'),
        animations: resolve(__dirname, 'src/css/animations.css'),
        projects: resolve(__dirname, 'src/css/projects.css'),
      },
      output: {
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name ?? '';
          if (info.endsWith('.css')) {
            return '[name].css';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
    lib: {
      entry: resolve(__dirname, 'src/css/index.css'),
      formats: ['es'],
    },
  },
  css: {
    postcss: resolve(__dirname, 'postcss.config.cjs'),
  },
});
