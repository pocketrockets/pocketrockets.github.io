//Navbar burger transition
$('#icon-transition').on('click', function () {
    $(this).toggleClass('open');
});

$(window).on("load", function(){
    $('.loader').fadeOut();

    $('#bootstrap-touch-slider').bsTouchSlider();

    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 4,
        paginationClickable: true,
        spaceBetween: 1,
        // Disable preloading of all images
        preloadImages: false,
        lazyLoading: true,
        loop: true
    });
});


$(document).ready(function () {
    $('.menu-scroll').on('click', function(e){e.preventDefault();
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 75
        }, 1500, 'easeInOutExpo');
    });


});
