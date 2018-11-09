$('.center-slider').slick({
  centerMode: true,
  infinite: true,
  centerPadding: '0px',
  slidesToShow: 5,
  speed: 500,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 4500,
  variableWidth: false,
  responsive: [{
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '80px',
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});