angular.module('myApp')
	.controller('homeCtrl', function($scope, House, $stateParams, $state){
		House.getHomeInfo($stateParams.id).success(function(res) {
			$scope.houseData = res;
			angular.forEach($scope.houseData, function(value,key) {
				House.trans(value);
			});
		});
		console.log($stateParams);
	});
