'use strict';

angular.module('LaLigaApp.map', ['ngRoute', 'uiGmapgoogle-maps'])

.controller('MapCtrl', ['$scope', 'DataService', '$routeParams', function($scope, DataService, $routeParams) {

    //$scope.cityId = $routeParams.cityId;
    //$scope.regionId = $routeParams.regionId;

    $scope.cities = [];
    $scope.regions = [];
    $scope.markers = [];

    $scope.controls = {};
    $scope.controls.cities = true;
    $scope.controls.regions = false;

    $scope.map = {
        center: {
            latitude: 40.415363,
            longitude: -3.707398
        },
        zoom: 6,
        control: {}
    };

    $scope.updateMarkers = function(){

        $scope.markers = [];

        if($scope.controls.regions){
            $scope.markers = $scope.markers.concat($scope.regions);
        }

        if($scope.controls.cities){
            $scope.markers = $scope.markers.concat($scope.cities);
        }

    }

    DataService.getCities(function(success){

        var cities = success.data.cities;

        for(var i=0; i<cities.length; i++){
            $scope.cities.push({
                id: cities[i].city_id,
                coords: {
                    latitude: cities[i].lat,
                    longitude: cities[i].long
                },
                link: '#/cities/' + cities[i].city_id,
                options: {
                    animation: google.maps.Animation.DROP
                },
                parent: $scope
            });
        }

        $scope.markers = $scope.markers.concat($scope.cities);

    });

    DataService.getRegions(function(success){

        var regions = success.data.regions;

        for(var i=0; i<regions.length; i++){
            $scope.regions.push({
                id: regions[i].region_id,
                coords: {
                    latitude: regions[i].lat,
                    longitude: regions[i].long
                },
                link: '#/regions',
                options: {
                    animation: google.maps.Animation.DROP
                },
                parent: $scope
            });
        }

    });

    console.log($scope);

}]);