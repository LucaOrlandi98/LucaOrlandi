// Toggle split mobile menu
const navToggle = document.getElementById('nav-toggle');
const menu = document.querySelector('.mobile-menu');
const content = document.querySelector('.site-content');
const closeBtn = document.querySelector('.mobile-menu .close-btn');

navToggle.addEventListener('click', () => {
  menu.classList.add('open');
  content.classList.add('shifted');
  document.body.classList.add('menu-open');
});
closeBtn.addEventListener('click', () => {
  menu.classList.remove('open');
  content.classList.remove('shifted');
  document.body.classList.remove('menu-open');
});

// Header shadow on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('.site-header');
  if (window.scrollY > 50) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
});

// Accordion toggle
document.querySelectorAll('.accordion-item h3').forEach(item => {
  item.addEventListener('click', () => {
    const content = item.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});

// Simple slider
let slides = document.querySelectorAll('.slide');
let current = 0;
function showSlide(idx) {
  slides.forEach((s, i) => s.classList.toggle('active', i === idx));
}
if(slides.length) {
  showSlide(0);
  setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
  }, 5000);
}