// Theme Management
function setTheme(theme) {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
}

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);

// Side Menu Management
const menuToggle = document.getElementById('menuToggle');
const sideMenu = document.getElementById('sideMenu');
const overlay = document.getElementById('overlay');

menuToggle.addEventListener('click', () => {
    sideMenu.classList.toggle('active');
    overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
    sideMenu.classList.remove('active');
    overlay.classList.remove('active');
});

// Close menu when clicking on links
const menuLinks = document.querySelectorAll('.menu-category a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        sideMenu.classList.remove('active');
        overlay.classList.remove('active');
    });
});