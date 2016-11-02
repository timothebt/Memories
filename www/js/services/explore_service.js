var app = angular.module('app');

app.service('explore_service', function ($state, memoryList_service, userLogged_service, viewMemory_service) {


    /*
    this.searchMemory = function (memory) {

        console.log('Searching memory : ' + memory.name);
        var memoryExists = memoryList_service.getMemory(memory.name);
        if (memoryExists !== null) {
            console.log("memory found : " + memoryExists.name);
            viewMemory_service.setMemory(memoryExists);
            return memoryExists;
        }
        else {
            console.log("memory not found");
            return;
        }

    }*/

    this.deleteMemory = function (memory) {

        console.log('Deleting memory : ' + memory.name);
        return memoryList_service.deleteMemory(memory.name);
    }

    this.getMemoryArray = function (memoryName) {
        var memoryArray = memoryList_service.getMemoryArray();
        var memorySearchedArray = new Array();
        var userName = userLogged_service.getUserLogged().name;
        var index = 0;

        if (memoryArray === null) {
            return null;
        }
        else {
            memoryArray.forEach(checkMemory);
            return memorySearchedArray;
        }
        
        function checkUser(user) {
            return user == userName;
        }

        function checkMemory(memory, index) {
            if (memory.autorizedUsers.find(checkUser) != null) {
                if (memoryName == null || memoryName == "") {
                    memorySearchedArray.push(memory);
                }
                else if (memory.name.search(memoryName) != -1) {
                    memorySearchedArray.push(memory);
                }
            }
        }
        

    }

    this.openMemory = function (memory){
        viewMemory_service.setMemory(memory);
        //$state.go('app.viewMemory');
    }

});