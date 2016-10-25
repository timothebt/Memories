var app = angular.module('app');

app.service('userLogged_service', function () {
    
    //var usersList = localStorage.getItem("memoryList");
    var userLogged;

    this.logUser = function (user) {

        push(user);
        return true;

    }

    this.unlogUser = function () {

        clear();
        return true;

    }

    this.checkUserLogged = function () {
        update();
        if (userLogged === null) {
            return false;
        }
        else {
            return true;
        }
    }

    function update() {
        userLogged = angular.fromJson(localStorage.getItem("userLogged"));
    }

    function push(user) {
        localStorage.setItem("userLogged", angular.toJson(user));
    }

    function clear() {
        localStorage.setItem("userLogged", angular.toJson(null));
    }

    /*
    function findMemory(memoryName) {
        for (var i = 0; i < memoryArray.length; i++) {
            if (memoryArray[i].name === memoryName) {
                return memoryArray[i];
            }
        }
        return null;
    }

    function findMemoryIndex(memoryName) {

        return memoryArray.findIndex(checkName);

        function checkName(memory) {
            return memory.name === memoryName;
        }

    }
    */
});