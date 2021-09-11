"use strict";

$(document).ready(function () {
    //페이지 타이틀체인지
    var pageHtml = ["/MP_conditions.html", "/MP_notice.html", "/MP_listUp_detail.html", "/PP_goodsDetail.html", "/PP_qnaWrite.html", "/PP_storeQuestion.html", "/PP_all_pickupList.html", "/MP_review.html", "/MP_attention_store.html", "/MP_wishList.html", "/MP_pickupList.html", "/MP_reward.html", "/MP_coupon.html", "/PP_pickupOrder.html", "/MP_reviewChange.html", "/MP_productSearch.html", "/MP_orderDetail.html", "/MP_orderCancel.html", "/PP_orderComplete.html", "/NS_orderCancel.html", "/PP_morePhoto.html", "/PP_payCancle.html", "/PP_storeSearch.html"];
    var pageTitle = ["이용약관", "공지사항", "공지약관상세페이지", "픽업상품", "Q&A 작성", "성남점에 문의하기", "픽업상품", "픽업 상품후기", "관심매장", "픽업 관심상품", "픽업 주문내역", "픽업 적립금", "픽업 쿠폰함", "주문/결제", "상품후기 수정", "픽업상품 검색", "주문 상세", "결제 취소", "픽업상품", "주문 취소", "포토리뷰", "결제취소", "매장검색"];

    pageHtml.forEach(function (item, index) {
        if (item == location.pathname) {
            var pageTitleName = pageTitle[index];
            $(".headerTitle").text(pageTitleName);
        }
    });

    //푸터 액티브
    $('.footer-wrapper li').click(function () {
        $(this).addClass('active').siblings('li').removeClass('active');
    });

    $('select').change(function () {
        $(this).removeClass("noneVal");
    });

    //탭
    $('.tab-container li').click(function () {
        $(this).addClass('active').siblings('li').removeClass('active');

        var tabItem = $('.tab-container li.active').index();

        $('.list-wrapper').eq(tabItem).addClass('active').siblings('.list-wrapper').removeClass('active');
    });

    if ($('.mainSlide-container .swiper-wrapper').length == 0) {
        $('.mainSlide-container').append("<div class='fake-header'></div>");
        $('.transparent-header').addClass('active');
    }

    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('header').outerHeight();

    $(window).scroll(function (event) {
        // didScroll = true; 

        if ($(window).scrollTop() > 0) {
            $('.transparent-header').addClass('active').removeClass('passive');
        } else if ($(window).scrollTop() == 0 && $('.mainSlide-container .swiper-wrapper').length == 0) {
            $('.transparent-header').addClass('active');
        } else {
            $('.transparent-header').removeClass('active').addClass('passive');
        }
    });

    setInterval(function () {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 100);

    function hasScrolled() {
        var st = $(window).scrollTop();

        if (Math.abs(lastScrollTop - st) <= delta) return;

        if (st > lastScrollTop) {
            $('header').slideUp(100);
            // alert('Up');
        } else {
            if (st + $(window).height() < $(document).height()) {
                $('header').slideDown(100);
                // alert('down');
            }
        }
        lastScrollTop = st;
    }

    $('.tabItem').click(function () {
        var tabItem = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $(this).parent('ul').siblings('.target-wrap').children('.tabTarget').eq(tabItem).addClass('active').siblings().removeClass('active');
    });
});
//# sourceMappingURL=common.js.map
