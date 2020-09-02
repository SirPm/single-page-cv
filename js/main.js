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

document.querySelector('#cv').addEventListener('click', () => {
    alert(`Oh I'm sorry, but the cv is unavailable at the moment. But to get it simply send me a message in the contact section and I'll definitely reply with a copy of my cv`);
});