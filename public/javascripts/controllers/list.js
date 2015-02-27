angular.module('myApp')
	.controller('listCtrl', function($scope, House, $stateParams){
		$scope.more =false;
		$scope.showMore = function() {
			$scope.more = !$scope.more;
		};
		
		if ($stateParams.state) {
			House.searchState($stateParams.state).success(function(res) {
				$scope.houseData = res;
				angular.forEach($scope.houseData, function(value,key) {
					House.trans(value);
				});
			});
		} else if ($stateParams.city) {
			House.searchCity($stateParams.city).success(function(res) {
				$scope.houseData = res;
				angular.forEach($scope.houseData, function(value,key) {
					House.trans(value);
				});
			});
			console.log("b");
		} else {
			House.get().success(function(res) {
				$scope.houseData = res;
				angular.forEach($scope.houseData, function(value,key) {
					House.trans(value);
				});
			});
			console.log("c");
		}
		// House.get().success(function(res) {
		// 	$scope.houseData = res;
		// 	angular.forEach($scope.houseData, function(value,key) {
		// 		House.trans(value);
		// 	});
		// });
	});
