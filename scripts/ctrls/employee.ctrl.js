var app = angular.module('lostAndFoundApp')
app.controller('employeeCtrl', function ($scope, $http, $routeParams, $location, dataService) {
    $scope.id = $routeParams.id;
    if( $scope.id == 0){
        $scope.emp = {id: 0, active: true}
    }
    else{
        dataService.read("people", $scope.id, function (data) {
            $scope.emp = data
        })
    }

    $scope.saveEmp = function (emp) {
        if( emp.id == 0){
            dataService.insert("people", emp, function (data) {
                console.log(data);
                $location.path('/mistral')
            })
        }
        else{
           dataService.update("people", emp, emp.id, function (data) {
               console.log(data);
               $location.path('/mistral')
           })
        }
    }
})