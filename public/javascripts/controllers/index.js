angular.module('myApp')
.controller('indexCtrl', function($scope){
	$scope.isShow = false;
	$scope.showHowToUse = function() {
		$scope.isShow = !$scope.isShow;
	}	
	$scope.closeHowToUse = function() {
		$scope.isShow = false;
	}
})
