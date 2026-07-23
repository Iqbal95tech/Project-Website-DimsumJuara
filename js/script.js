// Hamburger Menu Functionality
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-links a');

// Toggle menu saat hamburger diklik
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navbar.classList.toggle('active');
  hamburger.setAttribute('aria-expanded', hamburger.classList.contains('active'));
});

// Tutup menu saat salah satu link diklik
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navbar.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// Tutup menu saat scroll
window.addEventListener('scroll', () => {
  hamburger.classList.remove('active');
  navbar.classList.remove('active');
  hamburger.setAttribute('aria-expanded', 'false');
});
