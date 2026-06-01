(function() {
  var h = React.createElement;
  function StatsSection() {
    return h('section', { className: 'halftone-md', style: { padding: '64px 0', borderBottom: '1px solid var(--border-subtle)' } },
      h('div', { className: 'container' },
        h('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 } },
          [
            { value: '12+', label: 'Active Projects' },
            { value: '340 TB', label: 'Daily Data Processed' },
            { value: '99.97%', label: 'Average Uptime' },
            { value: '47 ms', label: 'P95 Latency' },
          ].map(function(s) {
            return h('div', { key: s.label, style: { textAlign: 'center' } },
              h('span', { style: { display: 'block', fontSize: 36, fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--brand-primary)', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 4 } }, s.value),
              h('span', { style: { fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.12em' } }, s.label)
            );
          })
        )
      )
    );
  }
  window.StatsSection = StatsSection;
})();
