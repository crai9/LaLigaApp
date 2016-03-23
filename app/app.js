'use strict';

// Declare app level module which depends on views, and components
var LaLiga = angular.module('LaLigaApp', [
  'ngRoute',
  'LaLigaApp.home',
  'LaLigaApp.map',
  'LaLigaApp.teams',
  'DataService'
]).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider
      .when('/home', {
        templateUrl: 'components/pages/home/home.html',
        controller: 'HomeCtrl'
      })
      .when('/map', {
        templateUrl: 'components/pages/map/map.html',
        controller: 'MapCtrl'
      })
      .when('/teams', {
        templateUrl: 'components/pages/teams/teams.html',
        controller: 'TeamsCtrl'
      })
      .otherwise({redirectTo: '/home'});

    $locationProvider.html5Mode(false);

}]);

LaLiga.run(function($rootScope, $location){

    $rootScope.isActive = function(viewLocation){
        return viewLocation === $location.path();
    }

    $rootScope.appName = "La Liga";
});