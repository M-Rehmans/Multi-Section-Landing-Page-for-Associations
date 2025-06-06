const hamBurger = document.querySelector('.hambuger-Box .fa-bars');
const registerBntNav = document.querySelector('.navbar .btn-Register');
const navLinksBox = document.querySelector('.navbar .bnt-links-box');

hamBurger.addEventListener('click', () => {
    registerBntNav.classList.toggle('active');
    navLinksBox.classList.toggle('active');
})