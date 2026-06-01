import { readFileSync, writeFileSync } from 'fs';

const files = [
  'src/css/components.css',
  'src/css/textures.css',
  'src/css/isometric.css',
  'src/css/themes.css',
  'src/css/base.css',
];

// More comprehensive replacements - order matters!
const replacements = [
  // Alpha hex variants FIRST (before bare hex)
  { pattern: /#FFFFFF20/g, replacement: 'rgba(255, 255, 255, 0.12)' },
  { pattern: /#FFFFFF15/g, replacement: 'rgba(255, 255, 255, 0.08)' },
  { pattern: /#FFFFFF0A/g, replacement: 'rgba(255, 255, 255, 0.04)' },
  { pattern: /#FFFFFF30/g, replacement: 'rgba(255, 255, 255, 0.19)' },
  { pattern: /#FFFFFF40/g, replacement: 'rgba(255, 255, 255, 0.25)' },
  { pattern: /#FFFFFF60/g, replacement: 'rgba(255, 255, 255, 0.38)' },
  { pattern: /#FFFFFF80/g, replacement: 'rgba(255, 255, 255, 0.50)' },
  
  { pattern: /#00000020/g, replacement: 'rgba(0, 0, 0, 0.12)' },
  
  // Then bare colors
  { pattern: /#FFFFFF/g, replacement: 'var(--onebit-white)' },
  { pattern: /#000000/g, replacement: 'var(--onebit-black)' },
];

for (const file of files) {
  let content = readFileSync(file, 'utf-8');
  let changed = false;
  
  for (const { pattern, replacement } of replacements) {
    if (pattern.test(content)) {
      content = content.replace(pattern, replacement);
      changed = true;
    }
  }
  
  if (changed) {
    writeFileSync(file, content, 'utf-8');
    console.log(`Fixed hard-coded colors in ${file}`);
  }
}
