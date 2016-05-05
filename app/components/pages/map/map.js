'use strict';

angular.module('LaLigaApp.map', ['ngRoute', 'uiGmapgoogle-maps'])

.controller('MapCtrl', ['$scope', 'DataService', '$routeParams', function($scope, DataService, $routeParams) {

    //TODO: Toggle between regions and cities
    //TODO: Make box appear when marker is click giving options (zoom/show detail)
    //TODO: Get where map should be focused from the path variable

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

    $scope.zoomOnMarker = function(){
        $scope.map.control.getGMap().setZoom(11);
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
                options: {
                    animation: google.maps.Animation.DROP
                }
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
                options: {
                    animation: google.maps.Animation.DROP
                }
            });
        }

    });

    console.log($scope);

}]);