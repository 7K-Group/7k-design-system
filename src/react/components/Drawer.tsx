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
    const previousActiveElement = useRef<Element | null>(null);

    useEffect(() => {
      if (open) {
        previousActiveElement.current = document.activeElement;
        drawerRef.current?.focus();
        document.body.style.overflow = 'hidden';

        const handleKeyDown = (event: KeyboardEvent) => {
          if (event.key === 'Escape') {
            event.stopPropagation();
            onClose?.();
          }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => {
          document.removeEventListener('keydown', handleKeyDown);
          document.body.style.overflow = '';
          (previousActiveElement.current as HTMLElement)?.focus();
        };
      }
      return () => {
        document.body.style.overflow = '';
      };
    }, [open, onClose]);

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
          zIndex: 'var(--z-modal)',
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
