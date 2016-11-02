var app = angular.module('app');

app.service('login_service', function (userList_service, userLogged_service) {

    this.checkUser = function (user) {
        var userValid = userList_service.checkUser(user);
        if (userValid !== null) {
            var test = userLogged_service.logUser(userValid);
            return true;
        }
        else{
            console.log("user not valid");
            return false;
        }
    }
});