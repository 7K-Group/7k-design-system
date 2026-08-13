import { forwardRef } from 'react';
import type { RadioProps } from '../types';

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ label, className = '', style, checked, ...rest }, ref) => {
    const isSelected = Boolean(checked);
    const labelClasses = ['radio', isSelected ? 'selected' : '', className]
      .filter(Boolean)
      .join(' ');

    return (
      <label className={labelClasses} style={style}>
        <input ref={ref} type="radio" className="sr-only" checked={checked} {...rest} />
        <span className="radio-circle" aria-hidden="true" />
        {label && <span className="radio-text">{label}</span>}
      </label>
    );
  }
);
Radio.displayName = 'Radio';
