//路径服务
angular.module('myapp').provider('basePath', function () {
   var path='/ui2/app/';
    this.routerTemplatePath=path+'routerTemplate/';
    this.$get = function () {
        return {
            directiveTemplatePath: path+'directiveTemplate/'
        };
    };
});
