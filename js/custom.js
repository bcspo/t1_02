$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();

        if (sct > 0) {
            $('#header').addClass('on')
        } else {
            $('#header').removeClass('on')
        }
    });

    const T1 = new Swiper(".t1_official_unform .slide_area", {
        slidesPerView: 3,
        spaceBetween: 8,
        navigation: {
            nextEl: '#main_t1_official_unform .t1_official_unform_arrows .swiper-button-next',
            prevEl: '#main_t1_official_unform .t1_official_unform_arrows .swiper-button-prev',
        },
    });

    const P1 = new Swiper(".slide_swiper1", {
        slidesPerView: 4,
        spaceBetween: 8,
        navigation: {
            nextEl: '#main_product .slide_swiper1 .swiper-button-next',
            prevEl: '#main_product .slide_swiper1 .swiper-button-prev',
        },
    });
    const P2 = new Swiper(".slide_swiper2", {
        slidesPerView: 4,
        spaceBetween: 8,
        navigation: {
            nextEl: '#main_product .slide_swiper2 .swiper-button-next',
            prevEl: '#main_product .slide_swiper2 .swiper-button-prev',
        },
    });
    const P3 = new Swiper(".slide_swiper3", {
        slidesPerView: 4,
        spaceBetween: 8,
        navigation: {
            nextEl: '#main_product .slide_swiper3 .swiper-button-next',
            prevEl: '#main_product .slide_swiper3 .swiper-button-prev',
        },
    });

    $('#main_product .list li').on('click', function () {
        let num = $(this).index();

        $(this).addClass('on').siblings().removeClass('on')

        $('#main_product .con').eq(num).addClass('on').siblings().removeClass('on')
    });
})