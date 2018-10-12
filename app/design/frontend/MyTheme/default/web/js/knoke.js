/* ---------------------- */
/* @AUTHOR  : Amine.Yar 		  */
/* @VERSION : 0.0.1               */
/* @DATE    : 07/2018             */

(function($){ // FUnction that accept an argument.

$(document).ready(function(){

    //Responsive Main-Menu
    $(".menu-trigger").click(function(event){
        event.stopPropagation();
        event.preventDefault();
        if($(this).hasClass("active")) {
            //Has css Class active
            $("html").css({"overflow":"inherit"});
            $(this).find("div").stop().html("Menu");
            $(".main-menu .menu-content").stop().fadeOut(300);
        }else{
            $("html").css({"overflow":"hidden"});
            $(this).find("div").stop().html("Close");
            $(".main-menu .menu-content").stop().fadeIn(500);
        }
        $(this).toggleClass("active");
        return false;
    });

    //Match Height blocs
    $('.match-height').matchHeight({
        byRow: true,
        property: 'height',
        target: null,
        remove: false
    });

    //Slick slider
    $('.slider-box').slick({
        dots: true,
        arrows: false,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        cssEase: 'linear'
    });

    $('.slider-arrows').slick({
        dots: false,
        arrows: true,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 4000,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        fade: false,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    //Hours of work section
    $(".item-address").click(function (event) {
        event.stopPropagation();
        event.preventDefault();

        if($(this).hasClass("active")) {
            //Has css Class active
            $(this).find(".hours-detail").stop().slideUp(400);

            setTimeout(function () {
                $(".item-address p, .item-address .phone").slideDown(400);
            }, 400);
        }else{
            $(".item-address .hours-detail").stop().slideUp(400);
            $(".item-address").stop().removeClass("active");
            $(".item-address p, .item-address .phone").stop().slideUp(10);
            $(this).find(".hours-detail").stop().slideDown(400);
        }
        $(this).toggleClass("active");
        return false;
    });

    //Links Tree toggle
    $(".tree-toggle").click(function () {
        $(this).stop().toggleClass("open");
        $(this).parent().children("ul.tree").stop().toggle(300);
    });

    //filter price
    $( "#filter-price" ).slider({
        range: true,
        min: 1,
        max: 700,
        values: [ 1, 700 ],
        slide: function( event, ui ) {
            $( "#amount-price" ).val( "PRICE : $" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
    });
    $( "#amount-price" ).val( "PRICE : $" + $( "#filter-price" ).slider( "values", 0 ) +
        " - $" + $( "#filter-price" ).slider( "values", 1 ) );


    //START:Google-Map-Api-v3=======================//
    // Enable the visual refresh
    google.maps.visualRefresh = true;

    var locations = [
        ['44.975719', '-92.755909', 3, 'Knokes Chocolate Shop'],
        ['44.982290', '-93.195351', 2, 'Knokes Chocolates & Nuts'],
        ['44.948546', '-92.711856', 1, 'Knokes Chocolates & Nuts Warehouse']
    ];

    var styles = [
        {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "saturation": 36
                },
                {
                    "color": "#000000"
                },
                {
                    "lightness": 40
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#000000"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 17
                },
                {
                    "weight": 1.2
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 21
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 17
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 29
                },
                {
                    "weight": 0.2
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 18
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 19
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 17
                }
            ]
        }
    ];

    var styledMapOptions = {name: "styles"};

    function initialize(zoomMap, lat, lng) {
        var mapOptions = {
            zoom: zoomMap,
            center: new google.maps.LatLng(lat, lng),
            scrollwheel: false,
            mapTypeControl: false,
            fullscreenControl: false,
            draggable: true,
            disableDoubleClickZoom: true,
            streetViewControl: false,
            disableDefaultUI: false,
            zoomControlOptions: {
                styles: google.maps.ZoomControlStyle.SMALL
            },
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'berdychmap']
        };

        var map = new google.maps.Map(document.getElementById('map'), mapOptions);
        var usRoadMapType = new google.maps.StyledMapType(styles, styledMapOptions);
        map.mapTypes.set('berdychmap', usRoadMapType);
        map.setMapTypeId('berdychmap');

        setMarkers(map);

        var flightPath = new google.maps.Polyline({
            geodesic: true,
            strokeColor: '#e7ea07',
            strokeOpacity: 1.0,
            strokeWeight: 3
        });

        flightPath.setMap(map);

    }//END:initialize()

    function setMarkers(map) {

        var image = {
            size: new google.maps.Size(54, 49),
            scaledSize: new google.maps.Size(54, 49),
            url: "images/icon-maker-map.png"
        };

        for (var i = 0; i < locations.length; i++){
            var obstacle = locations[i];
            var myLatLng = new google.maps.LatLng(obstacle[0], obstacle[1]);
            var marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                icon: image,
                title: obstacle[3],
                zIndex: obstacle[2],
                labelAnchor: new google.maps.Point(13, 33),
                labelClass: "labels"
            });

        }//END:for()


    }//END:setMakers()

    //Responsive Map
    google.maps.event.addDomListener(window, "resize", function(){
        var windowsWidth = $(window).width();
        if(windowsWidth > 1000){
            initialize(10, 44.975719, -93.355909);
        }else{
            initialize(10, 44.975719, -92.955909);
            if(windowsWidth <= 768){
                initialize(10, 44.975719, -92.955909);
            }
            if(windowsWidth <= 576){
                initialize(9, 44.975719, -92.955909);
            }
        }//END:if
    });

    google.maps.event.addDomListener(window, "load", function(){
        var windowsWidth = $(window).width();
        if(windowsWidth > 1000){
            initialize(10, 44.975719, -93.355909);
        }else {
            initialize(10, 44.975719, -92.955909);
            if (windowsWidth <= 768) {
                initialize(10, 44.975719, -92.955909);
            }
            if (windowsWidth <= 576) {
                initialize(9, 44.975719, -92.955909);
            }
        }//END:if
    });

    //END:Google-Map-Api-v3=========================//


});//END:document.ready()

})(jQuery);
//Sending jQuery to that function