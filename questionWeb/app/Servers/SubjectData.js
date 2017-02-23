/**
 * Created by Administrator on 2016/10/14 0014.
 */

//科目数据
var mysqlOP = require('./MysqlOp');

//引入q模块
var q = require('q');

//引入mysql模块
var mysql = require('mysql');

//按照ID查询
var selectByID = function (id) {
    console.log(id)
    var defer = q.defer();
    var connection = mysql.createConnection(mysqlOP.op);
    connection.connect();

    connection.query('select  *  from  `subject` where id = ?', [id], function (err, rows, fields) {
        console.log(id)
        if (err) {
            defer.reject(err);
        }
        else {
            defer.resolve(rows);
            // console.log(rows)
        }
    });
    connection.end();
    return defer.promise;
};
//查询全部
var selectByAll = function () {
    //1.异步传参的defer
    var defer = q.defer();
    //2.创建对象
    var connection = mysql.createConnection(mysqlOP.op);
    //3.开始
    connection.connect();
    //4.进行数据传参
    connection.query('select  *  from  `subject`', function (err, rows, fields) {
        if (err) {
            //失败
            defer.reject(err);
        }
        else {
            //成功
            defer.resolve(rows);
        }
    });
    //5.结束
    connection.end();
    //6.然后promise承诺结果
    return defer.promise;
};

var insertSubject = function (subject) {
    var connection = mysql.createConnection(mysqlOP.op);
    connection.connect();
    connection.query('INSERT INTO `subject`(id,name) VALUES (?,?)',[subject.id,subject.name], function (err, rows, fields) {
        if(err){console.log("错误："+err)}
    });
    connection.end();
};

var  deleteSubjectById = function (id) {
    var connection = mysql.createConnection(mysqlOP.op);
    connection.connect();

    connection.query('DELETE FROM `subject` WHERE id=? ',[id], function (err, rows, fields) {
        if(err){console.log("错误："+err)}
    });
    connection.end();
};

//暴露接口
exports.selectByAll = selectByAll;
//暴露接口
exports.selectById = selectByID;
exports.insertSubject=insertSubject;
exports.deleteSubjectById=deleteSubjectById;