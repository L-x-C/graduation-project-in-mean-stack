angular.module('myApp')
	.factory('Auth', function($rootScope, $http, $cookieStore) {
		$rootScope.currentUser = $cookieStore.get('user') || null;

		return {
			isLoggedIn: function() {
				if ($rootScope.currentUser) {
					return $rootScope.currentUser;
				} else {
					return false;
				}
			},
			logOut: function() {
				$cookieStore.remove('user');
				location.reload();
			},
			needLogin: function() {
				window.location.href = '/#/signin';
			},
			get: function() {
				return $rootScope.currentUser._id;
			}
		};
	});
