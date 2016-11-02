var app = angular.module('app');

app.controller('explore_controller', function ($scope, $window, $ionicPopover, $ionicPopup, $rootScope, $state, explore_service) {
   
    
    $rootScope.menuButton = true;
    $scope.OptionButton = true;

    $scope.memorySearched = {};
    boxMemories($scope);
    exploreListMemories($scope);
    
    //open popover : allows to see the options when clicked on the option button
    $scope.openPopover = function ($event) {
      $ionicPopover.fromTemplateUrl('my-popover.html', {
          scope: $scope
      }).then(function (popover) {
          $scope.popover = popover;
          $scope.popover.show($event);
      });
      $scope.closePopover = function () {
          $scope.popover.hide();
      };
      //Cleanup the popover when we're done with it!
      $scope.$on('$destroy', function () {
          $scope.popover.remove();
      });
  };

  // showpopup 
    $scope.showPopup = function() {
        console.log("popup");
        //$scope.filter = {};
        var myPopup = $ionicPopup.show({
            template: ' <ion-list><ion-checkbox ng-click="doFilter(1)" ng-model="box.name">Name</ion-checkbox><ion-checkbox ng-click="doFilter(2)" ng-model="box.date">Most recent</ion-checkbox><ion-checkbox ng-click="doFilter(3)" ng-model="box.grade">Grade</ion-checkbox></ion-list> ',
            title: 'Order memories by',
            scope: $scope,
            buttons: [{
                text: 'Cancel'
            }, {
                text: '&lt;b&gt;Save&lt;/b&gt;',
                type: 'button-positive',
                onTap: function(e) {
                if (!$scope.data.userPassword) {
                    //don't allow the user to close unless he enters wifi password
                    e.preventDefault();
                } else {
                    return $scope.data;
                }
                }
            }, ]
        });
        myPopup.then(function(res) {
            if (res) {
                if (res.userPassword == res.confirmPassword) {
                console.log('Password Is Ok');
                } else {
                console.log('Password not matched');
                }
            } else {
                console.log('Enter password');
            }
        });

        $scope.doFilter = function (filter) {

            console.log("filter by : " + filter);
            switch (filter) {
                case 1:
                    $scope.box.name = true;
                    $scope.box.date = false;
                    $scope.box.grade = false;
                    $scope.filter = 'name';
                    break;
                case 2:
                    $scope.box.name = false;
                    $scope.box.date = true;
                    $scope.box.grade = false;
                    $scope.filter = '-date';
                    break;
                case 3:
                    $scope.box.name = false;
                    $scope.box.date = false;
                    $scope.box.grade = true;
                    $scope.filter = '-grade';
                    break;
                default:
            }
            myPopup.close();
        }

    };

    $scope.doSearchMemory = function () {
        $scope.memoryArray = explore_service.getMemoryArray($scope.memorySearched.str);
    };

    $scope.doClearSearch = function () {
        console.log("clear");
        $scope.memorySearched.str = "";
        exploreListMemories($scope);
    }

    $scope.doAddMemory = function () {
        console.log("addMemory");
        $state.go('app.createMemory');
    }

    /*
    $scope.doEdit = function () {
        console.log("doEdit");
        $scope.OptionButton = !$scope.OptionButton;
    }
    */

    $scope.doDeleteMemory = function () {
        explore_service.deleteMemory($scope.memorySearched);
    };

    $scope.doOpenMemory = function (memory) {
        explore_service.openMemory(memory);
        console.log("go to view");
        $state.go('app.viewMemory');
        //$state.go('app.viewMemory');
    };
    
    function boxMemories($scope) {
        $scope.box = {};
        $scope.box.name = true;
        $scope.box.date = false;
        $scope.box.grade = false;
        $scope.filter = 'name';
    }

    function exploreListMemories($scope) {
        $scope.memoryArray = explore_service.getMemoryArray($scope.memoryName);
    }

    function filterMemories($scope) {
        if ($scope.box.date === true) {
            $scope.filter = '-date';
        }
        else {
            $scope.filter = 'name';
        }
    }
});