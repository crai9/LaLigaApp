'use strict';

angular.module('LaLigaApp.cities', ['ngRoute'])

.controller('CitiesCtrl', ['$scope', 'DataService', '$routeParams', function($scope, DataService, $routeParams) {


    DataService.getCities(function(success){

        $scope.cities = success.data.cities;

        console.log($scope.cities);

    });

}]);