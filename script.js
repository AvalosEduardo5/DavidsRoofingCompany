const navbar = document.querySelector('.navbar');
const heroContainer = document.querySelector('#hero-container');
const navbarHeight = window.getComputedStyle(navbar).height;

heroContainer.style.paddingTop = navbarHeight;

const menuItems = document.querySelectorAll('.nav-link');
menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    const navbar = new bootstrap.Collapse(document.querySelector('.navbar-collapse'));
    navbar.hide();
  });
});