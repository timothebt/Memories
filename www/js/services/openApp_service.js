var app = angular.module('app');

app.service('openApp_service', function (userLogged_service) {

    this.checkUserLogged = function () {
        return userLogged_service.checkUserLogged();
    }
});