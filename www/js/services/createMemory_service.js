var app = angular.module('app');

app.service('createMemory_service', function (memoryList_service, memory_service) {

    //var usersList = localStorage.getItem("memoryList");

    this.create = function (memory) {
        return memoryList_service.createMemory(memory);
    }

});