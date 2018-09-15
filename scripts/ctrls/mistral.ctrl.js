var app = angular.module('lostAndFoundApp')
app.controller('mistralCtrl', function ($scope, $http) {
    var url = "http://www.teatar.org/api/people";
    $http.defaults.headers.common.Authorization = "Bearer 1234567890";
    $http.get(url)
        .then(function (response) {
            $scope.emps = response.data
            console.log(response);
        },function (reason) {
            console.log("greska u pristupu")
        })
})