var app = angular.module('lostAndFoundApp');
app.controller('signUpCtrl', function ($scope, $location) {
    $scope.addCustomer = function (newUser) {
        // this is using the global "users" that you commented out in the app.js file
        // do you want to save the users to localStorage?
        // if so than this is where you would do localStorage.set
        users.push({
            name: newUser.name,
            email: newUser.email,
            password: newUser.password
        });
        $location.path('/home');
    }
})

