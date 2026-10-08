import { useTheme } from '../theme/useTheme';
import { Icon } from './Icon';

export interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className={`btn theme-toggle ${className}`}
      style={{
        width: 32,
        height: 32,
        padding: 0,
      }}
      title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      <Icon name={isDark ? 'sun' : 'moon'} size={14} />
    </button>
  );
}
