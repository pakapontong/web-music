// sticky

window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
})

// scroll reveal
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.banner, .heading', { origin: 'top' });
// ScrollReveal().reveal('.content, .services-container, ', { origin: 'bottom' });
ScrollReveal().reveal('.about', { origin: 'left' });
ScrollReveal().reveal('.music, .about .imgbox', { origin: 'right' });



// typed js 
const typed = new Typed('.multiple-text', {
    strings: ['Welcome :D ', 'Good Music'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});