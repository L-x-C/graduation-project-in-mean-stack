angular.module('myApp')
	.controller('listCtrl', function($scope, House, $stateParams){
		$scope.more =false;
		$scope.showMore = function() {
			$scope.more = !$scope.more;
		};
		
		House.search($stateParams).success(function(res) {
			$scope.houseData = res;
			angular.forEach($scope.houseData, function(value,key) {
				House.trans(value);
			});
		});
	});
