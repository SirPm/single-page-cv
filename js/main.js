const menuBtn = document.getElementById('hamburger');
nav = document.getElementById('menuLinks');

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    nav.classList.toggle('hidden');
    console.log(nav)
};