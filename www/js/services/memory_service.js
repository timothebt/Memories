var app = angular.module('app');

app.service('memory_service', function (userLogged_service) {

    var authorizedUserArray = [];
    var success = true;

    this.authorizeUserLogged = function (memory) {

        var user = userLogged_service.getUserLogged();
        memory.autorizedUsers.push(user.name);
        return memory;
    }

    this.copyMemory = function (memoryToCopy){
        var memory = {};
        memory.name = memoryToCopy.name;
        memory.description = memoryToCopy.description;
        memory.date = new Date(memoryToCopy.date);
        return memory;
    }

});