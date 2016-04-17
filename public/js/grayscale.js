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

var firstScroll = false;

$(document).scroll(function(){
    if($(this).scrollTop()>=$('#commissions_and_process_scroll_destination').position().top && !firstScroll){
        textOutImagesIn();
    }
    else{$(".CommissionProcess").show();}

})


function textOutImagesIn(){
        $("#poem").show();
        setTimeout(function() { $("#poem").fadeOut(2000); }, 5000);

        $(".CommissionProcess").hide();
        setTimeout(function(){ $(".CommissionProcess").fadeIn(2000);}, 7000);
        $('.carousel').carousel(4); 
        firstScroll=true;
}

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
    autoplaySpeed: 7000,
    fade: true,
    speed: 4000,
    accessibility: false,
    arrows: false,
    focusOnSelect: true,
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

// Google Maps Scripts
// var map = null;
// // When the window has finished loading create our google map below
// google.maps.event.addDomListener(window, 'load', init);
// google.maps.event.addDomListener(window, 'resize', function() {
//     map.setCenter(new google.maps.LatLng(40.6700, -73.9400));
// });

// function init() {
//     // Basic options for a simple Google Map
//     // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
//     var mapOptions = {
//         // How zoomed in you want the map to start at (always required)
//         zoom: 15,

//         // The latitude and longitude to center the map (always required)
//         center: new google.maps.LatLng(40.6700, -73.9400), // New York

//         // Disables the default Google Maps UI components
//         disableDefaultUI: true,
//         scrollwheel: false,
//         draggable: false,

//         // How you would like to style the map. 
//         // This is where you would paste any style found on Snazzy Maps.
//         styles: [{
//             "featureType": "water",
//             "elementType": "geometry",
//             "stylers": [{
//                 "color": "#000000"
//             }, {
//                 "lightness": 17
//             }]
//         }, {
//             "featureType": "landscape",
//             "elementType": "geometry",
//             "stylers": [{
//                 "color": "#000000"
//             }, {
//                 "lightness": 20
//             }]
//         }, {
//             "featureType": "road.highway",
//             "elementType": "geometry.fill",
//             "stylers": [{
//                 "color": "#000000"
//             }, {
//                 "lightness": 17
//             }]
//         }, {
//             "featureType": "road.highway",
//             "elementType": "geometry.stroke",
//             "stylers": [{
//                 "color": "#000000"
//             }, {
//                 "lightness": 29
//             }, {
//                 "weight": 0.2
//             }]
//         }, {
//             "featureType": "road.arterial",
//             "elementType": "geometry",
//             "stylers": [{
//                 "color": "#000000"
//             }, {
//                 "lightness": 18
//             }]
//         }, {
//             "featureType": "road.local",
//             "elementType": "geometry",
//             "stylers": [{
//                 "color": "#000000"
//             }, {
//                 "lightness": 16
//             }]
//         }, {
//             "featureType": "poi",
//             "elementType": "geometry",
//             "stylers": [{
//                 "color": "#000000"
//             }, {
//                 "lightness": 21
//             }]
//         }, {
//             "elementType": "labels.text.stroke",
//             "stylers": [{
//                 "visibility": "on"
//             }, {
//                 "color": "#000000"
//             }, {
//                 "lightness": 16
//             }]
//         }, {
//             "elementType": "labels.text.fill",
//             "stylers": [{
//                 "saturation": 36
//             }, {
//                 "color": "#000000"
//             }, {
//                 "lightness": 40
//             }]
//         }, {
//             "elementType": "labels.icon",
//             "stylers": [{
//                 "visibility": "off"
//             }]
//         }, {
//             "featureType": "transit",
//             "elementType": "geometry",
//             "stylers": [{
//                 "color": "#000000"
//             }, {
//                 "lightness": 19
//             }]
//         }, {
//             "featureType": "administrative",
//             "elementType": "geometry.fill",
//             "stylers": [{
//                 "color": "#000000"
//             }, {
//                 "lightness": 20
//             }]
//         }, {
//             "featureType": "administrative",
//             "elementType": "geometry.stroke",
//             "stylers": [{
//                 "color": "#000000"
//             }, {
//                 "lightness": 17
//             }, {
//                 "weight": 1.2
//             }]
//         }]
//     };

//     // Get the HTML DOM element that will contain your map 
//     // We are using a div with id="map" seen below in the <body>
//     var mapElement = document.getElementById('map');

//     // Create the Google Map using out element and options defined above
//     map = new google.maps.Map(mapElement, mapOptions);

//     // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
//     var image = 'img/map-marker.png';
//     var myLatLng = new google.maps.LatLng(40.6700, -73.9400);
//     var beachMarker = new google.maps.Marker({
//         position: myLatLng,
//         map: map,
//         icon: image
//     });
// }

/*** my code ***/

// $(document).ready(funtion(){
//     $('.beginning-text.hidden').fadeIn(1000).removeClass('.beginning-text.hidden');
// })



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
              interval: 7000
            })

 $(window).bind("load", function(){
        $(document).ready(function(){
            $('#bg').fadeIn(2000);
            $('#fade_in_words').fadeIn(4000);
            //$('#fade_in_words').show("scale", {}, 2000) 
        })
});




