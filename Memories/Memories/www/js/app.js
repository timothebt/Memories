// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var app = angular.module('app', ['ionic']);

app.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (cordova.platformId === "ios" && window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();           
        }
    });
});

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
    })
    
    .state('app.openApp', {
        url: '/openApp',
        views: {
            'menuContent': {
                templateUrl: 'templates/openApp.html',
                controller: 'openApp_controller'
            }
        }
    })

    .state('app.homepage', {
        url: '/homepage',
        views: {
            'menuContent': {
                templateUrl: 'templates/homepage.html',
                controller: 'homepage_controller'
            }
        }
    })

    .state('app.createMemory', {
        url: '/createMemory',
        views: {
            'menuContent': {
                templateUrl: 'templates/createMemory.html',
                controller: 'createMemory_controller'
            }
        }
    })

    .state('app.createUser', {
        url: '/createUser',
        views: {
            'menuContent': {
                templateUrl: 'templates/createUser.html',
                controller: 'createUser_controller'
            }
        }
    })


    .state('app.explore', {
        url: '/explore',
        views: {
            'menuContent': {
                templateUrl: 'templates/explore.html',
                controller: 'explore_controller'
            }
        }
    })

    .state('app.login', {
        url: '/login',
        views: {
            'menuContent': {
                templateUrl: 'templates/login.html',
                controller: 'login_controller'
            }
        }
    })

      

    .state('app.delete', {
        url: '/delete',
        views: {
            'menuContent': {
                templateUrl: 'templates/delete.html',
                controller: 'delete_controller'
            }
        }
    })
      .state('app.playlists', {
          url: '/playlists',
          views: {
              'menuContent': {
                  templateUrl: 'templates/playlists.html',
                  controller: 'playlists_controller'
              }
          }
      })

    .state('app.single', {
        url: '/playlists/:playlistId',
        views: {
            'menuContent': {
                templateUrl: 'templates/playlist.html',
                controller: 'playlist_controller'
            }
        }
    });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/openApp');
});

