/**
 * myApp Module
 *
 * Description
 */
angular.module('myApp', ['ngMaterial','ui.router'])
.config(function($mdThemingProvider, $stateProvider, $urlRouterProvider) {
	// configure a dark theme
	$mdThemingProvider.theme('docs-dark', 'default')
		.primaryPalette('grey')
		.dark();


	$urlRouterProvider.when("","/");

	$stateProvider
		.state('/', {
			url: '/',
			templateUrl: '/views/partials/main.html',
			controller: 'indexCtrl'
		})
		.state('new', {
			url: '/rooms/new',
			templateUrl: '/views/partials/new.html'
		})
		.state('signup', {
			url: '/signup',
			templateUrl: '/views/partials/signup.html'
		})
		.state('login', {
			url: '/login',
			templateUrl: '/views/partials/login.html'
		})
		.state('list', {
			url: '/list',
			templateUrl: '/views/partials/list.html'
		})
		.state('detail', {
			url: '/detail',
			templateUrl: '/views/partials/detail.html',
			controller: 'detailCtrl'
		});
});
