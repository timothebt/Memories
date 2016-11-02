var app = angular.module('app');

app.service('menu_service', function (userLogged_service) {

    this.unlogUser = function () {
        return userLogged_service.unlogUser();
    }

    this.copyValuesUser = function () {

    }

});