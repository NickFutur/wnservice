AOS.init({
  offset: 120, // Смещение (в px) от оригинальной позиции
  delay: 200, // Задержка (мс)
  duration: 1000, // Длительность анимации (мс)
  easing: "ease", // easing функция
  once: false, // Анимация только один раз
  mirror: true, // Анимировать при скролле вверх
  anchorPlacement: "top-bottom", // top-bottom, top-center, top-top и др.
});

// ф-ция вывода слайдера на главной
const workBlockSwiper = new Swiper("#work-block", {
  // Optional parameters
  slidesPerView: 4,
  direction: "horizontal",
  loop: true,
  spaceBetween: 14,

  // Navigation arrows
  navigation: {
    nextEl: ".js-work-block-next",
    prevEl: ".js-work-block-prev",
  },
});

// ф-ция вывода слайдера на главной
const wathcMorekBlockSwiper = new Swiper("#watch-more-slider", {
  // Optional parameters
  slidesPerView: 4,
  direction: "horizontal",
  loop: true,
  spaceBetween: 14,

  // Navigation arrows
  navigation: {
    nextEl: ".js-watch-more-next",
    prevEl: ".js-watch-more-prev",
  },
});

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 8,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
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

// обработка кнопок в блоке о компании
const advantagesPluses = document.querySelectorAll(".advantages-block__pluse");

advantagesPluses.forEach((advantagesPlus) => {
  const plusDesc = advantagesPlus.querySelector(
    ".advantages-block__pluse-desc"
  );
  const plusBtn = advantagesPlus.querySelector(".advantages-block__pluse-btn");
  let timer;
  let timeOut = 5000;

  plusBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    plusDesc.classList.toggle("pluse-desc-open");

    if (timer) {
      clearTimeout(timer);
    }

    if (plusDesc.classList.contains("pluse-desc-open")) {
      timer = setTimeout(() => {
        plusDesc.classList.remove("pluse-desc-open");
      }, timeOut);
    }
  });

  document.addEventListener("click", (e) => {
    if (!advantagesPlus.contains(e.target)) {
      plusDesc.classList.remove("pluse-desc-open");
      if (timer) {
        clearTimeout(timer);
      }
    }
  });
});

const DISPLAY_NONE = "display-none";
const DISPLAY_FLEX = "display-flex";
const modalPodmenu = document.getElementById("modal-podmenu");
const modalMainMenu = document.querySelector(".js-modal-main-menu-mob");
const getPodmenuLinks = document.querySelectorAll(".modal-menu__get-podmenu");
const podmenuBackBtn = modalPodmenu.querySelector("#podmenu-back-btn");
const podmenuService = modalPodmenu.querySelector(".js-podmenu-service");
const podmenuEquipment = modalPodmenu.querySelector(".js-podmenu-equipment");

getPodmenuLinks.forEach((getPodmenuLink) => {
  getPodmenuLink.addEventListener("click", (e) => {
    e.preventDefault;
    modalMainMenu.classList.add(DISPLAY_NONE);
    modalPodmenu.classList.add(DISPLAY_FLEX);
    if (getPodmenuLink.textContent == "Услуги") {
      podmenuEquipment.classList.add(DISPLAY_NONE);
      podmenuService.classList.add(DISPLAY_FLEX);
    } else if (getPodmenuLink.textContent == "Оборудование") {
      podmenuEquipment.classList.add(DISPLAY_FLEX);
      podmenuService.classList.add(DISPLAY_NONE);
    } else {}
  });
});

podmenuBackBtn.addEventListener("click", () => {
  modalMainMenu.classList.remove(DISPLAY_NONE);
  modalPodmenu.classList.remove(DISPLAY_FLEX);
  podmenuService.classList.remove(DISPLAY_NONE);
  podmenuService.classList.remove(DISPLAY_FLEX);
  podmenuEquipment.classList.remove(DISPLAY_NONE);
  podmenuEquipment.classList.remove(DISPLAY_FLEX);
});

// фон для блока reg-maintenance-block
// document.addEventListener("DOMContentLoaded", function () {
//   const bgOverlay = document.querySelector(".reg-maintenance-block__font");

//   if (!bgOverlay) return;

//   bgOverlay.style.willChange = "transform";
//   let ticking = false;
//   let lastScroll = 0;

//   function updateParallax() {
//     const scrollPosition = window.scrollY || document.documentElement.scrollTop;
//     const scrollSpeed = 0.3;
//     const screenWidth = Math.min(
//       window.innerWidth,
//       document.documentElement.clientWidth
//     );

//     let translateValue;
//     if (screenWidth < 680) {
//       translateValue = 3000 - scrollPosition * scrollSpeed;
//     } else if (screenWidth < 1024) {
//       translateValue = 2100 - scrollPosition * scrollSpeed;
//     } else {
//       translateValue = 1900 - scrollPosition * scrollSpeed;
//     }

//     bgOverlay.style.transform = `translateY(${translateValue}px)`;
//   }

//   window.addEventListener(
//     "scroll",
//     function () {
//       lastScroll = window.scrollY;
//       if (!ticking) {
//         window.requestAnimationFrame(function () {
//           updateParallax();
//           ticking = false;
//         });
//         ticking = true;
//       }
//     },
//     { passive: true }
//   );

//   // Инициализация при загрузке
//   updateParallax();
// });

// открытие и скрытие блоков jiwu и seakeeper
const productsJiwuBlock = document.querySelector(".products-1");
const productsSeakeeperBlock = document.querySelector(".products-2");
const seakeeperBtn = document.querySelector(".js-service-catalog__link-2");
const jiwuBtn = document.querySelector(".js-service-catalog__link-1");

function hideAllBlocks() {
  productsJiwuBlock.style.display = "none";
  productsSeakeeperBlock.style.display = "none";
}

seakeeperBtn.addEventListener("click", function (e) {
  e.preventDefault();
  hideAllBlocks();
  productsSeakeeperBlock.style.display = "flex";
});

jiwuBtn.addEventListener("click", function (e) {
  e.preventDefault();
  hideAllBlocks();
  productsJiwuBlock.style.display = "flex";
});

hideAllBlocks();
productsJiwuBlock.style.display = "flex";