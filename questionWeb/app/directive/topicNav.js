/**
 * Created by Administrator on 2016/12/16.
 */
angular.module('myapp').directive('topicNav', function (basePath) {
    return {
        restrict: 'EA',
        templateUrl: basePath.directiveTemplatePath+'topicNavTpl.html',
    };
});