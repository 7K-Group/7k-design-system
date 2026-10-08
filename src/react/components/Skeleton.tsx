import type { SkeletonProps } from '../types';

export function Skeleton({ width, height = 16, className = '', style }: SkeletonProps) {
  const classes = ['skeleton', className].filter(Boolean).join(' ');

  return (
    <span
      aria-hidden="true"
      className={classes}
      style={{ width, height, ...style }}
    />
  );
}
