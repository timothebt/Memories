var app = angular.module('app');

app.service('favorites_service', function (userLogged_service, viewMemory_service, memoryList_service) {

    this.getFavoritesArray = function (memoryName) {
        
        var favoritesSearchedArray = new Array();
        var memoryArray = memoryList_service.getMemoryArray();
        var favoritesIndexArray = userLogged_service.getFavoritesArray();
        var index = 0;


        if (favoritesIndexArray == null) {
            return null;
        }
        else {
            favoritesIndexArray.forEach(checkMemory);
            return favoritesSearchedArray;
        }

        function checkMemory(memory, index) {
            
            if (memoryName == null || memoryName == "") {
                favoritesSearchedArray.push(memoryArray[memory]);
            }
            else if (memoryArray[memory].name.search(memoryName) != -1) {
                favoritesSearchedArray.push(memoryArray[memory]);
            }
        }


    }

    this.openMemory = function (memory) {
        viewMemory_service.setMemory(memory);
        //$state.go('app.viewMemory');
    }

});