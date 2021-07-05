//плавный скролл
$(document).ready(function () {
    $('.go_to').click(function (e) {
        e.preventDefault();
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({
                scrollTop: $(scroll_el).offset().top
            }, 500);
        }
        if ($(window).width() < 992) {
            $('header .menu').fadeOut();
        }
        return false;

    });
});
//плавный скролл end

$('.slogan p').typeIt({
    strings:["Чем понятнее бриф, тем ярче креатив", "But here is a better one lorem lorem lorem."],
    speed: 80,
    autoStart: false,
    loop: true,
    loopDelay: 1500,
    breakLines: false,
});


$('.command-slider').slick({
    slidesToShow: 1,
    dots: true,
    fade: true,
    appendArrows: '.command-slider-nav',
    appendDots: '.command-slider-nav',
    nextArrow: '<button type="button" class="slick-next"></button>',
    prevArrow: '<button type="button" class="slick-prev"></button>'
});

$('.clients-slider').slick({
    slidesToShow: 3,
    dots: true,
    nextArrow: '<button type="button" class="slick-next"></button>',
    prevArrow: '<button type="button" class="slick-prev"></button>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$('.news-slider').slick({
    slidesToShow: 3,
    dots: true,
    appendArrows: '.news-slider-nav',
    appendDots: '.news-slider-nav',
    nextArrow: '<button type="button" class="slick-next"></button>',
    prevArrow: '<button type="button" class="slick-prev"></button>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$('[name="phone"]').mask('+7(999) 999-9999');

new WOW().init();

$('.btn-burger').on('click', function () {
   $('header .menu').fadeToggle();
});


$('.btn-close').on('click', function () {
    $('header .menu').fadeOut();
});
