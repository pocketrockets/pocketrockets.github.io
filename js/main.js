$(document).ready(function () {
    var swiperItemContainer = $(".swiper-link")
    swiperItemContainer.on("click",function () {
        var modalTarget = $(this).attr("data-target").substring(1);
        // var modalProjectTitle = $(this).attr("data-project-title");
        var modalLogoType = $(this).attr("data-logo-type");
        var modalClientLogo = $(this).attr("data-client-logo");
        var modalProjectDuration = $(this).attr("data-client-duration");
        var modalProjectList = $(this).attr("data-project-list");
        var modalGallery = $(this).attr("data-gallery");
        var modalVideo = $(this).attr("data-video");
        console.log(modalVideo);

        //For modal
        $(this).parents().parents().find(".modal.fade").attr("id",modalTarget);
        $(this).parents().parents().find(".modal.fade").attr("aria-labelledby",modalTarget);
        $(this).parents().parents().find(".modal.fade .modal-content .modal-body .modal-client-logo").attr({ src: modalClientLogo, class: modalLogoType + " modal-client-logo"});
        $(this).parents().parents().find(".modal.fade .modal-content .modal-body .modal-list-container").html(modalProjectList);
        $(this).parents().parents().find(".modal.fade .modal-content .modal-body .modal-project-duration").text(modalProjectDuration);

        if(modalVideo != ''){
            $(this).parents().parents().find(".modal.fade .modal-content .modal-body .modal-gallery-list").html(modalGallery);
            $(this).parents().parents().find(".modal.fade .modal-content .modal-body #modalWithVideo .modal-video-container #modal-video").attr({ src: 'https://www.youtube.com/embed/' + modalVideo + '?autoplay=0&fs=0&rel=0&showinfo=0' });
            $(this).parents().parents().find(".modal.fade .modal-content .modal-body #modalWithVideo").css("display","block");
            $(this).parents().parents().find(".modal.fade .modal-content .modal-body #modalWithoutVideo").css("display","none");
        }
        else{
            $(this).parents().parents().find(".modal.fade .modal-content .modal-body .modal-gallery-list").html(modalGallery);
            $(this).parents().parents().find(".modal.fade .modal-content .modal-body #modalWithVideo").css("display","none");
            $(this).parents().parents().find(".modal.fade .modal-content .modal-body #modalWithoutVideo").css("display","block");
        }

    });

    swiperItemContainer.on("mouseover",function () {
        var imageHover = $(this).attr("data-hover");
        $(this).find(".caption .caption-image").attr("src",imageHover);
        $(this).find(".caption").css("opacity","1");
    });

    swiperItemContainer.on("mouseout",function () {
        $(this).find(".caption").css("opacity","0");
    });


    $(".service-list").on("mouseover", function () {
       $(this).css("border","5px solid rgba(224, 224, 224, 1)");
    });

    $(".service-list").on("mouseout", function () {
       $(this).css("border","5px solid rgba(224, 224, 224, 0.0)");
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
        autoplay: 4000,
        grabCursor: true,
        breakpoints: {
            2000: {
                slidesPerView: 6

            },
            1500: {
                slidesPerView: 4
            },
            992: {
                slidesPerView: 3
            },
            568: {
                slidesPerView: 2
            }
        }
    });

    var swiper2 = new Swiper('#swiper-container2', {
        slidesPerView: 3,
        slidesPerColumn: 2,
        slidesPerGroup: 3,
        paginationClickable: false,
        spaceBetween: 10,
        preloadImages: false,
        lazyLoading: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        watchSlidesVisibility: true,
        slidesPerColumnFill: 'column',
        grabCursor: true,
        breakpoints: {
            992: {
                slidesPerView: 2,
                slidesPerGroup: 2
            }
        }

    });

    var bLazy = new Blazy({
        selector: '.b-lazy',
        success: function(ele){
            $(".b-lazy.b-loaded").parent().addClass("add-after");
        }
    });

});

//navbar
(function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 100)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 100
    });


})(jQuery); // End of use strict


