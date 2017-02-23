/**
 * Created by Administrator on 2016/10/14 0014.
 */
//题目数据
var mysqlOP = require('./MysqlOp');
var q = require('q');
var mysql = require('mysql');
//按照ID查询
var selectByID = function (id) {
    var defer = q.defer();
    var connection = mysql.createConnection(mysqlOP.op);
    connection.connect();
    connection.query('select  *  from  `topic_view` where id=?', [id], function (err, rows, fields) {
        if (err) {
            defer.reject(err);
        }
        else {
            defer.resolve(rows);
        }
    });
    connection.end();
    return defer.promise;
};
//查询全部
var selectByAll = function () {
    var defer = q.defer();
    var connection = mysql.createConnection(mysqlOP.op);
    connection.connect();
    connection.query('select  *  from  `topic_view`', function (err, rows, fields) {
        if (err) {
            defer.reject(err);
        }
        else {
            defer.resolve(rows);
        }
    });
    connection.end();
    return defer.promise;
};

//添加题目
var insertTopic = function (topic) {
    var connection = mysql.createConnection(mysqlOP.op);
    connection.connect();
    connection.query('INSERT INTO `topic`(id,name,subject_id,topicType_id) VALUES (?,?,?,?)',[topic.id,topic.name,topic.subject_id,topic.topicType_id], function (err, rows, fields) {
        if(err){console.log("错误："+err)}
    });
    connection.end();
};


var  deleteTopicById = function (id) {
    var connection = mysql.createConnection(mysqlOP.op);
    connection.connect();
    connection.query('DELETE FROM `topic` WHERE id=? ',[id], function (err, rows, fields) {
        if(err){console.log("错误："+err)}
    });
    connection.end();
};

exports.selectByAll = selectByAll;
exports.selectById = selectByID;
exports.insertTopic = insertTopic;
exports.deleteTopicById = deleteTopicById;



$stateProvider.state('', {
     url:'',
     templateUrl: basePathProvider.routerTemplatePath+'',
     resolve: {},
     controller:'',
     onEnter:function () {
         },
     onExit:function () {
         },
});