/**
 * Created by Administrator on 2016/10/19 0019.
 */
angular.module('myapp').directive('footerTpl',function (basePath) {
    return{
        restrict:'EA',
        templateUrl:basePath.directiveTemplatePath+'footerTpl.html',
    }
});