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
const formm = document.getElementsByClassName('img');
formm.addEventListener('click', () => {
    menuLinks.classList.remove('img__text m--in');
    
})


document.querySelector('.img__btn').addEventListener('click', function() {
    const container = document.querySelector('.cont');
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
        // For mobile - simple toggle between forms
        container.classList.toggle('s--signup');
    } else {
        // For desktop - animated transition
        container.classList.toggle('s--signup');
    }
});



// login form