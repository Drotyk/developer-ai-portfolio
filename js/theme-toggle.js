// Зчитування теми до DOMContentLoaded для запобігання миготінню (FOUC)
(function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.documentElement.classList.add('theme-light');
  } else {
    document.documentElement.classList.remove('theme-light');
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('themeToggle');
  const iconSpan = document.getElementById('themeToggleIcon');
  const labelSpan = document.getElementById('themeToggleLabel');
  const yearSpan = document.getElementById('year');

  // Динамічне встановлення року у футері (якщо є елемент #year)
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  const applyTheme = (isLight) => {
    if (isLight) {
      document.documentElement.classList.add('theme-light');
      document.body.classList.add('theme-light');
    } else {
      document.documentElement.classList.remove('theme-light');
      document.body.classList.remove('theme-light');
    }

    if (iconSpan && labelSpan) {
      iconSpan.textContent = isLight ? '☀️' : '🌙';
      labelSpan.textContent = isLight ? 'Світла' : 'Темна';
    } else if (toggleBtn) {
      toggleBtn.textContent = isLight ? 'Темна тема' : 'Світла тема';
    }
  };

  const initialLight = localStorage.getItem('theme') === 'light';
  applyTheme(initialLight);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const isCurrentlyLight = document.body.classList.contains('theme-light');
      const newLight = !isCurrentlyLight;
      localStorage.setItem('theme', newLight ? 'light' : 'dark');
      applyTheme(newLight);
    });
  }
});
