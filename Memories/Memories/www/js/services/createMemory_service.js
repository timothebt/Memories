var app = angular.module('app');

app.service('createMemory_service', function ($state, memoryList_service, userLogged_service) {
    
    //var usersList = localStorage.getItem("memoryList");
    
        this.create = function (memory) {
            return memoryList_service.createMemory(memory);
        }
  

});