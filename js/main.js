// const body = document.body;
// if (
//   /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
//     navigator.userAgent
//   )
// ) {
//   body.classList.add("mobile");
// } else {
//   body.classList.remove("mobile");
// }

window.addEventListener("load", init);
const langLink = document.querySelectorAll(".lang__list .lang__link");

function init() {
  burger.addEventListener("click", showMobileMenu);
    search.addEventListener("click", showSearchInput);
    langLink.forEach((elem) => {
        elem.addEventListener("click", changeLanguage);;
    });
}

function showMobileMenu(e) {
  const mobileNav = document.querySelector(".header__menu");
  mobileNav.classList.toggle("open");
  burger.classList.toggle("burger-close");
  e.currentTarget.children[0].classList.toggle("burger-rotate-positive");
  e.currentTarget.children[1].classList.toggle("display-none");
  e.currentTarget.children[2].classList.toggle("burger-rotate-negative");
}

function showSearchInput(e) {
  const searchInput = document.querySelector(".search_input");
  searchInput.classList.toggle("active");
  searchInput.focus();
  searchInput.onblur = function () {
    this.value = "";
    this.classList.remove("active");
  };
}

function changeLanguage(e) {
  const activeLang = document.querySelector(".lang__link.active");
  if (!e.target.classList.contains("active")) {
    activeLang.classList.remove("active");
    e.target.classList.add("active");
  }
}
