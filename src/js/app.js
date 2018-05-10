angular.module('tempApp', ['ngRoute','ngMaterial','ngMessages','ngAnimate','md.data.table']).config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        resolve: {
            "check": function ($location) {
                if (localStorage.getItem('auth')) {
                    $location.path('/members');
                }
            }
        }
        ,templateUrl: 'views/home.html'
        , controller: 'HomeCtrl'
    }).when('/members', {
        resolve: {
            "check": function ($location) {
                if (!localStorage.getItem('auth')) {
                    $location.path('/');
                }
            }
        }
        , templateUrl: 'views/members.html'
        , controller: 'membersCtrl'
    }).when('/products', {
        resolve: {
            "check": function ($location) {
                if (!localStorage.getItem('auth')) {
                    $location.path('/');
                }
            }
        }
        , templateUrl: 'views/products.html'
        , controller: 'productsCtrl'
    }).when('/reporting', {
        resolve: {
            "check": function ($location) {
                if (!localStorage.getItem('auth')) {
                    $location.path('/');
                }
            }
        }
        , templateUrl: 'views/products.html'
        , controller: 'reportingCtrl'
    }).when('/users', {
        resolve: {
            "check": function ($location) {
                if (!localStorage.getItem('auth')) {
                    $location.path('/');
                }
            }
        }
        , templateUrl: 'views/products.html'
        , controller: 'usersCtrl'
    }).otherwise({
        redirectTo: '/'
    });
    //$locationProvider.html5Mode(true);
}])
