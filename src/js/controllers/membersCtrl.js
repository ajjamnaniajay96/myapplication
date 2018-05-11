angular.module('tempApp').controller('membersCtrl', ['$scope', 'dataService', function ($scope, dataService) {
    $scope.message = "Members";
    $scope.filter = "";
    $scope.selected = [];
    dataService.getData().then(function (result) {
        $scope.data = result.data;
        for (var i = 0; i < $scope.data.data.length; i++) {
            $scope.data.data[i].i = i;
        }
        $scope.dataCopy = angular.copy(result.data);
    });
    $scope.errorMessage = "";
    $scope.addRow = function () {
        $scope.data.data.push({
            id: "SR" + parseInt(Math.random() * 10000),
            name: "",
            text: true,
            status: "active",
            date: getDate(),
            sections: ['0', '0', '0', '0']

        });


    }
    $scope.query = {
        order: 'name',
        limit: 5,
        page: 1
    };
    $scope.saveName = function (a) {
        a.text = false;
    }

    function getDate() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!

        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        var today = dd + '/' + mm + '/' + yyyy;
        return today;
    }
    $scope.searchRow = function () {
        filterFunction();
    }
    $scope.deleteRow = function (i) {
        remove(i);
        $scope.dataCopy = angular.copy($scope.data);
    }

    function remove(item) {
        $scope.data.data = $scope.data.data.filter(function (e) {
            return e.name !== item.name
        })
    }

    function filterFunction() {
        $scope.errorMessage = "";
        var temp = false;
        $scope.data.data = [];
        for (var i = 0; i < $scope.dataCopy.data.length; i++) {
            if ($scope.dataCopy.data[i].id.toLowerCase().indexOf($scope.filter.toLowerCase()) > -1 || $scope.dataCopy.data[i].name.toLowerCase().indexOf($scope.filter.toLowerCase()) > -1) {
                $scope.data.data.push($scope.dataCopy.data[i]);
                temp = true;
            }
        }
        if (!temp && $scope.filter === "") {
            $scope.data = angular.copy($scope.dataCopy);
        }
        if (!temp) {
            $scope.errorMessage = "No result found for the given search option."
        }

    }

            }])
