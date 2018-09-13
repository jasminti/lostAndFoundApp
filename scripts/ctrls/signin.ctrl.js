var app = angular.module('lostAndFoundApp')
app.controller('signInCtrl', function ($scope, $location, $rootScope) {
    // this function checks the login info provided against the users array you removed in app.js
    // do you want to check this against localStorage?
    // if so than the users array has to be populated from the localStorage
    // use localStorage.get
    $scope.checkCustomerName = function(user) {
        console.log(user);
        // use the native Array.prototype.each instead of a for loop, much more readable
        for(var i = 0; i < users.length; i++) {
            if(user.name===users[i].name) {
                if(user.pass===users[i].password) {
                    console.log(users[i].password);
                    $rootScope.currentUser = users[i].name
                    currentUser = $rootScope.currentUser;
                    $location.path('/home')
                    return
                }
            }
        }
        alert('neispravni podaci za korisnika!')
    }
})