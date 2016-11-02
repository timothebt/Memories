var app = angular.module('app');

app.controller('createMemory_controller', function ($scope, $ionicHistory, $rootScope, createMemory_service, viewMemory_service) {

    $scope.memoryCreated = {};
    //console.log($scope.memoryCreated.date);
    GetTodayDate($scope);


    $scope.doCreateMemory = function () {
        //console.log($scope.memoryCreated.)
        console.log(new Date($scope.memoryCreated.date));
        var successCreateMemory = createMemory_service.create($scope.memoryCreated);
        if (!successCreateMemory) {
            alert("name already used");
        }
        else {
            console.log("memory saved");
            location.reload();
            $rootScope.menuButton = true;
            $ionicHistory.goBack();
        }

    }

    $scope.doGrade = function (mark) {
        console.log("memoryCreated.grade : " + mark);
        switch (mark) {
            case 0:
                break;
            case 1:
                if ($scope.memoryCreated.grade === 1) {
                    $scope.memoryCreated.grade = 0;
                }
                else {
                    $scope.memoryCreated.grade = mark;
                }
                break;
            case 2:
                if ($scope.memoryCreated.grade === 2) {
                    $scope.memoryCreated.grade = 0;
                }
                else {
                    $scope.memoryCreated.grade = mark;
                }
                break;
            case 3:
                if ($scope.memoryCreated.grade === 3) {
                    $scope.memoryCreated.grade = 0;
                }
                else {
                    $scope.memoryCreated.grade = mark;
                }
                break;
            case 4:
                if ($scope.memoryCreated.grade === 4) {
                    $scope.memoryCreated.grade = 0;
                }
                else {
                    $scope.memoryCreated.grade = mark;
                }
                break;
            case 5:
                if ($scope.memoryCreated.grade === 5) {
                    $scope.memoryCreated.grade = 0;
                }
                else {
                    $scope.memoryCreated.grade = mark;
                }
                break;
            default:
        }
        checkGrade($scope);
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

    function checkGrade($scope) {
        //$scope.colorButtonGrade1 = "energized";
        switch ($scope.memoryCreated.grade) {
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
