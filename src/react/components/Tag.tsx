import type { TagProps } from '../types';

export function Tag({ variant = 'solid', className = '', style, children }: TagProps) {
  const variantClass = variant === 'solid' ? '' : `tag-${variant}`;
  const classes = ['tag', variantClass, className].filter(Boolean).join(' ');

  return (
    <span className={classes} style={style}>
      {children}
    </span>
  );
}
