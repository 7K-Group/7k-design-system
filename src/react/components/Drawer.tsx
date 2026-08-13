import { forwardRef, useEffect, useRef } from 'react';
import type { DrawerProps } from '../types';

const textureClassMap: Record<string, string> = {
  halftone: 'drawer-halftone',
  scanline: 'drawer-scanline',
  texture: 'drawer-textured',
};

export const Drawer = forwardRef<HTMLDivElement, DrawerProps>(
  (
    {
      children,
      open = false,
      onClose,
      side = 'right',
      texture,
      role = 'dialog',
      'aria-labelledby': ariaLabelledBy,
      className = '',
      style,
      ...rest
    },
    ref
  ) => {
    const drawerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      if (open) {
        drawerRef.current?.focus();
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
      return () => {
        document.body.style.overflow = '';
      };
    }, [open]);

    if (!open) return null;

    const classes = [
      'drawer',
      texture ? textureClassMap[texture] || textureClassMap.texture : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div
        className="drawer-backdrop"
        onClick={onClose}
        role="presentation"
        style={{
          position: 'fixed',
          inset: 0,
          display: 'flex',
          justifyContent: side === 'left' ? 'flex-start' : 'flex-end',
          background: 'rgba(0,0,0,0.7)',
          zIndex: 300,
        }}
      >
        <div
          ref={(node) => {
            drawerRef.current = node;
            if (typeof ref === 'function') ref(node);
            else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
          }}
          className={classes}
          style={style}
          role={role}
          aria-modal="true"
          aria-labelledby={ariaLabelledBy}
          tabIndex={-1}
          onClick={(e) => e.stopPropagation()}
          {...rest}
        >
          {children}
        </div>
      </div>
    );
  }
);
Drawer.displayName = 'Drawer';
