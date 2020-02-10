const hamburger = document.querySelector(".hamburger");
const sideBar = document.querySelector(".navigation");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger--active");
    sideBar.classList.toggle("navigation--active");
})