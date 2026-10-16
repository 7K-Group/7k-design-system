import type { FormGroupProps, InputGroupProps } from '../types';
export function FormGroup({ label, error, className = '', style, children }: FormGroupProps) {
  const classes = ['form-group', className].filter(Boolean).join(' ');

  return (
    <div className={classes} style={style}>
      {label && <span className="form-label">{label}</span>}
      {children}
      {error && <span className="field-error">{error}</span>}
    </div>
  );
}

export function InputGroup({
  addon,
  addonPosition = 'prefix',
  className = '',
  style,
  children,
}: InputGroupProps) {
  const classes = ['input-group', className].filter(Boolean).join(' ');
  const addonEl = addon ? <span className="input-addon">{addon}</span> : null;

  return (
    <div className={classes} style={style}>
      {addonPosition === 'prefix' && addonEl}
      {children}
      {addonPosition === 'suffix' && addonEl}
    </div>
  );
}
