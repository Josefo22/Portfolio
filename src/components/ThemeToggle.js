// Función simplificada para cambiar el tema
function initThemeToggle() {
  const themeToggle = document.getElementById("theme-toggle");
  const darkIcon = document.getElementById("theme-toggle-dark-icon");
  const lightIcon = document.getElementById("theme-toggle-light-icon");

  if (!themeToggle || !darkIcon || !lightIcon) return;

  function updateTheme(isDark) {
    document.documentElement.classList.toggle('dark', isDark);
    darkIcon.classList.toggle('hidden', isDark);
    lightIcon.classList.toggle('hidden', !isDark);
    
    try {
      localStorage.setItem('color-theme', isDark ? 'dark' : 'light');
    } catch (e) {
      console.warn('No se pudo guardar el tema en localStorage');
    }
  }

  // Inicializar estado
  const isDark = document.documentElement.classList.contains('dark');
  updateTheme(isDark);

  // Manejar clics
  themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.classList.contains('dark');
    updateTheme(!isDark);
  });
}

// Ejecutar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initThemeToggle);
} else {
  initThemeToggle();
}
