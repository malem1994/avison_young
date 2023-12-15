$(window).on("load", function () {

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
  const burger = $('#burger');
  const menu = $('#navg');

  burger.on('click', function () {
    menu.toggleClass('active');
  })

  const toggleSidebar = $('#sidebarToggle');
  const conttentSidebar = $('.sidebar-content');

  toggleSidebar.on('click', function () {
    conttentSidebar.slideToggle();
  })

  AOS.init();
})
