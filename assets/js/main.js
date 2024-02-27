$(document).ready(function(){
    $('.image-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        infinite: true,
        arrows: true,
        draggable: false,
        // autoplay: true,
        // autoplaySpeed: 1000,
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 3
              }
            },
            {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  arrows: false,
                  infinite: false
                }
              },
        ],
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        dots: true,
    });
});