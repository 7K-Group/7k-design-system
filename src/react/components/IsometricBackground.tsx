import type { IsometricBackgroundProps } from '../types';

const patternClassMap: Record<string, { static: string; animated: string }> = {
  grid: { static: 'iso-grid', animated: 'iso-grid-animated' },
  'grid-dense': { static: 'iso-grid-dense', animated: 'iso-grid-dense-animated' },
  cubes: { static: 'iso-cubes', animated: 'iso-cubes-animated' },
  terrain: { static: 'iso-terrain', animated: 'iso-terrain-animated' },
  pipes: { static: 'iso-pipes', animated: 'iso-pipes-animated' },
  hex: { static: 'iso-hex', animated: 'iso-hex-animated' },
  city: { static: 'iso-city', animated: 'iso-city-animated' },
  wave: { static: 'iso-wave', animated: 'iso-wave-animated' },
};

export function IsometricBackground({
  children,
  pattern = 'grid',
  animated = false,
  className = '',
  style,
}: IsometricBackgroundProps) {
  const mapping = patternClassMap[pattern] || patternClassMap.grid;
  const classes = [mapping.static, animated ? mapping.animated : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
}
