import { forwardRef } from 'react';
import type { CheckboxProps } from '../types';

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, indeterminate = false, className = '', style, checked, ...rest }, ref) => {
    const isChecked = Boolean(checked);
    const labelClasses = ['checkbox', isChecked ? 'checked' : '', className]
      .filter(Boolean)
      .join(' ');

    return (
      <label className={labelClasses} style={style}>
        <input
          ref={(node) => {
            if (node) node.indeterminate = indeterminate;
            if (typeof ref === 'function') ref(node);
          }}
          type="checkbox"
          className="sr-only"
          checked={checked}
          {...rest}
        />
        <span className="checkbox-box" aria-hidden="true" />
        {label && <span className="checkbox-text">{label}</span>}
      </label>
    );
  }
);
Checkbox.displayName = 'Checkbox';
