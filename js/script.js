const workBlockSwiper = new Swiper(".work-block__slider-swiper", {
  // Optional parameters
  slidesPerView: 4,
  direction: "horizontal",
  loop: true,
  spaceBetween: 14,

  // Navigation arrows
  navigation: {
    nextEl: ".work-block__swiper-button-next",
    prevEl: ".work-block__swiper-button-prev",
  },
});
