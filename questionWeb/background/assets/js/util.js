/**
 * Created by sks on 2016/10/25.
 */
//公共的工具
//日期格式化
/**
 *
 * @param {date} d为传入的日期
 * @returns {string} 返回格式化好的日期字符串
 */
function formatDate(d) {




    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    //自动补0
    month = month < 10 ? '0' + month : month;


    var day = d.getDate();

    day = day < 10 ? '0' + day : day;


    var hours = d.getHours();
    hours = hours < 10 ? '0' + hours : hours;


    var minutes = d.getMinutes();
    minutes = minutes < 10 ? '0' + minutes : minutes;


    var seconds = d.getSeconds();
    seconds = seconds < 10 ? '0' + seconds : seconds;

    var week = '星期一';
    switch (d.getDay()) {
        case 0:
            week = '星期天';
            break;
        case 1:
            week = '星期一';
            break;
        case 2:
            week = '星期二';
            break;
        case 3:
            week = '星期三';
            break;
        case 4:
            week = '星期四';
            break;
        case 5:
            week = '星期五';
            break;
        case 6:
            week = '星期六';
            break;
    }


    return year + '年' + month + '月'+day+'日 '+hours+':'+minutes+':'+seconds+' '+week;

}