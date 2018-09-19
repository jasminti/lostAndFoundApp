var app = angular.module('lostAndFoundApp')
app.controller('employeeCtrl', function ($scope, $http, $routeParams, $location) {
    $scope.id = $routeParams.id;
    if( $scope.id == 0){
        $scope.emp = {id: 0}
        console.log($routeParams.id)
    }
    else{
        var url = "http://www.teatar.org/api/people/" + $scope.id;
        $http.defaults.headers.common.Authorization = "Bearer 1234567890";
        $http.get(url)
            .then(function (response) {
                $scope.emp = response.data
            },function (reason) {
                console.log("greska u pristupu")
            })
    }

    $scope.saveEmp = function (emp) {
        if( emp.id == 0){
            var url = "http://www.teatar.org/api/people/";
            $http.post(url, emp)
                .then(function (response) {
                    $location.path('/mistral')
                    console.log(response.data.id)
                }, function (reason) {
                    console.log("evo nesto nece")
                })
        }
        else{
            $http.put(url, emp)
                .then(function (response) {
                    $location.path('/mistral')
                }, function (reason) {
                    console.log("evo nesto nece")
                })
        }
    }
})