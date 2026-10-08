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
    const sizeClass = size === 'sm' ? 'btn-sm' : size === 'lg' ? 'btn-lg' : '';
    const variantClass = `btn-${variant}`;
    const classes = [
      'btn',
      variantClass,
      sizeClass,
      loading ? 'btn-loading' : '',
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
