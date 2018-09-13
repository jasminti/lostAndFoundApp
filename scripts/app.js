var app = angular.module('lostAndFoundApp', ['ngRoute', 'ngStorage']);

comments = [
    {
        name: 'Test',
        text: 'hello world',
        approved: true
    },
    {
        name: 'randomUser',
        text: 'lorem ipsum',
        approved: false
    }
];
users = [
    {
        name: 'John',
        email: 'john@aol.com',
        password: 'john'
    },
    {
        name: 'Bill',
        email: 'bill@aol.com',
        password: 'bill'
    },
    {
        name: 'Jack',
        email: 'jack@aol.com',
        password: 'jack'
    },
];
currentUser = '';

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', { templateUrl: 'views/comments.html', controller: 'CommentsCtrl' })
        .when('/signup', { templateUrl: 'views/signup.html', controller: 'signUpCtrl' })
        .when('/signin', { templateUrl: 'views/login.html', controller: 'signInCtrl'})
        .when('/home', { templateUrl: 'views/home.html', controller: 'homeCtrl'})
        .otherwise({ redirectTo: '/' });
}]);
