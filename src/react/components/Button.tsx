import { forwardRef } from 'react';
import type { ButtonProps } from '../types';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      disabled = false,
      onClick,
      type = 'button',
      className = '',
      style,
      ...rest
    },
    ref
  ) => {
    const sizeClass = size === 'sm' ? 'btn-modern-sm' : size === 'lg' ? 'btn-modern-lg' : '';
    const variantClass = `btn-modern-${variant}`;
    const classes = ['btn-modern', variantClass, sizeClass, className].filter(Boolean).join(' ');

    return (
      <button
        ref={ref}
        type={type}
        className={classes}
        style={style}
        disabled={disabled}
        onClick={onClick}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
