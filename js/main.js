//Navbar burger transition
$('#icon-transition').on('click', function () {
    $(this).toggleClass('open');
});

$(window).on("load", function(){
    $('.loader').fadeOut();
    $('#bootstrap-touch-slider').bsTouchSlider();
});


$(document).ready(function () {
    $('.menu-scroll').on('click', function(e){e.preventDefault();
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 75
        }, 1500, 'easeInOutExpo');
    });

    var swiper1 = new Swiper('#swiper-container1', {
        slidesPerView: 4,
        paginationClickable: false,
        spaceBetween: 1,
        // Disable preloading of all images
        preloadImages: false,
        lazyLoading: true,
        loop: true,
        autoplay: 8000
    });

    var swiper2 = new Swiper('#swiper-container2', {
        slidesPerView: 3,
        paginationClickable: false,
        spaceBetween: 10,
        slidesPerColumn: 2,
        // Disable preloading of all images
        preloadImages: false,
        lazyLoading: true,
        loop: true
    });
});
