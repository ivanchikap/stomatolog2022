$(document).ready(function(){

    $(window).stellar({
        responsive: true,
        parallaxBackgrounds: true,
        parallaxElements: true,
        horizontalScrolling: false,
        hideDistantElements: false,
        scrollProperty: 'scroll'
    });

    $("#tabs2").tabs( {
            show: { effect: "blind", duration: 900 }
        }
    );

    let owl = $('.owl-carousel');
    owl.slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 800,
        arrows: false
    });

   /* var carousel = function() {
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
    carousel();*/


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
            let navItemsMobile = document.querySelectorAll('.nav__item--mobile');

            if (target === closeMenu || target === overlay || target.classList.contains('nav__item--mobile')) {
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