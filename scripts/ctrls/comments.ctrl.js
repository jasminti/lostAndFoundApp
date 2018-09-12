app = angular.module("lostAndFoundApp");

app.controller ('CommentsCtrl', function ($scope, $rootScope) {
    $rootScope.currentUser = currentUser;
    console.log($rootScope.currentUser);
    $scope.hiden = false;
    $scope.label = 'Hide Angular';
    // you see how the comments are passed to the $scope here?
    // you should get them from localStorage
    //
    $scope.comments = comments

    $scope.submit = function (comment) {
        // this saves to the scope
        // if you want to persist the data you should save to localStorage here
        $scope.comments.push({
            name: currentUser,
            text: comment.text,
            approved: false,
            replies: []
        });
        comment = {name: '', text: ''}
    };

    $scope.insertReply = function(comment, reply) {
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