const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

burger.addEventListener('click', function() {
    this.classList.toggle('burger_changed');
    menu.classList.toggle('menu_visible');
});