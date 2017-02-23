/**
 * Created by Administrator on 2016/10/19 0019.
 */
angular.module('myapp').directive('hearderTpl', function (basePath) {
    return {
        restrict: 'EA',
        templateUrl:basePath.directiveTemplatePath+'hearderTpl.html',
        transclude:{
            nav2:'subjectTopic',
            nav3:'subjectMore',
            nav4:'navContent'
        }
    };
});