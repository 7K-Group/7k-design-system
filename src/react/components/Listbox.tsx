import { useId, useRef, useState, useEffect } from 'react';
import type { ListboxProps } from '../types';

export function Listbox({
  options,
  value,
  onChange,
  placeholder = 'Select…',
  disabled = false,
  className = '',
  style,
}: ListboxProps) {
  const id = useId();
  const [open, setOpen] = useState(false);
  const [highlight, setHighlight] = useState(-1);
  const rootRef = useRef<HTMLDivElement>(null);

  const selected = options.find((o) => o.value === value);

  useEffect(() => {
    if (!open) return;
    const onDocClick = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, [open]);

  const commit = (index: number) => {
    const opt = options[index];
    if (!opt || opt.disabled) return;
    onChange?.(opt.value);
    setOpen(false);
  };

  const move = (dir: 1 | -1) => {
    setHighlight((prev) => {
      let next = prev;
      for (let i = 0; i < options.length; i++) {
        next = (next + dir + options.length) % options.length;
        if (!options[next].disabled) break;
      }
      return next;
    });
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;
    if (!open && ['Enter', ' ', 'ArrowDown', 'ArrowUp'].includes(e.key)) {
      e.preventDefault();
      setHighlight(Math.max(0, options.findIndex((o) => o.value === value)));
      setOpen(true);
      return;
    }
    if (!open) return;
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        move(1);
        break;
      case 'ArrowUp':
        e.preventDefault();
        move(-1);
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        commit(highlight);
        break;
      case 'Escape':
        e.preventDefault();
        setOpen(false);
        break;
    }
  };

  return (
    <div
      ref={rootRef}
      className={`listbox ${className}`}
      style={style}
      onKeyDown={onKeyDown}
    >
      <button
        type="button"
        id={id}
        className="listbox-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        disabled={disabled}
        onClick={() => {
          setHighlight(Math.max(0, options.findIndex((o) => o.value === value)));
          setOpen((v) => !v);
        }}
      >
        <span className={selected ? '' : 'listbox-placeholder'}>
          {selected?.label ?? placeholder}
        </span>
        <span aria-hidden="true" className={`listbox-chevron${open ? ' open' : ''}`}>
          ▾
        </span>
      </button>
      {open && (
        <ul role="listbox" aria-labelledby={id} className="listbox-options">
          {options.map((opt, i) => (
            <li
              key={opt.value}
              role="option"
              aria-selected={opt.value === value}
              aria-disabled={opt.disabled || undefined}
              className={[
                'listbox-option',
                opt.value === value ? 'selected' : '',
                i === highlight ? 'highlight' : '',
              ]
                .filter(Boolean)
                .join(' ')}
              onMouseEnter={() => setHighlight(i)}
              onClick={() => commit(i)}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
