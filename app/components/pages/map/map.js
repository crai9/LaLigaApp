'use strict';

angular.module('LaLigaApp.map', ['ngRoute', 'uiGmapgoogle-maps'])

.controller('MapCtrl', ['$scope', 'DataService', function($scope, DataService) {

    document.title = "La Liga - Map";


    //TODO: Toggle between regions and cities
    //TODO: Make box appear when marker is click giving options (zoom/show detail)

    $scope.map = {
        center: { latitude: 40.415363, longitude: -3.707398 },
        zoom: 6,
        control: {}
    };

    $scope.markers = [];

    $scope.removeMarkers = function(){
        $scope.markers = [];
    }

    $scope.zoomOnMarker = function(){
        $scope.map.control.getGMap().setZoom(11);
    }

    DataService.getCities(function(success){

        var cities = success.data.cities;

        for(var i=0; i<cities.length; i++){
            $scope.markers.push({
                id: cities[i].city_id,
                coords: {latitude: cities[i].lat, longitude: cities[i].long},
                options: {}
            });
        }

    });


}]);