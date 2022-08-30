$(document).ready(function(){

    $(window).stellar({
        responsive: true,
        parallaxBackgrounds: true,
        parallaxElements: true,
        verticalOffset: 80,
        horizontalScrolling: false,
        hideDistantElements: false,
        scrollProperty: 'scroll'
    });

    //Прокрутка бекграунда разом зі скролом. Необхідно stellar.min.js і наче jquery-migrate.min.js

    $("#tabs2").tabs( {
            show: { effect: "blind", duration: 900 }
        }
    );

    let owl = $('.owl-carousel');
    owl.slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 900,
        arrows: false
    });
    //slick carousel в хедері

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

    var contentWayPoint = function() {
        var i = 0;
        $('.ftco-animate').waypoint( function( direction ) {

            if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

                i++;

                $(this.element).addClass('item-animate');
                setTimeout(function(){

                    $('body .ftco-animate.item-animate').each(function(k){
                        var el = $(this);
                        setTimeout( function () {
                            var effect = el.data('animate-effect');
                            if ( effect === 'fadeIn') {
                                el.addClass('fadeIn ftco-animated');
                            } else if ( effect === 'fadeInLeft') {
                                el.addClass('fadeInLeft ftco-animated');
                            } else if ( effect === 'fadeInRight') {
                                el.addClass('fadeInRight ftco-animated');
                            } else {
                                el.addClass('fadeInUp ftco-animated');
                            }
                            el.removeClass('item-animate');
                        },  k * 50, 'easeInOutExpo' );
                    });

                }, 100);

            }

        } , { offset: '95%' } );
    };
    contentWayPoint();

    //анімація при прокрутці - працює разом з
    // jquery-waypoints.min.js, animate.css та в base .ftco-animate { opacity: 0, visibility: hidden;}
    //

    $(function(){
        $('a[href^="#"]').on('click', function(event) {
            // отменяем стандартное действие
            event.preventDefault();

            var sc = $(this).attr("href"),
                dn = $(sc).offset().top;
            /*
            * sc - в переменную заносим информацию о том, к какому блоку надо перейти
            * dn - определяем положение блока на странице
            */

            $('html, body').animate({scrollTop: dn}, 500);

            /*
            * 1000 скорость перехода в миллисекундах
            */
        });
    });

    //Плавна прокрутка по якорям сайту
});