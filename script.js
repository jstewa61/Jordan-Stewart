$(document).ready(function() {
  $('body').addClass('js');
  var $menu = $('#menu'),
    $menulink = $('.menu-link');

$menulink.click(function() {
  $menulink.toggleClass('active');
  $menu.toggleClass('active');
  return false;
});});

$(".container").click(function() {
  window.location = $(this).find("a").attr("href");
  return false;
});

$('#.container').bind('touchstart', function() {
        $(this).removeAttr('style').css('bottom','244px');
        $(this).addClass('hover_effect');
});

$('#.container').bind('touchend', function() {
        $(this).removeClass('hover_effect');
});
