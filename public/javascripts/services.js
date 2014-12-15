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
			registerHit: function() {
				var d = $q.defer();
				$http.post('/hits', {})
					.success(function(data, status) {
						console.log('feS', data, status);
						d.resolve(data.hits)
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
					d.resolve(data.hits)
				})
				.error(function(data, status) {
					console.log('feFa', data, status);
					d.reject(data);
				});
				return d.promise;
			}
		}

		return service;
	})