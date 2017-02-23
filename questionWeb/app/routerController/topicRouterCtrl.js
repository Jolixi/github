/**
 * Created by Administrator on 2016/10/25 0025.
 */
angular.module('myapp').controller('topicRouterCtrl',function ($scope,$stateParams) {
    if($stateParams.toId==''){
        $scope.toId=1;
    }else{
        $scope.toId=$stateParams.toId;
    }
});