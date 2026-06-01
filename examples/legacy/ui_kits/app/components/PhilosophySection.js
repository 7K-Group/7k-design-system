(function() {
  var h = React.createElement;
  function PhilosophySection() {
    return h('section', { className: 'section' },
      h('div', { className: 'container' },
        h('span', { className: 'mono-label', style: { color: 'var(--brand-primary)', marginBottom: 8, display: 'block' } }, 'PHILOSOPHY'),
        h('div', { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, marginTop: 24 } },
          h('div', null,
            h('h2', { style: { fontFamily: "'Geist Pixel', monospace", fontSize: 28, fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 16 } }, 'Tokyo neon meets', h('br'), 'manga 1-bit'),
            h('p', { style: { fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 480 } },
              'Our design language draws from the nocturnal energy of Tokyo\'s electric streets and the stark precision of manga-inspired black-and-white textures. Every surface starts near-black. Every accent carries purpose.'
            )
          ),
          h('div', { style: { display: 'flex', flexDirection: 'column', gap: 16 } },
            h('div', { style: { padding: 20, border: '1px solid var(--border-default)', borderRadius: 0, background: 'var(--bg-elevated)' } },
              h('span', { className: 'mono-label', style: { color: 'var(--accent-square)', marginBottom: 8, display: 'block' } }, 'PARENT · 7K'),
              h('p', { style: { fontSize: 12, color: 'var(--text-tertiary)', margin: 0 } }, 'Magenta accent · Geist Pixel Square · Star-burst logo')
            ),
            h('div', { style: { padding: 20, border: '1px solid var(--border-default)', borderRadius: 0, background: 'var(--bg-elevated)' } },
              h('span', { className: 'mono-label', style: { color: 'var(--accent-circle)', marginBottom: 8, display: 'block' } }, 'CHILD · PROJECT NEON'),
              h('p', { style: { fontSize: 12, color: 'var(--text-tertiary)', margin: 0 } }, 'Cyan accent · Geist Pixel Circle · Same system, distinct at a glance')
            ),
            h('div', { style: { padding: 20, border: '1px solid var(--border-default)', borderRadius: 0, background: 'var(--bg-elevated)' } },
              h('span', { className: 'mono-label', style: { color: 'var(--accent-grid)', marginBottom: 8, display: 'block' } }, 'CHILD · PROJECT GRID'),
              h('p', { style: { fontSize: 12, color: 'var(--text-tertiary)', margin: 0 } }, 'Acid accent · Geist Pixel Grid · Data infrastructure')
            )
          )
        )
      )
    );
  }
  window.PhilosophySection = PhilosophySection;
})();
