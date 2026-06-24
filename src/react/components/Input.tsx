import { forwardRef, useId } from 'react';
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
      id: idProp,
      label,
      error,
      'aria-describedby': ariaDescribedByProp,
      ...rest
    },
    ref
  ) => {
    const generatedId = useId();
    const id = idProp ?? generatedId;
    const errorId = error ? `${id}-error` : undefined;
    const ariaDescribedBy = [ariaDescribedByProp, errorId].filter(Boolean).join(' ') || undefined;
    const classes = ['input', className].filter(Boolean).join(' ');

    return (
      <div className="form-group" style={style}>
        {label && (
          <label htmlFor={id} className="form-label">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          type={type}
          className={classes}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          aria-invalid={error ? true : undefined}
          aria-describedby={ariaDescribedBy}
          {...rest}
        />
        {error && (
          <span id={errorId} className="field-error" role="alert">
            {error}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
