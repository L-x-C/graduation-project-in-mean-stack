angular.module('myApp')
	.controller('listCtrl', function($scope, House, $stateParams, $state){
		for (var i in $stateParams) {
			$scope[i] = $stateParams[i];
		}
		$scope.more =false;
		$scope.showMore = function() {
			$scope.more = !$scope.more;
		};
		$scope.reset = function() {
			for (var i in $stateParams) {
				$stateParams[i] = '';
			}
			$state.go('list', $stateParams);
		};

		House.search($stateParams).success(function(res) {
			$scope.houseData = res;
			angular.forEach($scope.houseData, function(value,key) {
				House.trans(value);
			});
			console.log($stateParams);
		});

		$scope.$watch('houseType', function(newValue, oldValue) {
			if (newValue) {
				$stateParams.houseType = newValue;
				$state.go('list',$stateParams);
			}
		});

		$scope.$watch('roomType', function(newValue, oldValue) {
			if (newValue) {
				$stateParams.roomType = newValue;
				$state.go('list',$stateParams);
			}
		});

		$scope.$watch('moneyRange', function(newValue, oldValue) {
			if (newValue) {
				$stateParams.moneyRange = newValue;
				$state.go('list',$stateParams);
			}
		});
	});
