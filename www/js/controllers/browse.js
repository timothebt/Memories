var app = angular.module('app');

app.controller('BrowseCtrl', function ($scope, $ionicModal, $timeout) {
    localStorage.clear();
    console.log("storage cleared");
});