// ф-ция вывода слайдера на главной
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
const modalMenuBtns = document.querySelectorAll(".js-modal-menu-btn");
const modalMenuCloseBtn = document.querySelector("#modal-menu-close-btn");
const modalLeaveRequestBtn = document.querySelector("#modal-leave-request-btn");

// обработка кнопок окрытия модального окна меню
if (modalMenuBtns.length > 0 && modalMenuDesktop) {
  modalMenuBtns.forEach((modalMenuBtn) => {
    modalMenuBtn.addEventListener("click", () => {
      modalMenuDesktop.classList.add("open-menu");
    });
  });
} else {
  console.error("Один из элементов не найден: кнопки или модальное окно");
}
// обработка кнопок закрытия модального окна меню
modalMenuCloseBtn.addEventListener("click", () => {
  modalMenuDesktop.classList.remove("open-menu");
});
modalLeaveRequestBtn.addEventListener("click", () => {
  modalMenuDesktop.classList.remove("open-menu");
});

// ф-ция вывода фиксированного меню
document.addEventListener("DOMContentLoaded", function () {
  const fixedTopMenu = document.querySelector("#js-fixed-menu");
  let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // ф-ция обработки скролла
  function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollDirection = scrollTop > lastScrollTop ? "down" : "up";
    const isNearTop = scrollTop < 100;

    if (scrollDirection === "up" && !isNearTop) {
      fixedTopMenu.classList.add("fixed-menu-open");
    } else {
      fixedTopMenu.classList.remove("fixed-menu-open");
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }

  // Применяем throttle (вызов не чаще, чем раз в 100 мс)
  const throttledScroll = _.throttle(handleScroll, 100);

  // Вешаем оптимизированный обработчик
  window.addEventListener("scroll", throttledScroll);
});
