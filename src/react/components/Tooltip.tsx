import { useState, useRef } from 'react';
import type { TooltipProps } from '../types';

const positionStyles: Record<string, React.CSSProperties> = {
  top: { bottom: '100%', left: '50%', transform: 'translateX(-50%)', marginBottom: 8 },
  right: { left: '100%', top: '50%', transform: 'translateY(-50%)', marginLeft: 8 },
  bottom: { top: '100%', left: '50%', transform: 'translateX(-50%)', marginTop: 8 },
  left: { right: '100%', top: '50%', transform: 'translateY(-50%)', marginRight: 8 },
};

export function Tooltip({
  children,
  content,
  position = 'top',
  className = '',
  style,
}: TooltipProps) {
  const [visible, setVisible] = useState(false);
  const triggerRef = useRef<HTMLSpanElement>(null);

  return (
    <span
      ref={triggerRef}
      className={`tooltip-trigger ${className}`}
      style={{ position: 'relative', display: 'inline-flex', ...style }}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      {children}
      {visible && (
        <span
          className="tooltip"
          role="tooltip"
          style={{
            position: 'absolute',
            zIndex: 200,
            whiteSpace: 'nowrap',
            ...positionStyles[position],
          }}
        >
          {content}
        </span>
      )}
    </span>
  );
}
