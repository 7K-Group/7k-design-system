import type { TextureOverlayProps } from '../types';

const textureClassMap: Record<string, string> = {
  halftone: 'texture-halftone',
  scanline: 'texture-scanline',
  noise: 'texture-noise',
  crosshatch: 'texture-crosshatch',
  dots: 'texture-dots',
  'grid-dots': 'texture-grid-dots',
  texture: 'texture-overlay',
};

export function TextureOverlay({
  children,
  texture = 'halftone',
  opacity,
  animate = false,
  className = '',
  style,
}: TextureOverlayProps) {
  const resolvedTexture = texture === false || texture === null ? 'texture' : texture;
  const classes = [
    textureClassMap[resolvedTexture] || textureClassMap.texture,
    animate ? 'texture-animated' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={classes}
      style={{ ...style, ...(opacity !== undefined ? { '--texture-opacity': opacity } : {}) }}
    >
      {children}
    </div>
  );
}
