/**
 * Created by sks on 2016/9/27.
 */
/**
 * Created by Administrator on 2016/9/26 0026.
 */

angular.module('myapp').config(function ($stateProvider, $urlRouterProvider, basePathProvider) {
     //''是路由名称，在HTML页面中可以使用ui-sref绑定
     $stateProvider.state('subject',{
         url:'/subject/{id}',
         templateUrl:basePathProvider.routerTemplatePath+'subjectTpl.html',
         controller:'subjectrouterCtrl',
     });
     $stateProvider.state('subject.topic',{
         url:'/topic/{toId}',
         views:{
           'left':{
               templateUrl:basePathProvider.routerTemplatePath+'topicLeftTpl.html',
               controller:'topicRouterCtrl'
           },
            'right':{
                templateUrl:basePathProvider.routerTemplatePath+'topicRightTpl.html',
                controller:'topicRouterCtrl'
            }
         }
     });
     $stateProvider.state('subject.topic.item',{
         url:'/item/{itemId}',
         templateUrl:basePathProvider.routerTemplatePath+'itemTpl.html',
         controller:'itemTplCtrl'
     });

    //后台路由
    $stateProvider.state('hou',{
        url:'/hou/{id}',
        templateUrl:basePathProvider.routerTemplatePath+'houTpl.html',
        controller:'houCtrl',
    });
    $stateProvider.state('hou.top',{
        url:'/top',
        views:{
            'left':{
                templateUrl:basePathProvider.routerTemplatePath+'houLeftTpl.html',
            },
            'right':{
                templateUrl:basePathProvider.routerTemplatePath+'houRightTpl.html',
            }
        }
    });
    
    
    

});

