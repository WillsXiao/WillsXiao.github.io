$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
    });


    // 鼠标悬停, 停止播放
    $('.owl-carousel').mouseover(function () {
        $('.owl-carousel').trigger('stop.owl.autoplay');
    });

    // 鼠标离开, 开始播放
    $('.owl-carousel').mouseleave(function () {
        $('.owl-carousel').trigger('play.owl.autoplay', [3000]);
    });

});