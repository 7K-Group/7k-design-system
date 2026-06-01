import { useTheme } from '../theme/useTheme';

export interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className={`btn-modern btn-modern-ghost btn-modern-icon ${className}`}
      style={{
        width: 32,
        height: 32,
        fontSize: 12,
        padding: 0,
        border: '1px solid var(--border-default)',
        borderRadius: 0,
      }}
      title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {isDark ? '☀' : '☾'}
    </button>
  );
}
