import type { BannerProps } from '../types';
export function Banner({
  tone,
  count,
  onDismiss,
  className = '',
  style,
  children,
  ...rest
}: BannerProps) {
  const toneClassMap: Record<string, string> = {
    success: 'banner-success',
    warning: 'banner-warning',
    danger: 'banner-error',
    error: 'banner-error',
  };
  const classes = ['banner', tone ? toneClassMap[tone] : '', className].filter(Boolean).join(' ');

  return (
    <div className={classes} style={style} {...rest}>
      {count !== undefined && <span className="banner-count">{count}</span>}
      {children}
      {onDismiss && (
        <button className="banner-dismiss" onClick={onDismiss} aria-label="Dismiss banner">
          ×
        </button>
      )}
    </div>
  );
}
