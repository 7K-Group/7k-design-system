import { forwardRef } from 'react';
import type { AlertProps } from '../types';

const variantClassMap: Record<string, string> = {
  default: '',
  success: 'alert-success',
  warning: 'alert-warning',
  danger: 'alert-danger',
  info: 'alert-info',
};

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    { children, variant = 'default', onClose, role = 'alert', className = '', style, ...rest },
    ref
  ) => {
    const classes = ['alert', variantClassMap[variant], className].filter(Boolean).join(' ');

    return (
      <div ref={ref} className={classes} style={style} role={role} {...rest}>
        <span className="alert-content">{children}</span>
        {onClose && (
          <button className="alert-close" onClick={onClose} aria-label="Dismiss alert">
            ×
          </button>
        )}
      </div>
    );
  }
);
Alert.displayName = 'Alert';
