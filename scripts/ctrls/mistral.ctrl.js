var app = angular.module('lostAndFoundApp')
app.controller('mistralCtrl', function ($scope, $http, dataService) {
    refresh()
    $scope.delEmp = function (emp) {
        var ans = confirm("Jeste sigurni da zelite obrisati " + emp.name + " ?")
        if( ans === true){
            dataService.delete("people", emp.id, function(data){
                alert("Person deleted");
                refresh()
            })
        }
    }

    function refresh() {
        dataService.list("people", function(data){
            $scope.emps = data
        })
    }
})