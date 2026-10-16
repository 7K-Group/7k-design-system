import type { ButtonGroupProps } from '../types';
export function ButtonGroup({ className = '', style, children }: ButtonGroupProps) {
  const classes = ['btn-group', className].filter(Boolean).join(' ');

  return (
    <div className={classes} style={style} role="group">
      {children}
    </div>
  );
}

export function ButtonSplit({ className = '', style, children }: ButtonGroupProps) {
  const classes = ['btn-split', className].filter(Boolean).join(' ');

  return (
    <div className={classes} style={style} role="group">
      {children}
    </div>
  );
}
