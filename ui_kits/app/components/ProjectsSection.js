(function() {
  var h = React.createElement;
  var PROJECTS = [
    { name: 'Project Neon', accent: 'var(--accent-circle)', desc: 'Real-time AI inference pipeline with sub-20ms latency across global edge nodes.', metric: '24ms', label: 'P99 Latency', icon: '◈' },
    { name: 'Project Grid', accent: 'var(--accent-grid)', desc: 'Distributed compute grid for batch processing and large-scale data transformation.', metric: '340 TB', label: 'Daily Throughput', icon: '▣' },
    { name: 'Project Ember', accent: 'var(--accent-line)', desc: 'Developer tooling platform for monitoring, observability, and incident response.', metric: '99.97%', label: 'Uptime SLA', icon: '▤' },
  ];
  function ProjectsSection() {
    return h('section', { className: 'section', style: { borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' } },
      h('div', { className: 'container' },
        h('span', { className: 'mono-label', style: { color: 'var(--brand-primary)' } }, 'PROJECTS'),
        h('h2', { style: { fontFamily: "'Geist Pixel', monospace", fontSize: 28, fontWeight: 700, letterSpacing: '-0.02em', margin: '16px 0 32px' } }, 'Our Ecosystem'),
        h('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 } },
          PROJECTS.map(function(p) {
            return h('div', { key: p.name, className: 'accent-bar', style: { padding: 24, border: '1px solid var(--border-default)', borderRadius: 0, background: 'var(--bg-elevated)', position: 'relative' } },
              h('div', { style: { display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 } },
                h('span', { style: { width: 32, height: 32, border: '2px solid ' + p.accent, display: 'grid', placeItems: 'center', color: p.accent, fontSize: 14 } }, p.icon),
                h('span', { style: { fontFamily: 'var(--font-sans)', fontSize: 18, fontWeight: 700, letterSpacing: '-0.02em' } }, p.name)
              ),
              h('p', { className: 'body-sm', style: { marginBottom: 16 } }, p.desc),
              h('div', { className: 'stat' },
                h('span', { className: 'stat-value', style: { fontSize: 24, color: p.accent } }, p.metric),
                h('span', { className: 'stat-label' }, p.label)
              )
            );
          })
        )
      )
    );
  }
  window.ProjectsSection = ProjectsSection;
})();
