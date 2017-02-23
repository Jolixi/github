/**
 * Created by home on 2016/10/23.
 */
angular.module('myapp').directive('houLeftDCtrl', function (basePath) {
    return {
        restrict: 'EA',
        templateUrl: basePath.directiveTemplatePath+'houLeftDTpl.html',
        link: function (scope, iElement, iAttrs, controller) {
        },
    };
});