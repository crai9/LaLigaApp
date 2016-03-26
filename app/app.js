'use strict';

// Declare app level module which depends on views, and components
var LaLiga = angular.module('LaLigaApp', [
  'ngRoute',
  'LaLigaApp.home',
  'LaLigaApp.map',
  'LaLigaApp.teams',
  'DataService',
  'uiGmapgoogle-maps'
]).
config(['$routeProvider', '$locationProvider', 'uiGmapGoogleMapApiProvider', function($routeProvider, $locationProvider, uiGmapGoogleMapApiProvider) {

    $routeProvider
        .when('/home', {
            title: "Home",
            templateUrl: 'components/pages/home/home.html',
            controller: 'HomeCtrl'
        })
        .when('/map', {
            title: "Map",
            templateUrl: 'components/pages/map/map.html',
            controller: 'MapCtrl'
        })
        .when('/teams', {
            title: "Teams",
            templateUrl: 'components/pages/teams/teams.html',
            controller: 'TeamsCtrl'
        })
        .otherwise({redirectTo: '/home'});

    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyC10Fhssn1c_jAV5ohdA_5JkXl1eAgIJTQ',
        v: '3.23',
        libraries: 'weather,geometry,visualization'
    });

    $locationProvider.html5Mode(false);

}]);

LaLiga.run(function($rootScope, $location){

    $rootScope.isActive = function(viewLocation){
        return viewLocation === $location.path();
    }

    $rootScope.appName = "La Liga";

    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
});