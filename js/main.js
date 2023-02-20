const nav = document.querySelector(".nav");
const navIcon = document.querySelector(".nav-icon");
const navLinks = nav.querySelectorAll("a");

navIcon.addEventListener("click", function () {
  navIcon.classList.toggle("nav-icon--active");
  nav.classList.toggle("nav--active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    nav.classList.remove("nav--active");
    navIcon.classList.remove("nav-icon--active");
  });
});

const searchForm = document.querySelector(".search");
const searchBtn = document.querySelector(".search__button");

searchBtn.addEventListener("click", function (e) {
  if (!searchForm.classList.contains("search--visible")) {
    e.preventDefault();
    searchForm.classList.toggle("search--visible");
  }
});
