angular.module('myApp')
	.controller('navCtrl', function($scope, Auth){
		$scope.isLoggedIn = Auth.isLoggedIn();
		$scope.username = Auth.isLoggedIn().name;
		$scope.logOut = function() {
			Auth.logOut();
		};
	});
