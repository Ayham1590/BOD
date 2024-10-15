const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

navLinks.addEventListener('click', () => {
    navLinks.classList.remove('active');
});