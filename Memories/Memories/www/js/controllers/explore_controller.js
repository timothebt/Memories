var app = angular.module('app');

app.controller('explore_controller', function ($scope, explore_service, $window) {
    $window.location.reload(true);

    // Form data for the creatememory modal
    $scope.memorySearched = {};

    //exploreListMemories($scope);
    exploreListMemories($scope);

    $scope.doSearchMemory = function () {
        var memory = explore_service.searchMemory($scope.memorySearched);
    };

    
    $scope.doDeleteMemory = function () {
        explore_service.deleteMemory($scope.memorySearched);
    };
    

    function exploreListMemories($scope) {

        $scope.memoryArray = explore_service.getMemoryArray();

    }

});