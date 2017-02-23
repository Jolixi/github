/**
 * Created by Administrator on 2016/9/26 0026.
 */
angular.module('myapp').controller('manageCtrl',function ($scope,$state) {
    $state.go('hou.top');
    //按钮默认值
    $scope.subjectAdd=false;
    $scope.subjectEdit=false;
    $scope.subjectDelete=false;
    $scope.topicAdd=false;
    $scope.selectAdd=false;
    $scope.recognizeAdd=false;
    $scope.spaceAdd=false;
    $scope.answerAdd=false;
    //输入框默认值
    $scope.inputList={data:'--请选择--'};
    //按钮点击事件
    //科目添加
    $scope.addSubject=function () {
        $scope.subjectAdd=true;
    };
    $scope.addClose=function () {
        $scope.subjectAdd=false;
    };
    //科目修改
    $scope.editSubject=function () {
        $scope.subjectEdit=true;
    };
    $scope.editClose=function () {
        $scope.subjectEdit=false;
    };
    //科目删除
    $scope.deleteSubject=function () {
        $scope.subjectDelete=true;
    };
    $scope.deleteClose=function () {
        $scope.subjectDelete=false;
    };
    //题目添加
    $scope.addTopic=function () {
        $scope.topicAdd=true;
    };
    $scope.addTopicClose=function () {
        $scope.topicAdd=false;
    };
    //题目添加下一步
    $scope.checkSelct=function () {
        if($scope.inputList.data!=''){
            if($scope.inputList.data=='选择题'){
                $scope.topicAdd=false;
                $scope.selectAdd=true;
            }else if($scope.inputList.data=='判断题'){
                $scope.topicAdd=false;
                $scope.recognizeAdd=true;
            }else if($scope.inputList.data=='填空题'){
                $scope.topicAdd=false;
                $scope.spaceAdd=true;
            }else if($scope.inputList.data=='问答题'){
                $scope.topicAdd=false;
                $scope.answerAdd=true;
            }
        }
    }
    //选择题添加
    $scope.selectTopic=function () {
        $scope.selectAdd=true;
    };
    $scope.selectClose=function () {
        $scope.selectAdd=false;
    };
    //判断题添加
    $scope.recognizeTopic=function () {
        $scope.recognizeAdd=true;
    };
    $scope.recognizeClose=function () {
        $scope.recognizeAdd=false;
    };
    //填空题添加
    $scope.spaceTopic=function () {
        $scope.spaceAdd=true;
    };
    $scope.spaceClose=function () {
        $scope.spaceAdd=false;
    };
    //问答题添加
    $scope.answerTopic=function () {
        $scope.answerAdd=true;
    };
    $scope.answerClose=function () {
        $scope.answerAdd=false;
    };
});