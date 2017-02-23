/**
 * Created by home on 2016/10/23.
 */
angular.module('myapp').directive('topicLeftDCtrl', function (basePath) {
    return {
        restrict: 'EA',
        templateUrl: basePath.directiveTemplatePath+'topicLeftDTpl.html',
    };
});