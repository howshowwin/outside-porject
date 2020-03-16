var index = 0
var nav_index_div = $('.nav_mid li').eq(index).children("div")
var nav_index_a = $('.nav_mid li').eq(index).children("a")
var w = $(window).width()
var h = $(window).height()
wow = new WOW(
    {
        offset: h / 4,          // default
        mobile: true,       // default
    }
)
wow.init();


$(document).ready(function () {

    $('.slick-slider').bxSlider({
        minSlides: 1,
        maxSlides: 1,
        controls: false
    });

    $(".explore-button").hover(function () {
        $(this).parent().addClass("hovered-card");
    }, function () {
        $(this).parent().removeClass("hovered-card");
    }
    );


});





// $('.slick-slider').bxSlider({
//     minSlides: 1,
//     maxSlides: 1,
//     controls: false
// });

// $(".explore-button").hover(function () {
//     $(this).parent().addClass("hovered-card");
// }, function () {
//     $(this).parent().removeClass("hovered-card");
// }
// );














$(window).resize(function () {
    w = $(window).width()
    h = $(window).height()
    if (w <= 768) {
        $("#nav-icon3").removeClass('display_none')
    } else {
        $("#nav-icon3").addClass('display_none')
    }

})

if (w <= 768) {
    $("#nav-icon3").removeClass('display_none')
} else {
    $("#nav-icon3").addClass('display_none')
}


$('.menu_box').css({
    height: h,
    width: w,
    right: -w
})


nav_index_div.addClass('active select')
nav_index_a.addClass('select')
$(".nav_mid li a").mouseenter(function () {
    $(this).next().addClass('active select')
    $(this).addClass('select')
    $(".nav_mid li a").not(this).next().removeClass('active select')
    nav_index_a.removeClass('select')
})
$(".nav_mid li a").mouseleave(function () {
    $(this).next().removeClass('active select')
    $(this).removeClass('select')
    nav_index_a.addClass('select')
    nav_index_div.addClass('active select')
})

$('.footer-arrow').click(function () {
    $(".footer-flex").toggleClass('footer-flex-change')
})

$(window).scroll(function () {
    var scrollTop = $(window).scrollTop()
    console.log($(window).scrollTop())

    if (scrollTop <= 0) {
        $('.navbar').css({
            boxShadow: "0px 0px 0px rgba(99, 99, 99, 0)"
        })

    } else {
        $('.navbar').css({
            boxShadow: "0px 3px 2px rgba(99, 99, 99, 0.144)"
        })
    }
    if (scrollTop < h / 2) {
        let opacity = scrollTop / (h / 2)
        $(".navbar").css({
            top: 40 - opacity * 40,

        })


    }
    else {
        $(".navbar").css({
            top: 0
        })

    }

    if (scrollTop > h / 3) {
        $('.navbar_bottom').addClass('navbar_bottom_appear')
    }
    else {
        $('.navbar_bottom').removeClass('navbar_bottom_appear')

    }

    if (scrollTop < h) {
        let opacity = scrollTop / (h)
        $('.img2').css({
            opacity: opacity
        })
        $('.img1').css({
            opacity: 1 - opacity
        })
        $(".navbar").css({
            background: " rgba(255, 255, 255, " + opacity + ")"
        })
        $('.navbar_menu_box a').css({
            color: `rgba(${255 - (opacity * 255)},${255 - (opacity * 255)},${255 - (opacity * 255)},1)`,

        })
        $('.navbar_menu_box').css({
            background: " rgba(255, 255, 255, " + opacity + ")"
        })
        $(".nav_mid li a").css({
            color: `rgba(${255 - (opacity * 255)},${255 - (opacity * 255)},${255 - (opacity * 255)},1)`
        })
        $(".nav_logo").css({
            color: `rgba(${255 - (opacity * 2)},${255 - (opacity * 162)},${255 - (opacity * 184)},1)`
        })
        $('.nav_bottom_line').css({
            background: `rgba(${255 - (opacity * 2)},${255 - (opacity * 162)},${255 - (opacity * 184)},1)`

        })
        $(".login a").css({
            color: `rgba(${255 - (opacity * 255)},${255 - (opacity * 255)},${255 - (opacity * 255)},1)`

        })
        $('#nav-icon3 span').css({
            background: `rgba(${255 - (opacity * 2)},${255 - (opacity * 162)},${255 - (opacity * 184)},1)`

        })
    } else {
        $(".navbar").css({
            background: " rgba(255, 255, 255, 1)"

        })
    }

})
if (w <= 1700 && w>=800) {
    $('.backgroundimg img').css({
        marginLeft: (-1920 + w) / 2
    })
} else if(w < 800 && w>=500)
{
    $('.backgroundimg img').css({
        marginLeft: (-1200 + w) / 2
    })
} else if(w < 500 && w>=300)
{
    $('.backgroundimg img').css({
        marginLeft: (-750 + w) / 2
    })
}else{
    $('.backgroundimg img').css({
        marginLeft: 0,
    })
}
var picnum
var w = $(window).width()

function testnum(w){
    // console.log(w)
 
    if(w>=1424){
        picnum= 6
    }
   else if(1424>w && w>=800){
        picnum  = 4
    }
    else if(800>w && w>=480){
        picnum = 2
    }
    else if(480>w){
        picnum = 1
    }
    // console.log(picnum)
}
// $('.facebook').mouseenter(function(){
//     $(".fb").attr("src","img/LOGO/facebook-f-brands-hover.svg")
// })
// $('.line').mouseenter(function(){
//         $(".ln").attr("src","img/LOGO/line-brands-hover.svg")

    
// })
// $('.bookstore').mouseenter(function(){
//     $('.nai').attr("src","img/LOGO/book-solid-hover.svg")
// })
// $('.booking_b').mouseenter(function(){
//     $('.try').attr("src","img/LOGO/hands-helping-solid-hover.svg")
// })
// $('.facebook').mouseleave(function(){
//     $(".fb").attr("src","img/LOGO/facebook-f-brands.svg")
// })
// $('.line').mouseleave(function(){
//     $(".ln").attr("src","img/LOGO/line-brands.svg")
// })
// $('.bookstore').mouseleave(function(){
//     $('.nai').attr("src","img/LOGO/book-solid.svg")
// })
// $('.booking_b').mouseleave(function(){
//     $('.try').attr("src","img/LOGO/hands-helping-solid.svg")
// })
$(window).resize(function(){
let w = $(window).width()
// let topimgtra = $(".top-img img").width()-$('.top-img').width()
testnum(w)
console.log($('.top-img').width())
// $('.top-img img').css({
//     transform: `translateX(-${ topimgtra/2}px)`
// })

if (w <= 1700 && w>=800) {
    $('.backgroundimg img').css({
        marginLeft: (-1920 + w) / 2
    })
} else if(w < 800 && w>=500)
{
    $('.backgroundimg img').css({
        marginLeft: (-1200 + w) / 2
    })
} else if(w < 500 && w>=300)
{
    $('.backgroundimg img').css({
        marginLeft: (-750 + w) / 2
    })
}else{
    $('.backgroundimg img').css({
        marginLeft: 0,
    })
}
// if (w <= 00) {
//     $('.backgroundimg img').css({
//         marginLeft: (-1920 + w) / 2
//     })
// }


})
testnum(w)

// let topimgtra = $(".top-img img").width()-$('.top-img').width()/6
// console.log(topimgtra)


$('.return').click(function () {
    var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
    $body.animate({
        scrollTop: 0
    }, 1000);

    return false;
});
setTimeout(function () {
    $('.menu_box').removeClass('display_none')

}, 500)
$(document).ready(function () {
    $('#nav-icon3').click(function () {

        $(this).toggleClass('open');
        if ($("#nav-icon3").attr('class') == "open") {

            $('.navbar_menu_box').css({
                top:"100%"
            })
        } else {
            $('.navbar_menu_box').css({
                top: "-350%"
            })
        }

    });

    $('.product-carousel').slick({
        // lazyLoad: 'ondemand',
        slidesToShow: 6,
        autoplay: true, 
        autoplaySpeed: 3000,
        slidesToScroll: 4,
        speed: 1000,
        nextArrow: '<i class="arrow right">',
        prevArrow: '<i class="arrow left">',
        infinite: true,
        responsive: [
            {
                breakpoint: 1424,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });



});

jQuery(document).ready(function ($) {

    $(".regular").slick({
           dots: true,
     //       infinite: true,
     //       slidesToShow: 1,
     //       slidesToScroll: 1,
           // autoplay: true,
     //       arrows: true,
     //       mobileFirst: true,
     //       easing: 'easeOutElastic',
     //       speed: 800,
           autoplay: true,
           autoplaySpeed:2000,
           speed:700,
           mobileFirst: true,
           slidesToShow:1,
           slidesToScroll:1,
           pauseOnHover:false,
           respondTo:'min',
           cssEase:'linear',
           prevArrow: '<span class="icon-angle-left"></span>',
           nextArrow: '<span class="icon-angle-right"></span>'
         });
   
   $('.slider-for').slick({
           slidesToShow: 1,
           slidesToScroll: 1,
           arrows: false,
           draggable: false,
           fade: true,
           asNavFor: '.slider-nav'
       });
   $('.slider-nav').slick({
           slidesToShow: 3,
           slidesToScroll: 1,
           asNavFor: '.slider-for',
           dots: false,
           arrows: true,
           centerMode: true,
           focusOnSelect: true,
           centerPadding: '10px',
           prevArrow: '<span class="icon-angle-left"></span>',
           nextArrow: '<span class="icon-angle-right"></span>',
           responsive: [
               {
                 breakpoint: 450,
                 settings: {
                   dots: false,
                   slidesToShow: 3,  
                   centerPadding: '0px',
                   }
               },
               {
                 breakpoint: 420,
                 settings: {
                   autoplay: true,
                   dots: false,
                   slidesToShow: 1,
                   centerMode: false,
                   }
               }
           ]
       });
   
   
   
   
   
    });	