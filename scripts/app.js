var app = angular.module('lostAndFoundApp', ['ngRoute', 'ngStorage']);

/*comments = [
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
];*/
users = [
    {
        id: 1,
        name: 'John',
        email: 'john@aol.com',
        password: 'john',
        role: 'admin'
    },
    {
        id: 2,
        name: 'Bill',
        email: 'bill@aol.com',
        password: 'bill',
        role: 'user'
    },
    {
        id: 3,
        name: 'Jack',
        email: 'jack@aol.com',
        password: 'jack',
        role: 'user'
    },
];
currentUser = {};

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', { templateUrl: 'views/comments.html', controller: 'CommentsCtrl' })
        .when('/signup', { templateUrl: 'views/signup.html', controller: 'signUpCtrl' })
        .when('/signin', { templateUrl: 'views/login.html', controller: 'signInCtrl'})
        .when('/home', { templateUrl: 'views/home.html', controller: 'homeCtrl'})
        .when('/mistral', { templateUrl: 'views/mistral.html', controller: 'mistralCtrl'})
        .when('/user/:id', { templateUrl: 'views/user.html', controller: 'userCtrl'})
        .otherwise({ redirectTo: '/' });
}]);
