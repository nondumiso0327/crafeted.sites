document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');

  if (menuBtn && navLinks) {
    // When menu button is clicked, scroll to services and hide menu
    menuBtn.addEventListener('click', () => {
      // Scroll to #services smoothly
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }

      // Close the nav menu if it's open
      navLinks.classList.remove('active');
    });

    // Toggle visibility if needed (optional)
    document.addEventListener('click', (event) => {
      const isInside = navLinks.contains(event.target) || menuBtn.contains(event.target);
      if (!isInside) {
        navLinks.classList.remove('active');
      }
    });

    // Open menu when user hovers/clicks the nav button (optional for desktop)
    menuBtn.addEventListener('mouseover', () => {
      navLinks.classList.add('active');
    });
  }
});
