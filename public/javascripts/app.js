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
		.state("/", {
			url: "/",
			templateUrl: "../views/partials/main.html",
			controller: 'indexCtrl'
		})
});
