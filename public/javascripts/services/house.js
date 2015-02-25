angular.module('myApp')
	.factory('House', function($http) {

		return {
			publish: function(data) {
				$http.post('/new', {
					house: data
				})
				.success(function(res) {
					if (res === 'suc') {
						alert("发布成功");
						window.location.href="/";
					}
				});
			},
			get: function() {
				return $http.get('/getHouse');
			}
		}
	});
