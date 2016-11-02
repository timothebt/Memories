var app = angular.module('app');

app.service('userList_service', function (userLogged_service) {
    
    var userArray = [];
    var success = true;

    this.createUser = function (user) {

        updateArray();
        if (userArray === null) {
            console.log("first user");
            userArray = [];
        }
        else {
            if (findUser(user.name) !== null) {
                console.log("user already exists");
                return false;
            }
        }
        userArray.push(user);
        console.log("add user : " + user.name + " in userList");
        pushArray();
        return true;

    }
    
    this.checkUser = function (user) {
        updateArray();
        if (userArray === null) {
            console.log("no user stored");
            return false;
        }
        else {
            return findUser(user.name);
        }
    }

    this.getUser = function (userName) {

        updateArray();
        if (userArray === null) {
            console.log("no user stored");
            return null;
        }
        else {
            return findUser(userName);
        }
    }

    this.getUserArray = function () {

        updateArray();
        return userArray;
    }

    this.editUser = function () {
        console.log("edit user");
        updateArray();
        var userLogged = userLogged_service.getUserLogged();
        console.log("favorites list : " + userLogged.favoritesArray.toString());
        var indexUserToEdit = findUserIndex(userLogged.name);
        userArray[indexUserToEdit] = Object.assign(userArray[indexUserToEdit], userLogged);
        pushArray();
        console.log("favorites seved : " + userArray[indexUserToEdit].favoritesArray.toString());
        return success;
    }

    this.deleteUser = function (userName) {

        updateArray();
        if (userArray === null) {
            console.log("no user stored");
            return false;
        }
        else {
            var userIndex = findUserIndex(userName);
            if (userIndex !== -1) {
                console.log("user found and deleted");
                userArray.splice(userIndex, 1);
                pushArray();
                return true;
            }
            else {
                console.log("user not found");
                return false;
            }
        }
        return success;
    }

    function updateArray() {
        userArray = angular.fromJson(localStorage.getItem("userList"));
    }

    function pushArray() {
        localStorage.setItem("userList", angular.toJson(userArray));
    }
    
    function findUser(userName) {
        for (var i = 0; i < userArray.length; i++) {
            if (userArray[i].name === userName) {
                return userArray[i];
            }
        }
        return null;
    }

    function findUserValid(user) {
        
        for (var i = 0; i < userArray.length; i++) {
            if (userArray[i].name === user.name && userArray[i].password === user.password) {
                console.log("user found");
                return true;
            }
        }
        return false;
    }

    function findUserIndex(userName) {

        return userArray.findIndex(checkName);

        function checkName(user) {
            return user.name === userName;
        }

    }
});