var app = angular.module('app');

app.controller('createMemory_controller', function ($scope, createMemory_service) {

    $scope.memoryCreated = {};
    //console.log($scope.memoryCreated.date);
    GetTodayDate($scope);


    $scope.doCreateMemory = function () {

        var successCreateMemory = createMemory_service.create($scope.memoryCreated);
        if (!successCreateMemory) {
            alert("name already used");
        }
        else {
            console.log("memory saved");
        }

    }

    function GetTodayDate($scope) {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0! +'T22:00:00.000Z'
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd
        }
        if (mm < 10) {
            mm = '0' + mm
        }
        today = yyyy + '-' + mm + '-' + dd;

        $scope.memoryCreated.date = new Date(today);
    };

});
