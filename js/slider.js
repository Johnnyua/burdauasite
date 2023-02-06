new Swiper(".reviews-swiper-container", {
  slidesPerView: 3,
  grid: {
    rows: 1,
  },
  pagination: {
    el: ".reviews__cards_pagination",
    type: "bullets",
    clickable: true,
    // dynamicBullets: true,
  },
  navigation: {
    nextEl: ".reviews__cards_button-next",
    prevEl: ".reviews__cards_button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      centeredSlides: true,
    },
    701: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});
