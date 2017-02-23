/**
 * Created by Administrator on 2016/10/19 0019.
 */
angular.module('myapp').controller('manageCtrl',function ($scope,$stateParams) {
    // if($stateParams.itemId!==''){
    //     $stateParams.itemId=1;
    //     $scope.itid=$stateParams.itemId;
    // }else {
    //     $scope.itid=$stateParams.itemId;
    // }
    // $scope.itid=$stateParams.itemId;
    if($stateParams.itemId==''){
        $scope.itid=1;
    }else{
        $scope.itid=$stateParams.itemId;
    }
    console.log('1:'+$scope.idStata);
    console.log('2:'+$scope.itid);

});
