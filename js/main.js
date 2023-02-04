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

$("#menuServiceOpen").click(
  function (event) {
    event.stopPropagation();
    $(".header__menu-services").toggleClass("active");
  },
);

$("body").click(
  function() {
    $(".header__menu-services").removeClass("active");
  },
);

const reviewItemList = document.querySelectorAll(
  ".reviews__item"
);
const reviewItemCountClassName = ".cards__text p";
const reviewItemBtnClassName = ".cards__btn";

window.addEventListener("resize", function() {showContainerElementByClassName(
  reviewItemList,
  reviewItemCountClassName,
  reviewItemBtnClassName
);})

function showContainerElementByClassName(containerList, classNameCount, classNameShow) {
  const rowCount = 6;
  for (i = 0; i < containerList.length; i++) {
    const containerItem = containerList[i].querySelector(classNameCount);
    const currentRowCount = computeRowContainer(containerItem);
    const showEl = containerList[i].querySelector(classNameShow); 
    if (currentRowCount > rowCount) {
      showEl.classList.add("show");
      showEl.addEventListener("click", function (e) { showMoreText(e, containerItem, showEl); });
    } else {
      showEl.classList.remove("show");  
      // showEl.removeEventListener("click", function (e) {
      //   showMoreText(e, containerItem, showEl);
      // });
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