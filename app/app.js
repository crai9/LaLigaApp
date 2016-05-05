'use strict';

// Declare app level module which depends on views, and components
var LaLiga = angular.module('LaLigaApp', [
  'ngRoute',
  'LaLigaApp.home',
  'LaLigaApp.map',
  'LaLigaApp.teams',
  'LaLigaApp.cities',
  'LaLigaApp.regions',
  'DataService',
  'ApiService',
  'uiGmapgoogle-maps',
]).
config(['$routeProvider', '$locationProvider', 'uiGmapGoogleMapApiProvider', function($routeProvider, $locationProvider, uiGmapGoogleMapApiProvider) {

    $routeProvider
        .when('/home', {
            title: "Home",
            templateUrl: 'components/pages/home/home.html',
            controller: 'HomeCtrl'
        })
        .when('/', {
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
        .when('/cities', {
            title: "Cities",
            templateUrl: 'components/pages/cities/cities.html',
            controller: 'CitiesCtrl'
        })
        .when('/regions', {
            title: "Regions",
            templateUrl: 'components/pages/regions/regions.html',
            controller: 'RegionsCtrl'
        })
        .when('/teams/:id', {
            title: "Teams",
            templateUrl: 'components/pages/teams/teamsDetail.html',
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

LaLiga.run(function($rootScope, $location, DataService, $filter){

    $rootScope.isActive = function(viewLocation){
        return $location.path().indexOf(viewLocation) > -1;
    }

    $rootScope.search = "";
    $rootScope.allResults = {};
    $rootScope.results = {};

    DataService.getCities(function(success){

        $rootScope.allResults.cities = success.data.cities;

    });

    DataService.getTeams(function(success){

        $rootScope.allResults.teams = success.data.teams;

    });

    DataService.getRegions(function(success){

        $rootScope.allResults.regions = success.data.regions;

    });

    $rootScope.appName = "La Liga";

    $rootScope.blur = false;

    $rootScope.changeBlur = function(){

        setTimeout(function(){
            $rootScope.blur = false;
        }, 1000);

    }
    $rootScope.change = function(){
        $rootScope.blur = true;
    }

    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
        $rootScope.blur = false;
    });
});