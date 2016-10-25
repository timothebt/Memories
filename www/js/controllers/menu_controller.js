var app = angular.module('app');

app.controller('menu_controller', function ($scope, $state, $rootScope, $ionicHistory, menu_service) {
     
    console.log("deconnection");


    $scope.doReload = function () {
        console.log("click on menu button");
        location.reload();
        $rootScope.menuButton = true;
        $state.go('app.explore');
    }
    
    $scope.doUnlogUser = function () {
        var userDeconnected = menu_service.unlogUser();
        $ionicHistory.nextViewOptions({
                disableBack: true
        });
        console.log("test");
        location.reload();
        $state.go('app.openApp', null, { reload: true });

        //$state.go('app.openApp', {}, { reload: true });

          //  $state.go('app.openApp');
    };

});