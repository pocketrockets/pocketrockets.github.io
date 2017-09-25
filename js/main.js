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

    var swiperItemContainer = $(".swiper-link")
    swiperItemContainer.on("click",function () {
        var modalTarget = $(this).attr("data-target").substring(1);
        // var modalProjectTitle = $(this).attr("data-project-title");
        var modalLogoType = $(this).attr("data-logo-type");
        var modalClientLogo = $(this).attr("data-client-logo");
        var modalProjectDuration = $(this).attr("data-client-duration");
        var modalProjectList = $(this).attr("data-project-list");
        var modalGallery = $(this).attr("data-gallery");

        //For modal
        $(this).parents().parents().find(".modal.fade").attr("id",modalTarget);
        $(this).parents().parents().find(".modal.fade").attr("aria-labelledby",modalTarget);
        $(this).parents().parents().find(".modal.fade .modal-content .modal-body .modal-client-logo").attr({ src: modalClientLogo, class: modalLogoType + " modal-client-logo"});
        $(this).parents().parents().find(".modal.fade .modal-content .modal-body .modal-list-container").html(modalProjectList);
        $(this).parents().parents().find(".modal.fade .modal-content .modal-body .modal-gallery").attr("src",modalGallery);
        $(this).parents().parents().find(".modal.fade .modal-content .modal-body .modal-project-duration").text(modalProjectDuration);

    });


    $(".swiper-link").on("mouseover",function () {
        var imageHover = $(this).attr("data-hover");
        $(this).find(".caption .caption-image").attr("src",imageHover);
        $(this).find(".caption").css("opacity","1");
    });

    $(".swiper-link").on("mouseout",function () {
        $(this).find(".caption").css("opacity","0");
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

    var bLazy = new Blazy({
        selector: '.b-lazy',
        success: function(ele){
            $(".b-lazy.b-loaded").parent().addClass("add-after");
        }
    });

});


