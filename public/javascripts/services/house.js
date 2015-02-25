angular.module('myApp')
	.factory('House', function($http) {

		return {
			publish: function(data) {
				$http.post('/new', data)
					.success(function() {
						console.log('suc');
					});
			}
		}
	});
