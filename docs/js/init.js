
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

    $("#tabs2").tabs( {
            show: { effect: "blind", duration: 900 }
        }
    );


    var carousel = function() {
        $('.home-slider').owlCarousel({
            loop:true,
            autoplay: true,
            margin:0,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            nav:false,
            autoplayHoverPause: false,
            items: 1,
            navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        });
        $('.carousel-testimony').owlCarousel({
            autoplay: true,
            center: true,
            loop: true,
            items:1,
            margin: 30,
            stagePadding: 0,
            nav: false,
            navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
            responsive:{
                0:{
                    items: 1
                },
                600:{
                    items: 2
                },
                1000:{
                    items: 3
                }
            }
        });

    };
    carousel();


    if (document.getElementById('nav__menu-btn')) {
        let navMenuBtn = document.getElementById('nav__menu-btn');
        let closeMenu = document.getElementById('closeMenu');
        let header = document.getElementById('header');

        navMenuBtn.addEventListener("click", function() {
            let menu = document.getElementById('menu');
            setTimeout(function () {
                menu.classList.toggle('nav__mobile--active');
            }, 100)
        });
        header.addEventListener("click", function(e) {
            let target = e.target;
            let menu = document.getElementById('menu');
            let overlay = document.getElementById('overlay');

            if (target === closeMenu || target === overlay) {
                setTimeout(function () {
                    menu.classList.toggle('nav__mobile--active');
                }, 100);
            }
        });
    }


    // let menuBtn = document.getElementById('nav__btn');
    //
    // menuBtn.addEventListener("click", function() {
    //     let menu = document.getElementById('nav__nav');
    //     setTimeout(function () {
    //         menu.classList.toggle('d-sm-none');
    //     }, 100)
    // });
});