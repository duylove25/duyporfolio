//menu
const menu = document.querySelector(".navbar_links")
const menuButtom = document.querySelector(".navbar_icons")
const overlay = document.querySelector("#overlay")

menuButtom.addEventListener('click', ()=>{
    menu.classList.toggle("navbar_open");
    menuButtom.classList.toggle("open");
    overlay.classList.toggle("show");
});

overlay.addEventListener('click', ()=>{
    menu.classList.toggle("navbar_open");
    menuButtom.classList.toggle("open");
    overlay.classList.toggle("show");
})