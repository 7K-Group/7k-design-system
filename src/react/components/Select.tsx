import { forwardRef } from 'react';
import type { SelectProps, TextareaProps } from '../types';

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ children, className = '', style, ...rest }, ref) => (
    <select ref={ref} className={`select-native ${className}`} style={style} {...rest}>
      {children}
    </select>
  )
);
Select.displayName = 'Select';

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = '', style, ...rest }, ref) => (
    <textarea ref={ref} className={`textarea ${className}`} style={style} {...rest} />
  )
);
Textarea.displayName = 'Textarea';
