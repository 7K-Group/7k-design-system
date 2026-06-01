(function() {
  var h = React.createElement;
  function Navbar() {
    var links = ['About', 'Projects', 'Platform', 'Docs', 'Contact'];
    return h('nav', { style: {
      position: 'sticky', top: 0, zIndex: 100, padding: '12px 24px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: 'rgba(10,10,13,0.92)', backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-subtle)',
    }},
      h('div', { style: { display: 'flex', alignItems: 'center', gap: 10 } },
        h(window.Icon7k, { size: 28 }),
        h('span', { className: 'mono-label', style: { color: 'var(--text-tertiary)' } }, 'GROUP')
      ),
      h('div', { style: { display: 'flex', alignItems: 'center', gap: 4 } },
        links.map(function(l) {
          return h('a', { key: l, href: '#', className: 'nav-item', style: { padding: '6px 14px', fontSize: 12, color: 'var(--text-secondary)' } }, l);
        }),
        h('span', { style: { width: 1, height: 20, background: 'var(--border-subtle)', margin: '0 8px' } }),
        h('button', { className: 'btn-modern btn-modern-primary btn-modern-sm', style: { fontSize: 10 } }, 'GET STARTED'),
        h(window.ThemeToggle)
      )
    );
  }
  window.Navbar = Navbar;
})();
