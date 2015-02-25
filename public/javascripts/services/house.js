angular.module('myApp')
	.factory('House', function($http) {

		return {
			publish: function(data) {
				$http.post('/new', {
					house: data
				})
				.success(function() {
					console.log('suc');
				});
			}
		}
	});
