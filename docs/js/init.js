/*(function () {
    // .header-nav навигация
    let nav = $('.nav__list');
    let btn = $('.nav__btn');
    let close = $('.nav__close');
    let logo =  $('.header__logo');

    // .menu-btn - кнопка меню
    $(btn).click(function () {
        if (nav.hasClass('nav__list--active')) {
            nav.removeClass('nav__list--active');
            close.hide();
        } else {
            nav.addClass('nav__list--active');
            btn.hide();
            // logo.addClass('mx-sm-auto');
            close.show();
        }
    });
    $(close).click(function () {
        nav.removeClass('nav__list--active');
        setTimeout(function () {
            btn.show();
            // logo.removeClass('mx-auto');
        }, 500);
    });
    $("#tabs").tabs( {
            show: { effect: "blind", duration: 900 }
        }
    );
    $("#tabs2").tabs( {
            show: { effect: "blind", duration: 900 }
        }
    );
})();*/



$(document).ready(function(){
    // .header-nav навигация
    let nav = $('.nav__list');
    let btn = $('.nav__btn');
    let close = $('.nav__close');
    let logo =  $('.header__logo');

    // .menu-btn - кнопка меню
    $(btn).click(function () {
        if (nav.hasClass('nav__list--active')) {
            nav.removeClass('nav__list--active');
            close.hide();
        } else {
            nav.addClass('nav__list--active');
            btn.hide();
            // logo.addClass('mx-sm-auto');
            close.show();
        }
    });
    $(close).click(function () {
        nav.removeClass('nav__list--active');
        setTimeout(function () {
            btn.show();
            // logo.removeClass('mx-auto');
        }, 500);
    });

    $("#tabs2").tabs( {
            show: { effect: "blind", duration: 900 }
        }
    );

    $('.header__slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    });


    $('.news__slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});