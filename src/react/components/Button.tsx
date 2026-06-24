import { forwardRef } from 'react';
import type { ButtonProps } from '../types';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      disabled = false,
      loading = false,
      onClick,
      type = 'button',
      className = '',
      style,
      'aria-label': ariaLabel,
      'aria-describedby': ariaDescribedBy,
      ...rest
    },
    ref
  ) => {
    const sizeClass = size === 'sm' ? 'btn-modern-sm' : size === 'lg' ? 'btn-modern-lg' : '';
    const variantClass = `btn-modern-${variant}`;
    const classes = [
      'btn-modern',
      variantClass,
      sizeClass,
      loading ? 'btn-modern-loading' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button
        ref={ref}
        type={type}
        className={classes}
        style={style}
        disabled={disabled || loading}
        onClick={onClick}
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedBy}
        aria-busy={loading || undefined}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
