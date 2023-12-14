$(document).ready(function () {
  const priceChange = $('#price-change');
  const priceTextChange = $('#price-change .text');
  const priceComptChange = $('#price-change-content .item');

  priceChange.on("click", function () {
    priceTextChange.toggleClass("active");
    priceComptChange.toggleClass("active");
  }
  )
});
