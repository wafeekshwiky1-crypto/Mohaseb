// AOS Initialization
AOS.init({
    duration: 1000,
    once: true
});

// Particles.js
particlesJS("particles-js", {
    "particles": {
        "number": {"value": 60},
        "size": {"value": 3},
        "move": {"speed": 2},
        "line_linked": {"enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1}
    }
});

// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
