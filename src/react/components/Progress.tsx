import type { ProgressProps } from '../types';

export function Progress({
  value,
  max = 100,
  variant,
  className = '',
  style,
}: ProgressProps) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));
  const classes = ['progress', variant ? `progress-${variant}` : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
      className={classes}
      style={style}
    >
      <div className="progress-bar" style={{ width: `${pct}%` }} />
    </div>
  );
}
