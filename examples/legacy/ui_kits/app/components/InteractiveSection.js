(function() {
  var h = React.createElement;
  var QUICK_ACTIONS = [
    { icon: '▶', label: 'Deploy Pipeline', desc: 'Push latest build to staging', accent: 'var(--accent-circle)' },
    { icon: '◇', label: 'New Project', desc: 'Scaffold a new 7K project', accent: 'var(--accent-grid)' },
    { icon: '▤', label: 'Run Diagnostics', desc: 'Health check all services', accent: 'var(--accent-line)' },
    { icon: '◈', label: 'Invite Member', desc: 'Add a collaborator', accent: 'var(--accent-square)' },
  ];
  var RECENT = [
    { action: 'Deploy v2.4.1 → staging', time: '2m ago', status: 'Completed' },
    { action: 'Scale cluster us-east-1', time: '14m ago', status: 'Running' },
    { action: 'Rotate API keys', time: '1h ago', status: 'Completed' },
    { action: 'Migrate data-lake schema', time: '3h ago', status: 'Failed' },
  ];

  function InteractiveSection() {
    var state = React.useState({ selectedAction: null, inputValue: '' });
    var s = state[0]; var setState = state[1];

    return h('section', { className: 'section', style: { borderBottom: '1px solid var(--border-subtle)' } },
      h('div', { className: 'container' },
        h('span', { className: 'mono-label', style: { color: 'var(--brand-primary)' } }, 'ACTIONS'),
        h('h2', { style: { fontFamily: "'Geist Pixel', monospace", fontSize: 28, fontWeight: 700, letterSpacing: '-0.02em', margin: '16px 0 32px' } }, 'Quick Actions'),
        h('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 32 } },
          QUICK_ACTIONS.map(function(a) {
            return h('button', {
              key: a.label,
              onClick: function() { setState({ selectedAction: a.label, inputValue: s.inputValue }); },
              style: {
                padding: 20, border: '1px solid var(--border-default)', borderRadius: 0,
                background: 'var(--bg-elevated)', color: 'var(--text-primary)',
                cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit',
                transition: 'all 0.15s ease',
              }
            },
              h('div', { style: { display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 } },
                h('span', { style: { width: 32, height: 32, border: '1px solid ' + a.accent, display: 'grid', placeItems: 'center', color: a.accent, fontSize: 14 } }, a.icon),
                h('span', { style: { fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 600, letterSpacing: '-0.01em' } }, a.label)
              ),
              h('span', { style: { fontSize: 12, color: 'var(--text-tertiary)' } }, a.desc)
            );
          })
        ),
        h('div', { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 } },
          h('div', { style: { padding: 20, border: '1px solid var(--border-default)', borderRadius: 0, background: 'var(--bg-elevated)' } },
            h('span', { className: 'mono-label', style: { marginBottom: 16, display: 'block', color: 'var(--text-tertiary)' } }, 'RECENT ACTIVITY'),
            RECENT.map(function(r) {
              var statusColor = r.status === 'Completed' ? 'var(--status-success)' : r.status === 'Running' ? 'var(--status-warning)' : 'var(--status-danger)';
              return h('div', { key: r.action, style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid var(--border-subtle)' } },
                h('span', { style: { fontSize: 13, letterSpacing: '-0.01em' } }, r.action),
                h('div', { style: { display: 'flex', alignItems: 'center', gap: 8 } },
                  h('span', { style: { fontSize: 11, color: 'var(--text-tertiary)' } }, r.time),
                  h('span', { style: { fontSize: 10, color: statusColor, fontFamily: 'var(--font-mono)' } }, r.status)
                )
              );
            })
          ),
          h('div', { style: { padding: 20, border: '1px solid var(--border-default)', borderRadius: 0, background: 'var(--bg-elevated)' } },
            h('span', { className: 'mono-label', style: { marginBottom: 16, display: 'block', color: 'var(--text-tertiary)' } }, 'QUERY'),
            h('div', { style: { display: 'flex', gap: 8, marginBottom: 16 } },
              h('div', {
                contentEditable: true,
                style: {
                  flex: 1, padding: '10px 12px', fontSize: 13,
                  background: 'var(--bg-raised)', border: '1px solid var(--border-default)', borderRadius: 0,
                  color: 'var(--text-primary)', outline: 'none', minHeight: 20,
                  fontFamily: 'var(--font-mono)',
                }
              }, 'SELECT * FROM deployments ORDER BY created_at DESC LIMIT 10'),
              h('button', { className: 'btn-modern btn-modern-primary btn-modern-sm', style: { fontSize: 10 } }, 'RUN')
            ),
            h('div', { style: { background: 'var(--bg-raised)', border: '1px solid var(--border-default)', borderRadius: 0, padding: 16 } },
              h('span', { style: { fontSize: 11, color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)', display: 'block' } },
                '→ 12 rows returned in 43ms'
              ),
              h('div', { style: { marginTop: 8, fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-secondary)', lineHeight: 1.6, whiteSpace: 'pre-wrap' } },
                'id  | service     | status    | created_at\n' +
                '42  | api-gateway | live      | 2026-05-29\n' +
                '41  | inference   | live      | 2026-05-28\n' +
                '40  | data-lake   | rollback  | 2026-05-27'
              )
            )
          )
        )
      )
    );
  }
  window.InteractiveSection = InteractiveSection;
})();
