import { describe, it, expect } from 'vitest';
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

describe('CSS bundle', () => {
  const bundlePath = resolve(__dirname, '../dist/7k-design-system.css');

  it('exists after build', () => {
    expect(existsSync(bundlePath)).toBe(true);
  });

  it('contains required semantic tokens', () => {
    const css = readFileSync(bundlePath, 'utf-8');
    const required = [
      '--brand-primary:',
      '--brand-secondary:',
      '--bg-base:',
      '--bg-elevated:',
      '--text-primary:',
      '--text-secondary:',
      '--border-default:',
      '--font-sans:',
      '--font-mono:',
      '--radius-none:',
      '--space-4:',
    ];
    for (const token of required) {
      expect(css).toContain(token);
    }
  });

  it('has balanced braces', () => {
    const css = readFileSync(bundlePath, 'utf-8');
    const open = (css.match(/{/g) || []).length;
    const close = (css.match(/}/g) || []).length;
    expect(open).toBe(close);
    expect(open).toBeGreaterThan(0);
  });

  it('has a reasonable bundle size', () => {
    const data = readFileSync(bundlePath);
    const kb = data.length / 1024;
    expect(kb).toBeGreaterThan(50);
    expect(kb).toBeLessThan(500);
  });

  it('contains core component classes', () => {
    const css = readFileSync(bundlePath, 'utf-8');
    const classes = [
      '.btn-modern-primary',
      '.card',
      '.modal',
      '.drawer',
      '.toast',
      '.tooltip',
      '.alert',
      '.tabs',
      '.nav',
      '.input',
    ];
    for (const cls of classes) {
      expect(css).toContain(cls);
    }
  });

  it('contains texture and manga utilities', () => {
    const css = readFileSync(bundlePath, 'utf-8');
    expect(css).toContain('.scanline');
    expect(css).toContain('.halftone');
    expect(css).toContain('.panel');
    expect(css).toContain('.isometric-grid-animated');
  });
});
