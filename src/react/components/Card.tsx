import { forwardRef } from 'react';
import type { CardProps } from '../types';

const textureClassMap: Record<string, string> = {
  halftone: 'card-halftone',
  scanline: 'card-scanline',
  noise: 'card-noise',
  crosshatch: 'card-crosshatch',
  dots: 'card-dots',
  texture: 'card-textured',
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, texture, hover = true, className = '', style, ...rest }, ref) => {
    const classes = [
      'card',
      texture ? textureClassMap[texture] || textureClassMap.texture : '',
      hover ? '' : 'card-static',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div ref={ref} className={classes} style={style} {...rest}>
        {children}
      </div>
    );
  }
);
Card.displayName = 'Card';

export const CardHeader = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className = '', style, ...rest }, ref) => (
    <div ref={ref} className={`card-header ${className}`} style={style} {...rest}>
      {children}
    </div>
  )
);
CardHeader.displayName = 'CardHeader';

export const CardBody = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className = '', style, ...rest }, ref) => (
    <div ref={ref} className={`card-body ${className}`} style={style} {...rest}>
      {children}
    </div>
  )
);
CardBody.displayName = 'CardBody';
