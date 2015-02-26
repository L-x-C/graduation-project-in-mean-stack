angular.module('myApp')
	.controller('listCtrl', function($scope, House){
		$scope.more =false;
		$scope.showMore = function() {
			$scope.more = !$scope.more;
		};
		House.get().success(function(res) {
			$scope.houseData = res;
			angular.forEach($scope.houseData, function(value,key) {
				House.trans(value);
			})
			console.log($scope.houseData);
		});
	});
