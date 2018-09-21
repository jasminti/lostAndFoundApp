var app = angular.module('lostAndFoundApp')
app.controller('mainCtrl', function ($rootScope, $scope) {
    $scope.selfLogin = function () {
        currentUser = users[0];
        $rootScope.currentUser = users[0]
    }
})