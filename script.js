document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.mobile-toggle');
  const menu = document.querySelector('.menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  document.getElementById('year').textContent = new Date().getFullYear();

  const form = document.getElementById('interest-form');
  const message = document.querySelector('.form-message');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    if (!email) return;
    message.textContent = 'Merci ! Votre intérêt pour FLOPBOX a bien été pris en compte.';
    form.reset();
  });
});
