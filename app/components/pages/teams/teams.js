'use strict';

angular.module('LaLigaApp.teams', ['ngRoute'])

.controller('TeamsCtrl', ['$scope', 'DataService', '$routeParams', 'ApiService', function($scope, DataService, $routeParams, ApiService) {

    DataService.getTeams(function(success){

        $scope.teams = success.data.teams;

        DataService.getCities(function(success){

            var cities = success.data.cities;

            for(var i = 0; i < $scope.teams.length -1; i++){

                var name = cities[$scope.teams[i].city_id - 1].city_name;
                var region_id = cities[$scope.teams[i].city_id - 1].region_id;
                $scope.teams[i].city_name = name;
                $scope.teams[i].region_id = region_id;

            }

            DataService.getRegions(function(success){

                var regions = success.data.regions;

                for(var i = 0; i < $scope.teams.length -1; i++){

                    var name = regions[$scope.teams[i].region_id - 1].region_name;

                    $scope.teams[i].region_name = name;

                }

                if($routeParams.id != undefined){

                    $scope.team =  $scope.teams[$routeParams.id - 1];

                    ApiService.getPlayers($scope.team.api_id,
                        function(success){
                            $scope.team.players = success.data.players;
                        },
                        angular.noop()
                    );
                }

            });
        });


    });

    console.log($scope);
}]);