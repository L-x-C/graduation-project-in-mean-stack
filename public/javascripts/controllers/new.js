angular.module('myApp')
	.controller('newCtrl', function($scope){
		$scope.data = {
			houseType: 'apartment',
			roomType: 'all',
			number: 1
		};
	});
