/// <reference path="../../templates/viewMemory.html" />
var app = angular.module('app');

app.controller('viewMemory_controller', function ($scope, $state, $ionicHistory, $rootScope, viewMemory_service) {

    //$scope.date = new Date(viewMemory_service.getMemory().date);
    var memory = viewMemory_service.getMemory();
    //memory.date = new Date(memory.date);
    var memoryEdited = {};
    checkFavorite($scope);
    checkGrade($scope, memory);
    
    var memoryDate = memory.date;
    console.log("format date saved" + memoryDate);
    $scope.memory = memory;
    $scope.memory.date = memoryDate;
    $scope.memoryDate = memory.date.toString();
    

    $scope.doEdit = function () {
        $scope.view = true;
        //copy of memory to memoryEdited manual otherwise type date not recognized
        //console.log("format date saved" + memory.date);
        memoryEdited = Object.assign(memoryEdited, memory);
        memoryEdited.date = new Date(memoryEdited.date)
        //console.log("format date modified" + memoryEdited.date);
        $scope.memoryEdited = memoryEdited;
    }

    $scope.doCancel = function () {
        $scope.view = false;
        checkGrade($scope, memory);
    }

    $scope.doEditMemory = function () {
        console.log("save memory" + $scope.memoryEdited.name);
        memory = viewMemory_service.editMemory(memory, $scope.memoryEdited);
        if (memory !== null) {
            console.log("Memory edited");
            $scope.memory = memory;
            $scope.view = false;
            checkGrade($scope, memory);
        }
        else {
            console.log("Error  : memory not edited");
        }
    }

    $scope.doDeleteMemory = function () {
        console.log("delete");
        viewMemory_service.deleteMemory();
        location.reload();
        $rootScope.menuButton = true;
        $ionicHistory.goBack();
    }

    $scope.doFavorites = function () {

        viewMemory_service.favorites(memory.name);
        checkFavorite($scope);
    }

    $scope.doGrade = function (mark) {
        console.log("memoryEdited.grade : " + mark);
        switch (mark) {
            case 0:
                break;
            case 1:
                if (memoryEdited.grade === 1) {
                    memoryEdited.grade = 0;
                }
                else {
                    memoryEdited.grade = mark;
                }
                break;
            case 2:
                if (memoryEdited.grade === 2) {
                    memoryEdited.grade = 0;
                }
                else {
                    memoryEdited.grade = mark;
                }
                break;
            case 3:
                if (memoryEdited.grade === 3) {
                    memoryEdited.grade = 0;
                }
                else {
                    memoryEdited.grade = mark;
                }
                break;
            case 4:
                if (memoryEdited.grade === 4) {
                    memoryEdited.grade = 0;
                }
                else {
                    memoryEdited.grade = mark;
                }
                break;
            case 5:
                if (memoryEdited.grade === 5) {
                    memoryEdited.grade = 0;
                }
                else {
                    memoryEdited.grade = mark;
                }
                break;
            default:
        }
        checkGrade($scope, memoryEdited);
    }

    function checkFavorite($scope) {
        if (viewMemory_service.checkFavorites(memory.name) !== -1) {
            $scope.colorButtonFavorite = "energized";
        }
        else {
            $scope.colorButtonFavorite = "dark";
        }
    }

    function checkGrade($scope, memory) {
        //$scope.colorButtonGrade1 = "energized";
        switch (memory.grade) {
            case 0:
                $scope.colorButtonGrade1 = "";
                $scope.colorButtonGrade2 = "";
                $scope.colorButtonGrade3 = "";
                $scope.colorButtonGrade4 = "";
                $scope.colorButtonGrade5 = "";
                break;
            case 1:
                $scope.colorButtonGrade1 = "energized";
                $scope.colorButtonGrade2 = "";
                $scope.colorButtonGrade3 = "";
                $scope.colorButtonGrade4 = "";
                $scope.colorButtonGrade5 = "";
                break;
            case 2:
                $scope.colorButtonGrade1 = "energized";
                $scope.colorButtonGrade2 = "energized";
                $scope.colorButtonGrade3 = "";
                $scope.colorButtonGrade4 = "";
                $scope.colorButtonGrade5 = "";
                break;
            case 3:
                $scope.colorButtonGrade1 = "energized";
                $scope.colorButtonGrade2 = "energized";
                $scope.colorButtonGrade3 = "energized";
                $scope.colorButtonGrade4 = "";
                $scope.colorButtonGrade5 = "";
                break;
            case 4:
                $scope.colorButtonGrade1 = "energized";
                $scope.colorButtonGrade2 = "energized";
                $scope.colorButtonGrade3 = "energized";
                $scope.colorButtonGrade4 = "energized";
                $scope.colorButtonGrade5 = "";
                break;
            case 5:
                $scope.colorButtonGrade1 = "energized";
                $scope.colorButtonGrade2 = "energized";
                $scope.colorButtonGrade3 = "energized";
                $scope.colorButtonGrade4 = "energized";
                $scope.colorButtonGrade5 = "energized";
                break;
            default:
                $scope.colorButtonGrade1 = "";
                $scope.colorButtonGrade2 = "";
                $scope.colorButtonGrade3 = "";
                $scope.colorButtonGrade4 = "";
                $scope.colorButtonGrade5 = "";
        }
    }

});
