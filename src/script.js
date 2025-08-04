const menuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
// Close the menu if clicking outside of it
document.addEventListener('click', (event) => {
  const isClickInsideMenu = navLinks.contains(event.target);
  const isClickOnButton = menuBtn.contains(event.target);

  if (!isClickInsideMenu && !isClickOnButton) {
    navLinks.classList.remove('active');
  }
});