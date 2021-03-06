angular.module('tempApp').controller('HomeCtrl', ['$scope', '$location', '$http', '$timeout', function ($scope, $location, $http, $timeout) {
    var username = "admin";
    var password = "testadmin";
    $scope.errorMessage = "";
    $scope.isCollapsed = true;
    $scope.type = "home";
    $scope.inputType = 'password';
    $scope.loginMessage = function () {
        if ($scope.errorMessage) {
            $scope.isCollapsed = !$scope.isCollapsed;
        }
    }
    $scope.hideShowPassword = function () {
        if ($scope.inputType == 'password') $scope.inputType = 'text';
        else $scope.inputType = 'password';
    };
    $scope.login = function () {
        $scope.errorMessage = "";
        $scope.isCollapsed = false;
        if ($scope.username === '') {
            $scope.errorMessage = 'Enter the username'
        } else if ($scope.password === '') {
            $scope.errorMessage = 'Enter the password'
        } else if ($scope.username === username && $scope.password === password) {
            $scope.loader = true;
            $timeout(function () {
                $scope.loader = false;
                localStorage.setItem('auth', username + password);
                localStorage.setItem('user', username);
                $location.path('/members');
            }, 1000);

        } else {
            $scope.errorMessage = 'Incorrect Username/Password';
        }
    }
    $scope.logout = function () {
        localStorage.clear();
        $location.path("/");
    };
            }])