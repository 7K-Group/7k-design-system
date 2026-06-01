(function() {
  var h = React.createElement;
  var cols = [
    { title: 'PRODUCT', links: ['Dashboard', 'Projects', 'Pipelines', 'Monitoring', 'Deployments'] },
    { title: 'RESOURCES', links: ['Documentation', 'API Reference', 'Status Page', 'Changelog', 'Community'] },
    { title: 'COMPANY', links: ['About', 'Blog', 'Careers', 'Press', 'Contact'] },
    { title: 'LEGAL', links: ['Privacy Policy', 'Terms of Service', 'Security', 'Compliance', 'Cookies'] },
  ];
  function FooterSection() {
    return h('footer', { style: { padding: '64px 24px 32px', borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-elevated)' } },
      h('div', { className: 'container' },
        h('div', { style: { display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: 32, marginBottom: 48 } },
          h('div', null,
            h('div', { style: { display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 } },
              h(window.Icon7k, { size: 28 }),
              h('span', { className: 'mono-label', style: { color: 'var(--text-tertiary)' } }, 'GROUP')
            ),
            h('p', { style: { fontSize: 12, color: 'var(--text-tertiary)', lineHeight: 1.5, maxWidth: 300 } }, 'Built for midnight. A multi-project technology company crafting infrastructure, AI pipelines, and digital products.')
          ),
          cols.map(function(col) {
            return h('div', { key: col.title },
              h('span', { className: 'mono-label', style: { color: 'var(--brand-primary)', marginBottom: 12, display: 'block' } }, col.title),
              col.links.map(function(link, linkIdx) {
                return h('div', { key: col.title + '-' + link + '-' + linkIdx, style: { marginBottom: 8 } },
                  h('a', { href: '#', style: { fontSize: 12, color: 'var(--text-secondary)', textDecoration: 'none', borderBottom: '1px solid transparent', transition: 'all 0.15s ease' } }, link)
                );
              })
            );
          })
        ),
        h('div', { className: 'separator-onebit', style: { marginBottom: 24 } }),
        h('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' } },
          h('span', { style: { fontSize: 11, color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)' } }, '© 2026 7K Group. All rights reserved.'),
          h('div', { style: { display: 'flex', gap: 12 } },
            ['GitHub', 'Twitter', 'Discord'].map(function(s) {
              return h('a', { key: s, href: '#', style: { fontSize: 11, color: 'var(--text-tertiary)', textDecoration: 'none', borderBottom: '1px solid transparent', fontFamily: 'var(--font-mono)' } }, s);
            })
          )
        )
      )
    );
  }
  window.FooterSection = FooterSection;
})();
