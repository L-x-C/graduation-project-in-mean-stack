angular.module('myApp')
	.controller('listCtrl', function($scope){
		$scope.more =false;
		$scope.showMore = function() {
			$scope.more = !$scope.more;
		};
	});
