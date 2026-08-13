import { forwardRef } from 'react';
import type { ToastProps } from '../types';

const variantClassMap: Record<string, string> = {
  default: '',
  success: 'toast-success',
  error: 'toast-error',
  warning: 'toast-warning',
  info: 'toast-info',
};

const textureClassMap: Record<string, string> = {
  halftone: 'toast-halftone',
  texture: 'toast-textured',
};

export const Toast = forwardRef<HTMLDivElement, ToastProps>(
  (
    {
      children,
      variant = 'default',
      onDismiss,
      texture,
      role = 'status',
      className = '',
      style,
      ...rest
    },
    ref
  ) => {
    const classes = [
      'toast',
      variantClassMap[variant],
      texture ? textureClassMap[texture] || textureClassMap.texture : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div ref={ref} className={classes} style={style} role={role} {...rest}>
        <span className="toast-icon" aria-hidden="true" />
        <span className="toast-content">{children}</span>
        {onDismiss && (
          <button className="toast-dismiss" onClick={onDismiss} aria-label="Dismiss notification">
            ×
          </button>
        )}
      </div>
    );
  }
);
Toast.displayName = 'Toast';
