/**
 * Created by Administrator on 2016/10/19 0019.
 */
angular.module('myapp').controller('subjectrouterCtrl',function ($scope,$stateParams) {
    // console.log($stateParams.id);

        if($stateParams.id==''){
                $scope.idStata=1;
        }else {
                $scope.idStata=$stateParams.id;
        }
});