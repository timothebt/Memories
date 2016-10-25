var app = angular.module('app');

app.controller('delete_controller', function ($scope, $state, $ionicModal, $timeout, $rootScope, $window) {
    $window.location.reload(true);
    $rootScope.menuButton = true;
    localStorage.clear();
    console.log("storage cleared");
    $state.go('app.homepage');
});