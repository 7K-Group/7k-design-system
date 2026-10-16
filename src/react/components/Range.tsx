import { forwardRef } from 'react';
import type { RangeProps } from '../types';

export const Range = forwardRef<HTMLInputElement, RangeProps>(
  ({ className = '', style, ...rest }, ref) => (
    <input ref={ref} type="range" className={`range ${className}`.trim()} style={style} {...rest} />
  )
);
Range.displayName = 'Range';
