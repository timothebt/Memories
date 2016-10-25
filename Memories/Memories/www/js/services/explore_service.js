var app = angular.module('app');

app.service('explore_service', function (memoryList_service) {



    this.searchMemory = function (memory) {

        console.log('Searching memory : ' + memory.name);
        var memoryExists = memoryList_service.getMemory(memory.name);
        if (memoryExists !== null) {
            console.log("memory found : " + memoryExists.name );
            return memoryExists;
        }
        else {
            console.log("memory not found");
            return;
        }

    }

    this.deleteMemory = function (memory) {

        console.log('Deleting memory : ', memory.name);
        return memoryList_service.deleteMemory(memory.name);
    }

    this.getMemoryArray = function () {
    /*
        memoryArray = new Array();
        memoryArrayGotten = new Array();
        memoryArrayGotten = memoryList_service.getMemoryArray();

        for (i = 0; i < memoryArrayGotten.length; i++) {
            var object = memoryArrayGotten[i];
            console.log("memory number : " + i + " memory : " + object.name);
            memoryArray[i] = object;
        }
        */
        return memoryList_service.getMemoryArray();

    }
});