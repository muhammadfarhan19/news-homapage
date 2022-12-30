const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const nav = document.getElementById('nav-links');

menuOpen.addEventListener('click', () => {
  nav.classList.add('nav-active');
  nav.classList.add('slide');
});

menuClose.addEventListener('click', () => {
  nav.classList.remove('nav-active')
  nav.classList.remove('slide');
});