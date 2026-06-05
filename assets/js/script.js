// Bloom — Week Project Settimana V
//
// Aggiungi qui il codice JavaScript se serve (es. modale, scroll handler).
// Per la Versione Base spesso non serve niente: tutto si fa in CSS.
// Bloom — Week Project Settimana V

const header = document.getElementById('site-header');
const root = document.documentElement;

window.addEventListener('scroll', function () {
  if (window.scrollY >= 100) {
    root.style.setProperty('--header-bg', '#000000');
    root.style.setProperty('--header-border', '#000000');
    root.style.setProperty('--header-link-color', '#ffffff');
  } else {
    root.style.setProperty('--header-bg', '#ffffff');
    root.style.setProperty('--header-border', '#e8e8e8');
    root.style.setProperty('--header-link-color', '#000000');

  }
});