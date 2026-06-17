/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Підключення базових стилів
import './slider.scss';
// import 'swiper/css/pagination';
import './slider.scss';
// Повний набір стилів з node_modules
// import 'swiper/css/bundle';

// Ініціалізація слайдерів
function initSliders() {
    // Список слайдерів
    // Перевіряємо, чи є слайдер на сторінці
    if (document.querySelector('.bestSpirit__slider')) {
        // <- Вказуємо склас потрібного слайдера
        // Створюємо слайдер
        new Swiper('.bestSpirit__slider', {
            // <- Вказуємо склас потрібного слайдера
            // Підключаємо модулі слайдера
            // для конкретного випадку
            modules: [Navigation, Pagination, Autoplay],
            observer: true,
            observeParents: true,
            slidesPerView: 3.5,
            spaceBetween: 0,
            watchOverflow: false,
            autoHeight: true,
            speed: 800,
            rewind: true,
            //touchRatio: 0,
            //simulateTouch: false,
            // loop: true,
            //preloadImages: false,
            //lazy: true,

            // Ефекти
            effect: 'fade',
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },

            // Пагінація

            pagination: {
                el: '.bestSpirit .control-block .swiper-pagination',
                clickable: true,
                dynamicBullets: true,
                dynamicMainBullets: 3.3,
            },

            // Скроллбар
            /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

            // Кнопки "вліво/вправо"
            navigation: {
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next',
            },

            // Брейкпоінти
            breakpoints: {
                
                320: {
                    slidesPerView: 1,
                    spaceBetween: 30,
					
 

                },
                767.98: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1200: {
                    slidesPerView: 2.5,
                    spaceBetween: 30,
                },
                1800: {
                    slidesPerView: 3.3,
                    spaceBetween: 30,
                },
            },

            // Події
            on: {},
        });
        new Swiper('.reviews__slider', {
            // <- Вказуємо склас потрібного слайдера
            // Підключаємо модулі слайдера
            // для конкретного випадку
            modules: [Navigation, Pagination],
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 62,
            watchOverflow: false,
            autoHeight: true,
            speed: 800,
            rewind: true,
            //touchRatio: 0,
            //simulateTouch: false,
            // loop: true,
            //preloadImages: false,
            //lazy: true,

            // Ефекти
            // effect: 'fade',
            // autoplay: {
            //     // delay: 3000,
            //     // disableOnInteraction: false,
            // },

            // Пагінація

            pagination: {
                el: '.reviews .swiper-pagination',
                clickable: true,
                // dynamicBullets: true,
                // dynamicMainBullets: 3.3,
            },

            // Скроллбар
            /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

            // Кнопки "вліво/вправо"
            navigation: {
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next',
            },

            // Брейкпоінти
            breakpoints: {
              
            },

            // Події
            on: {},
        });
    }
}
document.querySelector('[data-fls-slider]')
    ? window.addEventListener('load', initSliders)
    : null;
