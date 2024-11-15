
const swiperElements = document.querySelectorAll('.swiper');
swiperElements.forEach(swiperElement => {

    const swiper = new Swiper(swiperElement, {
        direction: 'horizontal',
        navigation: {
            nextEl: swiperElement.querySelector('.js-swiper-next'),
            prevEl: swiperElement.querySelector('.js-swiper-prev'),
        },
        slidesPerView: 1,
        spaceBetween: 0,
    });
});