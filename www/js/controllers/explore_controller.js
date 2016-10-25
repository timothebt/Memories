var app = angular.module('app');

app.controller('explore_controller', function ($scope, $window, $rootScope, explore_service) {
   // $window.location.reload(true);
    //location.reload();
   $rootScope.menuButton = true;
    // Form data for the creatememory modal1
    $scope.memorySearched = {};

    //exploreListMemories($scope);
    exploreListMemories($scope);

    $scope.doSearchMemory = function () {
        var memory = explore_service.searchMemory($scope.memorySearched);
    };

    
    $scope.doDeleteMemory = function () {
        explore_service.deleteMemory($scope.memorySearched);
    };

    $scope.doOpenMemory = function (memory) {
        explore_service.openMemory(memory);
    };
    
    
    function exploreListMemories($scope) {

        $scope.memoryArray = explore_service.getMemoryArray();

    }

});