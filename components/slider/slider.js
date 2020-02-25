
var firstPrototype = function(element) {
    var _this = {
        carousel: element,
        currentSlide: false,
        nextSlide: false,
        prevSlide: false,
        setSlides: function() {
            _this.currentSlide = $(_this.carousel).find('.slider__item.active');            

            // Next
            if( $( _this.currentSlide.next() ).length > 0) {
                _this.nextSlide = $(_this.carousel).find('.slider__item.active').next();
            } else {
                _this.prevSlide = $(_this.carousel).find('.slider__item:first')
            }

            // Prev            
            if( $( _this.currentSlide.prev() ).length > 0) {
                _this.prevSlide = $(_this.carousel).find('.slider__item.active').prev();
            } else {
                _this.prevSlide = $(_this.carousel).find('.slider__item:last')
            }            
        },
        moveTo: function(direction){
            $(_this.currentSlide).removeClass('active').hide();
            if(direction === 'next'){
                $(_this.nextSlide).addClass('active').show();
            } else if ( direction === 'prev') {
                $(_this.prevSlide).addClass('active').show();
            }

        }
    }
    $('.slider__control--prev, .slider__control--next').on('click',function(e) {
        e.preventDefault();
        _this.setSlides();
    });
    $('.slider__control--prev').on('click', function(e) {
        _this.moveTo('prev');
    });
    $('.slider__control--next').on('click', function(e) {
        _this.moveTo('next');
    });
}

$(document).ready(function(e) {
    firstPrototype('#mySliderExample')
});

/**
 * Related
 * - https://cabrerahector.com/javascript/how-to-make-an-image-slider-with-jquery-from-scratch/
 * - https://archive.barrelny.com/blog/building-a-jquery-slideshow-plugin-from-scratch/
 * - https://books.google.es/books?id=gG5LDAAAQBAJ&pg=PA175&lpg=PA175&dq=Plugin+Development+Pattern&source=bl&ots=VnIZP2nF6g&sig=ACfU3U03W8E3z8o18xdLPwxZ74w_U49pBg&hl=es&sa=X&ved=2ahUKEwiVjcvHgOHnAhXK4IUKHXKgC-QQ6AEwCHoECAkQAQ#v=onepage&q=Plugin%20Development%20Pattern&f=false
 * - https://marina-ferreira.github.io/javascript30/
 * - https://www.mi.com/es/
 * - https://getbootstrap.com/docs/4.4/components/carousel/
 */