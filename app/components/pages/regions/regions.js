'use strict';

angular.module('LaLigaApp.regions', ['ngRoute'])

.controller('RegionsCtrl', ['$scope', 'DataService', '$routeParams', function($scope, DataService, $routeParams) {

    DataService.getRegions(function(success){

        $scope.regions = success.data.regions;

        console.log($scope.regions);

    });

}]);