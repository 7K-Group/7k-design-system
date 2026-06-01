import { forwardRef } from 'react';
import type { BadgeProps } from '../types';

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ children, variant = 'default', className = '', style, ...rest }, ref) => {
    const variantClass = variant === 'default' ? '' : `badge-${variant}`;
    const classes = ['badge', variantClass, className].filter(Boolean).join(' ');

    return (
      <span ref={ref} className={classes} style={style} {...rest}>
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
