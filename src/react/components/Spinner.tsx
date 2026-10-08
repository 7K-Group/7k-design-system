import type { SpinnerProps } from '../types';

export function Spinner({ size = 'md', className = '', style }: SpinnerProps) {
  const sizeClass = size === 'sm' ? 'spinner-sm' : size === 'lg' ? 'spinner-lg' : '';
  const classes = ['spinner', sizeClass, className].filter(Boolean).join(' ');

  return <span role="status" aria-label="Loading" className={classes} style={style} />;
}
