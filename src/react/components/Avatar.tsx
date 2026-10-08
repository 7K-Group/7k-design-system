import type { AvatarProps } from '../types';

export function Avatar({
  src,
  alt = '',
  initials,
  size = 'md',
  circle = false,
  className = '',
  style,
}: AvatarProps) {
  const sizeClass = size === 'sm' ? 'avatar-sm' : size === 'lg' ? 'avatar-lg' : '';
  const classes = ['avatar', sizeClass, circle ? 'avatar-circle' : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={classes} style={style}>
      {src ? <img src={src} alt={alt} /> : (initials ?? alt.slice(0, 2))}
    </span>
  );
}
