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

	mePageLoadingProvider.autoPageLoading = false;

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
			templateUrl: '/views/partials/signup.html',
			controller: 'signupCtrl'
		})
		.state('login', {
			url: '/login',
			templateUrl: '/views/partials/login.html',
			controller: 'loginCtrl'
		})
		.state('list', {
			url: '/list/:state:city:peopleNum:where:houseType:roomType:moneyRange:areaRange',
			templateUrl: '/views/partials/list.html'
		})
		.state('detail', {
			url: '/detail/:id',
			templateUrl: '/views/partials/detail.html',
			controller: 'detailCtrl'
		})
		.state('home', {
			url: '/home/:id',
			templateUrl: '/views/partials/home.html',
		});
});
