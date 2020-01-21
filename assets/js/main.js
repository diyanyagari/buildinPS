/*========================================================================= */
/*  Preloader
/* ========================================================================= */

$(window).on("load", function () {
  $("#preloader").fadeOut("slow");

  /*=================================================================
      Parallax
  =================================================================*/
  if ($(window).width() > 1024) {
    return;
    $(".test-parallax").parallax("50%", 0.1);
    $(".text-parallax").parallax("50%", 0.6);
    $(".parallax-subs").parallax("50%", 0.3);
    $("#teatimonial").parallax("50%", 0.1);
    $("#parallax").parallax("50%", 0.1);
    $(".cta-parallax").parallax("50%", 0.5);
    $(".parallax1").parallax("50%", 0.1);
    $(".parallax2").parallax("50%", 0.1);
    $(".parallax3").parallax("50%", 0.5);
    $(".parallax4").parallax("50%", 0.5);
    $(".parallax5").parallax("50%", 0.5);
    $(".parallax6").parallax("50%", 0.5);
    $(".parallax7").parallax("50%", 0.5);
    $(".parallax8").parallax("50%", 0.5);
    $(".parallax9").parallax("50%", 0.5);
    $(".parallax10").parallax("50%", 0.5);
    $(".parallax11").parallax("50%", 0.5);
    $(".parallax12").parallax("50%", 0.5);
    $(".parallax13").parallax("50%", 0.5);
    $(".parallax14").parallax("50%", 0.5);
    $(".parallax15").parallax("50%", 0.5);
    $(".parallax16").parallax("50%", 0.5);
    $(".parallax17").parallax("50%", 0.5);
    $(".parallax18").parallax("50%", 0.5);
    $(".parallax19").parallax("50%", 0.5);
    $(".parallax20").parallax("50%", 0.5);
    $(".parallax21").parallax("50%", 0.5);
    $(".parallax22").parallax("50%", 0.5);
    $(".parallax23").parallax("50%", 0.5);
    $(".parallax24").parallax("50%", 0.5);
    $(".parallax25").parallax("50%", 0.5);
    $(".parallax26").parallax("50%", 0.5);
    $(".parallax27").parallax("50%", 0.5);
    $(".parallax28").parallax("50%", 0.5);
    $(".parallax29").parallax("50%", 0.5);
    $(".parallax30").parallax("50%", 0.5);
    $(".app-home").parallax("50%", 0.5);
    $(".parallax-home").parallax("50%", 0.5);
    $(".parallax-cta").parallax("50%", 0.5);
  };

  /// audio player photography home
  $(".pg-audio").mediaelementplayer({
    // width of audio player
    audioWidth: 50,
    // height of audio player
    audioHeight: 50,
    // useful for <audio> player loops
    loop: true,
    // the order of controls you want on the control bar (and other plugins below)
    features: ["playpause"],
    // play audio automatically when document ready
    success: function (mediaElement, domObject) {
      //mediaElement.play();
    }
  });

  headerHeight();

});

function headerHeight() {
  var navbarHeight = $(".navbar-default").height();
  if (!$(".sticky-header").parent().is(".sticky-head-wrapper")) {
    $(".sticky-header").wrap('<div class="sticky-head-wrapper"></div>').parent().css("height", navbarHeight);
  }
}

$(document).ready(function () {

  // init bootstrap tooltip
  $(".sc_tooltip").tooltip();

  $("body").removeClass("bordered");

  //initiating wow js
  var wow = new WOW({
    mobile: false
  });
  wow.init();

  // getting window width
  //var windowWidth  = $(window).width();
  var windowWidth = {
    value: $(window).width()
  }

  $(window).resize(function (event) {
    windowWidth.value = $(window).width();
    canvasResponsive();
    headerHeight();
  });

  function canvasResponsive() {
    $(".canvas-responsive").attr({
      "width": $(window).width(),
      "height": $(window).innerHeight()
    })
  }
  //window height
  var bannerHeight = $(window).height();

  //store navigation height
  var navbarHeight = $(".navbar-default").height();

  //calculate window height without nav height
  var fitScreen = bannerHeight - navbarHeight;

  //stucky header
  /*$(".sticky-header").sticky({
      topSpacing:0
  });*/

  $(window).scroll(function () {
    if ($(window).scrollTop() >= 1) {
      $(".sticky-header").addClass("on");
    } else {
      $(".sticky-header").removeClass("on");
    }
  });

  /*=================================================================
      Animated Header
  =================================================================*/

  $(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
      $(".navbar-default").addClass("animated");
      $(".slidedown-nav").slideDown();
      $(".page-menu").addClass("page-navbg");
      $(".top-head").slideUp();
      $(".header-mid").slideUp();
      // $(".header2 .header-top").slideUp();
      // $(".show-top-bar .header-top").slideUp();
      // $(".header-top.opened").slideUp();
    } else {
      $(".navbar-default").removeClass('animated');
      $(".slidedown-nav").slideUp();
      $(".page-menu").removeClass("page-navbg");
      $(".top-head").slideDown();
      $(".header-mid").slideDown();
      // $(".header2 .header-top").slideDown();
      // $(".show-top-bar .header-top").slideDown();
      // $(".header-top.opened").slideDown();
    }
  });

  $(".header-widget-toogle").on("click", function () {
    $(".header-widget-inner").slideToggle(600);
  });

  $('.navbar-nav>li>a').each(function () {
    if ($(this).next().is('ul')) {
      $(this).append('<i class="drpdownSign"></i>');
    }
  });

  $(".navbar-nav > li:not(.mega-menu) > ul li a").each(function () {
    if ($(this).next().is("ul")) {
      $(this).append('<i class="fa fa-angle-right"></i>');
    }
  });

  // drop down for mobile from 320
  if (windowWidth.value <= 767) {
    $(".navbar-nav li a").each(function () {
      if ($(this).next().is("ul")) {
        //change the dropdown icon, right arrow to down arrow
        $(this).children(".fa-angle-right").addClass("fa-angle-down");
      }
    });
  }

  $(window).resize(function () {
    if (windowWidth.value <= 767) {
      $(".navbar-nav li a").each(function () {
        if ($(this).next().is("ul")) {
          //change the dropdown icon, right arrow to down arrow
          $(this).children(".fa-angle-right").addClass("fa-angle-down");
        }
      });
    }
  });

  $(".navbar-nav li a").on("click", function (event) {
    if (windowWidth.value < 768) {
      if ($(this).next().is("ul")) {
        event.preventDefault();
        // slide down menu in mobile on click
        $(this).next("ul").slideToggle(800)
      }
    }
  });

  $(".vertical-nav li>a").each(function () {
    if ($(this).next().is("ul")) {
      $(this).append("<i class=\"drpdownSign\"></i>");
    }
  });

  // nav toggle in tablet
  $(".navbar-toggle2").on('click', function () {
    $(".ac-nav .navbar-nav").slideToggle();
  });

  $('body').on("click", ".slide-top .hide-top", function () {
    // $(".header-top").slideToggle();
  });

  //apply the height
  $(".fitscreen").css("height", fitScreen);
  $(".fullscreen").css("height", bannerHeight);

  $(window).resize(function () {
    $(".fitscreen").css("height", fitScreen);
    $(".fullscreen").css("height", bannerHeight);
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() > fitScreen) {
      $(".bottom-head").addClass('navbar-fixed-top');
    } else {
      $(".bottom-head").removeClass('navbar-fixed-top');
    }
  });
  // vertical dropdown
  $(".vertical-nav>ul>li").hover(
    function () {
      $(this).children(".dropdown").stop(true, true).slideDown("medium");
      $(this).children("a").find(".drpdownSign").addClass("opened");
    },
    function () {
      $(this).children(".dropdown").stop(true, true).slideUp("medium");
      $(this).children("a").find(".drpdownSign").removeClass("opened");
    }
  );
  $(".vertical-nav .dropdown>li").hover(
    function () {
      $(this).children("ul").stop(true, true).slideDown("medium");
      $(this).children("a").find(".drpdownSign").addClass("opened");
    },
    function () {
      $(this).children("ul").stop(true, true).slideUp('medium');
      $(this).children("a").find(".drpdownSign").removeClass("opened");
    }
  );

  if ($(window).width() <= 768) {
    $(".vertical-selector").removeClass("vertical-inner-content");
  };

  $(".mobile-nav-toggle").on("click", function () {
    $(".vertical-nav").slideToggle("slow");
  });

  // uncomment the code for landing page

  // $(".navbar-nav li a").on("click", function(e){
  //     e.preventDefault;
  //     if($(window).width() <= 767){
  //         if ($(this).next().is("ul")) {
  //             return false;
  //         }else {
  //             $(".navbar-toggle").trigger("click");
  //         }
  //     };
  // });

  //Header 2

  //on hover search form
  $(".search-form .fa-search").on('mouseover', function () {
    $(".form-inner").fadeIn();
    $(".form-inner .search-field").focus();
  });

  var searchfield = $(".search-field");

  $(".search-form .fa-search, .form-inner").on('mouseleave', function () {
    if (searchfield.val().length <= 0) {
      $(".form-inner").fadeOut();
    }
  });

  searchfield.focusout(function () {
    if (searchfield.val().length <= 0) {
      $(".form-inner").fadeOut();
    }
  });


  $(".nav-toggle").on('click', function (event) {
    event.preventDefault();
    $(".navbar-collapse .navbar-nav").slideToggle(400);
  });

  $(".side-nav").on("click", function (event) {
    event.preventDefault();
    $(".slide-menu-sec").toggleClass("opened");
  });

  $(".close-slide-nav").on("click", function (event) {
    event.preventDefault();
    $(".slide-menu-sec").removeClass("opened");
  });

  $(".sidebar-nav ul li").hover(
    function () {
      $(this).children("ul").stop(true, true).slideDown('medium');
    },
    function () {
      $(this).children("ul").stop(true, true).slideUp('medium');
    }
  );

  // Slider for business.php
  // $(".init-slider1").owlCarousel({
  //   items: 1,
  //   loop: true,
  //   nav: true,
  //   autoplay: false,
  //   smartSpeed: 800,
  //   mouseDrag: false,
  //   autoplayHoverPause: true
  // });

  // home slider

  $("#home-carousel").carousel({
    interval: 4000
  });

  $('a.link[href^="#"]').on('click', function (e) {
    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top + $(".navbar-default").height()
    }, 900);
    return 0
  });
});
