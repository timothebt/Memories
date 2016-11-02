var app = angular.module('app');

app.service('memoryList_service', function (userLogged_service, memory_service) {

    var memoryArray = [];
    var success = true;

    this.createMemory = function (memory) {

        updateArray();
        if (memoryArray === null) {
            console.log("first memory");
            memoryArray = [];
        }
        else {
            if (findMemory(memory.name) !== null) {
                console.log("memory already exists");
                return false;
            }
        }
        var userLogged = userLogged_service.checkUserLogged();
        if (userLogged) {
            memory.autorizedUsers = new Array();
            memory = memory_service.authorizeUserLogged(memory);
            memoryArray.push(memory);
            console.log("add memory : " + memory.name + " in memoryList");
            console.log("users authorized : " + memory.autorizedUsers);
            pushArray();
            return true;
        }
        else {
            console.log("no user logged");
            return false;
        }
        

    }

    this.getMemory = function (memoryName) {

        updateArray();
        if (memoryArray === null) {
            console.log("no memory stored");
            return null;
        }
        else {
            return findMemory(memoryName);
        }
    }

    this.getMemoryIndex = function (memoryName) {

        updateArray();
        if (memoryArray === null) {
            console.log("no memory stored");
            return null;
        }
        else {
            return findMemoryIndex(memoryName);
        }
    }
    
    this.getMemoryArray = function () {

        updateArray();
        return memoryArray;
    }

    this.editMemory = function (memoryToEdit, memory) {
        updateArray();
        if (memoryArray === null) {
            console.log("no memory stored");
            return false;
        }
        else {
            var indexMemoryToEdit = findMemoryIndex(memoryToEdit.name);
            if (indexMemoryToEdit === -1) {
                console.log("memory to edit not stored in memory");
                return false;
            }
            else {
                console.log("memory going to be edited and push to memory");
                memoryArray[indexMemoryToEdit] = Object.assign (memoryArray[indexMemoryToEdit],memory);
                console.log("memory grade : " + memoryArray[indexMemoryToEdit].grade);
                pushArray();
                return true;
            }
        }
    }

    this.deleteMemory = function (memoryName) {

        updateArray();
        if (memoryArray === null) {
            console.log("no memory stored");
            return false;
        }
        else {
            var memoryIndex = findMemoryIndex(memoryName);
            if (memoryIndex !== -1) {
                console.log("memory found and deleted");
                memoryArray.splice(memoryIndex, 1);
                pushArray();
                return true;
            }
            else {
                console.log("memory not found");
                return false;
            }
        }
        return success;
    }

    function updateArray() {
        memoryArray = angular.fromJson(localStorage.getItem("memoryList"));
    }

    function pushArray() {
        localStorage.setItem("memoryList", angular.toJson(memoryArray));
    }

    function findMemory(memoryName) {
        for (var i = 0; i < memoryArray.length; i++) {
            if (memoryArray[i].name === memoryName) {
                return memoryArray[i];
            }
        }
        return null;
    }

    function findMemoryIndex(memoryName){

        return memoryArray.findIndex(checkName);

        function checkName(memory) {
            return memory.name === memoryName;
        }

    }

});