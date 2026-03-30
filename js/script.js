// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Fade In Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Form Handler
document.getElementById('joinForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const name = formData.get('name') || 'Gamer Baru';
    
    // Demo alert - ganti dengan API call
    alert(`🎉 Selamat datang ${name}! Kamu sudah gabung GameHub.\nCek Discord/WhatsApp untuk konfirmasi!`);
    this.reset();
});

// Header Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255,255,255,0.98)';
        header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.15)';
    } else {
        header.style.background = 'rgba(255,255,255,0.95)';
        header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
    }
});

// Mobile Menu Toggle (sederhana)
document.querySelector('.hamburger')?.addEventListener('click', function() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
});