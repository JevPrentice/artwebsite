/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

/* lazyload.js (c) Lorenzo Giuliani
 * MIT License (http://www.opensource.org/licenses/mit-license.html)
 *
 * expects a list of:  
 * `<img src="blank.gif" data-src="my_image.png" width="600" height="400" class="lazy">`
 */


// $(".modal-content").lazyload({
//     effect: "fadeIn"
// })

// $('.CommissionProcess').one('inview', function (event, visible) {
//     if (visible == true) {
        
//     }
// });

// function isScrolledIntoView(elem)
// {
//     var docViewTop = $(window).scrollTop();
//     var docViewBottom = docViewTop + $(window).height();
//     var elemTop = $(elem).offset().top;
//     var elemBottom = elemTop + $(elem).height();
//     return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) && (elemBottom <= docViewBottom) && (elemTop >= docViewTop));
// }

// $(window).scroll(function() {    
//     if(isScrolledIntoView($('#commissions_and_process_scroll_destination')))
//     {
//         $("#poem").show();
//         setTimeout(function() { $("#poem").hide(3000); }, 5000);

//         $(".CommissionProcess").hide();
//         setTimeout(function(){ $(".CommissionProcess").show(3000);}, 5000);
//     }    
// });



function opacityAnimation(divname, time, opacity_lvl){
        $(divname).animate({'opacity': opacity_lvl}, time);
    }


// $(window).bind("load", function(){
//     opacityAnimation("#fade_in_words", 4000, 1)
//            //$('#fade_in_words').fadeIn(4000);
//            //$('#fade_in_words').show("scale", {}, 2000) 
// });

// $('#fade_in_words').fadeIn(4000);
opacityAnimation(".brand-heading", 500, 1)
opacityAnimation(".intro-text", 500, 1)
// opacityAnimation("#fade_in_words", 4000, 1)

 var isMobile = {
            Android: function() {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function() {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function() {
                return navigator.userAgent.match(/IEMobile/i);
            },
            Firefox: function(){
                return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
            },
            any: function() {
                return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
            },
            none: function() {
                return null;
            }
        };





////////////////////////// FOR COMMISSIONS AND PROCESS PAGE ANIMATION

// if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1 || isMobile.any()){
//     $(".poem").css('opacity', '0');
//     opacityAnimation("#CommissionsCarousel", 2000, 1);
//     $(".carousel-caption").css('font-size', '1em');
// }

// else {
//     opacityAnimation(".CommissionsHeading", 0, 0)
//     var firstScroll = false;

//     $(".poem").css('opacity', '0');
//     $(document).scroll(function(){
//         if($(this).scrollTop()>=$('#commissions_and_process_scroll_destination').position().top && !firstScroll){
//             textOutImagesIn();
//         }
//     })

    // function textOutImagesIn(){

    //         opacityAnimation(".poem", 4000, 1);
    //         setTimeout(function() { $(".poem").fadeOut(6000); }, 7000);

    //         setTimeout(function(){opacityAnimation("#CommissionsCarousel", 3000, 1)}, 11000);
    //         setTimeout(function(){opacityAnimation(".CommissionsHeading", 1000, 1); $('.carousel').carousel(0); }, 8500);
            
    //         firstScroll=true;      
    // };  
// };
 



////////////////////////////// LAZY LOAD

$(function() {
    $('.modal').on("show.bs.modal", function(){
        $(this).find(".lazy").each(function() {
            $(this).attr('src', $(this).attr('data-src-lazy'));
        });
    });
});

$("div.lazy").lazyload({
      effect : "fadeIn",
      //threshold: -500
  });

//////////////////////////////

        
$(document).ready(function(){
    if (isMobile.any()){
            $(".modal-dialog").removeClass("modal-xl");
            $(".modal-dialog").addClass("modal-sm");

            $(".about_text").readmore({
                speed:2000,
                collapsedHeight: 100,
                moreLink: '<a href="#">Read More</a>',
                lessLink: '<a href="#about_me_scroll_destination">Read Less</a>',
            });

            $(".about_text").css('textAlign', 'left');
            $(".bio_text").css('textAlign', 'left');
            $("#commissions_and_process_body").css('paddingTop', '30%');
            $("#about_me_body").css('paddingTop', '30%');
            $("#self_portraits_body").css('paddingTop', '30%');
            $(".carousel-caption").css('fontSize', '12px');
        };

    $('.slick_about').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        speed: 4000,
        accessibility: false,
        arrows: false,
        focusOnSelect: true,
        mobileFirst: true,
      });
    });

///////////////////////////////////////////////// jQuery to collapse the navbar on scroll

//     function collapseNavbar() {
//         // if($(this).scrollTop()>=$('#commissions_and_process').position().top){
//         //     $(".navbar").fadeIn();
//         //     $(".navbar-fixed-top").addClass("top-nav-collapse");
//         // }

//         // else{
//         //    $(".navbar-fixed-top").removeClass("top-nav-collapse");
//         //    $(".navbar").hide(); 
//         // }
//         // if ($(".navbar").offset().top > 200) {
//         if ($(document).scrollTop() > 200){
//              $(".navbar").fadeIn(1000);
//              $(".navbar-fixed-top").addClass("top-nav-collapse");
//         } 
//         else {
//             $(".navbar-fixed-top").removeClass("top-nav-collapse");
//             $(".navbar").hide();
//         }
//     }


// $(document).ready(collapseNavbar);
// $(window).scroll(collapseNavbar);
//collapseNavbar();

// $('#xx').click(function() {
//     // collapseNavbar();
//      $(".navbar").fadeIn(1000);
//      $(".navbar-fixed-top").addClass("top-nav-collapse");
// });

///////////////////////////////////////////////


// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
    $('.navbar-toggle:visible').click();
  }
});


//////////////////////////////////////////////



$('.info').click(function() {
   $('.carousel').carousel(0); 
});

// $('.see_more').click(function(){
//     $(".more_images").show(1000);
//     $(".see_more").hide();
//     });

// $('.see_less').click(function(){
//     $(".more_images").hide(1000);
//     $(".see_more").show(1000);
// });


$('#CommissionsCarousel').carousel({
              interval: 7000
            })

$('.carousel').carousel({
    interval: 7000
            })


///////////////////////////////////// LAZY LOAD CAROUSEL IMAGES


var cHeight = 0;

$('#CommissionsCarousel, #SelfPortraitsCarousel').on('slide.bs.carousel', function (e) {
    var $nextImage = null;

    $activeItem = $('.active.item', this);

    if (e.direction == 'left'){
        $nextImage = $activeItem.next('.item').find('img');
    } else {
        if ($activeItem.index() == 0){
            $nextImage = $('img:last', $activeItem.parent());
        } else {
            $nextImage = $activeItem.prev('.item').find('img');
        }
    }

    // prevents the slide decrease in height
    if (cHeight == 0) {
       cHeight = $(this).height();
       $activeItem.next('.item').height(cHeight);
    }

    // prevents the loaded image if it is already loaded
    var src = $nextImage.data('lazy-load-src');

    if (typeof src !== "undefined" && src != "") {
       $nextImage.attr('src', src)
       $nextImage.data('lazy-load-src', '');
    }
});


$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});


