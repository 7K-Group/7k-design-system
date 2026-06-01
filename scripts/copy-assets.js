import { copyFileSync, mkdirSync, cpSync, existsSync } from 'fs';
import { dirname } from 'path';

function ensureDir(dir) {
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
}

// Copy fonts
ensureDir('dist/fonts');
cpSync('fonts', 'dist/fonts', { recursive: true, force: true });

// Copy build assets
ensureDir('dist/build');
cpSync('build', 'dist/build', { recursive: true, force: true });

// Copy preview files
ensureDir('dist/preview');
cpSync('preview', 'dist/preview', { recursive: true, force: true });

console.log('Assets copied to dist/');
