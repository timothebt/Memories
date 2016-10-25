var app = angular.module('app');

app.controller('homepage_controller', function (homepage_service, $rootScope) {
    $rootScope.menuButton = true;
    console.log("Welcome user logged");
});