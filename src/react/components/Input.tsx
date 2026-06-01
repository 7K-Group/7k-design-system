import { forwardRef } from 'react';
import type { InputProps } from '../types';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = 'text',
      placeholder,
      disabled = false,
      value,
      onChange,
      className = '',
      style,
      ...rest
    },
    ref
  ) => {
    const classes = ['input', className].filter(Boolean).join(' ');

    return (
      <input
        ref={ref}
        type={type}
        className={classes}
        style={style}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        {...rest}
      />
    );
  }
);

Input.displayName = 'Input';
