$(document).ready(function () {
    $('.menu-button').click(function () {
        $('.menu-mobile-wrapper').addClass('open-menu');
        setTimeout($('.menu-mobile-wrapper').addClass('open-menu-backdrop'), 500);
    });

    $('.close-menu').click(function () {
        $('.menu-mobile-wrapper').removeClass('open-menu');
        setTimeout($('.menu-mobile-wrapper').removeClass('open-menu-backdrop'), 500);
    });
    $('.menu-mobile-wrapper').click(function () {
        $('.menu-mobile-wrapper').removeClass('open-menu');
        setTimeout($('.menu-mobile-wrapper').removeClass('open-menu-backdrop'), 500);
    });


    $(".wrapper-content").click(function (event) {

        event.stopPropagation();
    });

    $('.user-box .point .wrapper').click(function () {
        $('.open-menu .user-box').addClass('open-policy-popup');
    });

    $('.policy-popup .bottom').click(function () {
        $('.user-box').removeClass('open-policy-popup');
    });

    /*open modal confirm term*/
    $('#accept-term').click(function () {
        if ($('input#accept-term').is(':checked')) {
            $("#term-modal").addClass('open-modal-confirm');
            $("body").addClass('body-open-modal-confirm');
        }
    });
    $('.bottom .confirm-btn').click(function () {
        $(this).closest('.modal-confirm').removeClass('open-modal-confirm');
        $("body").removeClass('body-open-modal-confirm');
    });


    $(function () {
        var isIE = window.ActiveXObject || "ActiveXObject" in window;
        if (isIE) {
            $('.modal').removeClass('fade');
        }
    });
    $('#continue-modal .close-btn').click(function () {
        $('#continue-modal').addClass('moveOut');
    })

    $('#gift-box').click(function () {
        $(this).html('<img src="images/HOPQUA_mo.png" alt="">');
        setTimeout(function () {
            $('#daily-bonus').addClass('open');
        }, 1000);
    })
    $('#daily-bonus .close-button').click(function () {
        $('#daily-bonus').removeClass('open');
    })
    $('#daily-bonus .daily-button').click(function (e) {
        e.preventDefault();
        $(this).addClass('disabled');
        $('#daily-bonus .close-button').addClass('available');
        $(this).html('Đã nhận điểm');
    })

    $('#top-search ul').click(function () {
        $(this).toggleClass('open-toggle');
    })

    $('.open-guide-box').click(function (e) {
        e.preventDefault();
        var idBox = $(this).attr('data-target');
        $(idBox).addClass('open');

        $('.open-popup .close-button').click(function () {
            $(this).parents('.open-popup').removeClass('open');

        })
    })

    $("#list-mail-invite input").change(function () {
        /*var null_input_lenght = $("#list-mail-invite input").attr('value','').length;
         console.log(null_input_lenght);*/
        $('#list-mail-invite table').append("<tr><td> <input type='text' placeholder='...'> </td> </tr>")
    })

    $("#get-mail-box form button").click(function (e) {
        e.preventDefault();
        $("#get-mail-box").removeClass('open');
        $("#success-box").addClass('open');
        setTimeout(function () {
            $("#success-box").removeClass('open');
        }, 2000)
    })

    if ($('#homepage-main-slider').length > 0) {
        $('#homepage-main-slider .bxslider').bxSlider({
            auto: true,
            pager: true,
            speed: 400,
            autoHover: true
        });

        setTimeout(function () {
            $("#homepage-main-slider").removeClass('visibility');
        }, 100)
    }
    if ($('#mobile-homepage-main-slider').length > 0) {
        $('#mobile-homepage-main-slider .bxslider').bxSlider({
            auto: true,
            pager: true,
            speed: 200,
            autoHover: true
        });
    }

    if ($('#homepage-survey-slider').length > 0) {
        $('#homepage-survey-slider .bxslider').bxSlider({
            auto: false,
            pager: false,
            autoHover: true
        });
    }


    if ($('#homepage-news-slider').length > 0) {
        $('#homepage-news-slider .bxslider').bxSlider({
            auto: true,
            pager: true,
            speed: 400,
            slideWidth: 260,
            slideMargin: 16,
            minSlides: 2,
            maxSlides: 4,
            moveSlides: 1,
            autoHover: true
        });
    }

    if ($('#homepage-point-slider').length > 0) {
        $('#homepage-point-slider .bxslider').bxSlider({
            auto: true,
            pager: true,
            speed: 400,
            slideWidth: 230,
            slideMargin: 22,
            minSlides: 3,
            maxSlides: 5,
            moveSlides: 3,
            autoHover: true
        });
    }

    if ($('#pager-slider').length > 0) {
        $('#pager-slider .bxslider').bxSlider({
            auto: false,
            pager: false,
            slideWidth: 50,
            slideMargin: 20,
            minSlides: 3,
            maxSlides: 6,
            infiniteLoop: false,
            moveSlides: 1
        });
        $("#pager-slider ul li").click(function () {
            $("#pager-slider ul li").removeClass('active');
            $(this).addClass('active');
        })
    }

    $(".tab-container").on("swipeleft", function () {
        $(this).addClass('open-delete-action');
    });

    $(".open-swipe").on("click", function () {
        $('.tab-container').addClass('open-delete-action');
    });

    $('.close-swipe').click(function () {
        $(".tab-container").removeClass('open-delete-action')
    })

    $('.list-messages.detail-message .item-message').click(function () {
        $(this).toggleClass('item-message-open');
    })

    $('.count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 1500,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    /*open popup info topup card*/
    /*$(".exchange-point .tab-exchange ul li").first().click(function () {

     $("#topup-card-info-modal").show();
     })*/

    if ($("#topup-card").length > 0) {
        $('#topup-card .bxslider').bxSlider({
            maxSlides: 5,
            minSlides: 3,
            moveSlides: 1,
            slideWidth: 252,
            slideMargin: 10,
            controls: false,
            pager: false,
            onSliderLoad: function () {
                $('#topup-card .bxslider>li:not(.bx-clone)').eq(1).addClass('active-slide');
            },
            onSlideAfter: function ($slideElement, oldIndex, newIndex) {
                $('#topup-card .bxslider li').removeClass('active-slide');
                $($slideElement).next().addClass('active-slide');
            }
        })

        $("#topup-card .bxslider li").click(function () {
            $("#topup-card .bxslider li").removeClass('selected-card');
            $(this).addClass('selected-card');
        })
    }
    $("#cash-change ul li").click(function () {
        $("#cash-change ul li").removeClass('selected-card');
        $(this).addClass('selected-card');
    })


    $('.list-value li').click(function () {
        $('.list-value li').removeClass('active');
        $(this).addClass('active');
    })

    $('#continue-change-cash').click(function () {
        $("#step1").removeClass('active');
        $("#step2").addClass('active');
    })

    $("#continue-change-topupcard").click(function () {
        $("#step3").removeClass('active');
        $("#step4").addClass('active');
    })
})
