/*const menuBtn = document.getElementById('hamburger');
nav = document.getElementById('menuLinks');

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    nav.classList.toggle('hidden');
    console.log(nav)
};*/

navSlide = () => {
    const nav = document.querySelector('.nav-links');
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle nav
        nav.classList.toggle('nav-active');

        // Animate links
        navLinks.forEach( (link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`;
            }
        });

        // Animate the burger button
        burger.classList.toggle('toggleBurger');
    });
}

navSlide();