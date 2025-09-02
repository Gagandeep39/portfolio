document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.getElementById('theme-toggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  let darkMode = prefersDark;

  function setTheme(dark) {
    document.body.classList.toggle('dark-theme', dark);
    toggleBtn.textContent = dark ? '☀️' : '🌙';
  }

  toggleBtn.addEventListener('click', function() {
    darkMode = !darkMode;
    setTheme(darkMode);
  });

  setTheme(darkMode);
});
