---
---
{% capture sliderSettings %}
[
{% for sliderSetting in site.data.homeSlider %}
{
    "slicesTotal": "{{ sliderSetting.sliceTotal }}",
    "slicesColor": "{{ sliderSetting.slicesColor }}",
    "orientation": "{{ sliderSetting.orientation }}",
    "show": "{{ sliderSetting.show }}",
    "hide": "{{ sliderSetting.hide }}"
} {% if forloop.last %}{% else %},{% endif %}
{% endfor %}
]
{% endcapture %}
var sliderSettings = {{sliderSettings | strip_newlines}}


{
    class Slideshow {
        constructor(el) {
            this.DOM = {el: el};
            this.DOM.slides = Array.from(this.DOM.el.querySelectorAll('.item'));
            this.slidesTotal = this.DOM.slides.length;
            this.current = 0;
            this.uncoverItems = [];
            this.DOM.slides.forEach((slide,pos) => this.uncoverItems.push(new Uncover(slide.querySelector('.slide-image'), sliderSettings[pos])));
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
                    scale: [1.3,1]
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
                    scale: [1.3,1]
                }
            }).then(() => this.isAnimating = false);
        });
        }
    }

    const slideshow = new Slideshow(document.querySelector('.carousel-inner'));

    const pagination = document.querySelector('.carousel-indicators');
    const triggers = Array.from(pagination.querySelectorAll('.pagination-item'));

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

}