var app = angular.module('app');

app.service('login_service', function (userList_service, userLogged_service) {

    this.checkUser = function (user) {
        var userValid = userList_service.checkUser(user);
        if (userValid) {
            console.log("user logged in");
            var test = userLogged_service.logUser(user);
        }
        else{
            console.log("user not valid");
        }
        return userValid;
    }
});