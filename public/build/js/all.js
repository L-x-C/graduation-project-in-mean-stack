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
/**
* myApp.services Module
*
* Description
*/
angular.module('myApp.services', [])
	.factory('HitService',  function($q, $http){
		var service = {
			count: function() {
				var d = $q.defer();
				$http.get('/hits')
					.success(function(data, status) {
						d.resolve(data.hits);
					})
					.error(function(data, status) {
						d.reject(data);
					});
				return d.promise;
			},
			registerHit: function(name) {
				var d = $q.defer();
				$http.post('/hits', {name:name})
					.success(function(data, status) {
						d.resolve(data.data.number);
					})
					.error(function(data, status) {
						console.log('feF', data, status);
						d.reject(data);
					});
				return d.promise;
			},
			saveHit: function(data) {
				var d = $q.defer();
				// var dataObj = {
				// 	data: data
				// };
				// var Jdata = JSON.stringify(dataObj);
				$http.post('/saves', {data:data})
				.success(function(data, status) {
					d.resolve(data.hits);
				})
				.error(function(data, status) {
					console.log('feFa', data, status);
					d.reject(data);
				});
				return d.promise;
			}
		};

		return service;
	});