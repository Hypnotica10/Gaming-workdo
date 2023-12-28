// show dropdown
// let menuHeaderDropdown = document.querySelectorAll(".menu_item:not(:last-child)>a");
let menuHeaderDropdown = document.querySelectorAll(".menu_item:not(:last-child)");
const showDropdown = (e)=> {
    // let dropdown = e.target.nextElementSibling;
    let dropdown = e.currentTarget.querySelector("div");
    dropdown.classList.toggle("dropdown_active");
}
menuHeaderDropdown.forEach((item)=> {
    item.addEventListener('click', showDropdown);
})

// show user dropdown
let iconUser = document.querySelector(".icon_user");
iconUser.addEventListener('click', showDropdown);

