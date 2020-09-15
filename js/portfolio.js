$('#projects_slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: true,
  nextArrow: '<span class="material-icons right_arrow">chevron_right</span>',
  prevArrow: '<span class="material-icons left_arrow">chevron_left</span>',
});


$('#img_project').on('hover', function () {
  console.log("here");
});

$('#scroll_btn').on('click', function () {
  var scrollToId = $(this).data("scroll");
  var scrollToElement = document.getElementById(scrollToId);
})