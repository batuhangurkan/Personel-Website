$(document).ready(function(){

  // typed.js
  var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    loop: true,
    typeSpeed: 50,
    cursorChar: ' _',
  });
  // end typed.js

  // lightbox popup
  $('.parent-container').magnificPopup({
    gallery: {
        enabled: true
    },
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image'
    // other options
  });
  // end lightbox popup

  // filterizr
  var options = {
     animationDuration: 0.5, // in seconds
     filter: 'all', // Initial filter
     callbacks: {
        onFilteringStart: function() { },
        onFilteringEnd: function() { },
        onShufflingStart: function() { },
        onShufflingEnd: function() { },
        onSortingStart: function() { },
        onSortingEnd: function() { }
     },
     controlsSelector: '', // Selector for custom controls
     delay: 0, // Transition delay in ms
     delayMode: 'progressive', // 'progressive' or 'alternate'
     easing: 'ease-out',
     filterOutCss: { // Filtering out animation
        opacity: 0,
        transform: 'scale(0.5)'
     },
     filterInCss: { // Filtering in animation
        opacity: 0,
        transform: 'scale(1)'
     },
     layout: 'sameSize', // See layouts
     selector: '.filtr-container',
     setupControls: true // Should be false if controlsSelector is set
  }
  // You can override any of these options and then call...
  var filterizd = $('.filtr-container').filterizr(options);
  // If you have already instantiated your Filterizr then call...
  filterizd.filterizr('setOptions', options);
  // end filterizr

  // filterTab
  $('#portfolio .filterTab li').click(function(){
      $('#portfolio .filterTab li').removeClass('filterActive');
      $(this).addClass('filterActive');
  })
  // end filterTab

  // owl Carousel
  $(".owl-carousel").owlCarousel({
    responsive : {
        0 : {
              items : 1
        },
        480 : {
              items : 2
        },
        768 : {
              items : 3
        }
    },
    loop: true,
    center: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 4000
  });
  // end owl Carousel

  // data counter
  function count() {
      if( $(window).scrollTop() >  ($(".counter").offset().top) - ($(window).height()) ) {
            $(".counter").counter({
              autoStart: true,
              duration: 5000,
              countFrom: 0,
              easing: "easeOutCubic",
              onStart: function() {},
              onComplete: function() {}
            });
      }
  }
  // end data counter

  // nav scrolling
  var navHref = [];
  var navPosition = [];
  function scroll(){
    $('.navbar-nav .nav-item').each(function(i){
      navHref[i] = $(".navbar-nav .nav-item").eq(i).attr('href');
      navPosition[i] = $(navHref[i]).offset().top-100
      if( ($(window).scrollTop() >= navPosition[i])  ){
        $('.navbar-nav .nav-item').removeClass('navActive');
        $('.navbar-nav .nav-item').eq(i).addClass('navActive');
      }
    });
    if($(window).scrollTop() > 299) {
          $('.toTop').css({
            "opacity":"1",
            "-ms-filter": "'progid:DXImageTransform.Microsoft.Alpha(Opacity=100)'"
          });
          $('header nav').css("boxShadow","3px 3px 3px black");
    }else{
          $('.toTop').css({
            "opacity":"0",
            "-ms-filter": "'progid:DXImageTransform.Microsoft.Alpha(Opacity=0)'"
          });
          $('header nav').css("boxShadow","none");
    }
  }
  scroll();

  function elementScroll(){
    $('#service .card').each(function(i){
        if ( $(window).scrollTop() > ( ($('#service .card').eq(i).offset().top) - ($(window).height()) ) + 100 ) {
            setTimeout(function(){
              $('#service .card').eq(i).addClass('service-transform');
            },200 * (i+1))
        }
    });
    if( $(window).scrollTop() > ( $('#portfolio .container').offset().top - $(window).height() ) ){
      $('#portfolio .container').addClass('portfolio-show');
    }
    if( $(window).scrollTop() > ( $('#testimonials .container-fluid').offset().top - $(window).height() ) + 100 ){
      $('#testimonials .container-fluid').addClass('testimonials-show');
    }
  }
  elementScroll();

  $('.page-scroll').click(function(){
      var navScroll = $(this).attr("href");
      $('html,body').animate({
          scrollTop: $(navScroll).offset().top - 54
      },1000, 'easeInOutExpo',scroll());
  });
  // end nav scrolling

  // nav scroll mobile
  function navbarScroll() {
    if($('.navbar-toggler .material-icons').is(':visible')){
        $('.navbar-toggler').addClass('nav-click');
        $('.navbar-nav .page-scroll').click(function(){
          $('.nav-click').click();
        });
    }else {
        $('.navbar-toggler').removeClass('nav-click');
    }
  }
  navbarScroll();
  // end nav scroll mobile

  // skillbar
  var skillbar=true;
  function skillBar() {
    if( $(window).scrollTop() >  ($(".skillbar").offset().top) - ($(window).height()) ){
      if(skillbar){
        $('.skillbar').skillBars({
          from: 0,
          speed: 6000,
          interval: 100,
        });
        skillbar=false;
      }
    }
  }
  skillBar();
  // end skillbar

  // window on scroll
  window.onscroll = function(){
      skillBar(),
      scroll(),
      count(),
      elementScroll()
  };
  // end window on scroll

  // window on resize
  $(window).resize(function(){
      scroll();
      navbarScroll();
  });
  // end window on resize
});
