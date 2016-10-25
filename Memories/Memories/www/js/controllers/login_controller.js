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

    $scope.doRedirect = function (param) {
        console.log("redirection");
        if (param == 'login') $state.go('app.login');
        else if (param == 'register') $state.go('app.createUser');
        else console.log("failed redirect");
        //$location.path("/app/createuser");
        //document.location.href ='#/app/createuser';
    }
    
});