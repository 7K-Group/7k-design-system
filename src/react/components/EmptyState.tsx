import type { EmptyStateProps } from '../types';

export function EmptyState({ title, body, action, icon, className = '', style }: EmptyStateProps) {
  const classes = ['empty', className].filter(Boolean).join(' ');

  return (
    <div className={classes} style={style}>
      {icon != null ? <span className="empty-icon">{icon}</span> : null}
      <span className="empty-title">{title}</span>
      {body != null && <span className="empty-text">{body}</span>}
      {action != null && <span className="empty-action">{action}</span>}
    </div>
  );
}
