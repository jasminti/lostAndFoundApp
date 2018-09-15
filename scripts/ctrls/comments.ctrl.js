var app = angular.module('lostAndFoundApp');

app.controller ('CommentsCtrl', function ($scope, $rootScope, $localStorage) {
    $rootScope.currentUser = currentUser;
    console.log($rootScope.currentUser);
    $scope.hiden = false;
    $scope.label = 'Hide Angular';

    $scope.saveComm = function () {
        $localStorage.comments = $scope.comments;
    };
    $scope.comments = $localStorage.comments;
    if($scope.comments === undefined) {
        $scope.comments = [];
    }

    $scope.submit = function (comment) {
        $scope.comments.push({
            name: currentUser,
            text: comment.text,
            approved: false,
            replies: []
        });
        comment = {name: '', text: ''}
    };

    $scope.insertReply = function(comment, reply) {
        if(comment.replies === undefined) {
            comment.replies=[];
        }
        comment.replies.push(reply)
    }

    $scope.approve = function(comment) {
        comment.approved = true
    };

    $scope.drop = function(comment) {
        $scope.comments.splice($scope.comments.indexOf(comment), 1)
    }

    $scope.IsVisible = false;

    $scope.ShowHide = function(){
        $scope.hiden = !$scope.hiden;
        $scope.label = ($scope.hiden ? 'Show' : 'Hide') + ' Angular';
    }
});
