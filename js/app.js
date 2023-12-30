// show dropdown
let menuHeaderDropdown = document.querySelectorAll('.menu_item:not(:last-child)>a');

const showDropdown = (e) => {
    let dropdown = e.target.nextElementSibling;
    dropdown.classList.toggle('dropdown_active');
    if (dropdown.style.height == 0) {
        dropdown.style.height = `${dropdown.scrollHeight}px`;
    }
}

const hideDropdown = (e) => {
    menuHeaderDropdown.forEach((item) => {
        let dropdown = item.nextElementSibling;
        if (!e.target.matches('.menu_item_link') || e.target != item) {
            dropdown.classList.remove('dropdown_active');
        }
    })
}

menuHeaderDropdown.forEach((item) => {
    item.addEventListener('click', showDropdown);
})

document.body.addEventListener('click', hideDropdown);

// show user dropdown
let iconUser = document.querySelector('.icon_user');
iconUser.addEventListener('click', showDropdown);
document.body.addEventListener('click', (e) => {
    if (!e.target.matches('.icon_user')) {
        iconUser.nextElementSibling.classList.remove('dropdown_active');
    }
});

// show dropdown mobile menu
let shopAll = document.querySelector(".shopall > a");
shopAll.addEventListener('click', (e) => {
    let dropdown = e.target.nextElementSibling;
    dropdown.classList.toggle('dropdown_active');
    if (dropdown.classList.contains('dropdown_active')) {
        dropdown.style.height = `${dropdown.scrollHeight}px`;
    } else {
        dropdown.style.height = `0px`;
    }
});

// show menu side, cart side
let iconToggle = document.querySelector('.icon_toggle');
let iconCart = document.querySelector('.icon_cart');
// let cartSide = document.querySelector('.cart_side');
// let mobileMenu = document.querySelector('.mobile_menu');
let overlay = document.querySelector('.overlay');
let iconClose = document.querySelectorAll('.icon_close_menu');
const showSide = (e, iconClass, classElementShow) => {
    let nodeElementShow = document.querySelector(classElementShow);
    if (e.target.matches(iconClass)) {
        nodeElementShow.classList.add('side_active');
        overlay.classList.add('overlay_fixed');
    }
}
const hideSide = (e, classTarget, classElementHide) => {
    let nodeElementShow = document.querySelector(classElementHide);
    if (e.target.classList.contains(classTarget) && nodeElementShow.classList.contains('side_active')) {
        nodeElementShow.classList.remove('side_active');
        overlay.classList.remove('overlay_fixed');
    }
}
iconToggle.addEventListener('click', (e) => showSide(e, '.icon_toggle', '.mobile_menu'));
overlay.addEventListener('click', (e) => hideSide(e, 'overlay_fixed', '.mobile_menu'));
iconCart.addEventListener('click', (e) => showSide(e, '.icon_cart', '.cart_side'));
overlay.addEventListener('click', (e) => hideSide(e, 'overlay_fixed', '.cart_side'));
iconClose.forEach((item) => {
    item.addEventListener('click', (e) => hideSide(e, 'icon_close_menu', item.closest('.mobile_menu') ? '.mobile_menu' : '.cart_side'))
})

// fixed header
let headerTop = document.querySelector('.header_top')
window.addEventListener('scroll', (e) => {
    if (window.scrollY > headerTop.getBoundingClientRect().height) {
        headerTop.nextElementSibling.classList.add('invisible_header');
    } else if (window.scrollY < headerTop.getBoundingClientRect().height && window.innerWidth > 768) {
        headerTop.nextElementSibling.classList.remove('invisible_header');
    }
})

window.addEventListener('resize', (e) => {
    if (window.innerWidth < 768) {
        headerTop.nextElementSibling.classList.add('invisible_header');
    } else if (window.innerWidth >= 768 && window.scrollY < headerTop.getBoundingClientRect().height) {
        headerTop.nextElementSibling.classList.remove('invisible_header');
    }
})
window.addEventListener('DOMContentLoaded', (e) => {
    if (window.innerWidth < 768 || window.scrollY > headerTop.getBoundingClientRect().height) {
        headerTop.nextElementSibling.classList.add('invisible_header');
    }
})







document.body.addEventListener('click', (e)=> {
    console.log(e.target);
})
