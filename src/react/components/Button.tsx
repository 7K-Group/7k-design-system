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
      texture,
      className = '',
      style,
      'aria-label': ariaLabel,
      'aria-describedby': ariaDescribedBy,
      ...rest
    },
    ref
  ) => {
    const sizeClassMap: Record<string, string> = {
      sm: 'btn-sm',
      lg: 'btn-lg',
      icon: 'btn-icon',
      'icon-lg': 'btn-lg-icon',
    };
    const variantClass = `btn-${variant}`;
    const textureClass = texture ? `btn-${texture}` : '';
    const classes = [
      'btn',
      variantClass,
      sizeClassMap[size] ?? '',
      textureClass,
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
