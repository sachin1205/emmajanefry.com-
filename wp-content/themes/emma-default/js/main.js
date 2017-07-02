//Responsive Navigation
$(document).ready(function() {
  $('body').addClass('js');
  var $menu = $('.site-nav-container'),
    $menulink = $('.menu-link'),
    $menuTrigger = $('.menu-item-has-children > a'),
    $searchLink = $('.search-link'),
    $siteSearch = $('.search-module'),
    $siteWrap = $('.site-wrap');

  $searchLink.click(function(e) {
    e.preventDefault();
    $searchLink.toggleClass('active');
    $siteSearch.toggleClass('active');
    $('#search-site').focus();
  });

  $menulink.click(function(e) {
    e.preventDefault();
    $menulink.toggleClass('active');
    $menu.toggleClass('active');
    $siteWrap.toggleClass('nav-active');
  });

  $('.menu-item-has-children').append("<span class='m-subnav-arrow'></span>");

  $('.m-subnav-arrow').click(function() {
    $(this).toggleClass('active');
    var $this = $(this).prev(".sn-level-2");
    $this.toggleClass('active').next('ul').toggleClass('active');
  });

});

//Magnific Popup
$(document).ready(function() {
  $('.lightbox').magnificPopup({
    type: 'image',
    removalDelay: 500, //Delaying the removal in order to fit in the animation of the popup
    mainClass: 'mfp-fade', //The actual animation
  });
});
$(document).ready(function() {
  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 500,
    preloader: false,

    fixedContentPos: false,
    iframe: {
      patterns: {
        youtube: {
          index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).
          id: 'v=', // String that splits URL in a two parts, second part should be %id%
          // Or null - full URL will be returned
          // Or a function that should return %id%, for example:
          // id: function(url) { return 'parsed id'; }

          src: '//www.youtube.com/embed/%id%?autoplay=1&rel=0' // URL that will be set as a source for iframe.
        }
      },
      srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
    }
  });
});

//Delayed Popup with localstorage to show popup only once
//Detects whether exit intent cookie is stored to avoid any popup conflict
//Set to 11 seconds based on http://app.optimizely.com/l/XjzGz8?token=d7eed1d0226aa9b744c9#view=2
$(document).ready(function() {
  var findPopupId = $('#delayed-popup').length; // if #delayed-popup exists, findPopupId = 1;
    if(findPopupId > 0){ // only run when #delayed-popup exists
    var delayedPopup = setInterval(delayedPopupTimer, 11000);
    function delayedPopupTimer() {
      if (!localStorage.getItem('popup_show') && !localStorage.getItem('exitintent_show')) {
        setTimeout(function() {
          $.magnificPopup.open({
            items: {
              src: '#delayed-popup' //ID of inline element
            },
            type: 'inline',
            removalDelay: 500, //Delaying the removal in order to fit in the animation of the popup
            mainClass: 'mfp-fade', //The actual animation
          });
        }); //Initial popup delay, 5 seconds
        localStorage.setItem('popup_show', 'true'); // Set the flag in localStorage
      }
    }
  }
});


// Exit-Intent Modal
$(document).ready(function() {
  // Exit intent
  function addEvent(obj, evt, fn) {
    if (obj.addEventListener) {
      obj.addEventListener(evt, fn, false);
    } else if (obj.attachEvent) {
      obj.attachEvent("on" + evt, fn);
    }
  }
  // Exit intent trigger
  var findExitId = $('#exit-popup').length; // if #exit-popup exists, findExitId will contain a value of 1 (or more);
    if(findExitId > 0){ // if findExitId is greater than 0, it means that element exits on the page, therefore execute this code;
    addEvent(document, 'mouseout', function(evt) {
      if (evt.toElement === null && evt.relatedTarget === null && !localStorage.getItem('exitintent_show')) {
      //alert('test');
        window.$.magnificPopup.open({
          items: {
            src: '#exit-popup' //ID of inline element
          },
          type: 'inline',
          removalDelay: 500, //Delaying the removal in order to fit in the animation of the popup
          mainClass: 'mfp-fade mfp-fade-side', //The actual animation
        });
        localStorage.setItem('exitintent_show', 'true'); // Set the flag in localStorage
      }
    });
  }
});


//Show More
$(document).ready(function() {
  $(".showmore").after("<p><a href='#' class='show-more-link'>More</a></p>");
  var $showmorelink = $('.showmore-link');
  $showmorelink.click(function() {
    var $this = $(this);
    var $showmorecontent = $('.showmore');
    $this.toggleClass('active');
    $showmorecontent.toggleClass('active');
    return false;
  });
});

//Click to Expand
$(document).ready(function() {
  var $expandlink = $('.ce-header');
  $expandlink.click(function() {
    var $this = $(this);
    var $showmorecontent = $('.showmore');


    $this.parent().toggleClass('active'); 
    $showmorecontent.toggleClass('active');
    return false;
  });
});


// Accordion Tabs
$(document).ready(function () {
  $('.accordion-tabs').each(function(index) {
    $(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
  });
  $('.accordion-tabs').on('click', 'li > a.tab-link', function(event) {
    if (!$(this).hasClass('is-active')) {
      event.preventDefault();
      var accordionTabs = $(this).closest('.accordion-tabs');
      accordionTabs.find('.is-open').removeClass('is-open').hide();

      $(this).next().toggleClass('is-open').toggle();
      accordionTabs.find('.is-active').removeClass('is-active');
      $(this).addClass('is-active');
    } else {
      event.preventDefault();
    }
  });
});
//Full page home
  $(document).ready(function() {
function initialization(){
      $('#fullpage').fullpage({
        anchors: ['Typography', 'HealthWellness', 'TravelAdventure', 'CollectiveWisdom'],
        //sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
        responsiveHeight: 600,
        menu: '#menu',
      });
    }
    var wWidth = $(window).width();
     if(wWidth > 959){
      initialization();
     }
     if(wWidth <= 959){
      $.fn.fullpage.destroy('all');
     }
    });
  
//Flexslider    
$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide",
    animationLoop: false,
    directionNav: false,    
    slideshow: false,
    manualControls: ".flex-control-nav li",
    smoothHeight: true,
    mousewheel: true,
    reverse: false,
  });
});


//Sticky Nav
$(function() {
    //Set the height of the sticky container to the height of the nav
    //var navheight = $('.site-nav-container').height();
    // grab the initial top offset of the navigation 
    var sticky_navigation_offset_top = $('.sh-sticky-wrap').offset().top;
     
    // our function that decides weather the navigation bar should have "fixed" css position or not.
    var sticky_navigation = function(){
        var scroll_top = $(window).scrollTop(); // our current vertical position from the top
         
        // if we've scrolled more than the navigation, change its position to fixed to stick to top,
        // otherwise change it back to relative
        if (scroll_top > sticky_navigation_offset_top) { 
            $('.sh-sticky-wrap').addClass('stuck');
            //$('.sh-sticky-wrap').addClass('stuck').css('height',navheight);
        } else {
            $('.sh-sticky-wrap').removeClass('stuck'); 
        }   
    };
     
    // run our function on load
    sticky_navigation();
     
    // and run it again every time you scroll
    $(window).scroll(function() {
         sticky_navigation();
    });
 
});

//Smooth Scroll - Detects a #hash on-page link and will smooth scroll to that position. Will not affect regular links.
$(function() {
  $('.smooth-scroll').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

//Slide in CTA
$(function() {
  var slidebox = $('#slidebox');
  if (slidebox) {
    $(window).scroll(function() {
      var distanceTop = $('#last').offset().top - $(window).height();
      if ($(window).scrollTop() > distanceTop)
        slidebox.animate({
          'right': '0px'
        }, 300);
      else
        slidebox.stop(true).animate({
          'right': '-430px'
        }, 100);
    });
    $('#slidebox .close').on('click', function() {
      $(this).parent().remove();
    });
  }
});


// include span tags around all navigation elements
$("#hs_menu_wrapper_primary_nav ul li a").each(function( index ) {
  var navText = $( this ).html(); $( this ).html("<span>" + navText + "</span>");
});


//Styles
// $(document).ready(function() {
//  $('.site-content *').removeAttr("style");
// });

$('.main-content').addClass('more height');

var wWidth = $(window).width();
if(wWidth <= 639 ){
  $( ".main-content" ).after( "<div class='link'><a id='readmore' href='javascript:changeheight()'>Show More</a></div>" );
}

$(window).resize(function() {
  var wWidth = $(window).width();
  if (wWidth < 640) {
    var addedDiv = $(".link");
    var length1= addedDiv.length;
    if (addedDiv.length == 0) {
      $(".link").remove();
      $( ".main-content" ).after( "<div class='link'><a id='readmore' href='javascript:changeheight()'>Show More</a></div>" );
    }
  }
  else if (wWidth > 639){
    $(".link").remove();
  }
   $(function() {
       var curHeight = $('.more').height();
       if (curHeight == 250)
           $('#readmore').show();
       else
           $('#readmore').hide();
   });
});
$(function() {
   var curHeight = $('.more').height();
   if (curHeight == 250)
       $('#readmore').show();
   else
       $('#readmore').hide();
});
$(window).on('resize', function() {
   $(function() {
       var curHeight = $('.more').height();
       if (curHeight == 250)
           $('#readmore').show();
       else
           $('#readmore').hide();
   });
});

function changeheight() {
   var readmore = $('#readmore');
   if (readmore.text() == 'Show More') {
       readmore.text("Show Less");
   } else {
       readmore.text("Show More");
   }

   $('.height').toggleClass("heightAuto");
};