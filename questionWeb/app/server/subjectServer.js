/**
 * Created by Administrator on 2016/10/9 0009.
 */
angular.module('myapp').service('subjectServer', function ($http, $q) {
    //开启异步对象
    var defer = $q.defer();
    $http.get('http://localhost:8888/subject').success(function (data, status, headers, congfig) {
        //成功的时候使用resolve方法添加参数
        defer.resolve(data);
    }).error(function (data, status, headers, congfig) {
        //失败的时候使用reject方法添加参数
        defer.reject(data);
    });
    //返回异步对象【服务里面没有办法处理异步只能返回异步对象由控制器负责处理】
    this.data = defer.promise;
});