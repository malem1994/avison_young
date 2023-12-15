$(window).on("load", function () {
  $("#header").load("/public/layout/header.html", function () {
    const burger = $('#burger');
    const menu = $('#navg');

    burger.on('click', function () {
      menu.toggleClass('active');
    })
  });

  $("#footer").load("/public/layout/footer.html");
  $("#tab").load("/public/components/tab.html");
  $("#bio").load("/public/components/bio.html");

  const dropdown = $('.dropdown-toggle');
  const option = $('.dropdown-menu');

  dropdown.each(function (index) {
    $(this).on("click", function () {
      $(this).toggleClass('active');
    });
  })

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

  const toggleSidebar = $('#sidebarToggle');
  const conttentSidebar = $('.sidebar-content');

  toggleSidebar.on('click', function () {
    conttentSidebar.slideToggle();
  })

  AOS.init();
})
