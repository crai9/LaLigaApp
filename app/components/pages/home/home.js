'use strict';

angular.module('LaLigaApp.home', ['ngRoute', 'angular-carousel'])

	.controller('HomeCtrl', ['$scope', 'ApiService', function($scope, ApiService) {

		$scope.images = [
			'Pedrera (Custom).jpg',
			'Plaza Mayor (Custom).jpg',
			'Guggenheim (Custom).jpg',
			'Casa_do_concello_de_Vigo,_Galiza (Custom).jpg'
		];

		ApiService.getFixtures(
			function(success){
				$scope.fixtures = success.data.fixtures;
				console.log($scope);
			},
			angular.noop()
		);

		ApiService.getRankings(
			function(success){
				$scope.rankings = success.data.standing;
				console.log($scope);
			},
			angular.noop()
		);

	}]);