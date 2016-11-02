var app = angular.module('app');

app.controller('favorites_controller', function ($scope, $state, $rootScope, favorites_service, viewMemory_service) {


    $rootScope.menuButton = true;
    exploreListMemories($scope);

    $scope.doSearchMemory = function () {
        $scope.favoritesArray = favorites_service.getFavoritesArray($scope.memorySearched.str);
    };
    
    $scope.doClearSearch = function () {
        console.log("clear");
        $scope.memorySearched.str = "";
        exploreListMemories($scope);
    }

    $scope.doOpenMemory = function (memory) {
        viewMemory_service.setMemory(memory);
        $state.go('app.viewMemory');
    };

    function exploreListMemories($scope) {
        $scope.favoritesArray = favorites_service.getFavoritesArray($scope.memoryName);

    }

});