    var burger = document.querySelector('.burger');
    var burgerMenu = document.querySelector('.burger__menu');

    function AddActive() {
        burger.classList.toggle('burger__active');
        burgerMenu.classList.toggle('burger__menu-active');
        document.body.classList.toggle("bur__men-act");
    };