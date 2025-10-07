// Current year
document.getElementById('y')?.appendChild(document.createTextNode(new Date().getFullYear()));

// Mobile nav
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

// Contact form (demo only)
const form = document.getElementById('contactForm');
const note = document.getElementById('formNote');

if (form && note) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // Minimal validation
    if (!name || !email || !message) {
      note.textContent = 'Please complete all fields.';
      note.style.color = '#ffd166';
      return;
    }

    // Simulate success
    note.textContent = 'Thanks! Your message has been sent.';
    note.style.color = '#6ee7ff';
    form.reset();
  });
}
