document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');

  // ✅ Verificación de existencia
  if (!toggleButton || !menu) return;

  const menuLinks = menu.querySelectorAll('a[href^="#"]');
  const sections = document.querySelectorAll('article.seccion');

  // Abrir/cerrar menú móvil
  toggleButton.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('show');
    toggleButton.setAttribute('aria-expanded', isOpen);
  });

  // Mostrar sección activa
  function showSection(id) {
    sections.forEach(section => {
      section.classList.toggle('active', section.id === id);
    });

    menuLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
    });
  }

  // Navegación entre secciones
  menuLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      showSection(targetId);

      // Cierra el menú en móvil
      if (window.innerWidth <= 768) {
        menu.classList.remove('show');
        toggleButton.setAttribute('aria-expanded', false);
      }
    });
  });
});
