var _PREV = _PREV_1 = 1;
var courseSwiper;
var _WIDTH;
var SCREEN_WIDTH = 970;

window.onload = function () {};

$(document).ready(function () {
    new WOW().init(); //鍒濆鍖杦ow.js鍔ㄧ敾    
    var robotSwiper;

    _WIDTH = $(document).width();

    courseSwiper = new Swiper('.course-wrap', {
        // autoplay : 3000,//鍙€夐€夐」锛岃嚜鍔ㄦ粦鍔�
        speed: 1000,
        loop: true, //鍙€夐€夐」锛屽紑鍚惊鐜�
        pagination: '.course-pagination', // 寮€鍚垎椤靛櫒
        paginationClickable: true,
        prevButton: '.course-button-prev',
        nextButton: '.course-button-next',
        effect: 'fade',
        fade: {
            crossFade: true
        },
        followFinger: false,
        onInit: function onInit(swiper) {
            _PREV_1 = _PREV = swiper.activeIndex;

            // slide=swiper.slides.eq(0);
            // slide.removeClass('ani-slide');
        }, onTransitionStart: function onTransitionStart(swiper) {
            slide = swiper.slides;
            if (_WIDTH > SCREEN_WIDTH) {
                slide.eq(_PREV).find('.left-bar').css({
                    'transform': 'translateY(100%)'
                });
                slide.eq(_PREV).find('.right-bar').css({
                    'transform': 'translateY(-100%)'
                });
                slide.eq(swiper.activeIndex).find('.left-bar').css({
                    'transform': 'translateY(0%)'
                });
                slide.eq(swiper.activeIndex).find('.right-bar').css({
                    'transform': 'translateY(0%)'
                });
            } else {
                slide.eq(_PREV).find('.left-bar').css({
                    'transform': 'translateX(100%)'
                });
                slide.eq(_PREV).find('.right-bar').css({
                    'transform': 'translateX(-100%)'
                });
                slide.eq(swiper.activeIndex).find('.left-bar').css({
                    'transform': 'translateX(0%)'
                });
                slide.eq(swiper.activeIndex).find('.right-bar').css({
                    'transform': 'translateX(0%)'
                });
            }
        }, onTransitionEnd: function onTransitionEnd(swiper) {
            _PREV = swiper.activeIndex == 6 ? 1 : swiper.activeIndex;
            if (_WIDTH > SCREEN_WIDTH) {
                slide.eq(_PREV_1).find('.left-bar').css({
                    'transform': 'translateY(-100%)'
                });
                slide.eq(_PREV_1).find('.right-bar').css({
                    'transform': 'translateY(100%)'
                });
                slide.eq(_PREV).find('.left-bar,.right-bar').css({
                    'transform': 'translateY(0)'
                });
            } else {
                slide.eq(_PREV_1).find('.left-bar').css({
                    'transform': 'translateX(-100%)'
                });
                slide.eq(_PREV_1).find('.right-bar').css({
                    'transform': 'translateX(100%)'
                });
                slide.eq(_PREV).find('.left-bar,.right-bar').css({
                    'transform': 'translateX(0)'
                });
            }

            _PREV_1 = swiper.activeIndex;
            // slide.eq(_PREV).find('.left-bar,.right-bar').css({
            //     'transform': 'translateY(0)'
            // })
        }

    });

    $('.course-wrap li').on('mouseenter', function () {
        courseSwiper.stopAutoplay();
    }).on('mouseleave', function () {
        courseSwiper.startAutoplay();
    });

    robotSwiper = new Swiper('.robot-wrap', {
        slidesPerView: 4,
        // spaceBetween: 50,
        prevButton: '.robot-button-prev',
        nextButton: '.robot-button-next',
        breakpoints: {
            1024: {
                slidesPerView: 4
                // spaceBetween: 40
            },
            768: {
                slidesPerView: 2.2
                // spaceBetween: 30
            },
            640: {
                slidesPerView: 1
                // spaceBetween: 20
            }
        }

    });
});