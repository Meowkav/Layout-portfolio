/* GENERAL */
function getId(id) {
    let el = document.getElementById(id);
    return el;
};

/* BURGER */
const menuBurger = getId('burger');
const menuList = getId('header__menu');

menuBurger.onclick = function () {
    menuBurger.classList.toggle('active');
    menuList.classList.toggle('active');
}

function navItemClick() {
    menuBurger.classList.remove('active');
    menuList.classList.remove('active');
}

let navList = [getId('header__home'), getId('header__about'), getId('header__work'), getId('header__blog'), getId('header__contact')];

for (let i = 0; i < navList.length; i++) {
    navList[i].addEventListener('click', navItemClick);
}

/* NAV */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        getId("nav-container").style.transform = "translateX(-50%)";
        menuBurger.classList.remove('active');
        menuList.classList.remove('active');
    } else {
        getId("nav-container").style.transform = "translate(-50%, -100%)";
        menuBurger.classList.remove('active');
        menuList.classList.remove('active');
    }
    prevScrollpos = currentScrollPos;
}

