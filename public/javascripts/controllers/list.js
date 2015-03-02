angular.module('myApp')
	.controller('listCtrl', function($scope, House, $stateParams, $state){
		for (var i in $stateParams) {
			if (i === 'peopleNum') {
				$scope[i] = parseInt($stateParams[i]);
			} else {
				$scope[i] = $stateParams[i];
			}
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
		});

		var watchArr = ['houseType', 'roomType', 'moneyRange', 'peopleNum', 'areaRange'];
		watchArr.forEach(function(val) {
			$scope.$watch(val, function(newValue, oldValue) {
				if (newValue) {
					$stateParams[val] = newValue;
					$state.go('list',$stateParams);
				}
			});
		});
	});
