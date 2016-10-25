var app = angular.module('app');

app.service('explore_service', function ($state, memoryList_service, userLogged_service, viewMemory_service) {



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
        memoryArray = memoryList_service.getMemoryArray();
        memoryUserArray = new Array();
        var index = 0;
        userName = userLogged_service.getUserLogged().name;
        if (memoryArray === null) {
            return null;
        }
        else {
            for (var i = 0; i < memoryArray.length; i++) {
                for (var j = 0; j < memoryArray[i].autorizedUsers.length; j++) {
                    if (memoryArray[i].autorizedUsers[j] == userName) {
                        memoryUserArray[index] = memoryArray[i];
                        index++;
                    }
                }
            }

            return memoryUserArray;
        }
        

    }

    this.openMemory = function (memory){
        viewMemory_service.setMemory(memory);
        $state.go('app.viewMemory');
    }

});