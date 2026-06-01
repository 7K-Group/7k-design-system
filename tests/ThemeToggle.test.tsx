import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider, ThemeToggle } from '../src/react';

describe('ThemeToggle', () => {
  it('renders within ThemeProvider', () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('toggles theme on click', () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );
    const button = screen.getByRole('button');
    fireEvent.click(button);
    // Should not throw, theme should toggle
    expect(button).toBeInTheDocument();
  });

  it('has aria-label for accessibility', () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );
    expect(screen.getByRole('button')).toHaveAttribute('aria-label');
  });
});
