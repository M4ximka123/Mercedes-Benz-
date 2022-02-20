$(function(){
    $('.design-slider').slick({
        dots: false,
        slidesToShow: 4,
        variableWidth: true,
        prevArrow: '<img class="arrow arrow-left" src="images/arrow-left.svg" alt="icon arrow-left">',
        nextArrow: '<img class="arrow arrow-right" src="images/arrow-right.svg" alt="icon arrow-right">',
        responsive: [
            {
                breakpoint: 361,
                setting: {
                    variableWidth: false,
                    slidesToShow: 1,
                }
            }
        ]
    });
});