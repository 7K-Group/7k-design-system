import type { StatProps } from '../types';

export function Stat({ value, label, trend, accent = false, status, className = '', style }: StatProps) {
  const classes = [
    'stat',
    accent ? 'stat-accent' : '',
    status ? `stat-${status}` : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} style={style}>
      <span className="stat-value">{value}</span>
      <span className="stat-label">{label}</span>
      {trend != null && <span className="stat-trend">{trend}</span>}
    </div>
  );
}
