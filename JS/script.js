// NAVIGATION
const nav__btn = document.querySelector(".header__label");
const check = document.querySelector(".header__check");
const slider = document.querySelector(".header__nav");
const bk = document.querySelector(".bk");

nav__btn.addEventListener("click", function () {
  slider.classList.toggle("header__nav--active");
  bk.classList.toggle("bk--active");
  document.body.classList.toggle("scroll-lock");
});

bk.addEventListener("click", function () {
  slider.classList.toggle("header__nav--active");
  bk.classList.toggle("bk--active");
  document.body.classList.toggle("scroll-lock");
  check.checked = false;
});
// ------------------
