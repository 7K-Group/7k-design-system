(function() {
  var h = React.createElement;

  function OverlaySection() {
    var state = React.useState({ showConfirm: false, showPanel: false });
    var s = state[0]; var setState = state[1];

    return h('section', { className: 'section', style: { borderBottom: '1px solid var(--border-subtle)' } },
      h('div', { className: 'container' },
        h('span', { className: 'mono-label', style: { color: 'var(--brand-primary)' } }, 'OVERLAYS'),
        h('h2', { style: { fontFamily: "'Geist Pixel', monospace", fontSize: 28, fontWeight: 700, letterSpacing: '-0.02em', margin: '16px 0 32px' } }, 'Interactive Panels'),
        h('div', { style: { display: 'flex', gap: 16, flexWrap: 'wrap' } },
          h('button', { className: 'btn-modern btn-modern-primary', onClick: function() { setState({ showConfirm: true, showPanel: false }); } }, 'CONFIRM DEPLOY'),
          h('button', { className: 'btn-modern btn-modern-secondary', onClick: function() { setState({ showConfirm: false, showPanel: true }); } }, 'OPEN DETAILS')
        ),

        s.showConfirm ? h('div', {
          style: { position: 'fixed', inset: 0, zIndex: 300, background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center' },
          onClick: function(e) { if (e.target === e.currentTarget) setState({ showConfirm: false, showPanel: false }); }
        },
          h('div', {
            style: {
              background: 'var(--bg-raised)', border: '1px solid var(--border-default)', borderRadius: 0,
              padding: 32, maxWidth: 400, width: '90%', boxShadow: 'var(--shadow-lg)',
            }
          },
            h('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 } },
              h('span', { style: { fontFamily: 'var(--font-sans)', fontSize: 18, fontWeight: 700, letterSpacing: '-0.02em' } }, 'Confirm Deploy'),
              h('button', {
                onClick: function() { setState({ showConfirm: false, showPanel: false }); },
                style: { background: 'none', border: 'none', color: 'var(--text-tertiary)', cursor: 'pointer', fontSize: 16, padding: 4 },
              }, '✕')
            ),
            h('p', { style: { fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 24 } },
              'This will deploy v2.4.1 to production. All services will restart with zero-downtime rolling update.'
            ),
            h('div', { style: { display: 'flex', gap: 8, justifyContent: 'flex-end' } },
              h('button', { className: 'btn-modern btn-modern-ghost', onClick: function() { setState({ showConfirm: false, showPanel: false }); } }, 'Cancel'),
              h('button', { className: 'btn-modern btn-modern-primary', onClick: function() { setState({ showConfirm: false, showPanel: false }); } }, 'Deploy')
            )
          )
        ) : null,

        s.showPanel ? h('div', {
          style: { position: 'fixed', inset: 0, zIndex: 300, background: 'rgba(0,0,0,0.6)', display: 'flex', justifyContent: 'flex-end' },
          onClick: function(e) { if (e.target === e.currentTarget) setState({ showConfirm: false, showPanel: false }); }
        },
          h('div', {
            style: {
              width: 360, height: '100%', background: 'var(--bg-raised)',
              borderLeft: '1px solid var(--border-default)', borderRadius: 0,
              padding: 32, boxShadow: 'var(--shadow-xl)', overflowY: 'auto',
            }
          },
            h('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 } },
              h('span', { style: { fontFamily: 'var(--font-sans)', fontSize: 18, fontWeight: 700, letterSpacing: '-0.02em' } }, 'Settings'),
              h('button', {
                onClick: function() { setState({ showConfirm: false, showPanel: false }); },
                style: { background: 'none', border: 'none', color: 'var(--text-tertiary)', cursor: 'pointer', fontSize: 16, padding: 4 },
              }, '✕')
            ),
            h('div', { style: { display: 'flex', flexDirection: 'column', gap: 20 } },
              h('div', null,
                h('div', { className: 'mono-label', style: { marginBottom: 8, color: 'var(--text-tertiary)' } }, 'THEME'),
                h('div', { style: { display: 'flex', gap: 8 } },
                  h('button', { className: 'btn-modern btn-modern-primary btn-modern-sm', style: { fontSize: 10 } }, 'DARK'),
                  h('button', { className: 'btn-modern btn-modern-ghost btn-modern-sm', style: { fontSize: 10 } }, 'LIGHT')
                )
              ),
              h('div', null,
                h('div', { className: 'mono-label', style: { marginBottom: 8, color: 'var(--text-tertiary)' } }, 'NOTIFICATIONS'),
                ['All', 'Critical only', 'None'].map(function(n) {
                  return h('div', { key: n, style: { display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 } },
                    h('div', { style: { width: 14, height: 14, border: '1px solid var(--border-default)', borderRadius: 0, background: n === 'Critical only' ? 'var(--brand-primary)' : 'transparent' } }),
                    h('span', { style: { fontSize: 12, color: 'var(--text-secondary)' } }, n)
                  );
                })
              ),
              h('div', null,
                h('div', { className: 'mono-label', style: { marginBottom: 8, color: 'var(--text-tertiary)' } }, 'AUTO-UPDATE'),
                h('div', { style: { display: 'flex', gap: 8 } },
                  h('button', { className: 'btn-modern btn-modern-primary btn-modern-sm', style: { fontSize: 10 } }, 'ENABLED'),
                  h('button', { className: 'btn-modern btn-modern-ghost btn-modern-sm', style: { fontSize: 10 } }, 'DISABLED')
                )
              )
            )
          )
        ) : null
      )
    );
  }
  window.OverlaySection = OverlaySection;
})();
