/**
 * myApp Module
 *
 * Description
 */
angular.module('myApp', ['ngMaterial', 'ui.router', 'ngCookies', 'angularFileUpload', 'me-pageloading'])
.config(function($mdThemingProvider, $stateProvider, $urlRouterProvider, mePageLoadingProvider) {
	// configure a dark theme
	$mdThemingProvider.theme('docs-dark', 'default')
		.primaryPalette('grey')
		.dark();


	$urlRouterProvider.when("","/");

	$stateProvider
		.state('/', {
			url: '/',
			templateUrl: '/views/partials/main.html',
			controller: 'indexCtrl',
			resolve: {
				data: ['$q', function($q) {
					var defer = $q.defer();
					setTimeout(function() {
						defer.resolve('page0');
					}, 1000);
					return defer.promise;
				}]
			}
		})
		.state('new', {
			url: '/rooms/new',
			templateUrl: '/views/partials/new.html',
			resolve: {
				data: ['$q', function($q) {
					var defer = $q.defer();
					setTimeout(function() {
						defer.resolve('page1');
					}, 1000);
					return defer.promise;
				}]
			}
		})
		.state('signup', {
			url: '/signup',
			templateUrl: '/views/partials/signup.html',
			resolve: {
				data: ['$q', function($q) {
					var defer = $q.defer();
					setTimeout(function() {
						defer.resolve('page2');
					}, 1000);
					return defer.promise;
				}]
			}
		})
		.state('login', {
			url: '/login',
			templateUrl: '/views/partials/login.html',
			resolve: {
				data: ['$q', function($q) {
					var defer = $q.defer();
					setTimeout(function() {
						defer.resolve('page3');
					}, 1000);
					return defer.promise;
				}]
			}
		})
		.state('list', {
			url: '/list',
			templateUrl: '/views/partials/list.html',
			resolve: {
				data: ['$q', function($q) {
					var defer = $q.defer();
					setTimeout(function() {
						defer.resolve('page4');
					}, 1000);
					return defer.promise;
				}]
			}
		})
		.state('detail', {
			url: '/detail/:id',
			templateUrl: '/views/partials/detail.html',
			controller: 'detailCtrl',
			resolve: {
				data: ['$q', function($q) {
					var defer = $q.defer();
					setTimeout(function() {
						defer.resolve('page5');
					}, 1000);
					return defer.promise;
				}]
			}
		});
});
