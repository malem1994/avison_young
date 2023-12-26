$(window).on("load", function () {
  // Menu Burger
  const burger = $('#burger');
  const menu = $('#navg');

  burger.on('click', function (e) {
    menu.toggleClass('active');
    e.prevetnDefault();
  })

  // Price Changing
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

  // Sidebar Toggle
  const toggleSidebar = $('#sidebarToggle');
  const conttentSidebar = $('.sidebar-content');

  toggleSidebar.on('click', function () {
    conttentSidebar.toggleClass('show');
  })

  // AOS
  AOS.init();
})
