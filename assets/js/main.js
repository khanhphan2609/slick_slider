$(document).ready(function(){
    $('#slider1').slick({
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
    $('#slider2').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
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
    });
    // Slick3
    $('.slider-single').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        adaptiveHeight: true,
        infinite: false,
       useTransform: true,
        speed: 400,
        cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    });
    $('.slider-nav')
        .on('init', function(event, slick) {
            $('.slider-nav .slick-slide.slick-current').addClass('is-active');
        })
        .slick({
            slidesToShow: 7,
            slidesToScroll: 7,
            dots: false,
            focusOnSelect: false,
            infinite: false,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            }, {
                breakpoint: 640,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
               }
            }, {
                breakpoint: 420,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
           }
            }],
            prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        });
   
    $('.slider-single').on('afterChange', function(event, slick, currentSlide) {
        $('.slider-nav').slick('slickGoTo', currentSlide);
        var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
        $('.slider-nav .slick-slide.is-active').removeClass('is-active');
        $(currrentNavSlideElem).addClass('is-active');
    });
   
    $('.slider-nav').on('click', '.slick-slide', function(event) {
        event.preventDefault();
        var goToSingleSlide = $(this).data('slick-index');
   
        $('.slider-single').slick('slickGoTo', goToSingleSlide);
    });

    // Slider 4
    $('#slider4').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
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
        prevArrow:"<button type='button' class='slick-prev pull-left'></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'></button>",
        dots: true,
    });

    // Slider 5
    $('#slider5').slick({
      centerMode: true,
      centerPadding: '200px',
      slidesToShow: 1,
      slidesToScroll: 1,
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
      prevArrow:"<button type='button' class='slick-prev pull-left'></button>",
      nextArrow:"<button type='button' class='slick-next pull-right'></button>",
      dots: true,
  });
});