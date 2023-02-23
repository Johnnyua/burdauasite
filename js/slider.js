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

new Swiper(".projects__slides_max_container", {
  slidesPerView: 1,
  centeredSlides: true,
  watchSlidesVisibility: true,
  // initialSlide: 2,
  // slideToClickedSlide: true,
  loop: true,
  navigation: {
    nextEl: ".projects__slides_button-next",
    prevEl: ".projects__slides_button-prev",
  },
  pagination: {
    el: ".projects__slides_pagination",
    type: "bullets",
    clickable: true,
    // dynamicBullets: true,
  },
  thumbs: {
    swiper: {
      el: ".projects__slides__preview_container",
      centeredSlides: true,

      // initialSlide: 2,
      loop: true,
      slideToClickedSlide: true,
      breakpoints: {
        320: {
          slidesPerView: 3,
        },
        701: {
          slidesPerView: 4.5,
        },
        991: {
          slidesPerView: 5.5,
        },
      },
      navigation: {
        nextEl: ".projects__slides_button-next",
        prevEl: ".projects__slides_button-prev",
      },
    },
  },
});

new Swiper(".magazines__slides_container", {
  slidesPerView: 1.5,
  centeredSlides: true,
  loop: true,
  slideToClickedSlide: true,
  watchSlidesVisibility: true,
  pagination: {
    el: ".magazines__slides_pagination",
    type: "bullets",
    clickable: true,
  },
});