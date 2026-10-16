import type { ColorSwatchProps } from '../types';
export function ColorSwatch({
  color,
  selected,
  onClick,
  className = '',
  style,
  ...rest
}: ColorSwatchProps) {
  const classes = ['color-swatch', selected ? 'selected' : '', className].filter(Boolean).join(' ');

  return (
    <button
      type="button"
      className={classes}
      style={{ background: color, ...style }}
      onClick={onClick}
      aria-pressed={selected}
      {...rest}
    />
  );
}
