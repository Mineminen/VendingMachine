
(function($) {
    "use strict";


    $('#bz-mobile-menu').meanmenu({
        meanMenuContainer: '.bz-mobile-menu',
        meanScreenWidth: "9999"
    });


    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll < 200) {
            $(".header-sticky").removeClass("sticky");
        } else {
            $(".header-sticky").addClass("sticky");
        }
    });

    //mobile side menu
    $('.side-toggle').on('click', function() {
        $('.side-info').addClass('info-open');
        $('.offcanvas-overlay').addClass('overlay-open');
    })

    $('.side-info-close,.offcanvas-overlay').on('click', function() {
        $('.side-info').removeClass('info-open');
        $('.offcanvas-overlay').removeClass('overlay-open');
    })

    $('.filter-icon-text').on('click', function() {
        $(this).toggleClass('show-icon');
        $('.shop-filter-visibilit-hidden').slideToggle(500);
    });

    // Image swap on click for season
    $(".bz-season-item .product-color-nav img").click(function() {
        var parentClass = $(this).parent().closest(".bz-season-item");
        var ChldImg = parentClass.find(".bz-season-item-img img");
        var ImageSrcValue = $(this).attr("src");
        ChldImg.attr("src", $(this).attr("src").replace());
        $(this).parent().siblings(".active").removeClass("active");
        $(this).parent().addClass("active");
    });

    // Image swap on click for shop
    $(".bz-shop-color .product-color-nav img").click(function() {
        var parentClass = $(this).parent().closest(".bz-shop-color");
        var ChldImg = parentClass.find(".bz-shop-color-img img");
        var ImageSrcValue = $(this).attr("src");
        ChldImg.attr("src", $(this).attr("src").replace());
        $(this).parent().siblings(".active").removeClass("active");
        $(this).parent().addClass("active");
    });

    function sliderActive() {
        /*------------------------------------
        Slider
        --------------------------------------*/
        if (jQuery(".slider-active").length > 0) {
            let sliderActive1 = '.slider-active';
            let sliderInit1 = new Swiper(sliderActive1, {
                // Optional parameters
                slidesPerView: 1,
                rtl: false,
                slidesPerColumn: 1,
                paginationClickable: true,
                loop: true,

                autoplay: {
                    delay: 5000,
                },

                // If we need pagination
                pagination: {
                    el: ".cinkes-swiper-pagination",
                    clickable: true,
                },

                // Navigation arrows
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },

                a11y: false
            });

            function animated_swiper(selector, init) {
                let animated = function animated() {
                    $(selector + ' [data-animation]').each(function() {
                        let anim = $(this).data('animation');
                        let delay = $(this).data('delay');
                        let duration = $(this).data('duration');

                        $(this).removeClass('anim' + anim)
                            .addClass(anim + ' animated')
                            .css({
                                webkitAnimationDelay: delay,
                                animationDelay: delay,
                                webkitAnimationDuration: duration,
                                animationDuration: duration
                            })
                            .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                                $(this).removeClass(anim + ' animated');
                            });
                    });
                };
                animated();
                // Make animated when slide change
                init.on('slideChange', function() {
                    $(sliderActive1 + ' [data-animation]').removeClass('animated');
                });
                init.on('slideChange', animated);
            }

            animated_swiper(sliderActive1, sliderInit1);
        }
    }


    // Feature active 1 
    const bzFeatureActive = new Swiper(".bz-feature-active", {
        slidesPerView: 5,
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 1500,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 5
            }
        }
    });



    // testimonial active 
    const testimonialActive = new Swiper(".bz-testimonial-active", {
        slidesPerView: 2,
        spaceBetween: 70,
        loop: true,
        dots: true,
        autoplay: {
            delay: 1500,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 50,
            },
            1200: {
                slidesPerView: 2
            }
        }
    });

    // brand active 1 
    const bzBrandActive = new Swiper(".bz-brand-active", {
        slidesPerView: 5,
        spaceBetween: 100,
        loop: true,
        autoplay: {
            delay: 1500,
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 50,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 70,
            },
            1199: {
                slidesPerView: 5
            }
        }
    });


    // shop details active 
    var singleShopDetailsActive = new Swiper(".bz-single-shop-details-active", {
        loop: true,
        spaceBetween: 0,
        slidesPerView: 1,
        freeMode: true,
        autoplay: false,
        watchSlidesProgress: true,
    });
    var singleShopDetailsControl = new Swiper(".bz-single-shop-details-control-active", {
        loop: true,
        spaceBetween: 15,
        slidesPerView: 3,
        freeMode: true,
        autoplay: false,
        watchSlidesProgress: true,
        slideToClickedSlide: true,
        thumbs: {
            swiper: singleShopDetailsActive,
        },
        breakpoints: {
            0: {
                slidesPerView: 3,
            },
            576: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 3,
            },
            1199: {
                slidesPerView: 3
            }
        }
    });

    // single product popup view 
    var singleShopDetailsActivePopup = new Swiper(".bz-single-shop-details-active-popup", {
        loop: true,
        spaceBetween: 0,
        slidesPerView: 1,
        freeMode: true,
        autoplay: false,
        watchSlidesProgress: true,
    });
    var singleShopDetailsControl = new Swiper(".bz-single-shop-details-control-active-popup", {
        loop: true,
        spaceBetween: 15,
        slidesPerView: 3,
        freeMode: true,
        autoplay: false,
        watchSlidesProgress: true,
        slideToClickedSlide: true,
        thumbs: {
            swiper: singleShopDetailsActivePopup,
        },
        breakpoints: {
            0: {
                slidesPerView: 3,
            },
            576: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 3,
            },
            1199: {
                slidesPerView: 3
            }
        }
    });

    // related product 
    const relatedProduct = new Swiper(".bz-shop-details-related-product-active", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        centeredSlides: false,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1199: {
                slidesPerView: 3
            }
        }
    });
    /* magnificPopup img view */
    $('.popup-image').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    /* magnificPopup video view */
    $('.popup-video').magnificPopup({
        type: 'iframe'
    });

    //nice select
    $('.has-nice-select, .contact-form select, .cart-total-change-address-values select').niceSelect();

    //selec 2
    $('.bz-input-single .select-search').select2();
    // data background
    $("[data-background]").each(function() {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ") ")
    })
    // data width
    $("[data-width]").each(function() {
        $(this).css("width", $(this).attr("data-width"))
    })
    // data background color
    $("[data-bg-color]").each(function() {
        $(this).css("background-color", $(this).attr("data-bg-color"))
    })

    // scrollToTop
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: '<i class="icofont icofont-long-arrow-up"></i>', // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });

    // Countdown
    $('[data-countdown]').each(function() {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
            $this.html(event.strftime('<div class="count_down">%D<span>d</span></div><div class="count_down">%H<span>h</span></div><div class="count_down">%M<span>m</span></div><div class="count_down">%S<span>s</span></div>'));
        });
    });
    //   odometer
    $('.odometer').appear(function(e) {
        var odo = $(".odometer");
        odo.each(function() {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
        });
    });
    // range slider activation
    $(".slider-range-bar").slider({
        range: true,
        min: 0,
        max: 700,
        values: [50, 500],
        slide: function(event, ui) {
            $(".amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        },
    });

    // product quantity
    var productQuantity = 1;

    // quantity form 
    $('.bz-shop-details-content-quantity-box .plus').on('click', function() {
        var selectedInput = $(this).closest('.bz-shop-details-content-quantity-box').find('input');
        productQuantity += 1;
        selectedInput.attr('value', productQuantity);
    });
    $('.bz-shop-details-content-quantity-box .minus').on('click', function() {
        var selectedInput = $(this).closest('.bz-shop-details-content-quantity-box').find('input');
        productQuantity -= 1;
        if (productQuantity < 1) {
            productQuantity = 1;
        }
        selectedInput.attr('value', productQuantity);
    });


    $('.cart-total-change-address-text').on('click', function() {
        $('.cart-total-change-address-values').slideToggle(300);
    });

    // isotop
    if (jQuery(".bz-gallery-images").length > 0) {
        $('.bz-gallery-images').imagesLoaded(function() {
            let $grid = $('.bz-gallery-images').isotope({
                percentPosition: true,
                masonry: {
                    columnWidth: '.bz-gallery-img' // columnWidth: 1
                }
            });

        });
    }

    // WOW active
    new WOW().init();

    sliderActive();

    // category shows
    $('#bz-cat-click').on('click', function() {
        $('.bz-category-wrapper').toggleClass('visible');
    });
    $('.cat-filter').on('click', function() {
        var input_value = $(this).val();
        $('.bz-search-all-cat').text(input_value);
    });

    // category show on sidebar 
    $('#bz-cat-click-sidebar').on('click', function() {
        $('.bz-category-wrapper-sidebar').toggleClass('visible');
    });
    $('.cat-filter-sidebar').on('change', function() {
        var input_value_sidebar = $(this).val();
        $('.bz-search-all-cat-sidebar').text(input_value_sidebar);
    });

    // zoom in product image
    $('.bz-single-shop-details-control-image').on('click', function() {
        let imgSrc = $(this).find('img').attr('src');
        imgSrc = imgSrc.replace(".jpg", "-") + 'large.jpg';
        console.log(imgSrc);
        $('.bz-shop-details-content-widget-action-item a.popup-image').attr('href', imgSrc);
    });


    // product view popup
    $('.eye-popup-product, .bz-overlay').on('click', function() {
        $('.bz-single-product-popup').addClass('visible');
        $('.bz-overlay').addClass('visible');
    });
    $('.bz-single-product-popup-close-action, .bz-overlay').on('click', function() {
        $('.bz-single-product-popup').removeClass('visible');
        $('.bz-overlay').removeClass('visible');
    });

})(jQuery);