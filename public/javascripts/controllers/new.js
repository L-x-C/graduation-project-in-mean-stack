angular.module('myApp')
	.controller('newCtrl', function($scope, House, Auth){
		$scope.data = {
			houseType: 'apartment',
			roomType: 'all',
			peopleNum: 1
		};
		$scope.publishHouse = function() {
			if (Auth.isLoggedIn()) {
				$scope.data.userId = Auth.get();
				House.publish($scope.data);
			} else {
				Auth.needLogin();
			}
		}
	});
