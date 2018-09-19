var app = angular.module('lostAndFoundApp')
app.controller('mistralCtrl', function ($scope, $http) {
    refresh()
    $scope.delEmp = function (emp) {
        var ans = confirm("Jeste sigurni da zelite obrisati ?" + emp.name)
        if( ans === true){
            var url = "http://www.teatar.org/api/people/" + emp.id;
            $http.delete(url)
                .then(function (response) {
                    refresh();
                }, function (reason) {
                    console.log("greska u pristupu")
                })
        }
    }

    function refresh() {
        var url = "http://www.teatar.org/api/people";
        $http.defaults.headers.common.Authorization = "Bearer 1234567890";

        $http.get(url)
            .then(function (response) {
                $scope.emps = response.data
                console.log(response);
            },function (reason) {
                console.log("greska u pristupu")
            })
    }
})