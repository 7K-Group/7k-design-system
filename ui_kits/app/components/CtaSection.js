(function() {
  var h = React.createElement;
  function CtaSection() {
    return h('section', { className: 'scanline-fast diagonal-stripes-negative', style: {
      padding: '80px 24px', textAlign: 'center', position: 'relative',
      background: '#FFFFFF', color: '#000000', overflow: 'hidden',
    }},
      h('div', { style: { position: 'relative', zIndex: 2, maxWidth: 600, margin: '0 auto' } },
        h('span', { className: 'mono-label', style: { color: '#00000080', marginBottom: 16, display: 'block' } }, 'GET STARTED'),
        h('h2', { style: { fontFamily: "'Geist Pixel', monospace", fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 800, color: '#000000', marginBottom: 16, letterSpacing: -0.03 } },
          'Ready to build for midnight?'
        ),
        h('p', { style: { fontSize: 16, lineHeight: 1.6, color: '#000000B3', marginBottom: 32, maxWidth: 480, margin: '0 auto 32px' } },
          'Join the 7K ecosystem. Deploy your first project in minutes.'
        ),
        h('div', { style: { display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' } },
          h('button', { className: 'btn-modern', style: { background: '#000000', color: '#FFFFFF', border: '2px solid #000000' } }, 'START BUILDING'),
          h('button', { className: 'btn-modern', style: { background: 'transparent', color: '#000000', border: '2px solid #000000' } }, 'CONTACT SALES')
        )
      )
    );
  }
  window.CtaSection = CtaSection;
})();
