/**
 * Created by Administrator on 2016/10/19 0019.
 */

    // $(function(){
    //     $('#dowebok').fullpage({
    //         sectionsColor: ['#f8f9e9','#80d2dd', '#e15855', '#3f61a9', '#51355e'],
    //         anchors:['page1','page2','page3','page4','page5'],
    //         navigation: true,
    //         afterLoad: function(anchorLink, index){
    //             var nav=$('.my_header');
    //             if (index===1){
    //                 nav.css({'display':'none'});
    //             }else {
    //                 nav.css({'display':'block','background':'rgba(255,255,255,0.25)','borderBottom':'none'});
    //             }
    //         }
    //     });
    // });


$(function(){
    $('#dowebok').fullpage({
        sectionsColor: ['#f8f9e9','#80d2dd', '#e15855', '#3f61a9', '#51355e'],
        'navigation': true,
        afterLoad: function(anchorLink, index){
            var nav=$('.header');
            if (index==1){
                nav.css({'background':'rgba(255,255,255,1)','borderBottom':'2px solid orange'});
            }else {
                nav.css({'background':'rgba(255,255,255,0.25)','borderBottom':'none'});
            }

            if (index==2){
                $('#bouncy1').addClass('bouncy');
                $('#bouncy1').addClass('cd-intro-content1');
            }else {
                $('#bouncy1').removeClass('bouncy');
                $('#bouncy1').removeClass('cd-intro-content1');
            };

            if (index==3){
                $('#bouncy2').addClass('bouncy');
                $('#bouncy2').addClass('cd-intro-content2');
            }else {
                $('#bouncy2').removeClass('bouncy');
                $('#bouncy2').removeClass('cd-intro-content2');
            };

            if (index==4){
                $('#bouncy3').addClass('bouncy');
                $('#bouncy3').addClass('cd-intro-content3');
            }else {
                $('#bouncy3').removeClass('bouncy');
                $('#bouncy3').removeClass('cd-intro-content3');
            };

            if (index==5){
                $('#bouncy4').addClass('bouncy');
                $('#bouncy4').addClass('cd-intro-content4');
            }else {
                $('#bouncy4').removeClass('bouncy');
                $('#bouncy4').removeClass('cd-intro-content4');
            };

        }
    });
});




