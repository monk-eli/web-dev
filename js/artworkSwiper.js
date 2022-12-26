// Иницализация объекта Swiper
const swiper = new Swiper('.swiper-container', {
    // Зацикливание слайдов
    loop:"true",
    // Отображение одновременно только одного слайда
    slidesPerView: 1,

    // Инициализация кнопок навигации
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

