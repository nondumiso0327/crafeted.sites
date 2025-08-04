document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');

  if (menuBtn && navLinks) {
    // Toggle menu on button click
    menuBtn.addEventListener('click', (event) => {
      event.stopPropagation(); // Prevents the click from bubbling up to the document
      navLinks.classList.toggle('active');
    });

    // Close the menu if clicking outside
    document.addEventListener('click', (event) => {
      const isClickInsideMenu = navLinks.contains(event.target);
      const isClickOnButton = menuBtn.contains(event.target);

      if (!isClickInsideMenu && !isClickOnButton) {
        navLinks.classList.remove('active');
      }
    });
  }
});
