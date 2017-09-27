//Navbar burger transition
$('#icon-transition').on('click', function () {
    $(this).toggleClass('open');
});

$(document).ready(function () {
    // $('.menu-scroll').on('click', function(e){e.preventDefault();
    //     var $anchor = $(this);
    //     $('html, body').stop().animate({
    //         scrollTop: $($anchor.attr('href')).offset().top - 70
    //     }, 1500, 'easeInOutExpo');
    //
    // });

    $('.navbar-link[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('.navbar-link').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
    $(document).on("scroll", onScroll);
    function onScroll(event){
        var scrollPos = $(document).scrollTop();
        $('.navbar-link').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('.navbar-link').removeClass("active");
                currLink.addClass("active");
            }
            else{
                currLink.removeClass("active");
            }
        });
    }

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


    $("#form-content").on("submit",function(){
        $(".modal-backdrop.in").css("opacity","0.5!important");
        $("#modal-message").modal('show');
        $("#form-content")[0].reset();
    });


    $('.navbar-link').on('click', function(e){
        e.preventDefault();
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
        grabCursor: true,
        breakpoints: {
            2000: {
                slidesPerView: 6

            },
            1500: {
                slidesPerView: 4
            }
        }
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


