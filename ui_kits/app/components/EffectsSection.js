(function() {
  var h = React.createElement;
  var EFFECT_GROUPS = [
    { title: 'AMBIENT', desc: 'Continuous background atmosphere for hero and splash sections — scanline scroll, noise grain, CRT flicker, grid drift.' },
    { title: 'TRIGGER', desc: 'Burst effects on interaction — glitch translate, invert flash, pixel fade-in, and typewriter reveal.' },
    { title: 'LOADING', desc: 'Progress indication — shimmer sweep, skeleton pulse, and indeterminate bar scan for loading states.' },
    { title: 'ACCENT', desc: 'Color-focused motion — neon pulse glow oscillation on accent elements and accent flicker for brand text.' },
  ];
  var THEME_ITEMS = [
    {
      label: 'DARK',
      style: { background: '#0A0A0D', border: '1px solid #FFFFFF', color: '#FAFAFB' },
      textStyle: { color: 'rgba(255,255,255,0.5)' },
      monoStyle: { color: 'rgba(255,255,255,0.3)' },
    },
    {
      label: 'LIGHT',
      style: { background: '#FAFAFB', border: '1px solid #000000', color: '#1C1C22' },
      textStyle: { color: 'rgba(0,0,0,0.45)' },
      monoStyle: { color: 'rgba(0,0,0,0.35)' },
    },
  ];

  function EffectsSection() {
    return h('section', { className: 'section', style: { borderBottom: '1px solid var(--border-subtle)' } },
      h('div', { className: 'container' },
        h('span', { className: 'mono-label', style: { color: 'var(--brand-primary)' } }, 'EFFECTS'),
        h('h2', { style: { fontFamily: "'Geist Pixel', monospace", fontSize: 28, fontWeight: 700, letterSpacing: '-0.02em', margin: '16px 0 32px' } }, 'Animation System'),

        h('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 24 } },
          EFFECT_GROUPS.map(function(g) {
            return h('div', { key: g.title, style: { padding: 20, border: '1px solid var(--border-default)', borderRadius: 0, background: 'var(--bg-elevated)' } },
              h('span', { className: 'mono-label', style: { color: 'var(--brand-primary)', marginBottom: 8, display: 'block' } }, g.title),
              h('p', { style: { fontSize: 12, color: 'var(--text-tertiary)', lineHeight: 1.6, margin: 0 } }, g.desc)
            );
          })
        ),

        h('div', { style: { padding: 32, border: '1px solid var(--border-default)', borderRadius: 0, background: 'var(--bg-elevated)', textAlign: 'center' } },
          h('span', { className: 'mono-label', style: { fontSize: 10, color: 'var(--text-tertiary)', display: 'block', marginBottom: 16 } }, 'THEME-AWARE ATMOSPHERE'),

          h('div', { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 } },
            THEME_ITEMS.map(function(item) {
              return h('div', { key: item.label, style: Object.assign({ position: 'relative', height: 100, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 8 }, item.style) },
                h('div', { className: 'scanline', style: { position: 'absolute', inset: 0 } }),
                h('div', { className: 'noise', style: { position: 'absolute', inset: 0 } }),
                h('span', { style: Object.assign({ position: 'relative', zIndex: 2, fontFamily: "'Geist Pixel', monospace", fontSize: 13, fontWeight: 600, letterSpacing: '0.15em' }, item.monoStyle) }, 'SCANLINE + NOISE'),
                h('span', { style: Object.assign({ position: 'relative', zIndex: 2, fontSize: 11 }, item.textStyle) }, item.label + ' MODE')
              );
            })
          ),

          h('span', { style: { fontSize: 11, color: 'var(--text-tertiary)', display: 'block' } },
            'All textures use theme-aware tokens — white lines/grains in dark mode, black in light mode. Textures respect prefers-reduced-motion.'
          )
        )
      )
    );
  }
  window.EffectsSection = EffectsSection;
})();
