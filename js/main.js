const body = document.body;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    body.classList.add("mobile");
} else {
    body.classList.remove("mobile");
}

window.addEventListener("load", init);

function init() {
    burger.addEventListener("click", showMobileMenu);
    search.addEventListener("click", showSearchInput);
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
}