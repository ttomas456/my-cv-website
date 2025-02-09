document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});