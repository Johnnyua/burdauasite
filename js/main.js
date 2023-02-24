window.addEventListener("load", init);
window.onscroll = function () {
  scrollFunction();
};


function init() {
  const langLink = document.querySelectorAll(".lang__list .lang__link");
  burger.addEventListener("click", showMobileMenu);
  searchIcon.addEventListener("click", showSearch);
  langLink.forEach((elem) => {
    elem.addEventListener("click", changeLanguage);
  });
  topButton.addEventListener("click", topFunction);
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function showMobileMenu(e) {
  const mobileNav = document.querySelector(".header__menu");
  mobileNav.classList.toggle("open");
  burger.classList.toggle("burger-close");
  e.currentTarget.children[0].classList.toggle("burger-rotate-positive");
  e.currentTarget.children[1].classList.toggle("display-none");
  e.currentTarget.children[2].classList.toggle("burger-rotate-negative");
}

function showSearch(e) {
  e.stopPropagation();
  const searchText = document.querySelector(".search__text");
  const searchInput = document.querySelector(".search__input");

  searchText.classList.toggle("active");
  setTimeout(() => searchInput.focus(), 30);
  searchInput.onblur = function () {
    this.value = "";
    searchText.classList.remove("active");
  };
}

function changeLanguage(e) {
  const activeLang = document.querySelector(".lang__link.active");
  if (!e.target.classList.contains("active")) {
    activeLang.classList.remove("active");
    e.target.classList.add("active");
  }
}

// $("#menuServiceOpen").click(
//   function (event) {
//     event.stopPropagation();
//     $(".header__menu-services").toggleClass("active");
//   },
// );

$("body").click(function (e) {
  $(".header__menu-services").removeClass("active");
});

const reviewItemList = document.querySelectorAll(".reviews__item");
const reviewItemCountClassName = ".reviews__item .text__text";
const reviewItemBtnClassName = ".reviews__item .item__btn";

window.addEventListener("resize", function () {
  showContainerElementByClassName(
    reviewItemList,
    reviewItemCountClassName,
    reviewItemBtnClassName
  );
});

function showContainerElementByClassName(
  containerList,
  classNameCount,
  classNameShow
) {
  const rowCount = 6;
  for (i = 0; i < containerList.length; i++) {
    const containerItem = containerList[i].querySelector(classNameCount);
    const currentRowCount = computeRowContainer(containerItem);
    const showEl = containerList[i].querySelector(classNameShow);
    if (currentRowCount > rowCount) {
      showEl.classList.add("show");
      showEl.addEventListener("click", function (e) {
        showMoreText(e, containerItem, showEl);
      });
    } else {
      showEl.classList.remove("show");
    }
  }
}

function showMoreText(e, containerItem, showEl) {
  containerItem.parentElement.classList.toggle("hide");
  showEl.classList.toggle("less");
}

function computeRowContainer(container) {
  const style = window.getComputedStyle(container);
  const containerHeight = parseFloat(style.height);
  const lineHeight = parseFloat(style.lineHeight);

  const currentRowsCount = Math.ceil(containerHeight / lineHeight);

  return currentRowsCount;
}

showContainerElementByClassName(
  reviewItemList,
  reviewItemCountClassName,
  reviewItemBtnClassName
);
