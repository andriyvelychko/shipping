$(function(){
    $('.menu-toggle').click(function () {
        $(this).toggleClass('active')
        $('.menu').slideToggle(400)
    })
    //active link
     $('.header__active-top a').each(function () {
            var location = window.location.href;
            var link = this.href;
            if (location == link) {
                $(this).addClass('active-menu');
            }
        }); 

    $('.vacancies-slider').slick({
        dots: false,
        arrows: true,
        /* fade: true, */
        /* appendArrows: '.arrows', */
        nextArrow: '<div class="arrows__text arrows__text-right">next<img class="slider-arrows__right" src="img/arrows-right.svg" alt=""></div>',
        prevArrow: '<div class="arrows__text arrows__text-left"><img class="slider-arrows__left" src="img/arrows-left.svg" alt="">prev</div>',
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $('.banner__slider').slick({
        dots: false,
        arrows: false,
        /* appendArrows: '.arrows', */
        fade: true,
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToScroll: 1,
    });
    //--------------------------------------------------
    //Плавный скрол
    var $page = $('html, body');
    $('a[href*="#"]').click(function () {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
        return false;
    });

});