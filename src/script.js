document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');

  if (menuBtn && navLinks) {
    // Toggle menu on button click
    menuBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      navLinks.classList.toggle('active');
    });

    // Close the menu if clicking outside
    document.addEventListener('click', (event) => {
      const isClickInsideMenu = navLinks.contains(event.target);
      const isClickOnButton = menuBtn.contains(event.target);

      if (!isClickInsideMenu && !isClickOnButton && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });

    // Close menu when clicking a nav link (good for mobile)
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    });
  }
});

