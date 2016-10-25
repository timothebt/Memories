var app = angular.module('app');

app.controller('openApp_controller', function (openApp_service, $rootScope, $state, $ionicHistory, $window) {
    $window.location.reload(true);
    $rootScope.menuButton = false;

    if (openApp_service.checkUserLogged()) {
        console.log("Welcome");
        //redirection to homepage.html
        $ionicHistory.nextViewOptions({
            disableBack: true
        });
        $state.go('app.homepage');
    }
    else {
        console.log("please login");
        //redirection to login.html
        $ionicHistory.nextViewOptions({
            disableBack: true
        });

        $state.go('app.login');
    }
});