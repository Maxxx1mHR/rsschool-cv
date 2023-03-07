new WOW().init();

const menu = document.querySelector('.menu');
const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close')


hamburger.addEventListener('click', () => {
    menu.classList.add('menu_active');

});

close.addEventListener('click', () => {
    menu.classList.remove('menu_active');
});