(function() {
  var h = React.createElement;
  var SERVICES = [
    { svc: 'api-gateway', lat: '12ms', up: '99.99%', reg: 'us-east-1', ok: true },
    { svc: 'inference-engine', lat: '47ms', up: '98.20%', reg: 'eu-west-1', ok: false },
    { svc: 'data-lake', lat: '8ms', up: '99.97%', reg: 'ap-ne-1', ok: true },
    { svc: 'auth-service', lat: '4ms', up: '100%', reg: 'global', ok: true },
    { svc: 'cdn-edge', lat: '2ms', up: '100%', reg: 'global', ok: true },
  ];

  function DataSection() {
    return h('section', { className: 'section', style: { borderBottom: '1px solid var(--border-subtle)' } },
      h('div', { className: 'container' },
        h('span', { className: 'mono-label', style: { color: 'var(--brand-primary)' } }, 'DATA'),
        h('h2', { style: { fontFamily: "'Geist Pixel', monospace", fontSize: 28, fontWeight: 700, letterSpacing: '-0.02em', margin: '16px 0 32px' } }, 'System Metrics'),
        h('div', { style: { display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 24 } },
          h('div', { style: { border: '1px solid var(--border-default)', borderRadius: 0, background: 'var(--bg-elevated)', overflow: 'hidden' } },
            h('div', { style: { display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', padding: '12px 16px', borderBottom: '1px solid var(--border-default)', background: 'var(--bg-raised)' } },
              ['Service', 'Latency', 'Uptime', 'Region', 'Status'].map(function(hdr) {
                return h('span', { key: hdr, style: { fontSize: 10, fontFamily: 'var(--font-mono)', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.12em' } }, hdr);
              })
            ),
            SERVICES.map(function(row) {
              return h('div', { key: row.svc, style: { display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', padding: '10px 16px', borderBottom: '1px solid var(--border-subtle)', alignItems: 'center' } },
                h('span', { style: { fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-primary)' } }, row.svc),
                h('span', { style: { fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-secondary)' } }, row.lat),
                h('span', { style: { fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-secondary)' } }, row.up),
                h('span', { style: { fontSize: 12, color: 'var(--text-tertiary)' } }, row.reg),
                h('span', { style: {
                  fontSize: 10, fontFamily: 'var(--font-mono)',
                  color: row.ok ? 'var(--status-success)' : 'var(--status-warning)',
                  border: '1px solid ' + (row.ok ? 'var(--status-success)' : 'var(--status-warning)'),
                  padding: '2px 8px', display: 'inline-block', width: 'fit-content',
                } }, row.ok ? 'OPERATIONAL' : 'DEGRADED')
              );
            })
          ),
          h('div', { style: { display: 'flex', flexDirection: 'column', gap: 16 } },
            h('div', { style: { padding: 20, border: '1px solid var(--border-default)', borderRadius: 0, background: 'var(--bg-elevated)' } },
              h('span', { className: 'mono-label', style: { marginBottom: 16, display: 'block', color: 'var(--text-tertiary)' } }, 'RESOURCE USAGE'),
              [
                { label: 'Compute', pct: 76 },
                { label: 'Memory', pct: 42 },
                { label: 'Storage', pct: 88 },
              ].map(function(r) {
                return h('div', { key: r.label, style: { marginBottom: 12 } },
                  h('div', { style: { display: 'flex', justifyContent: 'space-between', marginBottom: 4 } },
                    h('span', { style: { fontSize: 11, color: 'var(--text-tertiary)' } }, r.label),
                    h('span', { style: { fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)' } }, r.pct + '%')
                  ),
                  h('div', { style: { height: 6, background: 'var(--bg-raised)', border: '1px solid var(--border-default)', borderRadius: 0 } },
                    h('div', { style: { width: r.pct + '%', height: '100%', background: r.pct > 80 ? 'var(--status-warning)' : r.pct > 50 ? 'var(--brand-primary)' : 'var(--text-tertiary)' } })
                  )
                );
              })
            ),
            h('div', { style: { padding: 20, border: '1px solid var(--border-default)', borderRadius: 0, background: 'var(--bg-elevated)' } },
              h('span', { className: 'mono-label', style: { marginBottom: 16, display: 'block', color: 'var(--text-tertiary)' } }, 'ENVIRONMENT TAGS'),
              h('div', { style: { display: 'flex', gap: 6, flexWrap: 'wrap' } },
                ['production', 'critical', 'staging', 'v2.4.1', 'us-east-1'].map(function(t) {
                  return h('span', { key: t, style: {
                    fontSize: 10, fontFamily: 'var(--font-mono)', padding: '3px 8px',
                    border: '1px solid var(--border-default)', borderRadius: 0,
                    color: 'var(--text-secondary)', background: 'var(--bg-raised)',
                  } }, t);
                })
              )
            )
          )
        )
      )
    );
  }
  window.DataSection = DataSection;
})();
