// AOS Initialization
AOS.init({
    duration: 1000,
    once: true
});

// Particles.js with accounting theme (numbers, currency-like)
particlesJS("particles-js", {
    "particles": {
        "number": {"value": 80},
        "size": {"value": 4},
        "move": {"speed": 2},
        "shape": {"type": "circle"},
        "line_linked": {"enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.3, "width": 1}
    },
    "interactivity": {
        "events": {
            "onhover": {"enable": true, "mode": "repulse"}
        }
    }
});

// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
