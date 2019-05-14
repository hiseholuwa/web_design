/*****************************************
            COURSES
******************************************/
$(function () {
    //animate on scroll
    new WOW().init();
});

/*****************************************
            WORK
******************************************/
$(function () {
    $("#work").magnificPopup({
        delegate: 'a', //child item selector, by clicking on it pop-up will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

/*****************************************
            TEAM
******************************************/
$(function () {
    $("#team-members").owlCarousel({
        autoplay: true,
        items: 3,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            //breakpoint from 0 up
            0 : {
                itmes: 1
            },
            //breakpoint from 480 up
            480 : {
                items: 2
            },
            //breakpoint from 768 up
            768 : {
                items: 3
            }
        }
    });
});

/*****************************************
            TESTIMONIALS
******************************************/
$(function () {
    $("#students-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});

/*****************************************
            STATS
******************************************/
$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});

/*****************************************
            PARTNERS
******************************************/
$(function () {
    $("#partners-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            //breakpoint from 0 up
            0 : {
                itmes: 1
            },
            //breakpoint from 480 up
            480 : {
                items: 3
            },
            //breakpoint from 768 up
            768 : {
                items: 5
            },
            //breakpoint from 992 up
            992 : {
                items: 6
            }
        }
    });
});

/******************************************
                   NAVIGATION
*******************************************/
//show & hide transparent black navbar
$(function () {
    $(window).scroll(function () {

        if ($(this).scrollTop() < 50) {

            //hide nav
            $("nav").removeClass("vesco-top-nav");
            $("#back-to-top").fadeOut();

        } else {

            //show nav
            $("nav").addClass("vesco-top-nav");
            $("#back-to-top").fadeIn();

        }
    });
});

//smooth scrolling
$(function () {
    $("a.smooth-scroll").click(function (event) {

        // event.preventDefault();

        //gets/return id like #about, #work etc
        var section = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo");
    });
});

//Close mobile menu onClick
$(function() {
    $(".navbar-collapse ul li a").on("click touch", function(){
       $(".navbar-toggle").click(); 
    });
});