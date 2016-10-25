var app = angular.module('app');

app.controller('viewMemory_controller', function ($scope, viewMemory_service) {

    $scope.memory = viewMemory_service.getMemory();
});
