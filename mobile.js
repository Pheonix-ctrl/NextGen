const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-links a');

// On hamburger click, toggle .show
mobileMenu.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// If you want the menu to close after clicking a link:
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show');
  });
});