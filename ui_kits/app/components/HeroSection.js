(function() {
  var h = React.createElement;
  function HeroSection() {
    return h('section', { className: 'scanline', style: {
      position: 'relative', minHeight: '80vh', display: 'flex',
      flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      textAlign: 'center', padding: '80px 24px', overflow: 'hidden',
      borderBottom: '2px solid var(--border-default)',
    }},
      h('div', { className: 'noise', style: { position: 'absolute', inset: 0, zIndex: 0 } }),
      h('div', { style: { position: 'relative', zIndex: 2, maxWidth: 800 } },
        h('div', { style: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 16 } },
          h(window.Icon7k, { size: 32 }),
          h('span', { className: 'mono-label', style: { color: 'var(--brand-primary)' } }, '7K GROUP · EST. 2024'),
        ),
        h('h1', { className: 'display', style: { marginBottom: 24 } }, 'Built for', h('br'), h('span', { style: { color: 'var(--brand-primary)' } }, 'Midnight')),
        h('p', { className: 'body-lg', style: { maxWidth: 600, margin: '0 auto 32px' } },
          'A multi-project technology company crafting infrastructure, AI pipelines, and digital products under a shared dark-neon identity.'
        ),
        h('div', { style: { display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' } },
          h('button', { className: 'btn-modern btn-modern-glow' }, 'Explore Projects'),
          h('button', { className: 'btn-modern btn-modern-secondary' }, 'View Documentation')
        )
      ),
      h('div', { className: 'isometric-grid', style: { position: 'absolute', inset: 0, opacity: 0.15, zIndex: 0 } })
    );
  }
  window.HeroSection = HeroSection;
})();
