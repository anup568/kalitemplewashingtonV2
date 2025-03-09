//Categories Slider Js
jQuery(document).ready(function () {
    jQuery('.slider-celebrations').owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        nav: true,
        dots: false
    });
});


jQuery(document).ready(function () {
    jQuery(".cross-btn button").click(function () {
        jQuery(".hiring-notice").slideUp(1000);
    });
});

//banner Slider Js
jQuery(document).ready(function () {
    jQuery('.banner-slider').owlCarousel({
        stagePadding: 250,
        loop: true,
        items: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 2000,
        autoplayTimeout: 5000,
        autoplayHoverPause: true
    })
});


//Testimonial Slider Js
jQuery(document).ready(function () {
    jQuery('.testimonial-slider').owlCarousel({
        loop: true,
        items: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 2000,
        autoplayTimeout: 5000,
        autoplayHoverPause: true
    })
});


//Partners Slider Js
jQuery(document).ready(function () {
    jQuery('.partners-slider').owlCarousel({
        loop: true,
        items: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 2000,
        margin: 5,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
});

//myModal
jQuery(document).ready(function () {
    $("#myModal").on('hidden.bs.modal', function (e) {
        $("#myModal iframe").attr("src", $("#myModal iframe").attr("src"));
    });
});


//Accordion Js
jQuery(".daily-puja-box .text-desc a").hover(function () {
    jQuery(this).closest(".daily-puja-box .item").toggleClass("show-box");
    jQuery(this).closest(".daily-puja").toggleClass("show-box");
});

//Navbar-shrink Js
jQuery(document).ready(function () {
    jQuery(document).on("scroll", function () {
        if (jQuery(document).scrollTop() > 50) {
            jQuery(".navbar").addClass("navbar-shrink");
        } else {
            jQuery(".navbar").removeClass("navbar-shrink");
        }
    });

});

//Glightbox Js
jQuery(document).ready(function () {
    const glightbox = GLightbox({
        openEffect: 'zoom',
        closeEffect: 'fade',
        touchNavigation: false,
        draggable: false,
        cssEfects: {
            fade: {
                in: 'fadeIn',
                out: 'fadeOut'
            },
            zoom: {
                in: 'zoomIn',
                out: 'zoomOut'
            }
        }
    });
});

//Mobile Menu Js
jQuery(document).ready(function () {
    jQuery('.mob_open_menu').click(function () {
        jQuery('.navigation').toggleClass('open_menu');
    });
    jQuery('.mob_close_menu').click(function () {
        jQuery('.navigation').removeClass('open_menu');
    });
});

//Navigation Active Js
jQuery(document).ready(function () {
    jQuery('.navigation ul li a').click(function () {
        jQuery('.navigation ul li a').removeClass("active");
        jQuery(this).addClass("active");
    });
});

//Top_button Js
jQuery(document).ready(function () {
    var btn = jQuery('#top_button');
    jQuery(window).scroll(function () {
        if (jQuery(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });
    btn.on('click', function (e) {
        e.preventDefault();
        jQuery('html, body').animate({
            scrollTop: 0
        }, '300');
    });
});

//AOS Js
//jQuery(document).ready(function () {
//    AOS.init({
//        duration: 1000,
//    });
//});
