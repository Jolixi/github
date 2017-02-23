/**
 * Created by Administrator on 2016/10/19 0019.
 */
angular.module('myapp').controller('itemTplCtrl',function ($scope,$stateParams) {
    if($stateParams.itemId==''){
        $scope.itid=1;
    }else{
        $scope.itid=$stateParams.itemId;
    }
    console.log('1:'+$scope.idStata);
    console.log('2:'+$scope.toId);
    console.log('3:'+$scope.itid);
    

});