$('.center-slider').slick({
  centerMode: true,
  infinite: true,
  centerPadding: '0px',
  slidesToShow: 5,
  slidesToScroll: 5,
  speed: 400,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 10000,
  variableWidth: true,
  draggable: true,
  focusOnSelect: true,
  swipeToSlide: true,
  responsive: [{
    breakpoint: 1024,
    settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '0px',
      slidesToShow: 4,
    }
  },
  {
    breakpoint: 768,
    settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '0px',
      slidesToShow: 3,
    }
  },
  {
    breakpoint: 596,
    settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '150px',
      slidesToShow: 1,
    }
  },
  {
    breakpoint: 550,
    settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '120px',
      slidesToShow: 1,
    }
  },
  {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '70px',
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '50px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 320,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '30px',
        slidesToShow: 1
      }
    }
  ]
});