/**
 * Created by Administrator on 2016/10/14 0014.
 */

//引入异步模块q
var q = require('q');
//引入server-js中的其他数据文件,文件名后的js不写进去
var subjectData = require('./SubjectData');
var topictypeData = require('./TopictypeData');
var topicData = require('./TopicData');
var topicAnswerData = require('./TopicAnswerData');
var topicRecognizedData = require('./TopicRecognizedData');

//引入express模块
var express = require('express');
//接收express
var app = express();

//为跨域做准备
var resHeader = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "X-Requested-With",
    "Access-Control-Allow-Methods": "PUT,POST,GET,DELETE,OPTIONS",
    "X-Powered-By": ' 3.2.1',
    "Content-Type": "application/json;charset=utf-8"
};


//从mysql后端获取数据的方法
app.get('/subject', function (req, res) {
    //跨域
    res.header(resHeader);
    subjectData.selectByAll().then(function (data) {
        res.send(data);
    }, function (err) {
        res.send(err);
    });
});

app.get('/subject/:id', function (req, res) {
    res.header(resHeader)
    var id = req.params['id'];
    // console.log(id);
    subjectData.selectById(id).then(function (data) {
        console.log(data)
        res.send(data);
    }, function (err) {
        res.send(err);
    });
});
app.get('/topictype', function (req, res) {
    res.header(resHeader)
    topictypeData.selectByAll().then(function (data) {
        res.send(data);
    }, function (err) {
        res.send(err);
    });
});

app.get('/topictype/:id', function (req, res) {
    res.header(resHeader)
    var id = req.params['id'];
    topictypeData.selectById(id).then(function (data) {
        res.send(data);
    }, function (err) {
        res.send(err);
    });
});
app.get('/topic', function (req, res) {
    res.header(resHeader)
    topicData.selectByAll().then(function (data) {
        res.send(data);
    }, function (err) {
        res.send(err);
    });
});


app.get('/topic/:id', function (req, res) {
    res.header(resHeader)
    var id = req.params['id'];
    topicData.selectById(id).then(function (data) {
        res.send(data);
    }, function (err) {
        res.send(err);
    });
});

app.get('/topicanswer', function (req, res) {
    res.header(resHeader)
    topicAnswerData.selectByAll().then(function (data) {
        res.send(data);
    }, function (err) {
        res.send(err);
    });
});
app.get('/topicanswer/:id', function (req, res) {
    res.header(resHeader)
    var id = req.params['id'];
    topicAnswerData.selectById(id).then(function (data) {
        res.send(data);
    }, function (err) {
        res.send(err);
    });
});
app.get('/topicrecognized', function (req, res) {
    res.header(resHeader)
    topicRecognizedData.selectByAll().then(function (data) {
        res.send(data);
    }, function (err) {
        res.send(err);
    });
});
app.get('/topicrecognized/:id', function (req, res) {
    res.header(resHeader)
    var id = req.params['id'];
    topicRecognizedData.selectById(id).then(function (data) {
        res.send(data);
    }, function (err) {
        res.send(err);
    });
});
//添加科目
app.get('/subject/addSubject/:id/:name',function (req,res) {
    res.header(resHeader)
    var subject={};
   subject.id = req.params['id'];
    subject.name= req.params['name'];
    subjectData.insertSubject(subject)
});
//删除科目
app.get('/subject/deleteSubject/:id',function (req,res) {
    res.header(resHeader)
    id = req.params['id'];
 
    subjectData.deleteSubjectById(id)
});
//添加题目
app.get('/topic/addtopic/:id/:name/:subject_id/:topicType_id',function (req,res) {
    res.header(resHeader)
    var topic={};
    topic.id = req.params['id'];
    topic.name= req.params['name'];
    topic.subject_id=req.params['subject_id'];
    topic.topicType_id=req.params['topicType_id'];
    topicData.insertTopic(topic)
});
//删除科目根据ID
app.get('/topic/deleteTopic/:id',function (req,res) {
    res.header(resHeader)
    id = req.params['id'];
    topicData.deleteTopicById(id)
});
//开始监听
var server = app.listen(8888, function () {
    console.log('服务开启');
});
