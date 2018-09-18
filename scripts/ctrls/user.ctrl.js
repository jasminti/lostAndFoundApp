var app = angular.module('lostAndFoundApp')
app.controller('userCtrl', function ($scope, $routeParams, $location) {
    $scope.id = $routeParams.id;
    $scope.user = users[$scope.id - 1];

    $scope.editUser = function (user) {
        console.log(user)
        $location.path('/home')
    }
})