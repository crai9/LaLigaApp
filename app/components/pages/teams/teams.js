'use strict';

angular.module('LaLigaApp.teams', ['ngRoute'])

.controller('TeamsCtrl', ['$scope', 'DataService', function($scope, DataService) {

    document.title = "La Liga - Teams";

    DataService.getTeams(function(success){
        $scope.teams = success.data.teams;
        console.log($scope.teams);
    });

}]);