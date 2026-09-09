document.getElementById('year').textContent = new Date().getFullYear();

const mobileNav = document.getElementById('mobileNav');
const openBtn = document.getElementById('mobileNavOpen');
const closeBtn = document.getElementById('mobileNavClose');

function setNav(open) {
  mobileNav.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
}

openBtn.addEventListener('click', () => setNav(true));
closeBtn.addEventListener('click', () => setNav(false));
mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setNav(false)));
