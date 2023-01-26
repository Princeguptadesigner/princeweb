$(document).ready(function () {
  $('.js-portfolio-filter li').on('click', function () {
    var filter_val = $(this).attr('data-filter');
    $(this).siblings().removeClass('active');
    $(this).addClass('active');

    if (filter_val == '*') {
      $('.portfolio-content').find('.grid-item').show();
    } else {
      $('.portfolio-content').find('.grid-item').hide();
      $('.portfolio-content').find('.' + filter_val).show();
    }
  });

  $('.js-sidebar-menu li').on('click', function () {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  })

});