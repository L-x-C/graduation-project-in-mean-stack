angular.module('myApp')
	.controller('homeCtrl', function($scope, House, $stateParams, $state){
		if ($stateParams.id === '555955cd7f40dd0106d10911') {
			//管理员
			House.getHomeInfo().success(function(res) {
				$scope.houseData = res;
				angular.forEach($scope.houseData, function(value,key) {
					House.trans(value);
				});
			});
		} else {
			//正常用户
			House.getHomeInfo($stateParams.id).success(function(res) {
				$scope.houseData = res;
				angular.forEach($scope.houseData, function(value,key) {
					House.trans(value);
				});
			});
		}
		

		$scope.$on('delThisHouse', function(event,data) {
			angular.forEach($scope.houseData, function(value,key) {
				if (value._id === data) {
					$scope.houseData.splice(key, key + 1);
				}
			});
		});
	});
