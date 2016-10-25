var app = angular.module('app');

app.controller('playlists_controller', function ($scope, $window) {
    $window.location.reload(true);

    $scope.playlists = [
      { title: 'Favoris', id: 1 },
      { title: 'Ete2015', id: 2 },
      { title: 'Ete2016', id: 3 }
    ];
});



