/**
 * Created by Craig on 22/03/2016.
 */
'use strict';

angular.module('DataService', [])
    .factory('DataService', ['$http', function($http){

        var DataService = {};

        DataService.getTeams = function(successCallback, errorCallback){
            $http({
                method: 'GET',
                url: '/teams.php'
            }).then(
                function (success) {
                    successCallback(success)
                },
                function (error) {
                    errorCallback(error)
                });
        };

        DataService.getCities = function(successCallback, errorCallback){
            $http({
                method: 'GET',
                url: '/cities.php'
            }).then(
                function (success) {
                    successCallback(success)
                },
                function (error) {
                    errorCallback(error)
                });
        };

        DataService.getRegions = function(successCallback, errorCallback){
            $http({
                method: 'GET',
                url: '/regions.php'
            }).then(
                function (success) {
                    successCallback(success)
                },
                function (error) {
                    errorCallback(error)
                });
        };

        return DataService;

    }]);