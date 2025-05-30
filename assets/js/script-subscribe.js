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

// Pricing Toggle
const monthlyToggle = document.getElementById('monthlyToggle');
const annualToggle = document.getElementById('annualToggle');

monthlyToggle.addEventListener('click', () => {
    monthlyToggle.classList.add('bg-primary-orange', 'text-white');
    annualToggle.classList.remove('bg-primary-orange', 'text-white');
    
    document.querySelectorAll('.price-monthly').forEach(el => el.classList.remove('hidden'));
    document.querySelectorAll('.price-annual').forEach(el => el.classList.add('hidden'));
    document.querySelectorAll('.monthly-price').forEach(el => el.classList.add('hidden'));
    document.querySelectorAll('.annual-price').forEach(el => el.classList.remove('hidden'));
    document.querySelectorAll('.annual-save').forEach(el => el.classList.add('hidden'));
});

annualToggle.addEventListener('click', () => {
    annualToggle.classList.add('bg-primary-orange', 'text-white');
    monthlyToggle.classList.remove('bg-primary-orange', 'text-white');
    
    document.querySelectorAll('.price-annual').forEach(el => el.classList.remove('hidden'));
    document.querySelectorAll('.price-monthly').forEach(el => el.classList.add('hidden'));
    document.querySelectorAll('.monthly-price').forEach(el => el.classList.remove('hidden'));
    document.querySelectorAll('.annual-price').forEach(el => el.classList.add('hidden'));
    document.querySelectorAll('.annual-save').forEach(el => el.classList.remove('hidden'));
});

// FAQ Toggle
document.querySelectorAll('.faq-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
        const content = toggle.nextElementSibling;
        const icon = toggle.querySelector('i');
        
        content.classList.toggle('hidden');
        icon.classList.toggle('rotate-180');
    });
});