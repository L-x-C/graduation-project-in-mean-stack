/**
* myApp Module
*
* Description
*/
var myApp = angular.module('myApp', ['ngRoute','myApp.services','ngMaterial']);
myApp.controller('HomeController', function($scope, HitService){
		HitService.count()
			.then(function(data){
				$scope.hits = data;
			});
		$scope.registerHit = function() {
			HitService.registerHit(this.yourName)
				.then(function(data){
					$scope.hits = data;
				}); 
		};
		$scope.saveHit = function() {
			HitService.saveHit([this.yourName,this.fuckingData])
				.then(function(data){
					$scope.fuckingData = data;
				});
		};
	});
myApp.controller('AppCtrl', function($scope) {
  $scope.title1 = 'Button';
  $scope.title4 = 'Warn';
  $scope.isDisabled = true;
  $scope.googleUrl = 'http://google.com';
});