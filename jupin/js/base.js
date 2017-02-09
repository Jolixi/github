$(function () {
    //头部二级菜单
    $(".head-nav > li >a").mouseover(function () {
        var menu = $(this).next(".head-nav-two");
        var a = $(this);
        if (menu.length > 0) {
            $(this).css("color", "#13c48d");
            menu.fadeIn();
            a.parents("li").mouseleave(function () {
                menu.fadeOut();
                a.removeAttr("style");
                $(this).off();
            })
        }
    })
    $(".rl-top a").on("click", function () {
        $('body,html').animate({scrollTop: 0}, 1000);
    })
    $(window).scroll(function (e) {
        $(window).scrollTop() > 200?$(".rl-top").css({"visibility":"visible","opacity":"1"}):$(".rl-top").css({"visibility":"hidden","opacity":"0"})
    });
    $(".goNext").on("click",function(){
        $('body,html').animate({scrollTop: $(this).next("h2").offset().top}, 300);
    })
})