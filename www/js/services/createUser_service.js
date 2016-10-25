var app = angular.module('app');

app.service('createUser_service', function (userList_service) {

    //var usersList = localStorage.getItem("memoryList");

    this.create = function (user) {
        return userList_service.createUser(user);
    }

});