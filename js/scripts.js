// Toggle split mobile menu
const navToggle = document.getElementById('nav-toggle');
const menu = document.querySelector('.mobile-menu');
const content = document.querySelector('.site-content');
const closeBtn = document.querySelector('.mobile-menu .close-btn');

// Toggle menu from hamburger button
navToggle.addEventListener('click', () => {
  const isOpen = menu.classList.contains('open');
  menu.classList.toggle('open');
  content.classList.toggle('shifted');
  document.body.classList.toggle('menu-open');
  navToggle.setAttribute('aria-expanded', !isOpen);
});
// Explicit close button inside overlay
closeBtn.addEventListener('click', () => {
  menu.classList.remove('open');
  content.classList.remove('shifted');
  document.body.classList.remove('menu-open');
  navToggle.setAttribute('aria-expanded', false);
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

// Contact form submission with fetch
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.querySelector('form[action^="https://formspree.io"]');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const data = new FormData(contactForm);
      try {
        const resp = await fetch(contactForm.action, {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: data
        });
        const status = document.createElement('div');
        status.className = 'form-status';
        if (resp.ok) {
          status.textContent = 'Messaggio inviato con successo!';
          contactForm.reset();
        } else {
          status.textContent = 'Si è verificato un errore durante l\'invio.';
        }
        contactForm.appendChild(status);
      } catch (err) {
        const status = document.createElement('div');
        status.className = 'form-status';
        status.textContent = 'Errore di rete.';
        contactForm.appendChild(status);
      }
    });
  }
});
