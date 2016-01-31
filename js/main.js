$(document).ready(function () {


  /* Navigation Scroll */
  $(function () {
    $('a[href*=#]:not([href=#])').click(function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

  /* Mobile Navigation */
  $('.js--nav-icon').click(function () {
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon');

    nav.slideToggle(200);
    if (icon.hasClass('glyphicon-menu-hamburger')) {
      icon.addClass('glyphicon-remove');
      icon.removeClass('glyphicon-menu-hamburger');
    } else {
      icon.addClass('glyphicon-menu-hamburger');
      icon.removeClass('glyphicon-remove');
    }
  })








});
