$(function () {

    $('.navbar-toggler').on('click', function () {
        $('.menu').toggleClass('open');
        $('nav.navbar').toggleClass('slidenav');
        $('.nav-bg').toggleClass('navbg-move');
    });

    var z = $(this).height() - $('.footer').height();

    $(window).on('scroll', function () {
        var st = $(this).scrollTop();

        if (st < 100) {
            st = 600;
        } else {
            st = st + 500;
        }

        // if (st < z) {
        //     $('.moving-border').height(st);
        // } else {
        //     $('.moving-border').height(z);
        // }
        //
        // if (st > 900) {
        //     $('.back-to-top').fadeIn();
        // } else {
        //     $('.back-to-top').fadeOut();
        // }
    });
    scroll();

    $('.back-to-top').on('click', (function () {
            $('html, body').animate({scrollTop: 0}, 400);
            return false;
        }
    ));

});

