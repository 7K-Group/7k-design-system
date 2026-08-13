import { mkdirSync, cpSync, existsSync } from 'fs';

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

console.log('Assets copied to dist/');
