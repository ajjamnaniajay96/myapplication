angular.module('tempApp').service('dataService',function($http,$q){
    this.getData=function(){
         var deft = $q.defer();
        $http.get('../json/dataJson.json',{cache: true}).then(function (res) {
            deft.resolve(res);
        }, function (err) {
            deft.reject(err);
        });
        return deft.promise;
    }
})
