import { forwardRef } from 'react';
import type { ToggleProps } from '../types';

export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  ({ label, checked, onChange, className = '', style, ...rest }, ref) => {
    const isOn = Boolean(checked);
    const labelClasses = ['toggle', isOn ? 'on' : '', className].filter(Boolean).join(' ');

    return (
      <label className={labelClasses} style={style}>
        <input
          ref={ref}
          type="checkbox"
          role="switch"
          className="sr-only"
          checked={checked}
          onChange={(e) => onChange?.(e.target.checked)}
          {...rest}
        />
        <span className="toggle-track" aria-hidden="true">
          <span className="toggle-thumb" />
        </span>
        {label && <span className="toggle-text">{label}</span>}
      </label>
    );
  }
);
Toggle.displayName = 'Toggle';
