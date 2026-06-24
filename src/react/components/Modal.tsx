import { forwardRef, useEffect, useRef } from 'react';
import type { ModalProps } from '../types';

const textureClassMap: Record<string, string> = {
  halftone: 'modal-halftone',
  scanline: 'modal-scanline',
  noise: 'modal-noise',
  texture: 'modal-textured',
};

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      children,
      open = false,
      onClose,
      texture,
      role = 'dialog',
      'aria-labelledby': ariaLabelledBy,
      'aria-describedby': ariaDescribedBy,
      className = '',
      style,
      ...rest
    },
    ref
  ) => {
    const modalRef = useRef<HTMLDivElement | null>(null);
    const previousActiveElement = useRef<Element | null>(null);

    useEffect(() => {
      if (open) {
        previousActiveElement.current = document.activeElement;
        modalRef.current?.focus();
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
        (previousActiveElement.current as HTMLElement)?.focus();
      }
      return () => {
        document.body.style.overflow = '';
      };
    }, [open]);

    if (!open) return null;

    const classes = [
      'modal',
      texture ? textureClassMap[texture] || textureClassMap.texture : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div
        className="modal-backdrop"
        onClick={onClose}
        role="presentation"
        style={{
          position: 'fixed',
          inset: 0,
          display: 'grid',
          placeItems: 'center',
          background: 'rgba(0,0,0,0.7)',
          zIndex: 300,
        }}
      >
        <div
          ref={(node) => {
            modalRef.current = node;
            if (typeof ref === 'function') ref(node);
            else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
          }}
          className={classes}
          style={style}
          role={role}
          aria-modal="true"
          aria-labelledby={ariaLabelledBy}
          aria-describedby={ariaDescribedBy}
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
Modal.displayName = 'Modal';

export const ModalHeader = forwardRef<HTMLDivElement, ModalProps>(
  ({ children, className = '', style, ...rest }, ref) => (
    <div ref={ref} className={`modal-header ${className}`} style={style} {...rest}>
      {children}
    </div>
  )
);
ModalHeader.displayName = 'ModalHeader';

export const ModalFooter = forwardRef<HTMLDivElement, ModalProps>(
  ({ children, className = '', style, ...rest }, ref) => (
    <div ref={ref} className={`modal-footer ${className}`} style={style} {...rest}>
      {children}
    </div>
  )
);
ModalFooter.displayName = 'ModalFooter';
