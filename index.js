const openMobileMenu = document.querySelector('#mobileMenu');
const closeMobileMenu = document.querySelector('#mobileMenuClose');
const navLinks = document.querySelector('#navLinks');

openMobileMenu.addEventListener('click', () => {
    navLinks.classList.add('active');
});

closeMobileMenu.addEventListener('click', () => {
    navLinks.classList.remove('active');
});