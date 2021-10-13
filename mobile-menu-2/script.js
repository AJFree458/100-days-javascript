const links = document.querySelectorAll('.nav-list li a');
// RESPONSIVE MOBILE MENU
const menuWrapper = document.querySelector('.nav-wrapper');
const menu = document.querySelector('.nav-list');
const hamburger = document.querySelector('.hamburger');
const closeMenu = document.querySelector('.close');

for (const link of links) {
  link.addEventListener('click', smoothScroll);
}

function smoothScroll(e) {
  e.preventDefault();
  const href = this.getAttribute('href');
  document.querySelector(href).scrollIntoView({
    behavior: 'smooth',
  });
  hideMenu();
}

const showMenu = () => {
  hamburger.style.display = 'none';
  closeMenu.style.transform = 'translateY(0)';
  menuWrapper.style.transform = 'translateX(0)';
  menu.style.transform = 'translateX(0)';
};

const hideMenu = () => {
  closeMenu.style.transform = 'translateY(-20rem)';
  hamburger.style.display = 'block';
  menuWrapper.style.transform = 'translateX(-200%)';
  menu.style.transform = 'translateX(200%)';
};

hamburger.addEventListener('click', showMenu);
closeMenu.addEventListener('click', hideMenu);
menuWrapper.addEventListener('click', hideMenu);
