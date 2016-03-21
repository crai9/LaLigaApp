'use strict';

// Declare app level module which depends on views, and components
angular.module('LaLigaApp', [
  'ngRoute',
  'LaLigaApp.home',
  'LaLigaApp.map',
]).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider
      .when('/home', {
        templateUrl: 'home/home.html',
        controller: 'HomeCtrl'
      })
      .when('/map', {
        templateUrl: 'map/map.html',
        controller: 'MapCtrl'
      })
      .otherwise({redirectTo: '/home'});

  $locationProvider.html5Mode(false);

}]);
