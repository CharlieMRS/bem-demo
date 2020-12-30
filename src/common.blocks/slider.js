$(() => {
    const $slides = $('.slider__slides > .section > .section__col');
    const slideCount = $slides.length;
    const $sliderNav = $('.slider .nav__arrows a');

    let currentSlide = 1;
    $('.nav__ball').eq(0).addClass('nav__ball_active');

    $sliderNav.click( (e) => {
        const $this = $(e.currentTarget);
        changeSlide($this);
    });

    function changeSlide($navArrow) {
        const increment = $sliderNav.index($navArrow) === 0 ? -1 : 1;
        currentSlide = getCurrentSlide(increment);
        $slides.each(function(index) {
            const isCurrentSlide = index + 1 === currentSlide;
            $(this).css('order', isCurrentSlide ? 0 : 1);
            $('.nav__ball').eq(index).toggleClass('nav__ball_active', isCurrentSlide);
        });
    }

    function getCurrentSlide(increment) {
        currentSlide += increment;
        if (currentSlide > slideCount) {
            return 1;
        } else if (currentSlide < 1) {
            return slideCount;
        }
        return currentSlide;
    }
});

