//Navbar burger transition
$('#icon-transition').on('click', function () {
    $(this).toggleClass('open');
});

$(document).ready(function () {
    $('.menu-scroll').on('click', function(e){e.preventDefault();
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 75
        }, 1500, 'easeInOutExpo');

    });
});

$(window).on("load", function(){
    $('.loader').fadeOut();
    $('#bootstrap-touch-slider').bsTouchSlider();

    var swiper1 = new Swiper('#swiper-container1', {
        slidesPerView: 4,
        paginationClickable: false,
        spaceBetween: 1,
        // Disable preloading of all images
        preloadImages: false,
        lazyLoading: true,
        loop: true,
        autoplay: 8000,
        grabCursor: true
    });

    var swiper2 = new Swiper('#swiper-container2', {
        slidesPerView: 3,
        slidesPerColumn: 2,
        paginationClickable: false,
        spaceBetween: 10,
        preloadImages: false,
        lazyLoading: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        watchSlidesVisibility: true,
        grabCursor: true

    });
});


