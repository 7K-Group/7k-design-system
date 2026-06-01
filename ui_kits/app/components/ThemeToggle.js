(function() {
  var h = React.createElement;
  function ThemeToggle() {
    var state = React.useState({ isDark: document.documentElement.getAttribute('data-theme') !== 'light' });
    var s = state[0]; var setState = state[1];

    function toggle() {
      var nextDark = !s.isDark;
      var theme = nextDark ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('7k-theme', theme);
      setState({ isDark: nextDark });
    }

    return h('button', {
      onClick: toggle,
      className: 'btn-modern btn-modern-ghost btn-modern-icon',
      style: { width: 32, height: 32, fontSize: 12, padding: 0, border: '1px solid var(--border-default)', borderRadius: 0 },
      title: s.isDark ? 'Switch to light theme' : 'Switch to dark theme',
    }, s.isDark ? '☀' : '☾');
  }
  window.ThemeToggle = ThemeToggle;
})();
