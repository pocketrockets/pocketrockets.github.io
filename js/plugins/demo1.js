/**
 * demo1.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2018, Codrops
 * http://www.codrops.com
 */
{
    // the settings for each one of the slides uncover instances.
    const uncoverOpts = [
        {
            // total number of slices.
            slicesTotal: 4,
            // slices color.
            slicesColor: '#111',
            // 'vertical' || 'horizontal'.
            orientation: 'vertical',
            // 'bottom' || 'top' for vertical orientation and 'right' || 'left' for horizontal orientation.
            slicesOrigin: {show: 'top', hide: 'bottom'}
        },
        {
            slicesTotal: 7,
            slicesColor: '#111',
            orientation: 'horizontal',
            slicesOrigin:  {show: 'right', hide: 'right'}
        },
        {
            slicesTotal: 9,
            slicesColor: '#111',
            orientation: 'vertical',
            slicesOrigin:  {show: 'bottom', hide: 'bottom'}
        },
        {
            slicesTotal: 5,
            slicesColor: '#111',
            orientation: 'horizontal',
            slicesOrigin:  {show: 'left', hide: 'left'}
        },
        {
            slicesTotal: 6,
            slicesColor: '#111',
            orientation: 'vertical',
            slicesOrigin:  {show: 'bottom', hide: 'bottom'}
        },
        {
            // total number of slices.
            slicesTotal: 4,
            // slices color.
            slicesColor: '#111',
            // 'vertical' || 'horizontal'.
            orientation: 'vertical',
            // 'bottom' || 'top' for vertical orientation and 'right' || 'left' for horizontal orientation.
            slicesOrigin: {show: 'top', hide: 'bottom'}
        },
        {
            slicesTotal: 7,
            slicesColor: '#111',
            orientation: 'horizontal',
            slicesOrigin:  {show: 'right', hide: 'right'}
        },
        {
            slicesTotal: 9,
            slicesColor: '#111',
            orientation: 'vertical',
            slicesOrigin:  {show: 'bottom', hide: 'bottom'}
        },
    ];

    class Slideshow {
        constructor(el) {
            this.DOM = {el: el};
            this.DOM.slides = Array.from(this.DOM.el.querySelectorAll('.item'));
            this.slidesTotal = this.DOM.slides.length;
            this.current = 0;
            this.uncoverItems = [];
            this.DOM.slides.forEach((slide,pos) => this.uncoverItems.push(new Uncover(slide.querySelector('.slide-image'), uncoverOpts[pos])));
            this.init();
        }
        init() {
            this.isAnimating = true;
            this.DOM.slides[this.current].classList.add('active');
            this.uncoverItems[this.current].show(true, {
                image: {
                    duration: 800,
                    delay: 350,
                    easing: 'easeOutCubic',
                    scale: [1.8,1]
                }
            }).then(() => this.isAnimating = false);
        }
        navigate(pos) {
            if ( this.isAnimating || this.current === pos || pos < 0 || pos > this.slidesTotal - 1 ) return;
            this.isAnimating = true;

            this.uncoverItems[this.current].hide(true).then(() => {
                this.DOM.slides[this.current].classList.remove('active');
            this.current = pos;

            const newItem = this.uncoverItems[this.current];
            newItem.hide();
            this.DOM.slides[this.current].classList.add('active');
            newItem.show(true, {
                image: {
                    duration: 800,
                    delay: 350,
                    easing: 'easeOutCubic',
                    scale: [1.8,1]
                }
            }).then(() => this.isAnimating = false);
        });
        }
    }
    imagesLoaded(document.querySelectorAll('.slide__img'), {background: true}, () => {

        console.log("Preloading image done!");
        const slideshow = new Slideshow(document.querySelector('.carousel-inner'));

        const pagination = document.querySelector('.carousel-indicators');
        const triggers = Array.from(pagination.querySelectorAll('.pagination-item'));

    triggers.forEach((trigger,pos) => {
        if ( pos === 0 ) {
            trigger.classList.add('active');
        }
        trigger.addEventListener('click', () => {
            if ( slideshow.isAnimating ) return;
            slideshow.navigate(pos);
            pagination.querySelector('.active').classList.remove('active');
            trigger.classList.add('active');
        })
    });

        document.addEventListener('keydown', (ev) => {
            if ( slideshow.isAnimating ) return;
            const keyCode = ev.keyCode || ev.which;
            let newpos;
            if ( keyCode === 37 ) {
                newpos = slideshow.current > 0 ? slideshow.current-1 : slideshow.slidesTotal-1;
                slideshow.navigate(newpos);
            }
            else if ( keyCode === 39 ) {
                newpos = slideshow.current < slideshow.slidesTotal-1 ? slideshow.current+1 : 0;
                slideshow.navigate(newpos);
            }
            else return;
            pagination.querySelector('.active').classList.remove('active');
            triggers[newpos].classList.add('active');
        });



        var bootstrapSlider = $('#bootstrap-touch-slider');
        var paginationItem = $(".carousel-indicators .pagination-item");

        bootstrapSlider.on("swipe", function(event) {
            let newpos;
            var bootstrapInnerCarousel = $( "#bootstrap-touch-slider .carousel-inner" );
            if ( slideshow.isAnimating ) return;
            bootstrapInnerCarousel.swipe({
                swipeLeft: function () {
                    newpos = slideshow.current < slideshow.slidesTotal-1 ? slideshow.current+1 : 0;
                    slideshow.navigate(newpos);
                    pagination.querySelector('.active').classList.remove('active');
                    triggers[newpos].classList.add('active');

                },
                swipeRight: function ( ) {
                    newpos = slideshow.current > 0 ? slideshow.current-1 : slideshow.slidesTotal-1;
                    slideshow.navigate(newpos);
                    pagination.querySelector('.active').classList.remove('active');
                    triggers[newpos].classList.add('active');
                }
            });
        });



        bootstrapSlider.on('slid.bs.carousel', function (event) {
            if ( slideshow.isAnimating ) return;
            $(this).find(".carousel-inner .item.active").removeClass("active");
            let newpos;
            var active = $(event.target).find('.carousel-inner > .item.active');
            var from = active.index();
            var next = $(event.relatedTarget);
            var to = next.index();

            var direction = event.direction;
            // var currentSlide = $(".carousel-inner .item.active").addClass("active");
            if(direction == "left"){
                newpos = slideshow.current < slideshow.slidesTotal-1 ? slideshow.current+1 : 0;
                slideshow.navigate(newpos);
                pagination.querySelector('.active').classList.remove('active');
                triggers[newpos].classList.add('active');


            }
            else if(direction == "right"){
                // console.log("right trigger!!!");
                newpos = slideshow.current > 0 ? slideshow.current-1 : slideshow.slidesTotal-1;
                slideshow.navigate(newpos);
                pagination.querySelector('.active').classList.remove('active');
                triggers[newpos].classList.add('active');

            }
        });

    });


}