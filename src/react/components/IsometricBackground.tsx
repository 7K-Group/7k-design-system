import type { IsometricBackgroundProps } from '../types';

const patternClassMap: Record<string, { static: string; animated: string }> = {
  grid: { static: 'isometric-grid', animated: 'isometric-grid-animated' },
  'grid-dense': { static: 'isometric-grid-dense', animated: 'isometric-grid-dense-animated' },
  cubes: { static: 'isometric-cubes', animated: 'isometric-cubes-animated' },
  terrain: { static: 'isometric-terrain', animated: 'isometric-terrain-animated' },
  pipes: { static: 'isometric-pipes', animated: 'isometric-pipes-animated' },
  hex: { static: 'isometric-hex', animated: 'isometric-hex-animated' },
  city: { static: 'isometric-city', animated: 'isometric-city-animated' },
  wave: { static: 'isometric-wave', animated: 'isometric-wave-animated' },
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
