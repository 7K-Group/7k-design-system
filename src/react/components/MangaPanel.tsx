import type { MangaPanelProps } from '../types';

const textureClassMap: Record<string, string> = {
  halftone: 'panel-halftone',
  scanline: 'panel-scanline',
  noise: 'panel-noise',
  texture: 'panel-textured',
};

export function MangaPanel({
  children,
  frame = false,
  invert = false,
  texture,
  speedLine = 'none',
  className = '',
  style,
}: MangaPanelProps) {
  const classes = [
    'panel',
    frame ? 'panel-frame' : '',
    invert ? 'panel-invert' : '',
    texture ? textureClassMap[texture] || textureClassMap.texture : '',
    speedLine === 'horizontal'
      ? 'speed-line-horizontal'
      : speedLine === 'radial'
        ? 'speed-line-radial'
        : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
}
