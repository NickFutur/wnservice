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
  loop: true,
  breakpoints: {
    480: {
      spaceBetween: 4,
    },
  },
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  loop: true,
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
    } else {
    }
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

if (seakeeperBtn && jiwuBtn) {
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
}

// vacancience

document.addEventListener("DOMContentLoaded", function () {
  const vacCategBtns = document.querySelectorAll(".vac-block__nav button");
  const vacCatalogCards = document.querySelectorAll(".vac-block__card");

  // Активируем кнопку "Все города" по умолчанию
  vacCategBtns.forEach((btn) => {
    // if (btn.textContent.trim() === "Все города") {
    //   btn.classList.add('vac-active');
    // }
  });

  // Обработчик кликов для кнопок фильтрации
  vacCategBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Удаляем активный класс у всех кнопок
      vacCategBtns.forEach((b) => b.classList.remove("vac-active"));
      // Добавляем активный класс текущей кнопке
      this.classList.add("vac-active");

      const cityName = this.textContent.trim();
      filterCardsByCity(cityName);
    });
  });

  // Функция фильтрации карточек по городу
  function filterCardsByCity(city) {
    vacCatalogCards.forEach((card) => {
      if (city === "Все города") {
        card.style.display = "block";
      } else {
        const cardCity = card.dataset.city;
        card.style.display = cardCity === city ? "block" : "none";
      }
    });
  }
});

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollTrigger);

// Глобальная функция для управления всеми анимациями
function initScrollAnimations() {
  // 1. Полная очистка всех предыдущих анимаций
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

  // 2. Инициализация блока истории
  initHistoryScroll();

  // 3. Инициализация блока оборудования
  initEquipmentScroll();

  // 4. Принудительное обновление
  ScrollTrigger.refresh();
}

// Блок истории
function initHistoryScroll() {
  const section = document.querySelector(".history-block");
  if (!section) return;

  const container = section.querySelector(".history-block__content");
  const track = container?.querySelector(".history-block__content-scroll");
  const cards = gsap.utils.toArray(".history-block__card");

  if (!container || !track) return;

  if (window.innerWidth >= 650) {
    // DESKTOP - вертикальный скролл
    const pinTrigger = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: () => `+=${cards.length * window.innerHeight * 0.6}`,
      pin: container,
      pinSpacing: true,
      anticipatePin: 1,
      id: "history-pin",
    });

    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1,
          y: 0,
          scrollTrigger: {
            trigger: section,
            start: () => `top+=${i * window.innerHeight * 0.6} top`,
            end: () => `+=${window.innerHeight * 0.6}`,
            scrub: true,
            id: `history-card-${i}`,
            markers: false,
          },
        }
      );
    });
  } else {
    // MOBILE - горизонтальный скролл с фиксацией
    const scrollWidth = track.scrollWidth - container.clientWidth;

    // Фиксация всей секции
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: () => `+=${scrollWidth + 100}`,
      pin: true,
      pinSpacing: false,
      id: "history-mobile-pin",
    });

    // Горизонтальный скролл
    const horizontalScroll = gsap.to(track, {
      x: -scrollWidth,
      ease: "none",
      scrollTrigger: {
        trigger: track,
        start: "left left",
        end: () => `+=${scrollWidth}`,
        scrub: true,
        invalidateOnRefresh: true,
        id: "history-horizontal-scroll",
      },
    });

    // Анимация карточек
    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { autoAlpha: 0, x: 20 },
        {
          autoAlpha: 1,
          x: 0,
          scrollTrigger: {
            trigger: card,
            start: () => `left+=${i * card.offsetWidth - 100} left`,
            end: () => `left+=${card.offsetWidth} left`,
            scrub: true,
            containerAnimation: horizontalScroll.scrollTrigger,
            id: `history-mobile-card-${i}`,
          },
        }
      );
    });
  }
}

// Блок оборудования
function initEquipmentScroll() {
  const container = document.querySelector(".our-equip-block__content");
  if (!container) return;

  const track = container.querySelector(".our-equip-block__content-scroll");
  if (!track) return;

  const gap = parseFloat(getComputedStyle(track).gap) || 0;
  const scrollLength = track.scrollWidth - container.clientWidth + gap;

  // Основная анимация скролла
  gsap.to(track, {
    x: -scrollLength,
    ease: "none",
    scrollTrigger: {
      trigger: container,
      start: "top top",
      end: () => `+=${scrollLength}`,
      pin: true,
      scrub: true,
      pinSpacing: true,
      invalidateOnRefresh: true,
      id: "equipment-horizontal",
      onRefresh: (self) => {
        // Корректировка при ресайзе
        if (self.progress > 0.5) {
          gsap.to(track, { x: -scrollLength, duration: 0.3 });
        }
      },
    },
  });

  // Дополнительные анимации для элементов
  gsap.utils.toArray(".our-equip-block__item").forEach((item, i) => {
    gsap.from(item, {
      opacity: 0,
      x: 50,
      duration: 0.5,
      scrollTrigger: {
        trigger: item,
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none reverse",
        id: `equip-item-${i}`,
      },
    });
  });
}

// Инициализация и обработчики
window.addEventListener("load", initScrollAnimations);

let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    initScrollAnimations();
  }, 200);
});

// Очистка при переходе между страницами (для SPA)
window.addEventListener("beforeunload", () => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
});
