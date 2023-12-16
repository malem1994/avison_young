$(window).on("load", function () {
  $("#bio").load("/public/components/bio.html");

  // Menu Burger
  const burger = $('#burger');
  const menu = $('#navg');

  burger.on('click', function () {
    menu.toggleClass('active');
    $('body').toggleClass('overflowHidden');
  })

  // Dropdown
  const dropdown = $('.dropdown-toggle');
  dropdown.each(function (index) {
    $(this).on("click", function () {
      $(this).toggleClass('active');
    });
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
    conttentSidebar.slideToggle();
  })

  // AOS
  AOS.init();
})
