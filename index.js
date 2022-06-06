$(document).ready(function () {
    $('.slide-show').slick({
      dots: false,
      prevArrow: "<div class='custom-arrow-prev a-left control-c prev slick-prev'><img src='image/arrow-prev.png'></div>",
      nextArrow: "<div class='custom-arrow-next a-right control-c next slick-next'><img src='image/arrow-next.png'></div>",
      responsive: [
        {
          breakpoint: 768,
          settings: {
            dots: false
          }
        }
      ]
    });
  });