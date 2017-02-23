/**
 * Created by Administrator on 2016/10/18 0018.
 */
$(function(){
	$('#fullpage').fullpage(
		{
			anchors:['page1','page2','page3','page4']
		}
	);
	$('.section').eq(0).css({backgroundColor:'#80d2dd'});
	$('.section').eq(1).css({backgroundColor:'#e15855'});
	$('.section').eq(2).css({backgroundColor:'#3f61a9'});
	$('.section').eq(3).css({backgroundColor:'#51355e'});
});