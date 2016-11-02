var app = angular.module('app');

app.service('viewMemory_service', function (memoryList_service, userLogged_service, userList_service, memory_service) {

    var memoryToView = {};
    var memoryToReturn = {};
    var memoryArray = [];

    this.getMemory = function () {

        memoryToReturn = Object.assign(memoryToReturn, memoryToView);
        return memoryToReturn;
    }

    this.setMemory = function (memory) {
        
        memoryToView = Object.assign(memoryToView, memory);
        console.log(memoryToView.grade);
    }

    this.editMemory = function (memoryToEdit, memory) {
        //console.log("service memory edited");
        if (memoryList_service.editMemory(memoryToEdit, memory)) {
            return memoryList_service.getMemory(memory.name);
        }
        else {
            return null;
        }
    }

    this.deleteMemory = function () {
        console.log('Deleting memory : ' + memoryToView.name);
        return memoryList_service.deleteMemory(memoryToView.name);
    }

    this.favorites = function (memoryName) {

        memoryIndex = memoryList_service.getMemoryIndex(memoryName);
        if (userLogged_service.checkFavorite(memoryIndex) !== -1) {
            userLogged_service.deleteFavorite(memoryIndex);
        }
        else {
            userLogged_service.addFavorite(memoryIndex);
        }
        userList_service.editUser();
    }

    this.checkFavorites = function (memoryName) {
        memoryIndex = memoryList_service.getMemoryIndex(memoryName);
        return userLogged_service.checkFavorite(memoryIndex);
    }

});