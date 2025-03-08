document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-btn");
    const closeBtn = document.querySelector(".close-btn");
    const menu = document.querySelector(".menu");
    const overlay = document.querySelector(".overlay");

    function openMenu() {
        menu.classList.add("open");
        overlay.classList.add("active");
    }

    function closeMenu() {
        menu.classList.remove("open");
        overlay.classList.remove("active");
    }

    menuBtn.addEventListener("click", openMenu);
    closeBtn.addEventListener("click", closeMenu);
    overlay.addEventListener("click", closeMenu);
});
