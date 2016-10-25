var app = angular.module('app');

app.service('viewMemory_service', function (memoryList_service, userLogged_service) {

    var memoryToView;

    this.getMemory = function () {
        return memoryToView;
    }

    this.setMemory = function (memory) {
        memoryToView = memory;
    }

});