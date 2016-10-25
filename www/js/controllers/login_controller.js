var app = angular.module('app');

app.controller('login_controller', function ($scope, $state, $ionicHistory, login_service) {

    $scope.user = {};

    $scope.doLogin = function () {
        console.log("username : " + $scope.user.name);
        var userValid = login_service.checkUser($scope.user);
        if (userValid) {
            console.log("welcome : " + $scope.user.name + " you are going to be redirected to your homepage");
            $ionicHistory.nextViewOptions({
                disableBack: true
            });
            $state.go('app.homepage');
        }
        else {
            alert("bad login");
        }
    }

    $scope.doRedirect = function () {
        console.log("redirection");
        $state.go('app.createUser');
        //$location.path("/app/createuser");
        //document.location.href ='#/app/createuser';
    }
    
});