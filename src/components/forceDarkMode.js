// Forzar el modo oscuro en la carga inicial
console.log('Iniciando script de modo oscuro...');

// Verificar que estamos en el navegador antes de usar document
function enableDarkMode() {
  if (typeof document !== 'undefined') {
    console.log('Forzando modo oscuro en el cliente...');
    // Aplicar el modo oscuro de forma inmediata
    document.documentElement.classList.add('dark');

    // Guardar la preferencia en localStorage
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('color-theme', 'dark');
    }

    // Actualizar la visibilidad de los íconos
    document.addEventListener('DOMContentLoaded', function() {
      try {
        const darkIcon = document.getElementById('theme-toggle-dark-icon');
        const lightIcon = document.getElementById('theme-toggle-light-icon');
        
        if (darkIcon && lightIcon) {
          darkIcon.classList.add('hidden');
          lightIcon.classList.remove('hidden');
          console.log('Íconos de tema actualizados correctamente');
        }
      } catch (e) {
        console.error('Error actualizando íconos:', e);
      }
    });
  }
}

// Solo ejecutar en el navegador
if (typeof window !== 'undefined') {
  enableDarkMode();
} 