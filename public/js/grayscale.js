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


////////////////////////// FOR COMMISSIONS AND PROCESS PAGE ANIMATION
$(document).ready(function(){
    var firstScroll = false;
    $("#CommissionsCarousel").css('opacity', '0');
    //$(".CommissionProcess").hide();


    $(document).scroll(function(){
        if($(this).scrollTop()>=$('#commissions_and_process_scroll_destination').position().top && !firstScroll){
            textOutImagesIn();
        }
        

    })


    function textOutImagesIn(){

            //$(".poem").show();
            $(".poemAnimate").textillate({
                in: {
                    effect: 'fadeIn'
                }
            });

            setTimeout(function() { $(".poem").fadeOut(3000); }, 13000);

            setTimeout(function(){opacityAnimation()}, 13000);
            $('.carousel').carousel(3); 

            firstScroll=true;
            
    }

    function opacityAnimation(){
        $("#CommissionsCarousel").animate({'opacity': '1'}, 3000);
    }
 
});

//////////////////////////////

$(function() {
    $('.modal').on("show.bs.modal", function(){
        $(this).find(".lazy").each(function() {
            $(this).attr('src', $(this).attr('data-src-lazy'));
        });
    });
});

$("div.lazy").lazyload({
      effect : "fadeIn",
      threshold: 500
  });

$(document).ready(function(){

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


// $("img.lazy").lazyload({
//       effect : "fadeIn",
//       threshold: 1200
//   }); //not working for slider...
      

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 500) {
        $(".navbar").fadeIn(3000);
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        //$(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".navbar").hide();
    }
}


$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

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



$('.info').click(function() {
   $('.carousel').carousel(0); 
});

$('.see_more').click(function(){
    $(".more_images").show(1000);
    $(".see_more").hide();
    });

$('.see_less').click(function(){
    $(".more_images").hide(1000);
    $(".see_more").show(1000);
});


//vertical slider




//works -- but makes website slow...
            $('.carousel').carousel({
              interval: 3500
            })

 $(window).bind("load", function(){
        $(document).ready(function(){
            $('#bg').fadeIn(4000);
            $('#fade_in_words').fadeIn(4000);
            //$('#fade_in_words').show("scale", {}, 2000) 
        })
});




