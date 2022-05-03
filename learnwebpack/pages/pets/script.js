const burger = document.querySelector(".header-burger");
const nav = document.querySelector(".header-nav");
const list = document.querySelector(".header-list");

function toggleNav() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
}

function closeNav() {
  burger.classList.remove("active");
  nav.classList.remove("active");
}

burger.addEventListener("click", toggleNav);
list.addEventListener("click", closeNav);
