var app = angular.module('lostAndFoundApp')
app.factory('dataService', function ($http) {
    var baseURL = "http://www.teatar.org/api/"
    $http.defaults.headers.common.Authorization = "Bearer 1234567890";

    return {
        list: function(dataSet, callback) {
            var url = baseURL + dataSet;
            $http.get(url)
                .then(function (response) {
                    callback(response.data)
                },function (reason) {
                    console.log("greska u pristupu")
                    callback(false)
                })
        },
        delete: function(dataSet, id, callback) {
            var url = baseURL + dataSet + "/" + id;
            $http.delete(url)
                .then(function (response) {
                    callback(true)
                },function (reason) {
                    console.log("greska u pristupu")
                    callback(false)
                })
        }
    }
})

