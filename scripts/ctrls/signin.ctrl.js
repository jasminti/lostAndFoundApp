var app = angular.module('lostAndFoundApp')
app.controller('signInCtrl', function ($scope, $location, $rootScope) {
    $scope.checkCustomerName = function(user) {
        console.log(user);
        for(var i = 0; i < users.length; i++) {
            if(user.name===users[i].name) {
                if(user.pass===users[i].password) {
                    console.log(users[i].password);
                    $rootScope.currentUser = users[i];
                    currentUser = $rootScope.currentUser;
                    $location.path('/home')
                    return
                }
            }
        }
        alert('neispravni podaci za korisnika!')
    }
})