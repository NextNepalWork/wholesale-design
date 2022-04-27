// loader 
// $(document).ready(function(){
// 	$('div#loading').removeAttr('id');
// });
var preloader = document.getElementById("loading");
// window.addEventListener('load', function(){
// 	preloader.style.display = 'none';
// 	})
function myFunction() {
    preloader.style.display = 'none';
};
// Navigation Js Scroll Starts
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 50) {
        $(".navigation-wrap").css("border-bottom", "0.5px solid #FF6A00");
    } else {
        $(".navigation-wrap").css("border-bottom", "unset");
    }
}); // Navigation Js Scroll Ends

// Brand Slick Slider Starts
$('.our_brand').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false
});
// Brand Slick Slider Ends
// Brand Slick Slider On Modal Popup
$(window).on('shown.bs.modal', function () {
    $('.our_brand-2').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false
    });
});
// Brand Slick Slider On Modal Popup End
// Banner Slick Slider Starts
$('.slick-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    speed: 300,
    arrows: false,
    // centerMode: true,
    autoplay: true,
    dots: true,
});
// Banner Slick Slider Ends
// Banner Slick Slider Starts
$('.testimonial-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    arrows: false,
    // centerMode: true,
    autoplay: true,
    dots: true,
});
// Banner Slick Slider Ends
// Category Slick Slider Starts
$('.slick-slider-category').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    responsive: [{
            breakpoint: 1400,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1080,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 780,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: true
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true
            }
        },
        {
            breakpoint: 325,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
            }
        }
    ]
});
// Category Slick Slider Ends
// Product Listing Slick Slider Starts
$('.slick-slider-listing').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    responsive: [{
            breakpoint: 1400,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1080,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 780,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: true
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true
            }
        }, {
            breakpoint: 325,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
            }
        }
    ]
});
// Product Listing Slick Slider Ends
// Product Detail Image Size choose Js
$(document).ready(function () {
    $('.imagesize').click(function () {
        if ($('.imagesize-active').length) {
            $('.imagesize-active').not($(this)).removeClass('imagesize-active').addClass('image-size');
        }
        $(this).removeClass('image-size').addClass('imagesize-active');
    });
    // Toastr
    $('.toastr-click').click(function () {
        console.log('hwllo');
        toastr.success('Successfully Product added');
        // $('.toastr-click').prop('disabled', true);
        // delayToasts();
    });
});
// Product Detail Image Size choose Js
function successMsg() {
    toastr.success('Successfully Product added');
}