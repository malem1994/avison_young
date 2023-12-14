$(window).on("load", function () {


  $("#header").load("/layout/header.html");
  $("#footer").load("/layout/footer.html");
  $("#filter").load("/components/filter.html", function (data) {
    const priceChange = $('#price-change');
    const priceTextChange = $('#price-change .text');
    const priceComptChange = $('#price-change-content .item');

    priceChange.on('click', function () {
      priceTextChange.toggleClass('active');
      priceComptChange.toggleClass('active');
    });

    $(".js-range-slider").ionRangeSlider({
      type: "double",
      grid: true,
      max: 10000,
      from: 100,
      to: 3000,
      prefix: "$"
    });
  });
})
