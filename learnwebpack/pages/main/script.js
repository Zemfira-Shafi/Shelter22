const body = document.querySelector("body");
const burger = document.querySelector(".header-burger");
const nav = document.querySelector(".header-nav");
const list = document.querySelector(".header-list");

function toggleNav() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
  body.classList.toggle("active");
}

function closeNav() {
  burger.classList.remove("active");
  nav.classList.remove("active");
  body.classList.remove("active");
}

burger.addEventListener("click", toggleNav);
list.addEventListener("click", closeNav);

// carousel

const BTN_LEFT = document.querySelector(".left");
const BTN_RIGHT = document.querySelector(".right");
const CAROUSEL = document.querySelector(".cards-container");
const ITEMS = document.querySelector(".cards");

const createCardTamplate = () => {
  const cards = document.createElement("div");
  cards.classList.add("cards");
  return cards;
};

const moveLeft = () => {
  CAROUSEL.classList.add("transition-left");
  BTN_LEFT.removeEventListener("click", moveLeft);
  BTN_RIGHT.removeEventListener("click", moveRight);
};

const moveRight = () => {
  CAROUSEL.classList.add("transition-right");
  BTN_LEFT.removeEventListener("click", moveLeft);
  BTN_RIGHT.removeEventListener("click", moveRight);
};

BTN_LEFT.addEventListener("click", moveLeft);
BTN_RIGHT.addEventListener("click", moveRight);

CAROUSEL.addEventListener("animationend", (animationEvent) => {
  let changedCards;
  if (animationEvent.animationName === "moveLeft") {
    CAROUSEL.classList.remove("transition-left");
    changedCards = ITEMS;
    document.querySelector(".active-cards").innerHTML = ITEMS.innerHTML;
  } else {
    CAROUSEL.classList.remove("transition-right");
    changedCards = ITEMS;
    document.querySelector(".active-cards").innerHTML = ITEMS.innerHTML;
  }

  changedCards.innerHTML = "";
  for (let i = 0; i < 3; i++) {
    const cards = createCardTamplate();
    cards.innerText = Math.floor(Math.random() * 8);
    changedCards.append(cards);
  }

  BTN_LEFT.addEventListener("click", moveLeft);
  BTN_RIGHT.addEventListener("click", moveRight);
});
