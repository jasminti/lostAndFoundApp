var app = angular.module('lostAndFoundApp')
app.controller('signUpCtrl', function ($scope, $location) {
    $scope.addCustomer = function (newUser) {
        users.push({
            name: newUser.name,
            email: newUser.email,
            password: newUser.password
        });
        $location.path('/home');
    }
})

