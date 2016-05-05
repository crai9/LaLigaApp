'use strict';

angular.module('ApiService', [])
    .factory('ApiService', ['$http', function($http){

        $http.defaults.headers.get = {"X-Auth-Token" : "c47b0874eaaf4ccda1570d67f47b6fb1"};

        var ApiService = {};

        ApiService.getPlayers = function(id, successCallback, errorCallback){
            $http({
                method: 'GET',
                url: 'http://api.football-data.org/v1/teams/' + id + '/players'
            }).then(
                function (success) {
                    successCallback(success)
                },
                function (error) {
                    errorCallback(error)
                });
        };

        ApiService.getRankings = function(successCallback, errorCallback){
            $http({
                method: 'GET',
                url: 'http://api.football-data.org/v1/soccerseasons/399/leagueTable'
            }).then(
                function (success) {
                    successCallback(success)
                },
                function (error) {
                    errorCallback(error)
                });
        };

        ApiService.getFixtures = function(successCallback, errorCallback){
            $http({
                method: 'GET',
                url: 'http://api.football-data.org/v1/soccerseasons/399/fixtures?timeFrame=n7'
            }).then(
                function (success) {
                    successCallback(success)
                },
                function (error) {
                    errorCallback(error)
                });
        };

        return ApiService;

    }]);