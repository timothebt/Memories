﻿var app = angular.module('app');

app.controller('createUser_controller', function ($scope, $state, $ionicHistory, createUser_service, login_service) {

    $scope.userCreated = {};

    $scope.doCreateUser = function () {

        var successCreateUser = createUser_service.create($scope.userCreated);
        if (successCreateUser) {
            console.log("user saved");
            var userValid = login_service.checkUser($scope.userCreated);
            if (userValid) {
                console.log("welcome : " + $scope.userCreated.name + " you are going to be redirected to your homepage");
                $ionicHistory.nextViewOptions({
                    disableBack: true
                });
                $state.go('app.homepage');
            }
            else {
                alert("bad login");
            }
        }
        else {
            alert("name already used");
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
