angular.module('tempApp').directive('headerMain', ['$location', function ($location) {
    return {
        scope: {
            type: '='
        },
        templateUrl: '/views/headerMain.html',
        link: function (scope) {
            scope.userName = localStorage.getItem('user');
            scope.navBar = true;
            if (scope.type === 'home') {
                scope.navBar = false;
            }
        }
    }
            }])