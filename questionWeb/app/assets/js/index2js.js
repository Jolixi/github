/**
 * Created by Administrator on 2016/10/20.
 */
$(function(){
    $('.left_box_small').last().css({borderBottom:'none'});
    $('.left_box_small').each(function (i) {
        $('.left_box_small').eq(i).on('mouseover',function () {
            $(this).parent().css({background_color:'#f59b0f'});
            $(this).css({borderBottom:'1px #f59b0f solid'});
            $('.left_box_small').eq(i-1).css({borderBottom:'1px #000000 solid'});
        });
        $('.left_box_small').eq(i).on('mouseout',function () {
            $(this).parent().css({background:'none'});
            $(this).css({borderBottom:'1px #ccc solid'});
            $('.left_box_small').eq(i-1).css({borderBottom:'1px #ccc solid'});
            $('.left_box_small').last().css({borderBottom:'none'});
        });
    });
   
});