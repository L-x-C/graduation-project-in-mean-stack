angular.module('myApp')
	.controller('indexCtrl', function($scope, Auth, House, $state, mePageLoading){
		mePageLoading.show('random');
	    setTimeout(function(){
	        mePageLoading.hide();
	    }, 1000);


		$scope.isLoggedIn = Auth.isLoggedIn();
		$scope.username = Auth.isLoggedIn().name;
		$scope.logOut = function() {
			Auth.logOut();
		};

		$scope.isShow = false;
		$scope.showHowToUse = function() {
			$scope.isShow = !$scope.isShow;
		};
		$scope.closeHowToUse = function() {
			$scope.isShow = false;
		};

		//search
		$scope.search = function() {
			$state.go('list',{where: $scope.where, peopleNum: $scope.peopleNumber});
		};
	});
