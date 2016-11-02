var app = angular.module('app');

app.service('userLogged_service', function () {
    
    //var usersList = localStorage.getItem("memoryList");
    var userLogged;
    var favoritesArray = [];

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

    this.getUserLogged = function () {
        update();
        return userLogged;
    }

    this.addFavorite = function (memoryIndex) {

        update();
        favoritesArray = userLogged.favoritesArray;
        if(favoritesArray == null){
            favoritesArray = [];
            console.log("first favorite");
        }
        favoritesArray.push(memoryIndex);
        userLogged.favoritesArray = favoritesArray;
        
        push(userLogged);
        return true;
    }

    this.deleteFavorite = function (memoryIndex) {

        update();
        favoritesArray = userLogged.favoritesArray;
        var indexFavorite = favoritesArray.indexOf(memoryIndex);
        favoritesArray.splice(indexFavorite, 1);
        userLogged.favoritesArray = favoritesArray;
        push(userLogged);
        return true;
    }

    this.checkFavorite = function (memoryIndex) {

        update();
        favoritesArray = userLogged.favoritesArray;
        if (favoritesArray == null) {
            var success = -1;
            return -1;
        }
        return indexFavorite = favoritesArray.indexOf(memoryIndex);
    }

    this.getFavoritesArray = function () {
        update();
        return userLogged.favoritesArray;
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