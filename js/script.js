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

const modalMenuDesktop = document.querySelector("#modal-menu-desktop");
const modalMenuBtn = document.querySelector("#modal-menu-btn");

modalMenuBtn.addEventListener("click", () => {
  modalMenuDesktop.classList.add("open-menu");
});
