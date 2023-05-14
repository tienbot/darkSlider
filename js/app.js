document.querySelectorAll('.slider').forEach((n, i) => {

window[`slider${i+1}`] = new Swiper(n, {
    freeMode: true,
    centeredSlides: true,
    direction: 'vertical',
    mousewheel: true,
    slidesPerView: 2.5,
    slidesOffsetBefore: -125,
    breakpoints: {
        // when window width is >= 375px
        375: {
            slidesPerView: 1.75,
        }
    }
})
})
bindSwipers(slider1, slider2, slider3, slider4)